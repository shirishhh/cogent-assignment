import React  from "react";
import {  Outlet } from "react-router-dom";


const Content=()=>{
    return(
        <main style={{marginLeft:'220px'}}>
          <Outlet/>
        </main>
    )
}
export default Content;