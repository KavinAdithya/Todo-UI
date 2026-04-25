function TodosComponent() {
    const todayDate = new Date()
    const targetDate = new Date(todayDate.getFullYear() + 4, todayDate.getMonth(), todayDate.getDate())
    const todos = [
        {id : 1, description : "Learn Java", isDone : false, targetDate : targetDate}, 
        {id : 2, description : "Master technology", isDone : false, targetDate : targetDate},
        {id : 3, description : "Achieve Dreams", isDone : false, targetDate : targetDate},
    ]

    return (
        <div className='container'>
            <h1> Manage Your Habits </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr> 
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                               <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                               </tr> 
                            )
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default TodosComponent;