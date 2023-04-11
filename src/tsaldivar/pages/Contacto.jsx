import emailjs from '@emailjs/browser';

import { ContactoInfo } from '../components/ContactoInfo';
import { useForm } from '../hooks/useForm';
import '../style/contacto.css';
import { useRef } from 'react';

export const Contacto = () => {

  const form = useRef();

  const { email, nombre, mensaje, telefono, onInputChange, onResetForm } = useForm({
    email: '',
    nombre: '',
    mensaje: '',
    telefono: '',
  });

  const onsubmit = async (event) => {
    event.preventDefault();
    const band = await validateFields();

    if(band){
      emailjs.sendForm('service_tyb7nbh', 'template_mwp9ylg', form.current , 'YxNaCKOCUCufxtHrW')
        .then((result) => {
            alert("Gracias por escribirnos, en breve nos pondremos en contacto")
            onResetForm();
        }, (error) => {
            console.log(error.text);
        });
    }else{
      return;
    }

  }

  const validateFields = () => {
    if(mensaje.length === 0 || nombre.length === 0 || email.length === 0 || telefono.length === 0){
      alert("Llene todos los campos")
      return false;
    }

    if(!validateEmail()){
      alert('Correo inválido');
      return false;
    }else{
      return true;
    }
  }
  
  const validateEmail = () => {
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( validEmail.test(email) ) return true;
    else return false;
  }

  return (
    <section id='contacto'>
      <h2 className='title'> Contacto </h2>
      <div className='form-container'>
        <form ref={form} className="contacto-form">
          <input className='form-input' type='email' placeholder='Tu correo' onChange={onInputChange} name='email' value={email}/>
          <input className='form-input' type='text' placeholder='Nombre o empresa' onChange={onInputChange} name='nombre' value={nombre}/>
          <input className='form-input' type='number' placeholder='Telefono celular' onChange={onInputChange} name='telefono' value={telefono}/>
          <textarea placeholder='Tu mensaje' onChange={onInputChange} name='mensaje' value={mensaje}/>
          <input className='btn verde' onClick={(event) => onsubmit(event)} type='submit' value='Enviar'/>
        </form>
        <ContactoInfo />
      </div>
    </section>
  )
}

