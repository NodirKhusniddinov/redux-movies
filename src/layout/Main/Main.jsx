import React from "react";
import "./main.css";
import {Movies} from "../../components/Movies/Movies";
import {Comments} from "../../components/Comments/Comments";
function Main(){
 return <main>
  <Movies/>
  <Comments/>
 </main>
 }
 export {Main}