import './Botao.css'

function Botao (props){
    return(
        <button className='btn'>{props.texto}</button>
    )
}

export default Botao