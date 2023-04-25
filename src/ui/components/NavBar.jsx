import './NavBarStyle.css';

import logo from '../../img/saldivarLogo.png';

export const NavBar = () => {

  return (
    <div className='navBar'>
        <div className='options-container'>
            <ul className='options'>
                <li style={{listStyle: 'none'}}><img className='logo-navBar' alt='Transportes Saldivar' src={logo}/></li>
                <li className='options-element'><ion-icon name="bus-outline"></ion-icon><a href='#nosotros'>Nosotros</a></li>
                <li className='options-element'><ion-icon name="planet-outline"></ion-icon><a href='#servicios'>Servicios</a></li>
                <li className='options-element'><ion-icon name="pin-outline"></ion-icon><a href='#contacto'>Contacto</a></li>
            </ul>
        </div>
        <div className='contacto'>
            <ion-icon name="call-outline"></ion-icon>
            <p className='llamanos mr-10'>Llamanos (+52) 3310413175</p>
        </div>
    </div>
  )  
}
 