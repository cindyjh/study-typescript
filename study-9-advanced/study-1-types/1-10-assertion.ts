{
    /**
     * Type Assertions ๐ฉ
     * ํ์์ ์ฅ๋ดํ  ๋ ...
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
    // (wrong as Array<number>).push(1) // ERROR!! ์ด๋ฌ๋ฉด ์ค๋ฅ๋จ.

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers()!; // ๋ฌด์กฐ๊ฑด null์ด ์๋๋ค. ์ ๋ง ์ฅ๋ดํ  ์ ์์ ๋ ์ฌ์ฉ
    numbers!.push(2) // ๋ฌด์กฐ๊ฑด null์ด ์๋๋ค. ์ ๋ง ์ฅ๋ดํ  ์ ์์ ๋ ์ฌ์ฉ
    console.log(numbers);
    
    const button = document.querySelector('class')
    if (button) {
        button.nodeValue;
    }
    button?.nodeValue
}