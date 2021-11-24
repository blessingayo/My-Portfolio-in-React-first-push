import React, {useState} from "react";
import Nav_Bar from "./Nav_Bar";
import Welcome from "./Welcome";
import Logo from "./Logo";
import Image from "./Image";
import Line from "./Line";
import Button from "./Button";
import AboutMe from "./AboutMe";

const App = () => {
  const [hover, setHover] = useState(false);

  return (
    <div>
      

      <Nav_Bar />

      <Welcome />
      <Line />
    
      <div style={{ display: 'flex',width: '40%', justifyContent: 'space-between', fontSize: "larger"}}>
      <Button onMouseOver={() => setHover(!hover)} type={hover ? 'btn2' : 'btn1' } first="R" second="esume"/>
      <Button onMouseOver={() => setHover(!hover)} type={hover ? 'btn1' : 'btn2' } first="my" second="Projects"/>
      </div>
      {/* <Button type='btn2' first="R" second="esume"/>
      <Button type='btn1' first="my" second="Projects"/> */}
      
      <Image />

      <AboutMe />
    </div>
  );
};

export default App;
