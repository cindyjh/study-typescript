{
    interface Stack{
        readonly size: number;
        push(data: string): void;
        pop(): string;
    }

    type StackNode = {
        readonly value: string,
        readonly next?: StackNode,
    }

    class StackImpl implements Stack {
        private _size: number = 0;
        private head?: StackNode;

        constructor(private capacity: number) {}
        get size() {
            return this._size;
        }

        push(data: string) {
            if (this._size === this.capacity) {
                throw new Error ('Stack is full');
            }

            const stackNode: StackNode = {
                value: data,
                next: this.head
            };

            this.head = stackNode;
            this._size++;
        }
        
        pop(): string {
            // null == undefined, null !== undefined
            // 요렇게 하면 null과 undefined를 둘 다 거를 수 있다.
            if (this.head == null) {
                throw new Error('stack is empty')
            }

            const returnValue = this.head.value;
            this.head = this.head.next;
            this._size--;
            return returnValue;
        }
    }

    const stack = new StackImpl(10);
    stack.push('first')
    stack.push('second')
    stack.push('third')

    while(stack.size !== 0) {
        console.log(stack.pop())
    }
}