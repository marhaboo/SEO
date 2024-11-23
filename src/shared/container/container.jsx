import { Children } from "react";

export default function Container({children}){
  return(
    <div className="mainContainer">
      {children}
    </div>
  )
}