import Card from '../Card'
import './Time.css'

/* function Time (){
    return(

    )
} */

const Time = (props) => {
    return(
        <section className='time' style={{backgroundColor:props.background}}>

            <h3 style={{borderBlockColor:props.corDaBorda}}>{props.nome}</h3>
            
            {props.cards.map(professor => <Card
                nome={professor.nome}
                especialidade={professor.especialidade}
                imagem={professor.imagem}
                area={professor.area}
  
            />)}

        </section>

    )
}

export default Time