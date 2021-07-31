{
    interface Stack<T>{
        readonly size: number;
        push(data: T): void;
        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T,
        readonly next?: StackNode<T>,
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private head?: StackNode<T>;

        constructor(private capacity: number) {}
        get size() {
            return this._size;
        }

        push(data: T) {
            if (this._size === this.capacity) {
                throw new Error ('Stack is full');
            }

            const stackNode: StackNode<T> = {
                value: data,
                next: this.head
            };

            this.head = stackNode;
            this._size++;
        }
        
        pop(): T {
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

    const stack = new StackImpl<string>(10);
    stack.push('first')
    stack.push('second')
    stack.push('third')

    while(stack.size !== 0) {
        console.log(stack.pop())
    }

    const stack2 = new StackImpl<number>(10);
    stack2.push(111)
    stack2.push(222)
    stack2.push(333)

    while(stack2.size !== 0) {
        console.log(stack2.pop())
    }
}