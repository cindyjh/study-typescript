import { BaseComponent, Component } from "../component.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    closeListener?: OnCloseListener;
    submitListener?: OnSubmitListener;
    
    constructor() {
        super(`
        <dialog class="dialog">
            <button class="close">&times;</button>
            <div id="dialog__body"></div>
            <button class="dialog__submit">ADD</button>
        </dialog>
        `)

        const closeBtn = this.element.querySelector('.close')! as HTMLElement;
        // addEventListener로 등록하면 기존에 해당 버튼에 등록한 event들을 순차적으로 실행한다.
        // closeBtn.addEventListener('click', "") 
        // onclick 을 바로 호출하면 기존에 등록된 onclick 이벤트를 덮어씌운다.
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        }

        const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        }
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }

    setOnSubmitListener(listener: OnSubmitListener) {
        this.submitListener = listener;
    }

    addChild(child: Component) {
        const body = this.element.querySelector('#dialog__body')! as HTMLElement;
        child.attachTo(body)
    }
}