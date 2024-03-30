import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartProvider} from '../context/CartContext.jsx'
import { CasaProvider } from '../context/CasaContext.jsx'
import { Checkout } from './components/Checkout/Checkout.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Formulario } from './components/Formulario/Formulario.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <CasaProvider>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/coder_54040_react/" element={<ItemListContainer/>}/>
        <Route path="/coder_54040_react/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path='/coder_54040_react/detail/:productId' element={<ItemListContainer />}/>
        <Route path='/coder_54040_react/checkout' element={<Checkout />}/>
        <Route path='/coder_54040_react/checkout/pago' element={<Formulario />}/>
      </Routes>
      <Footer />
      </CartProvider>
      </CasaProvider>
      </BrowserRouter>
    </>
  )
}

export default App
