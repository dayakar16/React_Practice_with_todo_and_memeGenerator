import React from 'react'; 
import FormComponent from './FormComponent';

class FormContainer extends React.Component{ 
  constructor() {
    super();
    this.state = { 
           firstName : "", 
           lastName : "",
           age : "",
           gender : "",
           location : "",
             isVegan : false,
             isEgg : false, 
             nonVeg : false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
handleChange(event) {
  const {type,checked,name,value} = event.target
 type ==='checkbox' ?  this.setState({ [name] : checked}) : this.setState({[name] : value})
}

render() {
  return (<FormComponent handleChange={this.handleChange} data={this.state}/>)
}
}
export default FormContainer; 