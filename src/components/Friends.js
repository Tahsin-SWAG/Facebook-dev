import { useState } from 'react';
import Anime from '../Images/Anime1.jpg';
import { Butto} from './Styled';
import Header from './Header';
import Leftbar from './Leftbar';

export default function Friends(){


  const [first , setfrist] = useState(false)

  const [secend ,setsecend] = useState(false)


  const cngfirst = () => {
    setfrist((p) => !p)
  }

  const cngsecend = () => {
    setsecend((p) => !p)
  }

 


return(
      <div>
         <Header/>
  <Leftbar/>
   <div style={{width:'100%'}}>
     <div > 
      <img src={Anime} style={{width:'16rem' ,  borderRadius:'10px'}}/>
      <Butto onClick={cngfirst} style={{display:'flex' , marginTop: '-4px'}}>{first === false ? 'Confirm' : 'friend'}</Butto>
     </div>
    
    
     <div style={{marginTop:'3rem'}}> 
      <img src={Anime} style={{width:'16rem' ,  borderRadius:'10px'}}/>
      <Butto onClick={cngsecend} style={{display:'flex' , marginTop: '-4px'}}>{secend === false ? 'Confirm' : 'Friend'}</Butto>
     </div>
     
     
     <div style={{marginTop:'3rem'}}> 
      <img src={Anime} style={{width:'16rem' ,  borderRadius:'10px'}}/>
      <Butto style={{display:'flex' , marginTop: '-4px'}}>Confirm</Butto>
     </div>
     
     
     <div style={{marginTop:'3rem'}}> 
      <img src={Anime} style={{width:'16rem' ,  borderRadius:'10px'}}/>
      <Butto style={{display:'flex' , marginTop: '-4px'}}>Confirm</Butto>
     </div>
</div>
</div>
  )
}