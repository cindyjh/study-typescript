{
    /**
     * 기본 타입을 알아보자
     */
    // local scope로 작성하기 위해서 curly braces 안에 코드를 작성하자.
    // js에서 변수를 선언하기위해서 사용하는 것 
    // var - 똥 (호이스팅 문제), ts compiler가 알앗 ㅓ
    var age = 5;
    age = 1;
    // let es6
    let name = 'hello';
    // const

    /** 
     * Javascript Types
     * Primitive(한 가지의 심플한 데이터만 담을 수 있는 형식): number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array, ....
     */

    /**
     * TypeScript
     */
    // number
    const num: number = 0.01;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = true;

    // 보편적으로 null 보단 undefined 를 많이 사용함. 💩
    // undefined - 값이 있는지 없는지 아무것도 결정되지 않은 상태 (보통 단독으로 사용하지 않고 optional type 형식으로 많이 사용함.)
    let age: number | undefined; // optional type
    age = undefined;
    age = 1;

    // 요런식으로 많이 사용
    function find(): number | undefined {
        return undefined;
    }

    // null - 명확하게 비어있다고 나타내고 있는 상태(보통 단독으로 사용하지 않고 optional type 형식으로 많이 사용함.) 💩
    let person: string | null;
    person = null;
    person = 'joHn';


    /**
     * unknown / any 💩
     * 최대한 쓰지 말자
     */
    // unkown - 어떤 종류의 데이터가 담길지 알 수 없는 타입. 가능하면 쓰지 말자.
    // TS 에서 JS 라이브러리를 사용하는 경우에 JS에서 리턴하는 타입을 모를 수 있다. 이럴 때 unknown을 쓰면 되겠지.
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any - 어떤 것이든 담을 수 있는 변수
    let anything: any = 0;
    anything = 'hello';

    // void - 함수에서 리턴 값을 아무것도 주지 않을 때 사용
    function print(): void {
        console.log('hello');
        return;
    }
    function print() {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; //💩

    // never - 이 함수를 호출하면 return 하지 않을 것이다!
    // 예시) error를 던지거나, while(true)
    function throwError(message: string): never {
        // message -> server(log)
        throw new Error(message);

        while(true) {}
    }

    // object 💩
    // 너무 광범위한 것들을 받아올 수 있음.
    let obj: object;
    obj = [1,2,3];
    function acceptSomeObject(obj: object) {}

    acceptSomeObject({ name: 'cindy' });
    acceptSomeObject({ animal: 'dog' });
}