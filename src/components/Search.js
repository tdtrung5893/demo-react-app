import React, {Component} from 'react';

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      strSearch: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSearch(){
    this.props.onClickSearch(this.state.strSearch)
  }

  handleChange(e){
    this.setState({
      strSearch: e.target.value
    })
  }

  handleClear(){
    this.setState({
      strSearch: ''
    })
    this.props.onClickSearch('')
  }

  render(){
    return(
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input type="text" value={this.state.strSearch} onChange={this.handleChange} className="form-control" placeholder="Search for..." ref="search" />
          <span className="input-group-btn">
            <button type="button" className="btn btn-info" onClick={this.handleSearch}>Go!</button>
            <button type="button" className="btn btn-warning" onClick={this.handleClear}>Clear</button>
          </span>
        </div>
      </div>  
    )
  }
}

export default Search;