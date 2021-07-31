{
    // Array
    const fruits: string[] = ['🍌', '🍒'];
    const scores_: number[] = [1, 3, 4];
    const scores: Array<number> = [1, 3, 4];

    // readonly 데이터를 변경 할 수 없도록 한다.
    function printArray(fruits: readonly string[]) {
        // fruits.push('apple') // ERROR!
    }

    // Tuple -> interface, type alias, class로 대체해서 사용하렴 ...
    // 데이터에 접근 할 때에 index로 접근해야 한다는 점. 가독성이 안 좋아요
    // 서로 다른 타입을 함께 가질 수 있는 배열
    let student: [string, number];
    student = ['cindy', 123];
    student[0]; // cindy
    student[1]; // 123
    // object destructuring 해서 사용한다. ? 
    const [name, age] = student;
    console.log(name) // cindy

    // React 에서는 튜플을 잘 사용하고 있다.
    const SimpleHabit = () => {
        // const [count, setCount] = useState(0);
    }
    // 사용자가 어떤 변수를 입력 받고 리턴 할 때, 
    // 초기값을 읽을 수 있고 업데이트 할 수 있는 api 두가지를 서로 다른 타입으로 동적으로 만들어서 리턴하고 있음.
    // 사용하는 사람이 각각의 이름을 정해서 쓸 수 있도록 만듦.
    // 무언가를 동적으로 return 하는데, class나 interface로는 묶기가 애매하고 동적으로 관련 있는 다른 타입의 데이터를 묶어서 사용자가 이름을 정의해서 쓰는 경우에는 유용할 수 있지만
    // 그 외에는 ...지양 하자.
}