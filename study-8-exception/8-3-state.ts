{
    class OfflineError extends Error {

    }

    type NetworkErrorState = {
        result: 'fail';
        resean: 'offline' | 'down' | 'timeout'
    }
    type SuccessState = {
        result: 'success';
    }
    type ResultState = SuccessState | NetworkErrorState;
    class NetworkClient {
        tryConnect(): ResultState {
            throw new OfflineError(`no network`);
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {}
        login() {
            this.client.tryConnect();
            // login...
        }
    }

    class App {
        constructor(private userService: UserService) {}
        run() {
            // 오류를 잡아서 실질적으로 의미았게 처리할 수 있는 곳에서 try - catch 를 쓰자
            try {
                this.userService.login()
            } catch (error) { // 무조건 any 타입으로 온다.
                console.log(`catched by App`);

                // catch로 error를 받는 순간 error의 타입이 any로 변하기 때문에 아래 구문 사용 불가
                if (error instanceof OfflineError) {
                    
                }
            }
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}