{
    /**
     * Type Inference
     * 타입을 명시하지 않아도 알아서 자동으로 타입이 결정되는 것
     * 타입스크립트가 알아서 자동으로 타입을 알려주기 때문에 편하다고 생각 할 수 있지만,
     * 웬만하면 타입을 정확하게 명시해주는 것이 좋다. 
     */
    let text = 'hello';
    // text = 1; // ERROR!
    function print(message = 'hell') {
        console.log(message);
    }

    print('abc');
    // print(1);

    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1, 2); // result는 자동으로 number 로 할당된다.
}