import Layout from "@/components/layout"
import Link from "next/link"

export default function pagina404() {
  return (
   <Layout title="Pagina no encontrada">
    <p className="error">Upss! la pagina que intentas visitar no existe</p>
    <Link href='/' legacyBehavior>
    <a className="error-enlace">Ir al inicio</a>
    </Link>
   </Layout>
  )
}
