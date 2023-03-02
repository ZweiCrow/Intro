import React, {useState, props} from 'react';

const Heros = () => {
  const [personage, setPersonage] = useState("denji")
  return (
    <>
      <HeroInfos
      personage = {personage}
      age = {16}
      />
    </>
  );
};

const HeroInfos = (props) => {
  const {personage, age} = props
  return (
    <>
      {personage}
      {age}
    </>
  );
};


const HeroInfos2 = (personage, age) => {
  return (
    <>
      {personage}
      {age}
    </>
  );
};

export default Heros;



