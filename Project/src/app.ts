

export class App {
    constructor(appRoot: HTMLElement, _: HTMLElement) {
        const template = document.createElement('template');
        template.innerHTML = `
        <div>
            <p>asefwaef</p>
        </div>`;
        appRoot.insertAdjacentElement('afterbegin', template.content.firstElementChild! as HTMLElement)
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body)