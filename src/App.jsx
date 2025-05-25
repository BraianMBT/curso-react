import './App.css'
import BoostrapNavbar from './components/navbar'
import ProductosList from './components/ProductosList'
import { GlobalProvider } from './context/GlobalContext'


function App() {

  return (
    <GlobalProvider>
      <BoostrapNavbar/>
      <ProductosList/>
    </GlobalProvider>
  )
}

export default App
