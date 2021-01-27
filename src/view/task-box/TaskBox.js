import React from 'react'
import { ReactSortable } from 'react-sortablejs'
import { updateList, removeItem, loadCache, updateItem } from './TaskBoxHandlers'

export const grayStyledBox = { padding: "20px", background: "#8f8b8b", margin: "10px" };
export const redStyledBox = { padding: "20px", background: "#f8a1a1", margin: "10px" };
export const yellowStyledBox = { padding: "20px", background: "#f8e99a", margin: "10px" };
export const greenStyledBox = { padding: "20px", background: "#c8f569", margin: "10px" };

export class TaskBox extends React.Component {
  constructor(props) {
    super(props);
    let cachedList = [];
    cachedList = loadCache(cachedList, props.type);
    this.state = { list: cachedList, type: props.type };
    this.updateList = updateList.bind(this);
    this.removeItem = removeItem.bind(this);

  }
  render() {
    return (
      <div className={this.props.classes}>
        <p className={this.props.titleClass}>{this.props.title}</p>
        <input value={this.state.selectedItem && this.state.selectedItem.task} type="text" className="form-control" placeholder={this.props.placeHolder} onKeyPress={this.updateList} />
        <ReactSortable tag="ol"
          list={this.state.list}
          setList={(newState) => this.setState({ list: newState })}>
          {this.state.list.map((item, index) => (!this.state.showUpdateArea &&
            <li onDoubleClick={updateItem.bind(this, item)} className="task-item" data-index={index} key={item.id}>{item.task}
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


