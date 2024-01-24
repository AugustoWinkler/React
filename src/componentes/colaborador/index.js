import './colaborador.css'

const Colaborador = ({nome,img,cargo}) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={img} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>  
        </div>


    )
}
export default Colaborador