import { logDOM } from "@testing-library/react";
import Button2 from "../Buttons/Button 2";
import "./Skills.css";
export default function Error() {    
    return <div className="skills" 
    style= {{padding:"22.55rem",
    textAlign:"center"}}>
    <h1>COMING SOON</h1>
    <Button2 type="button" onClick={()=>{
    window.location.href="#/"
    }} text="GO BACK">
    </Button2>
    </div>
}