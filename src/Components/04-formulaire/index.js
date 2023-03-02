import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  let Duser;
  let Dpass;
  const send = (e) => {
    if(user.length > 3 && pass.length > 3){
      localStorage.clear()
      localStorage.setItem("sudo",user)
      localStorage.setItem("pass",pass)
      Duser = localStorage.getItem("sudo")
      Dpass = localStorage.getItem("pass")
      if(user !== ""){
        document.querySelector("#result").innerHTML += `<h2>sudo : ${Duser}</h2>` 
      }
      if(pass !== ""){
        document.querySelector("#result").innerHTML += `<h2>mdp : ${Dpass}</h2>` 
      }
    } else {
      e.preventDefault()
      console.log("sudo trop court");
    }
  }
  
  return (
    <>
    <h1>Formulaire !</h1>
      <form onSubmit={send}>
        <div><label htmlFor="sudo">sudo : </label><input type="text" onChange={(e)=> setUser(e.target.value)} name="sudo" id="sudo" /></div>
        <div><label htmlFor="password">password : </label><input type="password" onChange={(e)=> setPass(e.target.value)} name="password" id="password" /></div>
        <button action="Submit">Envoyer</button>
      </form>
      <div id='result'></div>
      {user.length >= 3 && <><p>{user}</p></>}
      {pass.length >= 3 && <><p>{pass}</p></>}
    </>
  );
};

export default Form;