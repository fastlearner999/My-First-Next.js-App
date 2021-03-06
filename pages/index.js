import data from '../utils/Data'
import { Layout } from '../components/Layout'
import { ProductItem } from '../components/ProductItem'

export default function Home() {
  return (
    <Layout title="Home Page">

      {/* render products cards in responsive grid  */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {data.products.map(product => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>


    </Layout>
  )
}
