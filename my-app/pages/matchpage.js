import styled from "styled-components";
import { useState } from "react";
import LookingForAMatch from "../components/lookingForAMatch";
import Matched from "../components/matched";

export default function MatchPage() {
  const [matched, setMatched] = useState(true);
  return (
    <>
      {!matched ? (
        <LookingForAMatch></LookingForAMatch>
      ) : (
        <>
          {" "}
          <Matched></Matched>
        </>
      )}
    </>
  );
}
