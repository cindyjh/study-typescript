{
    const obj = {
        name: 'ellie',
    }

    obj.name; // ellie
    obj['name'] // ellie

    // type도 index를 기반으로 해서 type을 결정할 수 있다.
    type Animal = {
        name: string;
        age: number;
        gender: 'mail' | 'femail';
    }

    // Animal의 name key의 타입을
    type Name = Animal['name']; // string
    // const text: Name = 12;// error
    const text: Name = 'hello';

    type Gender = Animal['gender'];  // = 'mail' | 'femail';

    type Keys = keyof Animal; // 'anme' | 'age' | 'gender'
    // const key: Keys = 'anv'// error
    const key: Keys = 'age'//


    type Person = {
        name: string;
        gender: Animal['gender'];
    }

    const person: Person = {
        name: 'ellie',
        gender: 'femail',
    }

    // index type을 이용하면 다른 type에 있는 key에 접근해서 key의 value의 타입을 바로 가져와 사용 할 수 잇다.
}