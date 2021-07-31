{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    }

    function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return {
            ...todo, ...fieldsToUpdate
        }
    }

    const todo: ToDo = {
        title: 'learn Type Script',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    }

    const updated = updateToDo(todo, {priority: 'low'})
    console.log(updated)
}