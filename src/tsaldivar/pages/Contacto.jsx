import { ContactoInfo } from '../components/ContactoInfo';
import { useForm } from '../hooks/useForm'
import '../style/contacto.css'

export const Contacto = () => {

  const { email, nombre, mensaje, onInputChange } = useForm({
    email: '',
    nombre: '',
    mensaje: '',
  });

  const onsubmit = (event) => {
    event.preventDefault();
    console.log(event)
    return <p>Se envío el formulario</p>
  }

  return (
    <section id='contacto' className='container'>
      <h2 className='title'> Contacto </h2>
      <div className='form-container'>
        <form className="contacto-form">
          <input className='form-input' type='email' placeholder='Tu correo' onChange={onInputChange} name='email' value={email}/>
          <input className='form-input' type='text' placeholder='Nombre o empresa' onChange={onInputChange} name='nombre' value={nombre}/>
          <textarea placeholder='Tu mensaje' onChange={onInputChange} name='mensaje' value={mensaje}/>
          <input className='btn verde' onClick={(event) => onsubmit(event)} type='submit' value='Enviar'/>
        </form>
        <ContactoInfo />
      </div>
    </section>
  )
}

