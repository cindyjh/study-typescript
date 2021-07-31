{
    // Java: Exception Class가 존재
    // JavaScript: Error class 존재
    // const array = new Array(1000000000000000000000000)
    
    // Error(Exception) Handling: try -> catch -> finally

    function readFile(filename: string): string {
        if (filename === 'not exist') {
            throw new Error(`file not exist ${filename}`)
        }
        return 'file contents'
    }

    function closeFile(file: string) {
        //
    }

    function run() {
        const filename = 'not exist';
        try {
            // 정말 오류가 날 것 같은 부분만 try로 감싸도록 하자
            console.log(readFile(filename));
        } catch (error) {
            console.log(`catched`);
            return; // 오류 발생해서 return 되어도 finally 까지 실행된다.
        } finally {
            closeFile(filename);
            console.log('closed');
        }
    }

    run()
}
