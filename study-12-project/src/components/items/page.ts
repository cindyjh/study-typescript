import { BaseComponent } from "../component.js";

export class PageComponent extends BaseComponent<HTMLUListElement>{
    constructor() {
        let htmlString: string = '<ul class="page">This is PageComponent';
        super(htmlString);
    }
}