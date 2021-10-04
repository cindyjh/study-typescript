{
    /**
     * Discriminated Union
     * Union Type을 쓸 때에 공통적인 property를 가지고 있게 만들어 구분하기 쉽게 만든다.
     */

    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    };
    type FailState = {
        result: 'fail';
        reson: string
    };
    type LoginState = SuccessState | FailState;
    function login(id: string, pwd: string): LoginState {
        const random: number = parseInt((Math.random() * 10).toString());
        console.log(random);
        
        if (random % 2) {
            return {
                result: 'success',
                response: {
                    body: `${id}, logged in!`,
                }
            };
        }
        
        return {
            result: 'fail',
            reson: 'bad'
        };
    }
    const loginResult = login('cindy', '124');
    // console.log(loginResult);
    
    printLoginState(loginResult)
    // success -> 🎆 body
    // fail -> 😂reson
    function printLoginState (loginState: LoginState): void {
        // cindy
        // const res = loginState.result; // 이렇게 위에서 result 값을 받아와 if 분기에 사용하면 오류가 뜬다 ㅎㅎ,,,
        // if (res === 'success') {
        //     console.log(`🎆 ${loginState.response.body}`);
        // } else {
        //     console.log(`😂 ${loginState.reson}`);
        // }

        // 존내똑똑하네 ...
        if (loginState.result === 'success') {
            console.log(`🎆 ${loginState.response.body}`);
        } else {
            console.log(`😂 ${loginState.reson}`);
        }
    }
}