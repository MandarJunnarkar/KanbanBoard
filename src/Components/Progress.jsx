import React from 'react'
import './Progress.css'

function Progress() {
  return (
    <>
        <div className="kanban-block" id="progress">
          <h1 style={{fontSize: "20px"}}>In Progress</h1>
          {/* <Tasks /> */}
        </div>
    </>
  )
}

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

export default Progress