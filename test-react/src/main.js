import React, { Component } from 'react';
import {List} from './list';
import {Form} from './form';
import $ from 'jquery';

class Main extends Component {

constructor(){
  super();




  
  this.state = {  products : [ ] };

  
 
   
  

 
let getOnLocal = localStorage.getItem('save');

if(getOnLocal !== null){

  getOnLocal = JSON.parse(getOnLocal);
  this.state.products = getOnLocal;
}

 

this.addElement = this.addElement.bind(this);
this.changeStatus = this.changeStatus.bind(this);
this.remove = this.remove.bind(this);
}


addElement(val){

 const refleshProducts = this.state.products;

 if(val !==''){
   let newStatus = 'on';
  refleshProducts.push({name:val,status:newStatus});
}
this.setState({refleshProducts});

this.saveOnLocal(refleshProducts)

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
  this.saveOnLocal(refleshProducts)
}





remove(id){

  let  refleshProducts = this.state.products;
    refleshProducts.splice(id,1);
    this.setState({refleshProducts});
    this.saveOnLocal(refleshProducts)
}



saveOnLocal(refleshProducts){

  var refleshProducts = JSON.stringify(refleshProducts)
  localStorage.setItem('save',refleshProducts);
 
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
