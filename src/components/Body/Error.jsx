import { logDOM } from "@testing-library/react";
import Button2 from "../Buttons/Button 2";
import "./Skills.css";

export default function Error() {    
    return <div className="skills" 
    style={{padding:"23rem",height:"100vh",
    textAlign:"center",fontFamily:"TESLA"}}>
    <h1>IT'S NOT QUITE READY YET BUT IF YOU WANT A SNEAK PEAK YOU CAN CLICK THE BOTTOM BUTTON</h1>
    <Button2 type="button" onClick={()=>{
    window.location.href="#/beta"
    }} text="TAKE ME THERE" >
    </Button2>
    </div>
}