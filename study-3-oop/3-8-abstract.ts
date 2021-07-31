{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    // 얼마만큼의 행동을 허용/보장할건지
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup
    }

    // 외부에서 object 상태를 invalid 상태로 만들어버릴 수 있음.
    // public / private / protected 로
    // protected : 클래스를 상속한 자식 클래스에서만 접근 가능
    // CoffeeMakerImpl 는 CoffeeMaker interface에 있는 모든 함수를 구현해야 한다.
    abstract class CoffeeMakerImpl implements CoffeeMaker{
        // class에서 한 번 정의되고 이 클레스를 이용한 object 사이에서 공유가능한 데이터는 메모리 낭비를 막기 위해 static 사용
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance(object) level
        
        // 이 클래스를 상속하기 위해서는 constructor는 private이면 안된다. (protected/public만 가능)
        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be grater than 0');
            }

            this.coffeeBeans = beans;
        }

        clean() {
            console.log('cleaning the machine...')
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMakerImpl.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enogh coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMakerImpl.BEANS_GRAMM_PER_SHOT;
        }

        private preheat() {
            console.log('heating up ... 🍁');
        }

        protected abstract extract(shots: number): CoffeeCup;

        // interface에 있는 것을 구현해야 한다.
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    
    class CaffeLatteMachine extends CoffeeMakerImpl {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk...')
        }
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true
            }
        }
        // overrriding
        makeCoffee(shots: number): CoffeeCup {
            // 부모 함수 호출
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMakerImpl {
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true
            }
        }
        // overriding
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return {
                ...coffee
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16, 'cindy'),
        new SweetCoffeeMaker(16),
    ];

    // 내부적으로 구현된 다양한 클래스들이 한 가지의 interface를 구현하거나 동일한 부모 클래스를 상속 했을 때 동일한 함수를 어떤 클래스인지 구분하지 않고 공통된 API를 호출할 수 있다.
    machines.forEach(machine => {
        console.log('------------');
        console.log(machine.makeCoffee(1));
    })
}
