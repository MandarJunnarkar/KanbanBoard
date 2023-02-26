import "./Todo.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Tasks.css"

function Todo(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [todoName, setTodoName] = useState([]);

  const openTaskForm = () => {
    setIsOpen(!isOpen);
  };

  const handleTodo = () => {
    setTodoName((prev) => [
      ...prev,
      { text: input, isModalOpen: false, id: uuidv4() },
    ]);
    setIsOpen(false);
    setInput("");
  };

  const openModal = (id) => {
    let tempArr = [...todoName];
    let index = tempArr.findIndex((x) => x.id === id);
    tempArr[index].isModalOpen = !tempArr[index].isModalOpen;
    setTodoName(tempArr);
  };

  const handleDelete = (id) => {
    let tempArr = [...todoName];
    let index = tempArr.findIndex((x) => x.id === id);
    tempArr.splice(index, 1);
    setTodoName(tempArr);
  };

  const swapToProgress = (id) => {
    let tempArr = [...todoName];
    let index = tempArr.findIndex((x) => x.id === id);
    tempArr = tempArr[index];
    props.setProgress((prev)=> [...prev, tempArr]);
};
// console.log(progressArr);s

  return (
    <>
      <div className="kanban-block" id="todo">
        <h1 style={{ fontSize: "20px" }}>Todo</h1>
        <div className="todo-items">
          <div className="task-button-block">
            <button id="task-button" onClick={openTaskForm}>
              Create new task
            </button>

            {isOpen && (
              <div id="taskForm">
                <label htmlFor="taskName">Enter task name</label>
                <input
                  value={input}
                  type="text"
                  id="taskName"
                  onInput={(e) => setInput(e.target.value)}
                />
                <button id="newTodoItem" onClick={handleTodo}>
                  OK
                </button>
              </div>
            )}
          </div>
          <Tasks
            todoName={todoName}
            openModal={openModal}
            handleDelete={handleDelete}
            swapToProgress={swapToProgress}
          />
        </div>
      </div>
    </>
  );
}


// TodoTasks 
function Tasks(props) {
    
    return (
      <>
        <div id="todoTasks">
          {props.todoName.map((todo) => (
            <div className="task" id="task1" key={todo.id}>
              <span id="taskName-span">{todo.text}</span>
              <button className="delete" onClick={() => props.handleDelete(todo.id)}>
                delete
              </button>
              <button onClick={() => props.openModal(todo.id)}>D</button>
              {todo.isModalOpen && (
                <div id="modal">
                  <div
                    className="modal-items"
                    id="inProgressBtn"
                    onClick={()=>props.swapToProgress(todo.id)}
                  >
                    In progress
                  </div>
                  <div className="modal-items" id="completedBtn">
                    Completed
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    );
  }

export default Todo;
