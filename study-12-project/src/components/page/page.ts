import { BaseComponent, Component } from "../component.js";

export interface Composable {
    addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
    setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
    // 생성자가 호출이 되면 SectionContainer를 구현하는 어떤 클래스라도 
    new (): SectionContainer;
}

// 어떤 방식으로 UI를 만들든
// closeListener를 꼭 구현해주어야 한다.
export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer{
    private closeListener?: OnCloseListener;
    constructor() {
        super(`   
        <li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
                <button class="close">&times;</button>
            </div>
        </li>
        `)

        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener()
        }
    }

    addChild(child: Component) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container)
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
}

// export class DarkPageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {

// }

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    constructor(private readonly pageItemConstructor: SectionContainerConstructor) {
        super(`<ul class="page"></ul>`)
    }

    addChild(section: Component) {
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element)
        })
    }
}