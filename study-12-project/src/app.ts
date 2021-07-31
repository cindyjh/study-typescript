import { ImageComponent } from "./components/items/image.js";
import { NoteComponent } from "./components/items/note.js";
import { PageComponent } from "./components/items/page.js";
import { TodoComponent } from "./components/items/todo.js";
import { VideoComponent } from "./components/items/video.js";

class App {
    private readonly page: PageComponent;
    private readonly image: ImageComponent;

    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        this.image = new ImageComponent("ImageComponent Title", "https://picsum.photos/600/300");
        this.image.attachTo(appRoot, 'beforeend');

        const video = new VideoComponent("videoComponent Title", "https://www.youtube.com/embed/iOt5AZmGg5o")
        video.attachTo(appRoot, 'beforeend');

        const note = new NoteComponent('NoteComponent Title', 'body');
        note.attachTo(appRoot, "beforeend");

        const todo = new TodoComponent("TodoComponent Title", 'todo')
        todo.attachTo(appRoot, "beforeend")

    } 
}

new App(document.querySelector('.document')! as HTMLElement)