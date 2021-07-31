{
    /**
     * 함수에서 어떻게 타입을 활용할 수 있을까 ?
     */

    // // JavasScript 💩
    // // 만약 이게 함수가 컸다면 어떤 값을 전달해야하는지, 어떤 값이 return 될 지 바로 알기 어렵다.
    // // 
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }
    
    // // TypeScript
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // JavaScript 💩💩
    // function jsFetchNum(id) {
    //     // code...
    //     // code .. 
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // // TypeScript
    // function tsFetchNum(id: string): Promise<number> {
    //     // code...
    //     // code .. 
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // Javascript, TypeScript 에서 사용가능한.
    // Optional Parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('joohee', 'lee');
    printName('joohee'); // 인자로 lastName: string | undefined 넣으면 오류남.
    printName('joohee', undefined);
    // printName('joohee', 1); // ERROR

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    // 갯수에 상관 없이 함수 인자로 동일한 타입의 파라미터를 전달하고 싶을 때 사용
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5));
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
}