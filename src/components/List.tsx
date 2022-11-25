import { InfoTexts } from "../types/app";
import "../assets/scss/list.scss";

export const List = ({ dataText} : InfoTexts )=> { 

  return (           
    <li>{ dataText }</li>    
  )
}