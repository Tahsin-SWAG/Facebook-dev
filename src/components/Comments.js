import { useState } from 'react';
import {RiSendPlane2Fill} from 'react-icons/ri'
import { Comment } from './Styled';
import cock from '../Images/cock.jpg';
import { Coma , Cobg , Cock , Opinion} from './Styled';
import People from './People';
import {MdDelete} from 'react-icons/md';
import { Splice } from './Styled';
import { useAuth } from './Firebase';
export default function Comments(){

    const [comment , setcomment] = useState([])

    const [input , setinput] = useState('')


    const add = () => {
       const add = [...comment];add.push(input)
       setcomment(add)
    }

    const changleable = (event) => {
       setinput(event.target.value)
    }

    const Delet = (index) => {
        const delet = [...comment];
        delet.find((element) => element === index.id)
         delet.splice(index ,1)
        setcomment(delet)
    }
 

    return(
        <Coma> 
          <div>
              {comment.map((index , y) => (
                  <Cobg key={index}>
                        <Cock src={cock}/>
                        <Opinion>{index}</Opinion>
                        <Splice onClick={() =>Delet(y)}><MdDelete style={{color:'red'}}/></Splice>
                  </Cobg>
              ))}
          </div>
          <People/>
          <Comment onChange={changleable} placeholder="What't Your Comment?"></Comment>
          <button style={{fontSize:'17px'}} onClick={add} disabled={input.length == 0 ? true : false}><RiSendPlane2Fill color={input == 0 ? 'black' : '#1245c5'}/></button>
        </Coma>
    )
}