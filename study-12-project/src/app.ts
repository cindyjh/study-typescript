import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/items/image.js";
import { NoteComponent } from "./components/page/items/note.js";
import { TodoComponent } from "./components/page/items/todo.js";
import { VideoComponent } from "./components/page/items/video.js";
import { Component } from "./components/component.js";
import { InputDialog, MediaData, TextData } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
    new(): T;
}

class App {
    private readonly page: Component & Composable;

    // 내부에서 다른 클래스를 만드는 것은 위험한 행위이다~! DI를 통해 외부로 부터 주입을 받아야 더 확장가능하고
    // 나중에 unit test 하기에도 좋다.
    constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot)
        
        this.bindElementToDialog<MediaSectionInput>(
            '#new-image',
            MediaSectionInput,
            (input: MediaSectionInput) => new ImageComponent(input.title, input.url))

        this.bindElementToDialog<MediaSectionInput>(
            '#new-video',
            MediaSectionInput,
            (input: MediaSectionInput) => new VideoComponent(input.title, input.url))

        this.bindElementToDialog<TextSectionInput>(
            '#new-note',
            TextSectionInput,
            (input: TextSectionInput) => new NoteComponent(input.title, input.body))

        this.bindElementToDialog<TextSectionInput>(
            '#new-todo',
            TextSectionInput,
            (input: TextSectionInput) => new TodoComponent(input.title, input.body))


        // dummy data
        this.page.addChild(new ImageComponent('Image 1', "https://picsum.photos/800/400"))
        this.page.addChild(new VideoComponent('Video 1', "https://www.youtube.com/watch?v=m7wsrVQsVjI"))
        this.page.addChild(new NoteComponent('Note 1', "This is first Note"))
        this.page.addChild(new NoteComponent('Todo 1', "This is first Todo"))
        this.page.addChild(new ImageComponent('Image 2', "https://picsum.photos/800/400"))
    }

    private bindElementToDialog<T extends (MediaData | TextData) & Component>(
        selector: string,
        InputComponent: InputComponentConstructor<T>,
        makeSection: (input: T) => Component
    ) {
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot)

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            })
            dialog.setOnSubmitListener(() => {
                const image = makeSection(input)
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            })
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body)