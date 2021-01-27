import React from 'react'
import { ReactSortable } from 'react-sortablejs'
import {updateList,removeItem,loadCache} from './TaskBoxHandlers'

export const grayStyledBox = { padding: "20px", background: "#8f8b8b", margin: "10px" };
export const redStyledBox = { padding: "20px", background: "#f8a1a1", margin: "10px" };
export const yellowStyledBox = { padding: "20px", background: "#f8e99a", margin: "10px" };
export const greenStyledBox = { padding: "20px", background: "#c8f569", margin: "10px" };

export class RedTaskBox extends React.Component {
  constructor(props) {
    super(props);
    let cachedList = [];
    cachedList = loadCache(cachedList, "red");
    this.state = { list: cachedList, type: "red" };
    this.updateList = updateList.bind(this);
    this.removeItem = removeItem.bind(this);

  }

  render() {
    return (
      <div className="col" style={redStyledBox}>
        <p className="lead text-danger">Critical - Important</p><input type="text" id="ci" className="form-control" placeholder="Things you need to do" onKeyPress={this.updateList} />
        <ReactSortable tag="ol"
          list={this.state.list}
          setList={(newState) => this.setState({ list: newState })}>
          {this.state.list.map((item, index) => (
            <li className="task-item" data-index={index} key={item.id}>{item.task}
              <DeleteButton index={index} onDelete={this.removeItem} />
            </li>
          ))}
        </ReactSortable>
      </div>
    )
  }
}

export class YellowTaskBox extends React.Component {
  constructor(props) {
    super(props);
    let cachedList = [];
    cachedList = loadCache(cachedList, "yellow");
    this.state = { list: cachedList, type: "yellow", showNotes: false };
    this.updateList = updateList.bind(this);
    this.removeItem = removeItem.bind(this);

  }
  render() {
    return (
      <div className="col" style={yellowStyledBox}>
        <p className="lead text-warning">Critical - Not Important</p><input type="text" id="cnimp" className="form-control" placeholder="Things you can delegate" onKeyPress={this.updateList} />
        <ReactSortable tag="ol"
          list={this.state.list}
          setList={(newState) => this.setState({ list: newState })}>
          {this.state.list.map((item, index) => (
            <li className="task-item" key={item.id}>{item.task}
              <DeleteButton index={index} onDelete={this.removeItem} />
            </li>
          ))}
        </ReactSortable>
      </div>
    )
  }
}

export class GreenTaskBox extends React.Component {
  constructor(props) {
    super(props);
    let cachedList = [];
    cachedList = loadCache(cachedList, "green");
    this.state = { list: cachedList, type: "green", showNotes: false };
    console.log(this.state);
    this.updateList = updateList.bind(this);
    this.removeItem = removeItem.bind(this);

  }
  render() {
    return (
      <div className="col" style={greenStyledBox}>
        <p className="lead text-success">Not Critical - Important</p><input type="text" id="ncimp" className="form-control" placeholder="Things you want to do" onKeyPress={this.updateList} />
        <ReactSortable tag="ol"
          list={this.state.list}
          setList={(newState) => this.setState({ list: newState })}>
          {this.state.list.map((item, index) => (
            <li className="task-item" key={item.id}>{item.task}
              <DeleteButton index={index} onDelete={this.removeItem} />
            </li>
          ))}
        </ReactSortable>
      </div>
    )
  }
}

export class GrayTaskBox extends React.Component {
  constructor(props) {
    super(props);
    let cachedList = [];
    cachedList = loadCache(cachedList, "gray");
    this.state = { list: cachedList, type: "gray", showNotes: false };
    this.updateList = updateList.bind(this);
    this.removeItem = removeItem.bind(this);

  }
  render() {
    return (
      <div className="col" style={grayStyledBox}>
        <p className="lead text-light">Not Critical - Not Important</p><input type="text" className="form-control" placeholder="Things you want to do" onKeyPress={this.updateList} />
        <ReactSortable tag="ol"
          list={this.state.list}
          setList={(newState) => this.setState({ list: newState })}>
          {this.state.list.map((item, index) => (
            <li className="task-item" key={item.id}>{item.task}
              <DeleteButton index={index} onDelete={this.removeItem} />
            </li>
          ))}
        </ReactSortable>
      </div>
    )
  }
}
export const Header = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md bg-primary">
      <div className="container-fluid"><i className="fa fa-play-circle-o fa-3x" style={{ color: "rgb(240,242,245)", margin: "5px;" }}></i><a className="navbar-brand text-capitalize text-light" href="#" style={{ fontSize: "28px" }}>EISENHOWER MATRIX</a>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav"></ul>
        </div>
      </div>
    </nav>
  )
}

export const DeleteButton = (props) => {
  return (
    <i className="fa fa-remove float-right" onClick={() => { props.onDelete(props.index) }}></i>
  )
}


