import Layout from "@/components/layout"
import Image from "next/image";
import { formaterFecha } from "@/utilities/helpers";
import style from '../../styles/blog.module.css'



export default function Blog({post}) {
  const {titulo, contenido, imagen, publishedAt} =  post[0].attributes;
  return (
    <Layout title={titulo}>
        <article className={`${style.post} ${style['mt-3']}`}>
        <Image src={imagen.data.attributes.url} alt="imagen post" width={1000} height={400}/>
        <div className={style.contenido}>
            <h3>{titulo}</h3>
            <p className={style.fecha}>{formaterFecha(publishedAt)}</p>
            <p className={style.texto}>{contenido}</p>
        </div>
    </article>
    </Layout>
  )
}


export async function getServerSideProps ({query:{url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data:post} = await respuesta.json();
 return {
    props:{
    post
    }
 }
}
