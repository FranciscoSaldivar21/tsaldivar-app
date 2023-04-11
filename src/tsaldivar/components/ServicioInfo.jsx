export const ServicioInfo = ( {servicio} ) => {
    
    const { titulo, descripcion, imagen } = servicio;

  return (
    <div className='card-servicio-info'>
        <h3 className='service-title'> { titulo } </h3>
        <img src={imagen} className="img-servicio" alt={titulo}/>
        <p className="info-servicio"> { descripcion } </p>
    </div>
  )
}
 