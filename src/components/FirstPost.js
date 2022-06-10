import camera from "../Images/nature.jpg";
import { Name, Time, Post, Ferari, Heart, Scroll } from "./Styled";
import ferari from "../Images/ferari.jpg";
import romantic from "../Images/romantic.jpg";
import { FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import Comments from "./Comments";
import Notepad from "../context/Notepad";
import Anime from "../Images/cuteAnime.jpg";
import Honda from "../Images/honda.jpg";
import Ice from "../Images/ice.jpg";
export default function FirstPost() {
  const a = useContext(Notepad);

  const [color, setcolor] = useState(true);

  const heart = () => {
    setcolor((prevstate) => !prevstate);
  };

  const [read, setread] = useState(false);

  const reads = () => setread((prevstate) => !prevstate);

  return (
    <div>
      <Post style={{ background: a === false ? "#151111" : "white" }}>
        <Scroll src={camera} />
        <Name style={{ color: a === false ? "white" : "black" }}>Willam</Name>
        <Time>Post {new Date().getMinutes()} Min Ago</Time>
        <div>
          <p style={{ color: a === false ? "white" : "black" }}>
            Ferrari has a rich racing history and is a well known premium
            automobile brand.
            {read === false
              ? null
              : " The fastest street Ferrari is the F50 GT1, which can go over 370 kph (about 222 mph). The most powerful Ferrari is the FXX, which has about 800 horsepower."}
          </p>
          <p
            style={{ color: a === false ? "white" : "black" }}
            type="button"
            onClick={reads}
          >
            {read === true ? "...See Less" : "...See More"}
          </p>
          <Ferari src={ferari} />
          <Heart onClick={heart}>
            {" "}
            <FaHeart color={color === true ? "black" : "red"} />
          </Heart>
          <hr></hr>
          <Comments />
        </div>
      </Post>
      <Post style={{ background: a === false ? "#151111" : "white" }}>
        <Scroll src={camera} />
        <Name style={{ color: a === false ? "white" : "black" }}>Willam</Name>
        <Time>Post {new Date().getMinutes()} Min Ago</Time>
        <div>
          <p style={{ color: a === false ? "white" : "black" }}>
            Anime and Manga According to Stewart (2013), "Japanese culture is
            becoming increasingly popular within Western society”, particularly
            anime, cosplay and games. In the comic world of Japan, comic books
            are called manga, and anime means that animation cartoon
          </p>
          <Ferari src={romantic} />
          <Heart onClick={heart}>
            {" "}
            <FaHeart color={color === true ? "black" : "red"} />
          </Heart>
          <hr></hr>
          <Comments />
        </div>
      </Post>

      <Post style={{ background: a === false ? "#151111" : "white" }}>
        <Scroll src={camera} />
        <Name style={{ color: a === false ? "white" : "black" }}>Willam</Name>
        <Time>Post {new Date().getMinutes()} Min Ago</Time>
        <div>
          <p style={{ color: a === false ? "white" : "black" }}>
            Anime and Manga According to Stewart (2013), "Japanese culture is
            becoming increasingly popular within Western society”, particularly
            anime, cosplay and games. In the comic world of Japan, comic books
            are called manga, and anime means that animation cartoon
          </p>
          <Ferari src={Anime} />
          <Heart onClick={heart}>
            {" "}
            <FaHeart color={color === true ? "black" : "red"} />
          </Heart>
          <hr></hr>
          <Comments />
        </div>
      </Post>

      <Post style={{ background: a === false ? "#151111" : "white" }}>
        <Scroll src={camera} />
        <Name style={{ color: a === false ? "white" : "black" }}>Willam</Name>
        <Time>Post {new Date().getMinutes()} Min Ago</Time>
        <div>
          <p style={{ color: a === false ? "white" : "black" }}>
            Repsol, S.A. (Repsol) is an integrated energy company. The Company's
            segments include Upstream, Downstream, and Corporation and others
          </p>
          <Ferari src={Honda} />
          <Heart onClick={heart}>
            {" "}
            <FaHeart color={color === true ? "black" : "red"} />
          </Heart>
          <hr></hr>
          <Comments />
        </div>
      </Post>

      <Post style={{ background: a === false ? "#151111" : "white" }}>
        <Scroll src={camera} />
        <Name style={{ color: a === false ? "white" : "black" }}>Willam</Name>
        <Time>Post {new Date().getMinutes()} Min Ago</Time>
        <div>
          <p style={{ color: a === false ? "white" : "black" }}>
            Ice Mountain is a mountain ridge and algific talus slope[4] that is
            part of a 149-acre (60 ha) preserve near the community of North
            River Mills in Hampshire County, West Virginia, United States. It
            was designated a National Natural Landmark in 2012
          </p>
          <Ferari src={Ice} />
          <Heart onClick={heart}>
            {" "}
            <FaHeart color={color === true ? "black" : "red"} />
          </Heart>
          <hr></hr>
          <Comments />
        </div>
      </Post>
    </div>
  );
}
