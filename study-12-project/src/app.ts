import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/items/image.js";
import { NoteComponent } from "./components/page/items/note.js";
import { TodoComponent } from "./components/page/items/todo.js";
import { VideoComponent } from "./components/page/items/video.js";
import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";

class App {
    private readonly page: Component & Composable;

    // 내부에서 다른 클래스를 만드는 것은 위험한 행위이다~! DI를 통해 외부로 부터 주입을 받아야 더 확장가능하고
    // 나중에 unit test 하기에도 좋다.
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot)

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attachTo(dialogRoot)

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            })
            dialog.setOnSubmitListener(() => {
                // https://picsum.photos/600/300
                const image = new ImageComponent(mediaSection.title, mediaSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            })
        })

        const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attachTo(dialogRoot)

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            })
            dialog.setOnSubmitListener(() => {
                // https://picsum.photos/600/300
                const image = new VideoComponent(mediaSection.title, mediaSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            })
        })

        const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
        noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const textSection = new TextSectionInput();
            dialog.addChild(textSection);
            dialog.attachTo(dialogRoot)

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            })
            dialog.setOnSubmitListener(() => {
                // https://picsum.photos/600/300
                const image = new NoteComponent(textSection.title, textSection.body);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            })
        })

        const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
        todoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const textSection = new TextSectionInput();
            dialog.addChild(textSection);
            dialog.attachTo(dialogRoot)

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            })
            dialog.setOnSubmitListener(() => {
                // https://picsum.photos/600/300
                const image = new TodoComponent(textSection.title, textSection.body);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            })
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body)