{
    /**
     * Union Types
     * OR 이라고 생각하면됨
     */
    type Direction = 'left' | 'right' | 'up' | 'down'; // String Literal & Union 을 이용해서 한 것이다.
    function move(direction: Direction) {
        console.log(direction);
    }

    move('left');
    move('up');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // function: login -> success, fail
    function login_cindy(id: string, pwd: string): Promise<boolean> | never {
        const random: number = Math.random() * 10;
        return new Promise((resolve, reject) => {
            if (random % 2) {
                throw Error('this is not an odd');
            }
            return true;
        })
    }
    type SuccessState = {
        response: {
            body: string;
        }
    };
    type FailState = {
        reson: string
    };
    type LoginState = SuccessState | FailState;
    function login(id: string, pwd: string): Promise<LoginState> {
        const random: number = parseInt((Math.random() * 10).toString());
        console.log(random);
        
        return new Promise((resolve, reject) => {
            if (random % 2) {
                const success: SuccessState = {
                    response: {
                        body: `${id}, logged in!`,
                    }
                };
                resolve(success)
            }
            
            const fail: FailState = {
                reson: 'bad'
            };
            reject(fail)
        })
    }
    const loginResult = login('cindy', '124');
    console.log(loginResult);
    
    // printLoginState(state)
    // success -> 🎆 body
    // fail -> 😂reson
    function printLoginState (loginState: LoginState): void {
        if ('response' in loginState) {
            console.log(`🎆 ${loginState.response.body}`);
        } else {
            console.log(`😂 ${loginState.reson}`);
            
        }


        // const loginStateType = typeof loginState;
        // switch(loginStateType) {
        //     case 'SuccessState':
        //     break;
        //     case 'FailState':
        //         break;
        // }
    }
}