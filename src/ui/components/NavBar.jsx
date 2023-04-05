import './NavBarStyle.css';

export const NavBar = () => {

  return (
    <div className='navBar'>
        <div className='options-container'>
            <ul className='options'>
                <li className='options-element'><ion-icon name="bus-outline"></ion-icon><a href='#nosotros'>Nosotros</a></li>
                <li className='options-element'><ion-icon name="planet-outline"></ion-icon><a href='#servicios'>Servicios</a></li>
                <li className='options-element'><ion-icon name="pin-outline"></ion-icon><a href='#contacto'>Contacto</a></li>
            </ul>
        </div>
        <div className='contacto'>
            <h3 className='mr-20'>Saldivar <span>Transportes</span></h3>
            <ion-icon name="call-outline"></ion-icon><p className='mr-10'>Llamanos: (+52) 33 10413175</p>
        </div>
    </div>
  )
}
