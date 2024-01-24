import { useState } from "react"
import App from "../../App"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')

    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Dev-Ops',
        'UI/UX',
        'Mobile',
        'Inovação em Gestão'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado(
            {
                nome,
                cargo,
                img,
                time
            }
        )
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite seu nome.'
                valor = {nome}
                aoAlterado = {valor => setNome(valor)} />
                <CampoTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite seu cargo.'
                valor = {cargo}
                aoAlterado = {valor => setCargo(valor)} />
                <CampoTexto 
                label='Imagem' 
                placeholder='Digite o endereço da imagem.'
                valor = {img}
                aoAlterado = {valor => setImg(valor)} />
                <ListaSuspensa 
                requerid ={true} 
                label='Time' 
                itens = {times}
                valor = {time}
                aoAlterado = {valor => setTime(valor)}

                
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>

    )
}
export default Formulario