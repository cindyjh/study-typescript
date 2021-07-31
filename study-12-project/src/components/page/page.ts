import { Component } from "../component";

export class PageComponent{
    private items: Component[]
    constructor(private appRoot: HTMLElement) {
        this.items = []
    }

    addItem(item: Component) {
        item.attachTo(this.appRoot)
        this.items.push(item)
    }
}