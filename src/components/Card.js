import quotes from '../images/bg-quotes.png'
import images from "../images/images"
import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react'
import {useInView} from 'react-intersection-observer'

const Persons = [
    {   
        key:1,
        text:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        name: 'Satish Pate',
        ocupation: 'Founder & CEO, Huddle',
        src: images.profileSatish

    }, 
    {
        key:2,
        text:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        name: 'Bruce McKenzie',
        ocupation: 'Founder & CEO, Huddle',
        src: images.profileBruce
    },
     {
        key:3,
        text:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        name: 'Iva Boyd',
        ocupation: 'Founder & CEO, Huddle',
        src: images.profileIva
    }
]
 const Card = ({name, src, ocupation, text, key}) => {
    const {ref, inView } = useInView()
    const animation = useAnimation()
    useEffect( () => {
        if(inView) {
            animation.start({
                y: 0,
                opacity:1,
                transition: {
                    duration: 1, delay: .3
                }
            })
        }
        if (!inView) {
            animation.start({
                y: '500px',
                opacity: 0
            })
        }

    }, [inView])
    return(
        <div ref={ref} className='z-index'>
             <motion.div 
        animate={animation}
        className='container-card' key={key}>
            <div className='container-text'>
                <p className='text'>
                {text}
                </p>
            </div>
            <div className='container-profile'>
                <img
                src={src}
                alt='profile img'
                className='profile-img'
                />
                <div className='profile-info'>
                    <h3 className='name'>
                        {name}
                    </h3>
                    <p className='ocupation'>
                        {ocupation}
                    </p>
                </div>
              
            </div>
        </motion.div>
        </div>
       
    )
 }
   

export const CardP = () => (

    <section className='container-all-persons'>
    <div className='quotes-container'>
        <img
        className='quotes-img'
        src={quotes}
        alt='quotes img'
        />
    </div>
            {Persons.map(person => (
                <Card
                    key={person.key}
                    text={person.text}
                    src={person.src}
                    ocupation={person.ocupation}
                    name={person.name} />
            ))}

    </section>
    )
  
        
