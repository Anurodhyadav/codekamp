import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import LookingForAMatch from "../components/lookingForAMatch";
import Matched from "../components/matched";

// export default function MatchPage() {
//   const [matched, setMatched] = useState(true);

//   import { useState, useEffect } from "react";
// import LookingForAMatch from "../pages/components/lookingForAMatch.js";
// import Matched from "../pages/components/matched.js";
// import { io } from "socket.io-client";

let socket;

export default function MatchPage() {
    const [matched, setMatched] = useState(false);

  useEffect(() => {
    socketInitializer();
  }, []);
    
    

 

  const socketInitializer = async () => {
    await fetch("api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("hello here");
    });
      socket.on("broadcast-user", (user) => {
        if (user !== localStorage.getItem('nickname')) {
            setMatched(true);
     }
    });
      const FindOnlineUser = () => {
        socket.emit("user-online", localStorage.getItem("nickname"));
    }
   
      setInterval(FindOnlineUser, 1000);
  };

  return (
    <>
      {!matched? (
        <LookingForAMatch></LookingForAMatch>
      ) : (
        <>
          <Matched></Matched>
        </>
      )}
    </>
  );
}
