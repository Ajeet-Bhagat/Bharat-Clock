import { useEffect, useState } from "react";

function DatenTime() {
  // let time = new Date();

    const [time, settime] = useState(new Date());

    useEffect(()=>{
      const intervalID = setInterval(()=>{
        settime(new Date());

      },1000);
      return ()=>{
        clearInterval(intervalID);
      }
    },[]);
  return (
    <h3>
      This is the Current time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </h3>
  );
}

export default DatenTime;
