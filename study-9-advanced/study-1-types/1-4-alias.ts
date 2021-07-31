{
    /**
     * Type Aliases
     * type script를 쓰는 이유, 강력한 이유
     * 기본적인 타입 정의부터 시작해서 복잡한 타입을 정의할 수 있음.
     */

    type Text = string;
    const name_: string = 'cindy';
    const name: Text = 'cindy';

    const address: Text = 'korea';
    type Num = number;
    
    type Student = {
        name: string,
        age: number
    };

    const student: Student = {
        name: 'cindy',
        age: 12,
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let cindyName: Name;
    cindyName = 'name';
    type JSON = 'json';
    const json: JSON = 'json'
    
    type Boal = true;
    const isCat: Boal = true; // ERROR
    // const isCat: Boal = false; // ERROR

    
}