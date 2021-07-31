{
    // 기존의 타입을 이용해서 조금 다른 형태로 변환 할 수 있는 것

    type Video = {
        title: string;
        author: string;
    };

    // 배열의 map 함수는 input을 받아 변환해주는 기능을 해준다.
    // [1, 2].map(item => item * item); // [1, 4]
    // 이것처럼 map type을 활용하여 기존의 타입을 다른 타입으로 변환할 수 있다!
    type Optional<T> = {
        // [] // type object 정의 안에서 index 기호를 사용하면, for .. in 과 동일하다.
        // 기존의 T object type의 key를 이용해서 value를 정의 할 수 있다.
        [P in keyof T]?: T[P]
    }

    // 정해진 T type을 전달해주면 모든 key를 돌면서
    // P 라는 Key가 전달된 T Object에 있는 모든 key를 돌면서
    // T object 에 있는 key에 해당하는 value의 타입을 쓰겠다.
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    }

    type VideoOptional = Optional<Video>;
    const videoOp: VideoOptional = {
        title: 'hi',
        // animal: 'gg' // ERROR!
    }

    type Animal = {
        name: string,
        age: number,
    }
    const animal: Optional<Animal> = {
        age: 19,
    }

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'ellie'
    }

    // video.title = 'test'// ERORR~!

    // type VideoOptional = {
    //     title?: string,
    //     author?: string,
    //     description?: string,
    // }
    
    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    //     readonly description: string;
    // }

    type Nullable<T> = {
        [P in keyof T]: T[P] | null;
    }
    const obj2: Nullable<Video> = {
        title: 'hi',
        author: null,
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    }
}