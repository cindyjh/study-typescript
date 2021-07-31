{
    type ToDo = {
        title: string;
        description: string;
    }

    // Readonly 와 같은 타입들은 ts 에서 제공한다.
    // 이런것들을 통틀어 Utility type 이라고 부른다.
    function display(todo: Readonly<ToDo>) {
        // todo.title = 'j'; // ERROR!
   }
}