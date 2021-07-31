{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        // class에서 한 번 정의되고 이 클레스를 이용한 object 사이에서 공유가능한 데이터는 메모리 낭비를 막기 위해 static 사용
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0; // instance(object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enogh coffee beans!')
            }
    
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            }
        }
    }
    
    const maker = new CoffeeMaker(32);
    console.log(maker) // CoffeeMaker { coffeeBeans: 32 }
    const maker2 = new CoffeeMaker(14);
    console.log(maker2) // CoffeeMaker { coffeeBeans: 14 }

    const maker3 = CoffeeMaker.makeMachine(45);
}