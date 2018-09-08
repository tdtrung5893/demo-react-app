import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component{
  render(){
    let {orderBy, orderDir} = this.props;
    let elmbutton = <button type="button" className="btn btn-block btn-info" onClick={this.props.onClick}>Add Task</button>;
    if (this.props.isShowForm) {
      elmbutton = <button type="button" className="btn btn-block btn-success" onClick={this.props.onClick}>Close Task</button>;
    }
    return(
      <div className="row">
        <Search onClickSearch={this.props.onClickSearchControl} />
        <Sort 
          orderBy={orderBy}
          orderDir={orderDir}
          onClickSort={this.props.onClickSort}
        />
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          {elmbutton}
        </div>
      </div>
    )
  }
}


export default Control;