import { PageComponent, PageItemComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/items/image.js";
import { NoteComponent } from "./components/page/items/note.js";
import { TodoComponent } from "./components/page/items/todo.js";
import { VideoComponent } from "./components/page/items/video.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent("ImageComponent Title", "https://picsum.photos/600/300");
        this.page.addChild(image);
        const video = new VideoComponent("videoComponent Title", "https://www.youtube.com/embed/iOt5AZmGg5o");
        this.page.addChild(video);
        const note = new NoteComponent('NoteComponent Title', 'body');
        this.page.addChild(note);
        const todo = new TodoComponent("TodoComponent Title", 'todo');
        this.page.addChild(todo);
    }
}
new App(document.querySelector('.document'));
