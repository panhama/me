import {motion} from "framer-motion";
import {useState} from "react";
import '../Buttons/CardStack.css';

function CardStack({ Component, pageProps }) { 
  const [isOpen,setIsOpen] = useState(false);
  return(
    <div className="App"> 
      <motion.div  transition={{layout:{duration:1, type:"spring"}}
       } layout onClick={()=>setIsOpen(!isOpen)} className="card" style={{borderRadius: "2rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>
      <motion.h3 layout="position">PRICING OPTIONS</motion.h3>
      {isOpen && ( 
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="expand">
        <p style={{paddingTop: "7px"}}>Email:Panhama@live.com</p>
        <p>Phone: 6825212106</p>
      </motion.div>
      )}
      </motion.div>
    </div>

  )
}

export default CardStack;