import React, {Component} from 'react';

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      taskId: '',
      taskName: '',
      taskLevel: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount(){
    let item = this.props.itemSelected;
    if (item !== null) {
      console.log(item);
      if(item.id !== ''){
        this.setState({
          taskId: item.id,
          taskName: item.name,
          taskLevel: item.level
        })
      }
    }
  }

  componentWillReceiveProps(nextProps){
    let item = nextProps.itemSelected;
    if (item !== null) {
      console.log(item);
      if(item.id !== ''){
        this.setState({
          taskId: item.id,
          taskName: item.name,
          taskLevel: item.level
        })
      }
    }
  }

  handleSubmit(e){
    let item = {
      id: this.state.taskId,
      name: this.state.taskName,
      level: this.state.taskLevel
    }
    this.props.onClickAddItem(item)
    e.preventDefault();
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render(){

    return(
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form onSubmit={this.handleSubmit} className="form-inline">
            <div className="form-group">
              <label className="sr-only">label</label>
              <input value={this.state.taskName} onChange={this.handleChange} type="text" className="form-control" placeholder="Task Name" name="taskName" />
            </div>
            <div className="form-group">
              <label className="sr-only">label</label>
              <select name="taskLevel" value={this.state.taskLevel} onChange={this.handleChange} className="form-control" required="required">
                <option value={0}>Small</option>
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-default" onClick={this.props.onClick}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;