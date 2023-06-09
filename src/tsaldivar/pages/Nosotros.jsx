import '../style/nosotros.css'

import img10 from '../../img/imagen10.jpg';
import img6 from '../../img/imagen6.jpg';
import img8 from '../../img/imagen8.jpg';
import img11 from '../../img/imagen11.jpg';
import img13 from '../../img/imagen13.jpg';
import img16 from '../../img/imagen16.jpg';
import img4 from '../../img/imagen4.jpg';
import img9 from '../../img/imagen9.jpg';

export const Nosotros = () => {
    // function onImgClick({target}){
    //   const imagen = document.createElement('img');
    //   imagen.className = 'img-open';
    //   imagen.src = target.src;

    //   //Crea el overlay con la imagen
    //   const overlay = document.createElement('DIV');
    //   overlay.appendChild(imagen); //Agrega la imagen a overlay
    //   overlay.classList.add('overlay');  //Agrega una clase al elemento overlay creado

    //   //Este código hace que al dar click en cualquier area se cierre la imagen
    //   overlay.onclick = function () {
    //       const body = document.querySelector('body');  //Selecciona body
    //       body.classList.remove('fijar-body');  //Elimina la clase cuando se presione x
    //       overlay.remove();  //Elimina el overlay de la pantalla
    //   }

    //   //Boton para cerrar el modal
    //   const cerrarModal = document.createElement('P');  //Crea un parrafo
    //   cerrarModal.textContent = 'x';
    //   cerrarModal.classList.add('btn-cerrar');  //Agrega la clase a cerrarModal
    //   cerrarModal.onclick = function () {
    //       const body = document.querySelector('body');  //Selecciona body
    //       body.classList.remove('fijar-body');  //Elimina la clase cuando se presione x
    //       overlay.remove();  //Elimina el overlay de la pantalla
    //   }
    //   overlay.appendChild(cerrarModal);

    //   //Añadir al HTML
    //   const body = document.querySelector('body');
    //   body.appendChild(overlay); //Agrega overlay al body
    //   body.classList.add('fijar-body');
    // }

  return (
    <section className='nosotros-section' id='nosotros'>
        <h2 className="title">Nosotros</h2>
        <p style={{textAlign: 'justify'}}>Transportes Saldivar es una empresa cien porciento mexicana dedicada al transporte terrestre dentro de la republica mexicana con mas de 30 años de experiencia. Llegamos a cada    rincón del país garantizando puntualidad, confianza y gran eficiencia en el servicio que realizamos.
        </p>
        <p style={{textAlign: 'justify'}}>Contamos con personal capacitado para realizar aquellas tareas y peticiones especiales para brindar el mejor servicio a nuestros clientes.
        </p>
        <div>
          <div>
            <h4>Mision</h4>
            <p style={{textAlign: 'justify'}}>Superar las expectativas de nuestros clientes y contribuir a crecimiento de los mismos, ofreciendo un excelente servicio de autotransporte de carga y logística.</p>
          </div>
          <div>
            <h4>Visión</h4>
            <p style={{textAlign: 'justify'}}>Ser una empresa líder y reconocida por su calidad de servicio e innovación en el ramo de autotransporte de carga y logística en México. Mantener una actitud imparable al logro y un crecimiento continuo de operación gracias al buen manejo de nuestros recursos, buenos valores empresariales, mejora continua y un un servicio enfocado 100% al cliente.</p>
          </div>
        </div>
        <h2>Galería</h2>
        <div className="galeria">
          <img className='img-galeria' src={ img6 } alt=''/>
          <img className='img-galeria' src={ img8 } alt=''/>
          <img className='img-galeria' src={ img11 } alt=''/>
          <img className='img-galeria' src={ img13 } alt=''/>
          <img className='img-galeria' src={ img9 } alt=''/>
          <img className='img-galeria' src={ img4 } alt=''/>
          <img className='img-galeria' src={ img16 } alt=''/>
          <img className='img-galeria' src={ img10 } alt=''/>
        </div>
    </section>
  )
}
