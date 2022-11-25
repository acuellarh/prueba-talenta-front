import { useEffect, useState } from "react";
import "../assets/scss/form.scss";
import Swal from "sweetalert2";
import formService from "../services/formService";
import { InfoTexts } from "../types/app";
import { List } from "./List";

export const Form = ( )=> {

  const [addText, setAddText] = useState<string>("");
  const [dataApi, setDataApi] = useState<Array<InfoTexts>>([]);
  
  const handleAddText = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAddText(e.target.value)  
  };
  
  const resetForm = () => {
    setAddText("")   
  };
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(addText.length < 6) {
      return Swal.fire({
        icon: "info",
        title: "El texto debe tener mas de 6 caracteres"
      })
    }
    
    createText()   
      
    resetForm();
  };

  const createText = async()=>{ 

    const newObjectText = {
      dataText: addText
    }    
    const response = await formService.create(newObjectText)
    const { status } = response
    if( status === 200) {
      getData()
    }    
  };

  const getData = async() => {
    const { data } = await formService.getAll()
    setDataApi(data) 
    console.log(data)    
  };
  
  useEffect(() => {
    getData()
  }, []);
  
  
  return(
    <>
      <section className="form">
        <h1 className="form__title">Ingresa un Texto</h1>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <textarea
              className="form__textarea"          
              name="addText"            
              value={addText}
              placeholder="Ingresa un texto"
              onChange={handleAddText}           
            />
          </div>
            <button className="form__button" type="submit">
            Enviar
            </button>
        </form>
      </section>
      <section className="form__list">
        <h2 className="form__title">Listado de textos</h2>
          <ul className="form__ul">
            {
              dataApi?.map(( { id, dataText } )=> {
                return (
                  <List
                    key={id}
                    dataText={dataText}                                                                                          
                  />    
                )
              })
            }
          </ul>
      </section>
    </> 
  )
}