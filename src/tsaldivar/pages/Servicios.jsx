import { ServicioInfo } from "../components/ServicioInfo";
import { servicios } from "../data/servicios";
import '../style/servicios.css'

export const Servicios = () => {
  return (
    <section id="servicios" className="servicios">
        <h2 className="title">Servicios</h2>
        <div className="servicios-info">
            {
                servicios.map(servicio => (
                    <ServicioInfo key={servicio.id} servicio={servicio} />
                ))
            }
        </div>
    </section>
  )
}
  