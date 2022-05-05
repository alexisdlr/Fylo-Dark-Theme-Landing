import {motion} from 'framer-motion'
import logo from '../images/logo.svg'


export function NavBarItem(props) {
    return(
        <li className='navigation__ul-li'>
            <motion.a
            initial={{borderBottom:0}}
            whileHover={{borderBottom: '1px solid #fff', color:'#fff'}}
            href={props.href}
            className='link'>
                {props.text}
            </motion.a>
        </li>
    )
}
export function NavBar () {
    return(
        <motion.header 
        initial={{y: -800}}
        transition={{duration: 1, type:'spring'}}
        animate={{y:0}}
        className='header'>
            <div className='container-img'>
                <img
                src={logo}
                alt='logo-img'
                className='logo'
                />
            </div>
            <nav className='navigation'>
              <ul className='navigation__ul'>
                <NavBarItem
                text='Features'
                href='#'
                />
                 <NavBarItem
                text='Team'
                href='#'
                />
                 <NavBarItem
                href='#'
                text='Sign In'
                />
              </ul>  
            </nav>
        </motion.header>
    )
}