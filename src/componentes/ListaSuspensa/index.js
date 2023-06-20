import './ListaSuspensa.css'

function ListaSuspensa (props){
    function digitado (event){
        props.aoAlterar (event.target.value)
    }
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={digitado}>
                {props.areas.map(area => <option key={area}>{area}</option> )}
            </select>
        </div>
    )
}

export default ListaSuspensa