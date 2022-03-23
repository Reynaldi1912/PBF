import React from "react";
import { Redirect , Route , useHistory } from "react-router-dom";
import List from "../List"
function Checkout({ authorized }){
    if (!authorized) {
        return <Redirect to="/login" />;
    }else{
        authorized = true;
    }
    return(
        <div>
             <button onClick={() => {
                useHistory.push("/");
            }}
            >Log Out</button>
            <br/>
            Anda Berhasil Login , Lanjutkan Belanja Anda
            <List />
            
        </div>
    );
}

export default Checkout;