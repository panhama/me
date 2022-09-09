import React from "react";
import "./ContactMe.css";
import "tailwindcss/tailwind.css";
import Button2 from "../Buttons/Button 2";   

const dropdown = {value:"Building Websites",label:"Building Websites"}

export default function Contact() {
  const [thankYou, setThankyou] = React.useState(false);
  
  const handleSubmit = (e) => { 
    e.preventDefault();
    setThankyou(true);
  }
  function Thanks(params) {
    return(
      <div className="Dot" style={{paddingTop:"15rem"}}>
      <h2 style={{textAlign:"center"}}> THANK YOU </h2> 
      </div>
    )
  }

  const ContactMe = () => {
    return ( <div className="Dot" style={{paddingTop:"7rem"}}>
          <form className="w-full max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                YOUR NAME
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                E-mail
              </label>
              {/* <select value={dropdown}/> */}
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Message
              </label>
              <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
            </div>
          </div>
          
          <div className="md:flex md:items-center">
          <div className="md:w-4/3">
          <Button2 text="Let's Connect" onClick={handleSubmit}>
          </Button2>
            </div>
          </div>
  
        </form>
        </div>);
  }
  
      return ( <div>
   {thankYou ? <Thanks/> : <ContactMe/>} 
      </div>
      ); }   
