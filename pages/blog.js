import Layout from "@/components/layout"
import Post from "@/components/post";
import styles from '../styles/grid.module.css'

export default function Blog({ posts }) {
  
  return (
    <div>
      <Layout
        title={"Blog"}
        descrption="Blog de música, venta de guitarras, guitarLA">
        <main className="conte">
          <h2 className="heading">
            <div className={styles.grid}>
              {posts?.map( post => (
                <Post 
                key={post.id}
                post ={post.attributes}  />
               ))}

            </div>
          </h2>
        </main>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts } = await respuesta.json();
  return {
    props: {
      posts
    }
  }
}
