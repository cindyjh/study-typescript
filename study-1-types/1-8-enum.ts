{
    /**
     * Enum
     * JS에 없음.
     * Pascal case로 작성하자. 근데 Type이 정확하게 보장되지 않음. 사용하지 말자.
     * 대신 Union Type을 사용하자.
     */

    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONGDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2})
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    // Pascal case로 작성하자.
    enum Days {
        Monday = 1, // 1
        Tuesday,    // 2
        Wednesday,  // 3
        Thursday,   // 4
        Friday,     // 5
        Saterday,   // 6
        Sunday,      // 7
    }
    console.log(Days.Tuesday);
    let day: Days = Days.Sunday;
    day = Days.Friday;
    day = 10; // 오류가 발생하지 않음!!
    console.log(day);

    type DaysOfWeek = 'monday' | 'tuesday' | 'wednesday'
    let dayOfWeek: DaysOfWeek = 'monday';
    // dayOfWeek = 'cindy'; // ERROR!
    
}