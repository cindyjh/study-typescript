
/**
 * 
 * @param _ 
 * @param name 함수의 이름
 * @param descriptor 함수가 어떻게 생겼는지를 정의하는 것
 * @returns 
 */
function Log(_:any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const newDescriptor = {
        ...descriptor,
        value: function (...args: any[]): any {
            console.log(`Calling ${name} with arguments:`);
            console.dir(args);
            const result = descriptor.value.apply(this, args);
            console.log(`Result: `);
            console.dir(result);
            return result;
        },
    }
    return newDescriptor;
}

class Calculator {
    @Log
    add(x: number, y:number): number {
        return x + y;
    }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2))