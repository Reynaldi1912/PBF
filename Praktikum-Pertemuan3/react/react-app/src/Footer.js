import React from 'react';// Component menggunakan Function
const Footer = (props) => {
    return (
    <div>
      <center>
        <h5>ini adalah halaman Footer {props.judul} nama saya { props.nama }</h5>
      </center>
    </div>
    );
}
export default Footer;
