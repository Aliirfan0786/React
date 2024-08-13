import React from "react";
import UserClass from "./UserClass";
 
class About extends React.Component{

  constructor(props){
    super(props);

    //console.log("parent constuctor")
  }

  componentDidMount(){

    //console.log("parent componentDidMount");

  }

  render(){
   // console.log("parent Render");
    return(
      <div>
        <h1>this is about us page</h1>
        
        <UserClass name = {"First"}/>
       
      </div>
    )
  }

  
  }




export default About;