{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // 외부에서 object 상태를 invalid 상태로 만들어버릴 수 있음.
    // public / private / protected 로
    // protected : 클래스를 상속한 자식 클래스에서만 접근 가능
    class CoffeeMaker {
        // class에서 한 번 정의되고 이 클레스를 이용한 object 사이에서 공유가능한 데이터는 메모리 낭비를 막기 위해 static 사용
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance(object) level
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // static이라는 키워드로 objet를 만들 수 있는 함수를 제공한다는 것은
        // 누군가가 생성자를 이용해서 object를 만들 수 있는 것을 금지하기 위해서 사용한다.!!
        // constructor를 private으로 만들어서 항상 static method를 이용하도록 권장하자.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be grater than 0');
            }

            this.coffeeBeans = beans;
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
    
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);

    class User {
        // getter
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }

        set age(num:number) {
            if (num < 0) {
                // invalid   
            }
            this.internalAge = num;
        }
        // 생성자에 접근제어자를 설정해놓으면 자동으로 멤버변수로 설정이 된다.
        constructor(private firstName: string, private lastName: string) {}
    }

    const user = new User('Steve', 'Jobs')
    user.age = 6;
    console.log(user) // User { firstName: 'Steve', lastName: 'Jobs', internalAge: 6 }
    
}