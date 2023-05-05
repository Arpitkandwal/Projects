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
            <Home />
            <Gallery />
            <Contact />
            <Branches/>
            <Timeline />
            <Donate/>
            
            <NotFound />
        </BrowserRouter>
    )
}

export default App