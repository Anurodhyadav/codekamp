import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import LookingForAMatch from "../components/lookingForAMatch";
import Matched from "../components/matched";
import { useRouter } from "next/router";

let socket;

export default function MatchPage() {
  const [matched, setMatched] = useState(false);
  const [opponent, setopponentName] = useState("");

  const router = useRouter();

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connection established");
    });

    socket.on("broadcast-user", (user) => {
      if (user !== localStorage.getItem("nickname")) {
        setMatched(true);
        setopponentName(user);
      }
    });

    const FindOnlineUser = () => {
      socket.emit("user-online", localStorage.getItem("nickname"));
    };

    setInterval(FindOnlineUser, 1000);
  };

  return (
    <>
      {!matched ? (
        <LookingForAMatch></LookingForAMatch>
      ) : (
        <>
          <Matched opponent={opponent}></Matched>
        </>
      )}
    </>
  );
}
