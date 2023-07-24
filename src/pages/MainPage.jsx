import React from "react";
import myPic from "../assets/myPic.jpg"

function MainPage() {
  return (
    <section>
      <h1>Hello, World</h1>

      <img src={myPic} alt="foto de Helton"/>
    </section>
  )
}

export default MainPage