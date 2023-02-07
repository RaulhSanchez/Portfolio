import './style.css'

const ExperienceMenuBody = () => {


    return (
        <div className="main">
            <div className="banner-top">
                <span className='work'>"Work" :</span>             
                <a style = {{color:'blue', marginLeft : '1em' }}>{'{'}</a>
                <div className='experience1'>
                    <span className='names'> "01/08/2022-13/01/20223 - Backend-Develpoer - FacePhy" :</span>
                    <a style = {{ color:'purple',marginLeft : '1em' }}>{'{'}</a>
                    <div className='DescrptionContainer'>
                      <span className='tarea'>"Tarea a desarrollar" :</span>  <span className='description'>"Desarollo de App interna.En Backend se utilizó NodeJs,NestJs,Mongo,PostgreSql,Docker,Jest,E2E y GithubActions.Para elFront seutilizó React"</span>
                    </div>
                    <a style = {{color:'purple', marginLeft : '1em' }}>{'},'}</a>
                </div>
                <div className='experience2'>
                    <span className='names'> "01/01/2022-01/08/2022 - Software Developer en TrueIt Systems" :</span>
                    <a style = {{color:'purple', marginLeft : '1em' }}>{'{'}</a>
                    <div className='DescrptionContainer'>
                    <span className='tarea'>"Tarea a desarrollar" :</span><span className='description'>"Desarollo de Front con HTML,CSS,Bootstrap y consultas a BBDD SQL"</span>
                    </div>
                    <a style = {{color:'purple', marginLeft : '1em' }}>{'},'}</a>
                </div>
                <div className='experience3'>
                    <span className='names'> "22/02/2021-10/9/2021 - Software Developer en SEGULA" :</span>
                    <a style = {{color:'purple', marginLeft : '1em' }}>{'{'}</a>
                    <div className='DescrptionContainer'>
                    <span className='tarea'>"Tarea a desarrollar" :</span><span className='description'>"Desarollo de APP utilizando C# para la programación en VR y BLENDER para el entorno 3D"</span>
                    </div>
                    <a style = {{color:'purple', marginLeft : '1em' }}>{'},'}</a>
                </div>
                <a style={{color:'blue'}}>{'}'}</a>
            </div>
        </div>
    )
}


export default ExperienceMenuBody