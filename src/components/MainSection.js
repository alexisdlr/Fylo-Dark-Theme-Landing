import {motion} from 'framer-motion'
import Logo from '../images/illustration-intro.png'


export function MainSection () {
    return(
        <section className='container-all'>
            <motion.div 
            initial={{x: -1000}}
            animate={{x: 0}}
            transition={{duration: 1}}
            className='container-img'>
                <img
                className='img'
                src={Logo}
                alt='principal image banner'
                />
            </motion.div>

            <motion.div 
             initial={{x: 1000}}
             animate={{x: 0}}
             transition={{duration: 1}}
            className='container-text'>
                
                <h1 className='title'>
                    All your files in secure location,
                    accesible anywhere.
                </h1>
                <p className='textP'>
                Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
                </p>
                <motion.button 
                whileHover={{filter: 'brightness(1.55)'}}
                className='btn'>
                <a
                href='link-btn'>
                    Get Started
                </a>
                </motion.button>
               
            </motion.div>

        </section>
    )
}   