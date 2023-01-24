import Elementos from '../../complements/complements'


const Boxes = () => {
    const obj = Elementos.RepositorioJson
    return obj.map((values)=>{
        return(
        <>
            <div className="containerAll">
                <div className="spanContainer">
                    <div className="titleContainer">
                        <span className='values.title'>{values.title}</span>
                        <span className='values.public'>{values.state}</span>
                    </div>
                    <div className="updateContainer">
                        <span className='values.languaje'>{values.languaje}</span>
                        <span className='values.update'>{values.update}</span>
                    </div>
                </div>   
                <div className="controlContainer">
                    <input className='values.languaje'></input>
                    <input className='values.update'></input>
                </div>
            </div>
            <div className="containerAllSon">
                <div className="spanContainer">
                    <div className="titleContainer">
                        <span className='values.title'>{values.title}</span>
                        <span className='values.public'>{values.state}</span>
                    </div>
                    <div className="updateContainer">
                        <span className='values.languaje'>{values.languaje}</span>
                        <span className='values.update'>{values.update}</span>
                    </div>
                </div>   
                <div className="controlContainer">
                    <input className='values.languaje'></input>
                    <input className='values.update'></input>
                </div>
            </div>
        </>
    )})
}

export default Boxes