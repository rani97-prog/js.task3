         // 1

// import React from "react"
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state ={
//       count:100

//     }
// }

// decrement=()=>{
//          this.setState({
//           count:this.state.count-1
//          })
//     }
  
// increment=()=>{
//   this.setState({
//     count:this.state.count+1

//   })

// }
// render(){
//   return(
//     <div  style={{textAlign:"center", margin:100, gap:300 }}>
//       <button onClick={this.decrement} style={{padding:20, fontSize:20, background:"purple",color:"white" }}> -</button>
//       <h1> count:{this.state.count}</h1>
//       <button onClick={this.increment} style={{padding:20, fontSize:20 ,background:"purple",color:"white"}}>+</button>
//     </div>
//   )
// }
// }
// export default App;




import React from "react"
class App extends React.Component{
  constructor(){
    super()
    this.state ={
      loginShow:false
    }
    this.state={
      color:"blue"
    }
  }
  render(){
    return(
      <div style={{background:this.state.color}}>
        <button onClick={()=>this.setState({loginShow:!this.state.loginShow})}>Login</button>
       {this.state.loginShow && 
       <div>
        <input name="" required placeholder="name"></input><br/>
        <input email="" required placeholder="email"></input><br/>
        <input password="" required placeholder="password"></input><br/>
       </div>}
       <button onClick={()=>this.setState({color:this.state.color="red"})}>red</button>
        <button onClick={()=>this.setState({color:this.state.color="purple"})}>purple</button>
        <button onClick={()=>this.setState({color:this.state.color="yellow"})}>yellow</button>
       </div>
    )
  }
}

export default App;

                     







