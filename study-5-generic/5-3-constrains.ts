{
    /**
     * constrains
     * jeneric에 조건을 줄 수 있다.
     */
    interface Employee {
        pay(): void;
    }
    class FullTimeEmployee implements Employee {
        pay() {
            console.log("full time");
            
        }
        workFullTime() {
            console.log('working full time')
        }
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log('part time');
        }
        workPartTime() {

        }
    }

    // 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
    function payBad(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    // generic에 조건을 건다.
    function pay<T extends Employee> (employee: T): T{
        employee.pay()
        return employee
    }

    const cindy = new FullTimeEmployee();
    const bob = new PartTimeEmployee();

    cindy.workFullTime();
    bob.workPartTime();

    // const cindyAfterPay = payBad(cindy); // cindyAfterPay는 이제 FullTimeEmployee 가 아닌 그냥 Employee가 되어버린다.
    // cindyAfterPay.workFullTime(); // 그래서 이게 안됨.
    
    const cindyAfterPay = pay(cindy); // cindyAfterPay는 이제 FullTimeEmployee 가 아닌 그냥 Employee가 되어버린다.
    cindyAfterPay.workFullTime();

    const obj = {
        name: 'cindy',
        age: 20,
    }

    const obj2 = {
        animal: '🐱‍🐉'
    }
    
    function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
    

    console.log(getValue(obj, 'name')); // cindy
    console.log(getValue(obj, 'age'));  // 20
    console.log(getValue(obj2, 'animal'));  // 20
}