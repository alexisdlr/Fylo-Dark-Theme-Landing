import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react'
import {useInView} from 'react-intersection-observer'
import Stay from '../images/illustration-stay-productive.png'

import cards from './cards'
  
const GridItem =  ({key, src, alt, subtitle, text})=> (
    <div className='card' key={key}>
        <img
        src={src}
        alt={alt}
        className='card-img' /> 
 
        <h2 className='subtitle'>
        {subtitle}    
        </h2> 

        <p className='text'>
        {text}
        </p> 

    </div>
)
export const Grid = () =>{ 
    const {ref, inView } = useInView()
    const animation = useAnimation()
    useEffect( () => {
        if(inView) {
            animation.start({
                x: 0,
                transition: {
                    duration: 1, type:'spring', delay: .5
                }
            })
        }
        if (!inView) {
            animation.start({
                x: '100vw'
            })
        }

    }, [inView])
    return( 
        <section className='container-grid'
        ref={ref}>
        <motion.div 
        animate={animation}
        className='grid'>
        {
            cards.map(card => (
                <GridItem
                key={card.key}
                src={card.src}
                alt={card.alt}
                subtitle={card.subtitle}
                text={card.text} /> 
            ))
        }  
        </motion.div>
    </section>
)
}
export const StayProductive = () => {
    const {ref, inView } = useInView()
    const animation = useAnimation()
    useEffect( () => {
        if(inView) {
            animation.start({
                x: 0,
                transition: {
                    duration: 1, type:'spring', bounce: 0.3, delay: .5
                }
            })
        }
        if (!inView) {
            animation.start({
                x: '-100vw'
            })
        }

    }, [inView])
    return(
      <section 
      ref={ref} className='container-section'>
            <motion.div
            animate={animation}
            className='container-image'>
                <img
                src={Stay}
                className='img'
                />
            </motion.div>
            <motion.div 
             animate={animation}
            className='container-stay-text'>
                <h2
                className='subtitle'>Stay productive, wherever you are</h2>
                <p className='text'>   
                Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                storage needs.
                </p>
                <p className='text'>
                Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                attachments required.
                </p>
                <motion.a
                whileHover={{color: '#fff', borderColor: '#fff'}}
                href='#'
                className='link'>See how Fylo works</motion.a>
            </motion.div>

      </section>    
      
  )
  }