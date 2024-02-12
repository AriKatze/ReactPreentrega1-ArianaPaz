import { Navbar } from "./components/layout/navbar"
import { ItemListContainer } from "./components/pages/ItemListContainer"

function App() {

  return (

  
      <div>
        <Navbar />
        <h1>Test Page Main content</h1>
        <ItemListContainer greeting="Welcome to Finantial Solutions"/>
        </div>
        
  )
}

export default App
