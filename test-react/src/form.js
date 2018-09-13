import React from 'react';
import $ from 'jquery';

export class Form extends React.Component{

    addElement(){

      let input =  $('.input');
      let val = input.val();
      input.val('')
    this.props.addElement(val);
   
    }




    render(){
        return(
            <div className={'form'}>
                    <input className={'input'} type='text'/>
                    <input onClick={this.addElement.bind(this)} className={'add-btn'} value='add' type='button'/>
            </div>
            )
    }
}