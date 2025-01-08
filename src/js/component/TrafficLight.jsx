import React, { useState } from "react";
import ReactDOM from "react-dom";

const TrafficLight =()=>{
  const activo=()=>{
    if(color == "red"){
      return("active")
    }if(color === "yellow"){
      return('active')
    }else{
      return("")
    }
  }

const [ color, setColor ] = useState("");


return(
    <>
      <div className="contenedor">
        <div className="palo"></div>
        <div className="semaforo">
        <button
            className={`light red ${color === "red" ? "active" : ""}`}
            onClick={() => setColor("red")}
          ></button>
          <button
            className={`light yellow ${color === "yellow" ? "active" : ""}`}
            onClick={() => setColor("yellow")}
          ></button>
          <button
            className={`light green ${color === "green" ? "active" : ""}`}
            onClick={() => setColor("green")}
          ></button>
        </div>
      </div>
    </>
);
};

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<TrafficLight />);
export default TrafficLight 
