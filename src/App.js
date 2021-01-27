import logo from "./logo.svg";
import "./App.css";
import {
  Header,
  TaskBox,
  GreenTaskBox,
  YellowTaskBox,
  GrayTaskBox,
} from "./view/task-box/TaskBox";
import ReactSortable from "react-sortablejs";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row" style={{ margin: "20px" }}>
          <TaskBox
            placeHolder="Things you need to do"
            classes="box red col"
            titleClass="lead text-danger"
            title="Critical - Important"
            type="red"
          />
          <TaskBox
            placeHolder="Things you can delegate"
            classes="box yellow col"
            titleClass="lead text-warning"
            title="Critical - Not Important"
            type="yellow"
          />
        </div>
        <div className="row" style={{ margin: "20px" }}>
          <TaskBox
            placeHolder="Things you want to do"
            classes="box green col"
            titleClass="lead text-success"
            title="Not Critical - Important"
            type="green"
          />
          <TaskBox
            placeHolder="Things to avoid"
            classes="box gray col"
            titleClass="lead text-gray"
            title="Not Critical - Not Important"
            type="gray"
          />
        </div>
      </div>
      <footer style={{ margin: "20px" }}>
        <p style={{ fontSize: 14 + "px", textAlign: "center" }}>
          © Ikshavaku labs
        </p>
      </footer>
    </div>
  );
}
export default App;
