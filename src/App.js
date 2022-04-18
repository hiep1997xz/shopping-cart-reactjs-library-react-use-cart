import { CartProvider } from 'react-use-cart'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart'
import Home from './components/Home'

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  )
}

export default App
