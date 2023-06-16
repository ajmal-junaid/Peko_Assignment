import { useEffect, useState } from "react";
import TopBar from "../components/Home/TopBar";
import Body from "../components/Passbook/Body";
import Header from "../components/Passbook/Header";
import io from "socket.io-client";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const Passbook = () => {
  const token = Cookies.get("token");
  const [id, setId] = useState(jwt_decode(token).mobile);
  const socket = io.connect("http://localhost:4000",{
    extraHeaders: {
      'Cookie': `token=${token}` 
    }
  });
  // const socket = io.connect("wss://www.eaglone.online");
  useEffect(() => {
    if (token) {
      const user = jwt_decode(token);
      setId(user.mobile);
    }
    socket.emit("join_room", id);
  }, []);
  return (
    <>
      <TopBar />
      <Header />
      <Body socket={socket} mobile={id}/>
    </>
  );
};

export default Passbook;
