

export const ContactoInfo = () => {
  return (
    <div className="info">
      <p className="info-title">TRANSPORTES SALDIVAR</p>
      <p className="info-body">Calle tamarindo #205 </p>
      <p className="info-body">Col. Lomas del camichín</p>
      <p className="info-body">Tonalá, Jalisco. CP: 45403</p>
      <div style={{marginTop: 20}} className="info-contacto">
        <ion-icon name="call-outline"></ion-icon>
        <p className="info-body ml-5"> (+52) 33 10413175</p>
      </div>
      <div className="info-contacto">
        <ion-icon name="mail-outline"></ion-icon>
        <p className="info-body ml-5"> saldivar.transportes@hotmail.com</p>
      </div>
    </div>
  )
}
