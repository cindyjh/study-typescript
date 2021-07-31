{
    console.log(this) // window

    function simpleFunc() {
        console.log(this)
    }
    window.simpleFunc() // window
    simpleFunc() // window

    console.clear()
    class Counter { 
        count = 0;
        // class 안에 this를 이용하면 
        increase = function () {
            console.log(this)
        };
    }

    const counter = new Counter();
    counter.increase() // Counter

    const caller = counter.increase;
    caller() // undefined

    class Bob {
        
        
    }

    const bab = new Bob();
    bab.run = counter.increase;
    bab.run() // Bob



    
    // js에서 함수를 만들면 global 객체에서 접근이 가능하다.
    function helloWorld() {
        console.log('hello')
    }

    // window 객체에서 접근 가능함.
    window.helloWorld()

    // const나 let 키워드를 이용해서 변수를 선언하게 되면 이것들은 window에 등록되지 않는다.

    // block을 이용해서 local scope 에서 작성한 함수나 변수가 아니라
    // global 적으로 파일의 제일 최상위에서 선언한 애들은 global 적으로 접근이 가능하다.
    // 함수는 기본적으로 글로벌 객체에 등록이 되어 글로벌 객체에서 이용이 가능하지만
    // 변수는 글로벌 객체에 등록되지 않는다.

    // 한가지 예외는 var 키워드이다.
    // hoisting 문제 뿐 아니라 선언을 했는데 다시 재정의가 되는 다양한 문제가 있다. 쓰지마라

    var badVar = 'bad'
    window.badVar // 가능


}