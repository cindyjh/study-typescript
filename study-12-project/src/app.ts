import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/items/image.js";
import { NoteComponent } from "./components/page/items/note.js";
import { TodoComponent } from "./components/page/items/todo.js";
import { VideoComponent } from "./components/page/items/video.js";

class App {
    private readonly page: PageComponent;

    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(appRoot);

        const image = new ImageComponent("ImageComponent Title", "https://picsum.photos/600/300");
        // image.attachTo(appRoot, 'beforeend');

        const video = new VideoComponent("videoComponent Title", "https://www.youtube.com/embed/iOt5AZmGg5o")
        // video.attachTo(appRoot, 'beforeend');

        const note = new NoteComponent('NoteComponent Title', 'body');
        // note.attachTo(appRoot, "beforeend");

        const todo = new TodoComponent("TodoComponent Title", 'todo')
        // todo.attachTo(appRoot, "beforeend")
                
        this.page.addItem(image);
        this.page.addItem(video);
        this.page.addItem(note);
        this.page.addItem(todo);
    } 
}

new App(document.querySelector('.document')! as HTMLElement)