import './CampTexto.css'
import { useState } from 'react'


function CampoTexto(props){

    /* let valor = " " */

    /* const [valor, setValor] = useState("") */

    //função para pegar o valor dos campos digitados
    //uma função anônima
    /* const digitado = (event) => {
        valor = event.target.value
        console.log(valor)
    } */

    /* props.aoAlterar(digitado.target.value) */

    //função executada quando muda a digitação nos inputs
    function digitado (event){
        props.aoAlterar (event.target.value)
        
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={digitado} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto