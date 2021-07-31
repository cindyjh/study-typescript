{
    /**
     * Let's make a calculator 🧮
     */
    console.log(calculate('add', 1, 3)); // 4
    console.log(calculate('substract', 3, 1)); // 2
    console.log(calculate('multiply', 4, 2)); // 8
    console.log(calculate('divide', 4, 2)); // 2
    console.log(calculate('remainder', 5, 2)); // 1

    type CalcType = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

    function calculate(type: CalcType, firstNum: number, secondNum: number): number {
        switch (type) {
            case 'add':
                return firstNum + secondNum;
            case 'substract':
                return firstNum - secondNum;
            case 'multiply':
                return firstNum * secondNum;
            case 'divide':
                return secondNum > 0 ? firstNum / secondNum : 0;
            case 'remainder':
                return firstNum % secondNum;
            default:
                throw Error('unknown calc type')
        }
    }
}   