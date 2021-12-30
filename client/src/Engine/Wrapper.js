import {Consumer} from "./Context"
import React from "react";

const Wrapper=(Methods)=>(WrappedComponent)=>{
  return (props)=>{
    return (
        <Consumer>
          (methods)=>{
      <WrappedComponent {...Methods} {...methods} {...props}/>
    }
    </Consumer>)
  }
}
export default Wrapper;