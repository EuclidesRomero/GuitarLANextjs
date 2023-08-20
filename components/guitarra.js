import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'


export default function Guitarra({guitarra}) {
  const {imagen, nombre, precio, descripcion, url} = guitarra
  return (
    <div>
      <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.formats.medium.url} alt={nombre} width={200} height={200}/>
        <div className={styles.contenido}>
         <h3>{nombre}</h3>
         <p className={styles.descripcion}>{descripcion}</p>
         <p className={styles.precio}>${precio}</p>
         <Link href={`/guitarras/${url}`} legacyBehavior>
          <a className={styles.enlace}>
           Ver guitarra
          </a>

         </Link>
        </div>
        
      </div>
    </div>
  )
}
