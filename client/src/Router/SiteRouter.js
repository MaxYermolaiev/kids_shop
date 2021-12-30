import React from "react";
import * as Pages from "./../Pages"
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

function SiteRouter(credentials){

  if(credentials==="user"){
    return (
        <>user</>
    );
  }
  if(credentials==="admin"){
    return (
        <>admin</>
    );
  }

    return (
       <>guest</>
    );
}

export default SiteRouter;
