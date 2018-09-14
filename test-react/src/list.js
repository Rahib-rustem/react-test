import React from 'react';
import $ from 'jquery';
import icon from './icon/check.svg';
export class List extends React.Component{
     
constructor(){
    super();

this.state = {elem_argument:'all'} // when page load show all elements

}
    
componentDidMount = ()=>{
    $('.viwer').click(function(){
        $(this).css({'background':'lightgreen','color':'white'})
        $(this).siblings().css({'background':'white','color':'black'})
    })
}
 
changeStatus(c){
    this.props.changeStatus(c.target.parentNode.id) //use main component  elem_id = i

}

remove(d){
  
    this.props.remove(d.target.parentNode.id) //use main component  elem_id = i
 
}


elementFilter(elem_argument){

   this.setState({elem_argument})
   
}



    render(){

        let counter = 0; // elements count


        const elements = this.props.products.map((element, i) =>{

            
            if(this.state.elem_argument === 'all'){
                let elem_id = i

                i = i+1
              
                if(element.status==='on'){
                     counter++
                }

           return(
                   <li id={elem_id} key={i} className={element.status}>
                       <span className={'elem-count'}>{i}</span>
                       <span className={'element-name'}>{element.name}</span>
                       <span onClick={this.changeStatus.bind(this)} className={'active-passive'}>
                           <img className={'ticked'} src={icon} alt={'del'}/>
                       </span>
                       <span onClick={this.remove.bind(this)} className={'del close'}>X</span>
                   </li>
               )
               }



               if(this.state.elem_argument === 'passive' && element.status==='off'){
                let elem_id = i

                i = i+1
              
                if(element.status==='on'){
                     counter++
                }

           return(
                   <li id={elem_id} key={i} className={element.status}>
                       <span className={'elem-count'}>{i}</span>
                       <span className={'element-name'}>{element.name}</span>
                       <span onClick={this.changeStatus.bind(this)} className={'active-passive'}>
                           <img className={'ticked'} src={icon} alt={'del'}/>
                       </span>
                       <span onClick={this.remove.bind(this)} className={'del close'}>X</span>
                   </li>
               )
               }

               if(this.state.elem_argument === 'active'&& element.status === 'on'){
                let elem_id = i

                i = i+1
              
                if(element.status==='on'){
                     counter++
                }

           return(
                   <li id={elem_id} key={i} className={element.status}>
                       <span className={'elem-count'}>{i}</span>
                       <span className={'element-name'}>{element.name}</span>
                       <span onClick={this.changeStatus.bind(this)} className={'active-passive'}>
                           <img className={'ticked'} src={icon} alt={'del'}/>
                       </span>
                       <span onClick={this.remove.bind(this)} className={'del close'}>X</span>
                   </li>
               )
               }

        })

        return(
            <div>
                <ul className={'elements'}>
                    {elements}
                </ul>
                <div className={'controll'}>
                  <span className={'counter'}>{counter}</span>
                  <span onClick={()=>this.elementFilter('all')} className={'viwer all'}>All</span>
                  <span onClick={()=>this.elementFilter('active')} className={'viwer'}>Active</span>
                  <span onClick={()=>this.elementFilter('passive')} className={'viwer'}>Passive</span>
                </div>
            </div>
           
               
               
            )
          
               
         


       
    }
}