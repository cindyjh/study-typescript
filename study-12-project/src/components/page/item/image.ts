// import { PageComponent } from "./page.js";

export class ImageComponent{
    private element: HTMLElement;
    
    constructor(readonly title: string, readonly url: string) {
        // template tag를 이용한다.
        const template = document.createElement('template');
        // 바로 innerHTML로 설정하는 것은 위험하다. (사용자가 js code를 던져서 무슨짓을 할지 모름)
        // template.innerHTML = `<section class="image">
        //     <div class="image__holder"><img class="image__thumbnail"></div>
        //     <p class="image__title">${title}</p>
        // </section>`;

        // template tag 안에 section을 만들었다.
        template.innerHTML = `<section class="image">
            <div class="image__holder"><img class="image__thumbnail"></div>
            <p class="image__title"></p>
        </section>`;

        this.element = template.content.firstElementChild! as HTMLElement;

        const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
        // InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
        parent.insertAdjacentElement(position, this.element);
    }
}