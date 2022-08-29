import styled from "styled-components";
import { useState } from "react";
import LookingForAMatch from "../pages/components/lookingForAMatch.js";
import Matched from "../pages/components/matched.js";


export default function MatchPage() {

    const [matched, setMatched] = useState(true);
    return <>
        {!matched ? <LookingForAMatch></LookingForAMatch> : <> <Matched></Matched></>
        }
    </>
}