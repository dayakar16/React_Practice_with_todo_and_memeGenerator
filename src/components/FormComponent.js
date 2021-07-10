import React from 'react';
function FormComponent(props) {
return (
    <form> 
      <input type='text' value={props.data.firstName} name="firstName" placeholder='firstName' onChange={props.handleChange} /> <br/>
      <input type='text' value={props.data.lastName} name="lastName" placeholder='lastName' onChange={props.handleChange}/> <br/>
      <input type='text' value={props.data.age} name="age" placeholder='Age' onChange={props.handleChange} />  <br/>
       <label><input type='radio' value='male' name='gender' onChange={props.handleChange} />Male</label> <br/>
       <label><input type='radio' value='female' name='gender' onChange={props.handleChange} />Female</label> <br/>
       <select value={props.data.location} name='location' onChange={props.handleChange}>
         <option value='Charlotte'>Charlotte</option>
         <option value='Chicago'>Chicago</option>
         <option value='Seattle'>Seattle</option>
         <option value='Washington'>Washington</option>
       </select>
       <br/>
       <label><input type='checkbox' checked={props.data.isVegan} name='isVegan' onChange={props.handleChange} />Vegetarian</label> <br/>
       <label><input type='checkbox' checked={props.data.isEgg} name='isEgg' onChange={props.handleChange} />Eggetarian</label> <br/>
       <label><input type='checkbox' checked={props.data.nonVeg} name='nonVeg' onChange={props.handleChange} />Non-Vegetarian</label> <br/>
      <button>submit</button>
      <h1>{props.data.nonVeg ? "yes" : "No"} {props.data.age} {props.data.location}</h1>
    </form>
)
}

export default FormComponent;