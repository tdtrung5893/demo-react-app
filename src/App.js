import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import mockItem from './mocks/tasks';
import {filter, includes, remove ,orderBy as funcOrderBy, reject} from 'lodash';
import uuidv4 from 'uuid/v4';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: mockItem,
      showForm: false,
      strSearch: '',
      orderBy: 'level',
      orderDir: 'desc',
      itemSelected: null
    };
    this.handleShow = this.handleShow.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleEditItem = this.handleEditItem.bind(this)
  }

  handleEditItem(item){
    this.setState({
      itemSelected: item,
      showForm: true
    })
  }

  handleAddItem(item){
    let {items} = this.state
    let id = null;
    if(item.id !== ''){
      items = reject(items, {id: item.id});
      // id = item.id;
      items.push({
        id: item.id,
        name: item.name,
        level: +item.level
      })
    } else {
      // id = uuidv4();
      items.push({
        id: uuidv4(),
        name: item.name,
        level: +item.level
      })
    }
    
    this.setState({
      items: items,
      showForm: false
    })

  }

  handleDelete(itemId){
    let items = this.state.items
    remove(items, item => item.id === itemId);
    this.setState({
      items: items
    })
  }

  handleSort(orderBy, orderDir){
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }

  handleShow(){
    this.setState({
      itemSelected: null,
      showForm: !this.state.showForm
    })
  }

  handleSearch(value){
    this.setState({
      strSearch: value
    })
  }

  closeForm(){
    this.setState({
      showForm: false
    })
  }

  render() {
    let itemsOrigin = [...this.state.items];
    let appItem = [];
    let itemDelete = [];
    let form = null;
    let {orderBy, orderDir, itemId} = this.state;

    const search = this.state.strSearch;

    appItem = filter(itemsOrigin, (item) => {
      return includes(item.name.toLowerCase(), search.toLowerCase());
    });

    appItem = funcOrderBy(appItem, [orderBy], [orderDir]);

    if (this.state.showForm) {
      form = <Form onClick={this.closeForm} onClickAddItem={this.handleAddItem} itemSelected={this.state.itemSelected}/>;
    }
    return (
      <div className="container">
        <Title />
        <Control 
          orderBy={orderBy}
          orderDir={orderDir}
          onClickSort={this.handleSort}
          onClickSearchControl={this.handleSearch} 
          onClick={this.handleShow} 
          isShowForm={this.state.showForm} 
        />
        {form}
        <List listItem={appItem} onClickDelete={this.handleDelete} onClickEdit={this.handleEditItem} />
      </div>
    );
  }
}

export default App;
