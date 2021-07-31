{
    interface Stack{
        readonly size: number;
        push(data: string): void;
        pop(): string;
    }

    type StackNode = {
        value: string,
        next?: StackNode,
    }

    class StackImpl implements Stack {
        size: number = 0;
        private head?: StackNode;

        push(data: string) {
            let stackNode: StackNode = {
                value: data,
                next: this.head ? this.head : undefined
            };
            
            this.head = stackNode;
            this.size++;
        }

        pop(): string {
            if (this.head === undefined) {
                throw new Error('stack is empty')
            }

            this.size--;
            const returnValue = this.head.value;
            this.head = this.head.next;
            return returnValue;
        }
    }

    const stack = new StackImpl();
    stack.push('first')
    stack.push('second')
    stack.push('third')

    console.log(stack.pop())
    console.log(stack.pop())
    console.log(stack.pop())
}