import React, { useState, useEffect } from "react";

const Price = () => {
  const [prixA, setPrixA] = useState(45) ;
  const [prixB, setPrixB] = useState(69) ;

  useEffect(() => {
    prixA <= 10 && alert(`Prix A : ${prixA}`)
  },[prixA])
  
  return (
    <>
      <p>Prix A : {prixA}</p>
      <p>Prix B : {prixB}</p>
      <button onClick={() => setPrixA(prixA+5)}>Augmenter A</button>
      <button onClick={() => setPrixA(prixA-5)}>Diminuer A</button><br />
      <button onClick={() => setPrixB(prixB+5)}>Augmenter B</button>
      <button onClick={() => setPrixB(prixB-5)}>Diminuer B</button>
    </>
  );
};

export default Price;