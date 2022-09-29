
// export const InputText = ({ label, ...props }) => { 
//     return (
//         <div className="inputText">
//             <label>{label}</label>
//             <input {...props} />
//         </div>  
//     )
// }
import "./StickyNote.css";
let data = {
    title: "Sticky Note",
    description: "A sticky note component",
}

const changeText = (e) => {
    document.querySelector(".inputText").placeholder = e.target.value;
    
}

document.getElementsByClassName("inputText").keyup = ()=> {
    
};



export const InputText = ({ title,text }) => { 
    return (
        <div className="inputText">
    
           {"helllo"} <input onChange={changeText} placeholder="Test Me" name="HELLO WORLD"/>
           
        </div>  
    )
}

export const StickyNote=({})=>{
    return <div className="sticky-note">
      <InputText/>
    </div>
}