import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";


function App() {

  const areas = [
    {
      nome: 'Mecânica',
      corFundo: '#ffe6e6',
      corBorda: '#ff0000',
    },

    {
      nome: 'Elétrica',
      corFundo: '#ffffcc',
      corBorda: '#ffff00',
    },

    {
      nome: 'Tecnologia da Informação',
      corFundo: '#ccffcc',
      corBorda: '#009900',
    },

    {
      nome: 'Alimentação',
      corFundo: '#ffe6cc',
      corBorda: '#ff9933',
    }
  ]

  const [professores, setProfessores] = useState([])

  function aoAdicionarProfessor(professor){

    //espalhando as informações no array
    setProfessores([...professores, professor])
    console.log(professor)
  }

  return (
    <div className="App">
     <Banner/>
     <Formulario
     times = {areas.map(area => area.nome)} 
     aoCadastrarProfessor={professor => aoAdicionarProfessor(professor)}
     />
     
     {areas.map(area => <Time 
     nome={area.nome} 
     background={area.corFundo} 
     corDaBorda={area.corBorda}
     cards={professores.filter(professor => professor.area === area.nome)}
     
     />)}
    </div>
  );
}

export default App;
