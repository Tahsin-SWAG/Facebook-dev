import Header from "./Header";
import Leftbar from "./Leftbar";
import { Grouptext1 } from "./Styled";

export default function Groups(){

  const width = window.innerWidth;

    return(
        <div style={{width:width < 600 ? '30rem' : '84rem' ,height:'60rem'}}>
  <Header/>
  <Leftbar/>
 <div >
      <Grouptext1>Nothing to see in group....</Grouptext1>
   </div>
  </div>
    )
}