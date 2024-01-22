import App from "../../App"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = () => {
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
        console.log('Formulario foi Submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome.' />
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite seu cargo.' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem.' />
                <ListaSuspensa requerid ={true} label='Time' itens = {times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>

    )
}
export default Formulario