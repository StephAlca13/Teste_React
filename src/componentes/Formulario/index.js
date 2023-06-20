import './Formulario.css'
import CampoTexto from '../CampoTexto/Index'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

function Formulario(props) {

   /*  const setores = [
        'Mecânica',
        'Logística',
        'Elétrica',
        'Tecnologia da Informação',
        'Alimentos',
        'Rotina Administrativa'
    ] */

    function aoSubmeter(event) {
        event.preventDefault()
        props.aoCadastrarProfessor({
            nome: nome,
            especialidade: especialidade,
            imagem: imagem,
            area: area,
        })
    }

    /*Determinando variáveis que iniciam com um valor, mas pode ser alterado*/
    const [nome, setNome] = useState("")
    const [especialidade, setEspecialidade] = useState("")
    const [imagem, setImagem] = useState("")
    const [area, setArea] = useState("")

    return (
        <section className='form'>
            <form onSubmit={aoSubmeter}>
                <h2>Preencha os dados para cadastrar</h2>

                <CampoTexto 
                label="Nome" 
                placeholder="Insira o seu nome" 
                obrigatorio={true} 
                valor={nome}
                aoAlterar={valor => setNome(valor)} />

                <CampoTexto 
                label="Especialidade" 
                placeholder="Insira a sua especialidade"
                valor={especialidade}
                aoAlterar={valor => setEspecialidade(valor)} />

                <CampoTexto 
                label="Imagem" 
                placeholder="Insira uma imagem"
                valor={imagem}
                aoAlterar={valor => setImagem(valor)} />

                <ListaSuspensa 
                label="Área" 
                areas={props.times} 
                valor={area}
                aoAlterar={valor => setArea(valor)}
                />

                <Botao texto="Cadastrar" />
            </form>
        </section>
    )

}

export default Formulario