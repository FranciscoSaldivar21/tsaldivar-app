import './index.css';
import { Footer } from './tsaldivar/components/Footer';
import { Contacto } from './tsaldivar/pages/Contacto';
import { Servicios } from './tsaldivar/pages/Servicios';
// import { Nosotros } from './tsaldivar/pages/Nosotros';
import { NavBar } from './ui/components/NavBar';

export const TSaldivar = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        {/* <Nosotros /> */}
        <Servicios />
        <Contacto />
      </div>
      <Footer />
    </>
  )
}
