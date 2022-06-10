import { CgProfile } from "react-icons/cg";
import { FaUserFriends, FaPager } from "react-icons/fa";
import { BsYoutube, BsFlagFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { HiSave } from "react-icons/hi";
import { FaViruses } from "react-icons/fa";
import { RiHeart2Line } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { List } from "./Styled";
import Notepad from "../context/Notepad";
import { useContext, useState } from "react";

export default function Leftbar() {
  const a = useContext(Notepad);

  const [display, setdisplay] = useState(false);

  const width = window.innerWidth;

  return (
    <div
      style={{
        width: "300px",
        display: width < 600 ? "none" : "flex",
        float: "left",
        position: "sticky",
        top: 90,
        background: a === false ? "#1c1e21" : "white",
      }}
    >
      <ul style={{ listStyle: "none" }}>
        <List>
          <CgProfile
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "10px",
              color: "#4267b2",
            }}
          />
          <h3
            style={{
              marginTop: "16px",
              color: a === false ? "white" : "black",
              marginLeft: "5px",
            }}
          >
            Profile
          </h3>
        </List>
        <List style={{ marginTop: "50px" }}>
          <FaUserFriends
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "30",
              color: "#008fff",
            }}
          />
          <h3
            style={{
              marginLeft: "5px",
              marginTop: "40px",
              color: a === false ? "white" : "black",
            }}
          >
            Friends
          </h3>
        </List>
        <List style={{ marginTop: "50px" }}>
          <BsYoutube
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "30px",
              color: "red",
            }}
          />
          <h3
            style={{
              marginTop: "34px",
              marginLeft: "5px",
              color: a === false ? "white" : "black",
            }}
          >
            Youtube Watch
          </h3>
        </List>
        <List style={{ marginTop: "50px" }}>
          <MdGroups
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "30px",
              color: "cadetblue",
            }}
          />
          <h3
            style={{
              marginTop: "40px",
              color: a === false ? "white" : "black",
              marginLeft: "5px",
            }}
          >
            Groups
          </h3>
        </List>
        <List style={{ marginTop: "50px" }}>
          <HiSave
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "30px",
              color: "#a0a026",
            }}
          />
          <h3
            style={{
              marginTop: "40px",
              color: a === false ? "white" : "black",
              marginLeft: "5px",
            }}
          >
            Saved
          </h3>
        </List>
        <List style={{ marginTop: "50px" }}>
          <FaViruses
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "30px",
              color: "green",
            }}
          />
          <h3
            style={{
              marginTop: "40px",
              color: a === false ? "white" : "black",
              marginLeft: "5px",
            }}
          >
            Corona news
          </h3>
        </List>
        <List style={{ marginTop: "50px" }}>
          <RiHeart2Line
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "30px",
              color: "red",
            }}
          />
          <h3
            style={{
              marginTop: "40px",
              color: a === false ? "white" : "black",
              marginLeft: "5px",
            }}
          >
            Emotion
          </h3>
        </List>
        <List style={{ marginTop: "50px" }}>
          <BsFlagFill
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "30px",
              color: "orange",
            }}
          />
          <h3
            style={{
              marginTop: "30px",
              color: a === false ? "white" : "black",
              marginLeft: "5px",
            }}
          >
            Pages
          </h3>
        </List>
        <List style={{ marginTop: "50px" }}>
          <TiWeatherPartlySunny
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "30px",
              color: "orange",
            }}
          />
          <h3
            style={{
              marginTop: "37px",
              color: a === false ? "white" : "black",
              marginLeft: "5px",
            }}
          >
            Weather
          </h3>
        </List>
        <List style={{ marginTop: "50px" }}>
          <FaPager
            style={{
              fontSize: "40px",
              display: "block",
              marginTop: "10px",
              color: "GrayText",
            }}
          />
          <h3
            style={{
              marginTop: "20px",
              color: a === false ? "white" : "black",
              marginLeft: "5px",
            }}
          >
            News
          </h3>
        </List>
      </ul>
    </div>
  );
}
