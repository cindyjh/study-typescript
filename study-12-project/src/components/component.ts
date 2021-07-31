export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent: HTMLElement): void;
}

/**
 * Encapsulate the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component {
    protected readonly element: T;

    constructor(htmlString: string) {
        // template tag를 이용한다.
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
        // 바로 innerHTML로 설정하는 것은 위험하다. (사용자가 js code를 던져서 무슨짓을 할지 모름)
        // template.innerHTML = `<section class="image">
        //     <div class="image__holder"><img class="image__thumbnail"></div>
        //     <p class="image__title">${title}</p>
        // </section>`;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
        // InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
        parent.insertAdjacentElement(position, this.element);
    }

    removeFrom(parent: HTMLElement) {
        if (parent !== this.element.parentElement) {
            throw new Error('Parent mismatch!');
        }
        parent.removeChild(this.element);
    }    
}