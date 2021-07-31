{
    type PositionType = {
        x: number;
        y: number;
    }

    interface PositionInterface {
        x: number;
        y: number;
    }

    // PositionInterface 을 또 한 번 정의한다.
    interface PositionInterface {
        z: number,
    }

    const obj1: PositionType = {
        x: 1,
        y: 2,
    }
    // 위에서 두 번 정의했기 때문에 그 두번을 합해서 사용해야 한다.
    const obj2: PositionInterface = {
        x: 1,
        y: 2,
        z: 3,
    }

    // class
    class Pos1 implements PositionType {
        x: number;
        y: number;
    }
    class Pos2 implements PositionInterface {
        x: number;
        y: number;
    }

    // Extends
    // interface는 상속을 이용해서 두가지를 묶을 수 있다.
    interface ZPositionInterface extends PositionInterface {
        z: number;
    }
    // intersection을 이용해서 두 가지를 묶은 타입을 만들 수 있다.
    type ZPositionInterType = PositionType & { z: number };

    // only interfaces can be merged.
    interface PositionInterface {

    }

    // type은 추가로 정의를 할 수 없다. (오류 발생함.)
    // type PositionType {
    // }

    // Type Aliases can use computed properties.
    type Person = {
        name: string,
        age: number,
    }

    // type Name은 Person의 name이라는 key가 가지고 있는 값의 타입을 쓸 것이다.
    type Name = Person['name']; // string

    type numberType = number;
    // interface로는 구현 할 수 없다.
    type Direction = 'left' | 'right';
}