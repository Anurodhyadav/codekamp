import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import LookingForAMatch from "../components/lookingForAMatch";
import Matched from "../components/matched";
import { useRouter } from 'next/router'

let socket;

export default function MatchPage() {
  const [matched, setMatched] = useState(false);
  const [opponent, setopponentName] = useState("");
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState("")


  const socketInitializer = async () => {
    await fetch("api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connection established");
    });

    socket.on('set-match', (matchedDetails) => {
      const currentUserInfo = JSON.parse(localStorage.getItem('nickname'))
      if (matchedDetails.user === currentUserInfo.name) {
        setMatched(true);
        if (!opponent) {
          setopponentName(matchedDetails.login_user);
        }
        clearInterval(timer);
      }
     
    })

    socket.on("broadcast-user", (user) => {
      if (user !== localStorage.getItem("nickname")) {
        setMatched(true);
        setopponentName(user);
        clearInterval(timer);
        const userInfo = JSON.parse(user)
        const userName = userInfo.name;
        const matchedDetails = {
          user: userName,
          login_user: localStorage.getItem("nickname"),
          matched_done: true
        }
        socket.emit("match-found",matchedDetails );
      }
    });
    var timer = setInterval(() => {
      console.log('matched value', matched)
      socket.emit("user-online", localStorage.getItem("nickname"));
    },1000)
  };

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('nickname'))?.name;
    if (!localUser) {
      router.push("/")
    }
    setCurrentUser(localUser)
    socketInitializer();

    // return () => clearInterval(timer)
  }, [matched]);

  useEffect(() => {
    const exitingFunction = () => {
      localStorage.clear();
    };
  
    router.events.on('routeChangeStart', exitingFunction );

    return () => {
        router.events.off('routeChangeStart', exitingFunction);
    };
}, []);
  return (
    <>
      {!matched ? (
        <LookingForAMatch></LookingForAMatch>
      ) : (
        <>
          <Matched currentUser = {currentUser}  opponent={opponent}></Matched>
        </>
      )}
    </>
  );
}
