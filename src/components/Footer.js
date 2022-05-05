import logo from '../images/logo.svg'
import {motion} from 'framer-motion'



const Link = ({text}) => {
    return (
        <motion.a
        whileHover={{filter: 'brightness(1.55)'}}
        href="#">{text}</motion.a>
    )
}

export const Footer = () => (
    
    <footer className='footer'>
        <div className='grid-container'>
            <div className='cont-location '>
            <img
            className='img-logo'
            src={logo} alt='logo img'/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
             dolore magna aliqua
            </p>
            </div>
            <div className='cont-email flex'>
                <p>
                +1-543-123-4567
                </p>
                <p>
                example@fylo.com
                </p>
            </div>
            <div className='cont-about-us flex'>     
            <Link
                text='About Us'
                />
                <Link
                text='Jobs'
                />
                <Link
                text='Press'
                />
                 <Link
                text='Blog'
                />
                                                                                                                                                                                                                                              
            </div>
            <div className='cont-contact-us flex'>
                <Link
                text='ContactUs'
                />
                <Link
                text='Terms'
                />
                <Link
                text='Privacy'
                />
                 
            </div>
            <div className='cont-social-media'>
                <button className='btn-social'>
                    <a href='#'>
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                </button>
                <button className='btn-social'>
                    <a href='#'>
                    <i class="fa-brands fa-twitter"></i>
                    </a>
                </button>
                <button className='btn-social'>
                    <a href='#'>
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                </button>
            </div>
        </div>
        <Form/>
    </footer>
    
)
const Form = () => (
    <div class='form-container'>
        <h2 className='subtitle'>
            Get early access today
        </h2>
        <p className='text'>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you. 
        </p>
        <form className='form'>
            <input type='text' className='input'/>
            <button type='submit' className='btn'>
                Get Started for free
            </button>
        </form>
    </div>
)