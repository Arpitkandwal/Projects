import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Branches from './pages/branches/Branches'
import NotFound from './pages/notFound/NotFound'
import Timeline from './pages/timeline/Timeline'
import Donate from './pages/donate/Donate'
import Navbar from './components/Navbar'
const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/branches' element={<Branches/>}/>
                <Route path='/timeline' element={<Timeline/>}/>
                <Route path='/donate' element={<Donate/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App