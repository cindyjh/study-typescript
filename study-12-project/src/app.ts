import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/items/image.js";
import { NoteComponent } from "./components/page/items/note.js";
import { TodoComponent } from "./components/page/items/todo.js";
import { VideoComponent } from "./components/page/items/video.js";
import { Component } from "./components/component.js";

class App {
    private readonly page: Component & Composable;

    // 내부에서 다른 클래스를 만드는 것은 위험한 행위이다~! DI를 통해 외부로 부터 주입을 받아야 더 확장가능하고
    // 나중에 unit test 하기에도 좋다.
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot)

        const image = new ImageComponent("ImageComponent Title", "https://picsum.photos/600/300");
        this.page.addChild(image);

        const video = new VideoComponent("videoComponent Title", "https://www.youtube.com/embed/iOt5AZmGg5o")
        this.page.addChild(video);

        const note = new NoteComponent('NoteComponent Title', 'body');
        this.page.addChild(note);

        const todo = new TodoComponent("TodoComponent Title", 'todo')
        this.page.addChild(todo);
    } 
}

new App(document.querySelector('.document')! as HTMLElement)