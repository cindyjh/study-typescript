{
    /**
     * Type Assertions 💩
     * 타입을 장담할 때 ...
     */

    function jsStrFunc(): any {
        // return 'hello';
        return 2;
    }

    const result = jsStrFunc();
    console.log(result.length)

    // type assertion
    console.log((result as string).length)
    console.log((<string>result).length)

    let wrong: any = 4;
    // (wrong as Array<number>).push(1) // ERROR!! 이러면 오류남.

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers()!; // 무조건 null이 아니다. 정말 장담할 수 있을 때 사용
    numbers!.push(2) // 무조건 null이 아니다. 정말 장담할 수 있을 때 사용
    console.log(numbers);
    
    const button = document.querySelector('class')
    if (button) {
        button.nodeValue;
    }
    button?.nodeValue
}