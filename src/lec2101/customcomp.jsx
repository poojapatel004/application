import { useState } from "react";
import UserComp1 from "./cleanup";

const ShowHideUser=({show})=>
    (show ? <UserComp1 /> : null);

function Conditional() {
    const [show, setShow] = useState(false);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                {show ? "Hide User" : "Show User"}
            </button>
            <ShowHideUser show={show}/>
        </div>
    );
}
export default Conditional;
