export class App {
    constructor(appRoot, _) {
        const template = document.createElement('template');
        template.innerHTML = `
        <div>
            <p>asefwaef</p>
        </div>`;
        appRoot.insertAdjacentElement('afterbegin', template.content.firstElementChild);
    }
}
new App(document.querySelector('.document'), document.body);
