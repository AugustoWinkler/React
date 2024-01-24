import Colaborador from '../colaborador'
import './time.css'

const Time = (props) =>{
    const css = {backgroundColor: props.corSecundaria}

    return(
        
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo ={colaborador.cargo} img={colaborador.img} /> )}</div>
        </section>

    )
}
export default Time