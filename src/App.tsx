import './App.css'
import { ProductCard } from './components'
import { useGetProducts } from './shared'

function App() {
  const products = useGetProducts()

  return (
    <div className="App">
      <ul
        style={{
          width: '800px',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '1px',
          padding: 0,
          margin: 'auto',
        }}
      >
        {products.map((item, id) => (
          <ProductCard {...item} key={`${id}-${item.title}`} />
        ))}
      </ul>
    </div>
  )
}

export default App
