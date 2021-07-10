// import './App.css';
// // import MyInfo from './components/MyInfo.js';
// // import MainContent from './components/MainContent';
// // import Footer from './components/Footer';
// // import NavBar from './components/NavBar';
// // import Joke from './components/Joke';
// // import JokesData from './components/JokesData';


// // function App() {
// // //  const jokescomponent =  JokesData.map((jk)=> <Joke key={jk.id} punchline= {jk.punchline} question={jk.question} />)
// // //  console.log(jokescomponent)

// //    const taskscomponent = Tododata.map((todoitem)=> <Todo key={todoitem.id} task={todoitem.task}
// //                   completed = {todoitem.completed}/>)

// //   return (
// //     <div className="Apps">
// //       {/*  <NavBar />
// //       <MainContent />
// //        <MyInfo />
// //        <Footer /> 
// //        {jokescomponent}*/}
// //        {taskscomponent}   
// //     </div>
// //   )
// // }


// class App extends React.Component{
//   constructor () {
//     super()
//     this.state = { 
//          name : 'daya',
//          age : '26'
//     }
//   }
//   render() {
//     const taskscomponent = Tododata.map((todoitem)=> <Todo key={todoitem.id} task={todoitem.task}
//     completed = {todoitem.completed}/>)
//     return (
//       <div>
//         {taskscomponent} 
//       </div>       
//     );
//   }
// }

// function App () { 
//   return (
//     <div>
//        <img onMouseOver={()=> {console.log("mouse over")}} src='https://www.google.com/search?q=images&rlz=1C1CHZL_enUS935US935&sxsrf=ALeKk01F54rnesgqJE9qSKxoVw2EG79iMw:1624411800953&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjs6fTCzazxAhUaEFkFHejHAPsQ_AUoAXoECAEQAw&biw=1707&bih=781#imgrc=L8xfQakH9a8tJM'></img>
//        <br />
//        <button >Click me</button>
//     </div>
//   );
// }

// export default App;

// import Tododata from './components/Tododata';
// import React from 'react'
// import Todo from './components/Todo';

// class App extends React.Component { 
//   constructor() {
//     super()
//     this.state = { 
//       todoitems : Tododata
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

// handleChange(id) {

//       this.setState((prevState)=> {
//         const updatedtodos = prevState.todoitems.map((todoitem)=> {
//           if(todoitem.id === id)
//                todoitem.completed = !todoitem.completed
//           return todoitem
//         })

//         return {
//              todoitems : updatedtodos
//         }
//       }) 

//     console.log(id)
// }

//   render() {
//     const taskscomponent = this.state.todoitems.map((todoitem)=> <Todo key={todoitem.id} todoitem={todoitem}
//      handleChange = {this.handleChange}   />)
//     return (
//       <div>
//       {taskscomponent}
//       </div> 
//     )
//   }

// }


// export default App; 

// // import Tododata from './components/Tododata';
// import React from 'react'
// import Todo from './components/Todo';
// import Conditional from './components/Conditional';

// class App extends React.Component { 
//   constructor() {
//     super()
//     this.state = { 
//         // // isLoggedIN : false
//         //    isLoading : false,
//         //    char : {}
//         firstName : "",
//         lastName : "",
//         gender : ""
//     }  
//    // this.handleClick = this.handleClick.bind(this);
//    this.handleChange = this.handleChange.bind(this);
//   }

// // componentDidMount () {
// //     fetch('https://jsonapi.org/')
// //     .then(respons=> respons.json)
// //     .then(data=> { 
// //       console.log(data)
// //       this.setState({ char : data})
// //     } );
// // }

// // handleClick() { 
// //       this.setState( (prevState) => { 
// //         return { 
// //           isLoggedIN : !prevState.isLoggedIN
// //         }
// //       }
// //       )
// // }


// handleChange(event){
//     const {name,value,type,checked} = event.target
//  type==='checkbox' ? this.setState({[name] : value}) : this.setState({
//            [name ] : value 
//   })
  
// }


//   render() {
    
//     return (
//       // <div>
//       //    {/* {this.state.isLoggedIN ? <button onClick={this.handleClick}> Logout </button> : <button onClick={this.handleClick}> Login </button> }
//       //   <Conditional isLoggedIN ={this.state.isLoggedIN}  /> */}
//       //    { }
//       // </div> 
//       <form>
//         <input type='text' name='firstName' value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}></input>
//         <br/>
//         <input type='text' name='lastName' value={this.state.lastName} placeholder="First Name" onChange={this.handleChange}></input>
//         <h1> {this.state.firstName} {this.state.lastName}</h1>
//         <label>
//           <input 
//            type='radio'
//            name='gender'
//            value='male' 
//            checked={this.state.gender === 'male'}
//            onChange= {this.handleChange}
//            ></input> Male
//             </label>
//             <br/>
//            <label>
//            <input
//             type='radio'
//             name='gender'
//             vale='female'
//             checked= {this.state.gender === 'female'}
//             onChange= {this.handleChange}
//            >
//            </input> Female
//         </label>
//       </form>
//     )
//   }

// }


// export default App; 


import React from 'react'; 
import FormContainer from './components/FormContainer';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

function App() {

  return (<div> 
         <Header> </Header>
         <MemeGenerator></MemeGenerator>
  </div>)
}

export default App; 