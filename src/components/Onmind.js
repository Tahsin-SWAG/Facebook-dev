import red from "../Images/animeBoy.jpg";
import { SiFacebooklive } from "react-icons/si";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { useContext, useState } from "react";
import FirstPost from "./FirstPost";
import "../Styles/global.css";
import { Profile, Onput , Post , Alan , Users , Title , Deletbutton} from "./Styled";
import Notepad from "../context/Notepad";
import { AiTwotoneDelete } from "react-icons/ai";
import Leftbar from "./Leftbar";
import Header from "./Header";
import { useAuth } from "./Firebase";
import Animate from "./Animate";
import Comments from "./Comments";
export default function Onmind() {


  const [state, setstate] = useState("");

  const currentuser = useAuth();

  const a = useContext(Notepad);

  const inputvalue = (e) => {
    setstate(e.target.value);
  };

  const [store, setstore] = useState([]);

 
  const post = () => {
    const tasif = [...store];tasif.push(state)
    setstore(tasif);
    return post;
  };

  // eslint-disable-next-line
  if (store.length == 7) {
    alert("Don't Post Too Much");
  }


  const delet = (index) => {
    const arr = [...store];
    arr.find((element) => element === index.id)
      arr.splice(index , 1)
    setstore(arr)
  };


  const width = window.innerWidth;

  return (
    <div>
      <Header />
      <Leftbar />
      <Animate />
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginLeft: width < 600 ? "0px" : "130px",
            marginTop: "17px",
          }}
        >
          <Profile src={red} style={{ marginTop: "5px" }} />
          <Onput onChange={inputvalue} placeholder="What's on your mind?" />
          <hr style={{ marginTop: "20px" }}></hr>
          <SiFacebooklive style={{ fontSize: "39px", color: "red" }} />
          <IoMdPhotos
            type="file"
            style={{ marginLeft: "195px", fontSize: "39px", color: "green" }}
          />
          <BsEmojiSmile
            style={{ marginLeft: "140px", fontSize: "39px", color: "yellow" }}
          />

          <div style={{ width: "300px" }}>
            <h2 style={{ color: a === false ? "white" : "black" , textAlign:'center' , marginLeft:'11rem'}}>
              Your post
            </h2>
            <p style={{ color: a === false ? "white" : "black"  , textAlign:'center' , marginLeft:'11rem' }}>
              your Post : {store.length}
            </p>
            <button
              onClick={post}
              disabled={
                state == 0 ? true : false 
              }
              style={{textAlign:'center' , marginLeft:'14rem' }}
            >
             Post
            </button>
            <div>
              {store.map((user , index) => (
                <Post key={user.id}>
                  <Alan src={red}/>
                  <Title>{currentuser?.displayName || 'Hex'}</Title>
                  <Users>{user}</Users>  
                 <Deletbutton>
                 <AiTwotoneDelete onClick={() => delet(index)}>Delet</AiTwotoneDelete>
                 </Deletbutton>
                  <hr></hr>
                  <Comments/>
                </Post>
              ))}
            </div>
            <hr style={{ width: "30rem" }}></hr>
            <div>
              <FirstPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 }
