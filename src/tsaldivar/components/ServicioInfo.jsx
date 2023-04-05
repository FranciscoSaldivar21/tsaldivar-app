export const ServicioInfo = ( {servicio} ) => {
    
    const { titulo, descripcion, imagen } = servicio;

  return (
    <div className='card-servicio-info'>
        <h3 className='service-title'> { titulo } </h3>
        <img src={imagen} style={{width: 400, height: 230}} alt={titulo}/>
        <p> { descripcion } </p>
    </div>
  )
}
