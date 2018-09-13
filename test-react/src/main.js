import React, { Component } from 'react';
import {List} from './list';
import {Form} from './form';
import $ from 'jquery';

class Main extends Component {

constructor(){
  super();

this.addElement = this.addElement.bind(this);

this.changeStatus = this.changeStatus.bind(this);

this.remove = this.remove.bind(this);


  
  this.state = {

    products : [
 
     {
       'name':'pen',
       'status':'on'
     },
    {
      'name': 'desk',
      'status':'on'
    },
    {
      'name': 'wall',
      'status':'on'
    },
    {
      'name': 'window',
      'status':'on'
    },
    {
      'name': 'door',
      'status':'on'
    },
    {
      'name': 'ruler',
      'status':'on'
    },
    {
      'name': 'table',
      'status':'on'
    }
   ]
 };
 
 
}


addElement(val){

 const refleshProducts = this.state.products;

 if(val !==''){
   let newStatus = 'on';
  refleshProducts.push({name:val,status:newStatus});
}
this.setState({refleshProducts});


}


changeStatus(id){
 
  let refleshProducts = this.state.products;
  let newStatus = 'on';
  let currenStatus = refleshProducts[id].status;

  if(currenStatus === 'on'){
    newStatus = 'off';
  }
  refleshProducts[id].status = newStatus;

  this.setState({refleshProducts})
}





remove(id){

  let  refleshProducts = this.state.products;
    refleshProducts.splice(id,1);
    this.setState({refleshProducts});
    
}









  render() {


    if(this.state.products ==''){
      $('.elements').css({'display':'none'});
    }else{
      $('.elements').css({'display':'block'});
    }


    return (
      <div className={'main'}>
       <div className={'container'}>
        <div className={'content'}>
            <Form  addElement={this.addElement}/>
            <List
              products={this.state.products}
              changeStatus={this.changeStatus}
              remove={this.remove}/>
           

        </div>
       </div>
      </div>
    );
  }
}

export default Main;
