import Image from "next/image"
import Link from "next/link"
import {formaterFecha} from '../utilities/helpers'
import style from '../styles/blog.module.css'
export default function Post({post}) {
 const {contenido, imagen, url, publishedAt, titulo} = post
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} alt="imagen post" width={600} height={400}/>
        <div className={style.contenido}>
            <h3>{titulo}</h3>
            <p className={style.fecha}>{formaterFecha(publishedAt)}</p>
            <p className={style.resumen}>{contenido}</p>
             <Link href={`/blog/${url}`} legacyBehavior>
              <a className={style.enlace}>Leer post</a>
            </Link>
        </div>
    </article>
  )
}

