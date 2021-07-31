{
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error('not valid number');
        }

        return arg;
    }

    // any를 쓰면 type의 정보가 사라져서 안좋아.
    function checkNotNullAnyBad(arg: any | null): any {
        if (arg == null) {
            throw new Error('not valid number');
        }

        return arg;
    }
    const resultAny = checkNotNullAnyBad(123);
    // generic 은 generic을 쓸 때(컴파일 할 때) 타입이 결정되기 때문에 타입을 보장받을 수 있다.
    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('not valid number');
        }

        return arg;
    }
    const result = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
    console.log(result)

    checkNotNull(null)
}