import { InfoTexts } from "../types/app";
import "../assets/scss/list.scss";

export const List = ({ dataText } : InfoTexts) => {
  return (   
          
    <li >{ dataText }    
    <button className="button button__edit">Edit</button>
    <button className="button button__delete">Delete</button>
    </li> 
   
    
  )
}