import { useState } from "react";
import "../assets/scss/form.scss";

export const Form = ()=> {

  const [addText, setAddText] = useState<string>("");

  
  const handleAddText = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAddText(e.target.value)  
  };
  
  const resetForm = () => {
    setAddText("")    
  };
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if(addText) {
      const newTextForm = addText
      console.log(newTextForm)
    }
    resetForm()
  };
  return(
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
  )
}