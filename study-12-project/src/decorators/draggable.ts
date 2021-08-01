import { Draggable, Droppable, Hoverable } from '../components/common/type';
import { Component } from '../components/component';

type GConstructor<T = {}> = new (...args: any[]) => T;

type DraggableClass = GConstructor<Component & Draggable>;
export function EnableDragging<TBase extends DraggableClass>(Base: TBase) {
    return class DraggableItem extends Base {
        constructor(...args: any[]) {
            super(...args);
            this.registerEventListener('dragstart', (event: DragEvent) => {
                this.onDragStart(event);
            })
            this.registerEventListener('dragend', (event: DragEvent) => {
                this.onDragEnd(event);
            })
        }
    }
}

type DragHoverClass = GConstructor<Component & Hoverable>;
export function EnableHover<TBase extends DragHoverClass>(Base: TBase) {
    return class DragHoverArea extends Base {
        constructor(...args: any[]) {
            super(...args);
            this.registerEventListener('dragenter', (event: DragEvent) => {
                event.preventDefault();
                console.log('dragenter');
                
                this.onDragEnter(event);
            })
            this.registerEventListener('dragleave', (event: DragEvent) => {
                console.log('dragleave');
                this.onDragLeave(event);
            })
        }
    }
}

type DragDropClass = GConstructor<Component & Droppable>;
export function EnableDrop<TBase extends DragDropClass>(Base: TBase) {
    return class DropArea extends Base {
        constructor(...args: any[]) {
            super(...args);
            this.registerEventListener('dragover', (event: DragEvent) => {
                console.log('dragover');
                event.preventDefault();
                this.onDragOver(event);
            })
            this.registerEventListener('drop', (event: DragEvent) => {
                console.log('drop');
                
                event.preventDefault();
                this.onDragDrop(event);
            })
        }
    }
}