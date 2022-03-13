import "../../../src/assets/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <>
      <section id='hero' className='hero h-100'>
        <div className=' hero__main'>
          <div className=' '>
            <span className='sectionDivision flex w-full   mb-5'></span>
            <h3 className='hero__main--phrase mt-20 '>
              Impulsamos negocios que no conocen excusas.
            </h3>
            <div className='flex w-full button-wrapper mt-16  '>
              <a href='#contact' className='button-conversemos flex items-center'>
                Conversemos
              </a>
            </div>
          </div>

          <span
            id='ecosistemaDriven'
            className='ecosistema  gap-5 grid grid-cols-1    tableta:grid-cols-3  pt-36'
          >
            <div id='card1' className='ecosistema__card h-96 tableta:h-100  '>
              {/* <FontAwesomeIcon icon={faCoffee} /> */}
              <i class='fas fa-cannabis'></i>

              <h3 className='mt-5 mb-5'>ENFOQUE DR!V3N</h3>
              <div className='cardDivisor flex'> </div>
              <p>
                La estrategia y especialización de una consultora, la creatividad y capacidad de
                marketing de agencias creativas y de medios, sumada a la eficiencia y recursos de
                una empresa tecnológica. ¿Suena loco? Lo somos
              </p>
            </div>
            <div id='card2' className='ecosistema__card h-96  tableta:h-100 '>
              <i class='fas fa-joint'></i>
              <h3 className='mt-5 mb-5'>ENFOQUE DR!V3N</h3>
              <div className='cardDivisor flex'> </div>
              <p>
                Accede a una red de especialistas, empresas y herramientas con la misma capacidad de
                lograr resultados y resolver problemas que nos caracterizan.
              </p>
            </div>
            <div id='card3' className='ecosistema__card h-96  tableta:h-100  '>
              <i class='far fa-meh-rolling-eyes'></i>
              <h3 className='mt-5 mb-5'>RESULTADOS REALES</h3>
              <div className='cardDivisor flex'> </div>
              <p>
                No importa el reto o la etapa de desarrollo de tu negocio. Nos basamos en datos e
                insights de comportamiento para diseñar y desarrollar la mejor estrategia o solución
                para lograr resultados.
              </p>
            </div>
          </span>
        </div>
      </section>
    </>
  );
}
