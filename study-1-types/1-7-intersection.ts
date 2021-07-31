{
    /**
     * Intersection Types: &
     * 발생할 수 있는 모든 케이스를 합한다. ?
     * 반면 Union은 발생할 수 있는 모든 케이스 중에 한가지만 선택하는 것
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    internWork({
        name: 'cindy',
        score: 1,
        employeeId: 123,
        work: () => {}
    })
}