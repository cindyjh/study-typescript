{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // 얼마만큼의 행동을 허용/보장할건지
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    // 외부에서 object 상태를 invalid 상태로 만들어버릴 수 있음.
    // public / private / protected 로
    // protected : 클래스를 상속한 자식 클래스에서만 접근 가능
    // CoffeeMakerImpl 는 CoffeeMaker interface에 있는 모든 함수를 구현해야 한다.
    class CoffeeMakerImpl implements CoffeeMaker, CommercialCoffeeMaker{
        // class에서 한 번 정의되고 이 클레스를 이용한 object 사이에서 공유가능한 데이터는 메모리 낭비를 막기 위해 static 사용
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance(object) level
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // static이라는 키워드로 objet를 만들 수 있는 함수를 제공한다는 것은
        // 누군가가 생성자를 이용해서 object를 만들 수 있는 것을 금지하기 위해서 사용한다.!!
        // constructor를 private으로 만들어서 항상 static method를 이용하도록 권장하자.
        static makeMachine(coffeeBeans: number): CoffeeMakerImpl {
            return new CoffeeMakerImpl(coffeeBeans);
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

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots ...`);
            return {
                shots,
                hasMilk: false,
            }
        }

        // interface에 있는 것을 구현해야 한다.
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    
    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
            this.machine.fillCoffeeBeans(45);
            this.machine.clean()
        }
    }

    // 동일한 object를 사용할 지라도 이 object는 두가지의 interface를 구현하기 때문에
    const maker: CoffeeMakerImpl = CoffeeMakerImpl.makeMachine(32);
    // 아마추어는 CoffeeMaker 수준으로,
    const amateur: AmateurUser = new AmateurUser(maker);
    // 프로는 CommercialCoffeeMaker 수준으로 사용 할 수 있는 것이다.
    const pro: ProBarista = new ProBarista(maker);

    pro.makeCoffee();
    amateur.makeCoffee();
    /*
    const maker:CoffeeMakerImpl = CoffeeMakerImpl.makeMachine(32);
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(3);

    // interface로 타입을 정의해서 받게 되면, interface에서 정의된 함수만 사용 할 수 있다.
    const maker2:CoffeeMaker = CoffeeMakerImpl.makeMachine(32);
    // maker2.fillCoffeeBeans(32);
    maker2.makeCoffee(3);

    const maker3:CommercialCoffeeMaker = CoffeeMakerImpl.makeMachine(32);
    maker3.fillCoffeeBeans(32);
    maker3.makeCoffee(3);
    maker3.clean();
    */
}
