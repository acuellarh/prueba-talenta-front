//import { useEffect, useState } from "react";
import { Form } from "./components/Form";


//import formService from "./services/formService";

function App() {

  // const [dataApi, setDataApi] = useState<Array<InfoTexts>>([]);

  // const createText = async()=>{ 
  //   const newObjectText = {
  //     dataText: addText
  //   }
    
  //   const response = await formService.create(newObjectText)
  //   const { status } = response
  //   if( status === 200) {
  //     getData()
  //   }    
  // };

  // const getData = async() => {
  //   const { data } = await formService.getAll()
  //   setDataApi(data) 
  //   console.log(data)    
  // };
  
  // useEffect(() => {
  //   getData()
  // }, []);
  

   return (
    <div>
      {/* <Form createText={createText} /> */}
      <Form />         
    </div>
  );
}

export default App;
