// Write your code here
const TodoItem = props => {
  const {details, deleteTodo} = props
  const {id, title} = details

  const deletetodo = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button className="button" type="button" onClick={deletetodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
