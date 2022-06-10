import camera from '../Images/nature.jpg';
import { Cock , Opinion } from './Styled';
import { Peopl } from './Styled';

export default function People(){
    return(
        <Peopl>
            <Cock src={camera}/>
            <Opinion style={{color:'white'}}>Looking Good</Opinion>
        </Peopl>
    )
}