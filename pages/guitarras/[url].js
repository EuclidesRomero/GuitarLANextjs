import { useState } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
export default function Guitarra({ guitarra, agregarCarrito }) {
  const [cantidad, setcantidad] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }

    //construir un objeto para almacenar la guitarra seleccionada en local storage
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    agregarCarrito(guitarraSeleccionada);
  };

  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes;
  return (
    <Layout>
      <div>
        <div className={styles.guitarra}>
          <Image
            src={imagen.data.attributes.url}
            alt={nombre}
            width={200}
            height={200}
          />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <form onSubmit={handleSubmit} className={styles.formulario}>
              <label htmlFor="cantidad">Cantidad</label>
              <select
                onChange={(e) => {
                  setcantidad(Number(e.target.value));
                }}
                id="cantidad"
              >
                <option value="0">Seleccione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input type="submit" value="agregar al carrito" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();

  return {
    props: {
      guitarra,
    },
  };
}
