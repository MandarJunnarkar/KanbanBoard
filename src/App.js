import "./App.css";
import Todo from "./Components/Todo";
import Progress from "./Components/Progress";
import Completed from "./Components/Completed";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState([])
  console.log(progress);
  
  return (
    <>
      <div id="container">
        <div className="kanban-title">
          <strong className="kanban-title-text">Kanban Board</strong>
        </div>

        <div className="kanban-items">
          <Todo setProgress={setProgress}/>
          <Progress progress={progress}/>
          <Completed />
        </div>
      </div>
    </>
  );
}

export default App;
