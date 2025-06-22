
import {BrowserRouter as Router ,Route,Routes} from 'react-router'
import Mainlayout from './components/layout/Mainlayout'
import { AddItems, ContactUs,Home,ViewItems } from './components/pages/index'
function App() {

  return (
    <>
    <Router>
    <Mainlayout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/view-items' element={<ViewItems/>}/>
        <Route path='/add-items' element={<AddItems/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </Mainlayout> 
    </Router>
    </>
  )
}

export default App
