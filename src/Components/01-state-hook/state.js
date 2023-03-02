import React, { useState } from "react";

function State(){
  const [title, setTitle] = useState("Bonchoir")
  const [compteur, setCompteur] = useState(0)
  const [fruit, setFruit] = useState(["pomme","banane","ananas","poire","grenade","papaye"])
  const [user, setUser] = useState({prenom: "Eliakim", age: 34})

  return(
    <>
    <h1>{title}</h1>
    <p>counter : {compteur}</p>
    <p>fruit : {fruit[compteur]}</p>
    <p>user : {user.prenom}</p>
    <button onClick={()=>setTitle("Bonchoir")}>Bonsoir</button>
    <button onClick={()=>setTitle("Bonchour")}>Bonjour</button>
    <button onClick={()=>setCompteur(compteur+1)}>COUNTER !!!</button>
    <button onClick={()=>setCompteur(compteur-1)}>DOWN ...</button>
    <button onClick={()=>setCompteur(4)}>GRENADE !</button>
    </>
  )
}
export default State;