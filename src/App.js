import logo from './logo.svg';
import './App.css';
import { Header, RedTaskBox, GreenTaskBox, YellowTaskBox, GrayTaskBox } from './view/task-box/TaskBox'
import ReactSortable from 'react-sortablejs'

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row" style={{ margin: "20px" }}>
          <RedTaskBox></RedTaskBox>
          <YellowTaskBox></YellowTaskBox>
        </div>
        <div className="row" style={{ margin: "20px" }}>
          <GreenTaskBox></GreenTaskBox>
          <GrayTaskBox></GrayTaskBox>
        </div>
      </div>
      <footer style={{margin:"20px"}}>
        <p style={{fontSize:14+"px",textAlign: "center"}}>© Ikshavaku labs</p>
    </footer>
    </div>

  );
}
function onEnter(event) {
  console.log(event);
  if (event.charCode == 13) {
        return true;
  }
}
export default App;
