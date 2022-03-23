import React from "react";
import Checkout from "../checkout/Checkout";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

function LoginPages(){
    let history = useHistory();
    return(
        <div>
            <input name="user" type="text" placeholder="Username" />
            <input name="pw" type="text" placeholder="Password" />
            <button onClick={() => {
                history.push("/checkout");
            }}
            >Login</button>
        </div>
    );
}


export default LoginPages;