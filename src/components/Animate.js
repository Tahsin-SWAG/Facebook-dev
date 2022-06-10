import { motion } from "framer-motion/dist/framer-motion";
import { useEffect, useRef, useState } from "react";
import { BigItem, StoryPicture } from "./Styled";
import Images from '../Images/Images1.jpg';
import Images2 from "../Images/Images2.jpg";
import Images3 from "../Images/Images3.jpg";
import Images4 from "../Images/Images4.jpg";
import Images5 from "../Images/Images5.jpg";
export default function () {

const [width , setwidth] = useState(0)

const carusoul = useRef()

  useEffect(() => {
      console.log(carusoul.current)
  } ,[])

  const widt = window.innerWidth;

  return (
    <BigItem ref={carusoul} style={{overflow:widt < 600 ? 'hidden' : 'none'}}>
      <motion.div
        style={{ width: "9rem", height: "11rem", display: "flex" }}
        drag="x"
        dragConstraints={{ right: 0 , left:-330}}
      >
       <StoryPicture src={Images}/> 
       <StoryPicture src={Images2}/> 
       <StoryPicture src={Images3}/> 
       <StoryPicture src={Images4}/> 
       <StoryPicture src={Images5}/> 
      </motion.div>
    </BigItem>
  );
}
