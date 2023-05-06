import {useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import './navbar.css'
import {links } from '../data'
import LogoBulb from '../images/logo_bulb.png'
import LogoText from '../images/logo_text.png'
import {GoThreeBars} from 'react-icons/go'
import {GrClose} from 'react-icons/gr'
const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)
    return (
        <nav>
            <div className="container nav__container">
                {/* logo  */}
                <Link to="/" className='nav__logo'>
                        <div >
                            <img id="logo_bulb" src={LogoBulb} alt="Umeed Logo" />
                            <img id="logo_name" src={LogoText} alt="Umeed Charitable Trust" />
                        </div>
                </Link>
                {/* links  */}
                <ul className={`nav__links ${isNavShowing? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({name,path},index)=>{
                            return (
                                <li key={index}>
                                    <NavLink className={({isActive})=> isActive? 'active-nav' : ''} to={path}>
                                        {name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>         
                {/* donate button */}
                <Link to="/donate">
                        <button className='nav__donate'>Donate</button>
                </Link>       
                {/* hamburger */}
                <button className="nav__toggle-hamburger" onClick={()=> setIsNavShowing(!isNavShowing)}>
                    {
                        isNavShowing? <GrClose/> : <GoThreeBars/>
                    }
                </button>
            </div>
            
        </nav>
    )
}

export default Navbar