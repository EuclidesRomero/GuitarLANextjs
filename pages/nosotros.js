import Image from 'next/image'
import Layout from '@/components/layout'
import style from '../styles/nosotros.module.css'


export default function Nosotros() {
  return (
    <Layout
     title={'Nosotros'}
     descrption="Sobre nosotros, guitarLA, tienda de musica">

      <h1>Nosotros</h1>
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>
        <div className={style.contenido}>
          <Image src="/img/nosotros.jpg" alt='Imagen sobre nosotro ' width={800}  height={1000} />
          <div>
            <p>Somos apasionados de la música y las guitarras. 
              Desde nuestros inicios, nos hemos dedicado a ofrecer una experiencia excepcional para músicos de todos los niveles y estilos. 
              Nuestra misión es inspirar y nutrir la pasión por la música, proporcionando una amplia selección de guitarras de alta calidad, accesorios y equipos relacionados. 
             </p>

             <p>
              Nuestro equipo está compuesto por expertos músicos que están ansiosos por brindar asesoramiento personalizado y orientación profesional para que encuentres la guitarra perfecta que se adapte a tu estilo y preferencias. 
              Ya sea que estés buscando tu primera guitarra o una pieza única para tu colección, estamos comprometidos a ofrecer el mejor servicio, la mejor calidad y el mejor ambiente para que tu experiencia sea inolvidable
             </p>
  
          </div>
        </div>
      </main>
    </Layout>
  )
}
