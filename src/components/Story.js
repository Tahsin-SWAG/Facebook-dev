import classes from '../Styles/Story.module.css'
import cartoon from '../Images/cartoon.jpg'
import Moon from '../Images/anime.jpg';
import dog from '../Images/baby.jpg'
import ocean from '../Images/anime.jpg'
import red from '../Images/red.jpg'
import rose from '../Images/rose.jpg'
import happy from '../Images/happy.jpg'
import cool from '../Images/cool.jpg'
import '../Styles/global.css'
import jack from '../Images/jack.jpg'
import cauple from '../Images/couple.jpg'
import { Stor } from './Styled';
export default function Story(){

     const style = {
          width: '32px',
          height: '30px',
          borderRadius: '20px',
          marginLeft: '102px',
          marginTop: '13px',
          border: '4px solid #406ecf'
     }

     const story = {
     width: '33px',
    height: '32px',
    marginTop: '13px',
    marginLeft:'-43rem',
    borderRadius: '20px',
    border: '4px solid #406ecf',}


    return(
     <div className={classes.cartoon}>
    
     <Stor alt='' src={cartoon}/>
     <Stor alt='' src={Moon} />
     <Stor alt='' src={dog} />
     <Stor alt='' src={ocean} />
     <Stor alt='' src={red} />

    <img alt='' src={rose} style={story}/> 
    <img alt='' src={happy} style={style}/> 
    <img alt='' src={cool} style={style}/>
    <img alt='' src={jack} style={style}/>
    <img src={cauple} style={style} alt=''/>
     </div>
    )
}