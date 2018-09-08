import React, {Component} from 'react';

class Item extends Component{
  constructor(props){
    super(props)

    this.handleGetId = this.handleGetId.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleAddItem(){
    
  }

  handleGetId(id){
    this.props.onClickDelete(id)
  }

  handleEdit(){
    let {item} = this.props;
    this.props.onClickEdit(item)
  }

  render(){
    const {item} = this.props;
    const {index} = this.props;
    return(
      <tr>
        <td className="text-center">{index}</td>
        <td>{item.name}</td>
        <td className="text-center">{this.showElementLevel(item.level)}</td>
        <td>
          <button onClick={this.handleEdit} type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger" onClick={() => this.handleGetId(item.id)}>Delete</button>
        </td>
      </tr>
    )
  }

  showElementLevel(level){
    let elmLevel = <span className="label label-danger">High</span>;
    if (level === 0) {
      elmLevel = <span className="label label-success">Small</span>;
    } else if (level === 1) {
      elmLevel = <span className="label label-warning">Medium</span>;
    }
    return elmLevel;
  }
}

export default Item;