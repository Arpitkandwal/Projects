import {Link,NavLink} from 'react-router-dom'
import './navbar.css'
import {links } from '../data'
import LogoBulb from '../images/logo_bulb.png'
import LogoText from '../images/logo_text.png'
import {GoThreeBars} from 'react-icons/go'
const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">
                {/* logo  */}
                <Link to="/">
                    <div className='nav__logo'>
                        <img src={LogoBulb} alt="Umeed Logo" />
                        <img src={LogoText} alt="Umeed Charitable Trust" />
                    </div>
                </Link>

                {/* links  */}
                <ul className='nav__links'>
                    {
                        links.map(({name,path},index)=>{
                            return (
                                <li>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* donate button */}
                <button className='nav__donate'>Donate</button>
                {/* hamburger */}
                <button className="nav__toggle-hamburger">
                    <GoThreeBars/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar