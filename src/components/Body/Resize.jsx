import {React,useState, useEffect} from "react";

export default function ResizeWidth() {
    
const [windowWidth,setWindowWidth] = useState( window.innerWidth);
const [windowHeight,setWindowHeight] = useState(window.innerHeight);
const handleResize = ()=> {
 setWindowWidth(window.innerWidth);
 setWindowHeight(window.innerHeight);
}

useEffect(()=> {
    window.addEventListener("resize",handleResize)
    },[])
return <div className="card-test">
   <h3> The width is {windowWidth} in pixels and {windowWidth/16} in rem</h3> 
    <h3> The height is {windowHeight} in pixels and {windowHeight/16} in rem</h3> 
   
</div>

}