import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const back = () => {
    console.log('zxc')
    axios.put('http://localhost:3003/users', {firstName: "Szymon",
    sureName: "Dawidowicz",
    email: "cykcykacz@gmail.com",
    phoneNumber: "7784701540",
    gender: "M",
    dateOfBirth: "28-09-1985",
    comments: "asdzxcfhvbn"}).then(res => console.log(res));
  };
  
  return <div><button onClick={back}>Backend</button></div>;
};

export default Registration;
