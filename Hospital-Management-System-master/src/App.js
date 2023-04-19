import { React, useState} from 'react';
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";


// import React, { Component } from 'react'



 
        
     
    


//  class App extends Component {
  
//   constructor(props){
//     super(props);
//     this.state = {apiResponse:"",welcome:true};
    
//   }
//   callAPI(){
//     fetch("http:localhost:3000/")
//     .then(res=>res.text())
//     .then(res=>this.setState({apiResponse:res}));
//   }
//   componentWillMount(){
//     this.callAPI();
//   }
//   // const [welcome, setWelcome] = useState(true);
// // function clickHandler(){
// //    setWelcome(false);
// //  } 
//   render(){
//     return(
//       <div className="App">
//          <>
//           {this.state.welcome ? <div>
//              <h1>WELCOME</h1>
//              <button onClick={this.setState({welcome:false})}><u>Click Here To Main Webside</u></button>
//            </div> : <AllRoutes /> }
//             </>    
//       </div>
//     )
//   }
// }
function App(){
  return (
    <>

<AllRoutes></AllRoutes>
           </> 
  );
}

export default App;
