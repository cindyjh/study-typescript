{
    const x = {};
    const y = {};
    console.log(x)
    console.log(y) // Object 라는 proto를 가지고 있다.
    console.log(x.toString())
    console.log(x.__proto__ === y.__proto__) // true

    const array = [];
    console.log(array) // Array 라는 proto를 가지고 있다.
console.clear()
    function CoffeeMachine(beans) {
        this.beans = beans;
        // 만들어지는 instance 마다 포함이 되는 아이임
        // instance member level 이라고 부른다.
        // this.makeCoffee = (shots) => {
        //     console.log('making... ');
        // }
    }

    // Prototype member level
    CoffeeMachine.prototype.makeCoffee = (shots) => {
        console.log('making... ');
    }

    const machine1 = new CoffeeMachine(10);
    const machine2 = new CoffeeMachine(20);

    console.log(machine1)
    console.log(machine2)

    function LatteMachine(milk) {
        this.milk = milk;
    }

    // LatteMachine의 prototype을 CoffeeMachine의 prototype을 연결한다.
    LatteMachine.prototype = Object.create(CoffeeMachine.prototype)
    // LatteMachine은 CoffeeMachine을 상속하고
    // CoffeeMachine은 Object를 상속한다.

    const latteMachine = new LatteMachine(1234);
    console.log(latteMachine)
    latteMachine.makeCoffee()
}