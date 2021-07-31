export class ImageComponent {
    constructor(title, url) {
        this.title = title;
        this.url = url;
        this.element = document.createElement('img');
        this.element.setAttribute('class', 'image');
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
