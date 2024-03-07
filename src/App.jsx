import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Item from './components/Item/Item'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/coder_54040_react/" element={<ItemListContainer/>}/>
        <Route path="/coder_54040_react/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path='/coder_54040_react/detail/:productId' element={<ItemListContainer />}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
