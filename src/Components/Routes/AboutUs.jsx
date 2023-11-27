import React from 'react'
import woman from '../../assets/img/user-woman.jpg'
import men from '../../assets/img/user-men.jpg'
import '../../assets/css/about.css'

export const AboutUs = () => {
    return (
    <>
        <div>
            <h1>About Us</h1>
            <div className='container-about'>
                <h2>Grupo 3 - ¿Quienes Somos?</h2>
                <div className='about-member'>
                    <div>
                        <h3>Maria Jimena Macias</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit enim in ratione dolorum ullam aut officiis et, modi sed ipsum adipisci illum esse ducimus quaerat aspernatur est amet. Minus!</p>
                    </div>
                    <div>
                        <img src={woman} alt="" />
                    </div>
                </div>

                <div className='about-member'>
                    <div>
                        <h3>Lucas Macias</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit enim in ratione dolorum ullam aut officiis et, modi sed ipsum adipisci illum esse ducimus quaerat aspernatur est amet. Minus!</p>
                    </div>
                    <div>
                        <img src={men} alt="" />
                    </div>
                </div>
                <div className='about-member'>
                    <div>
                        <h3>Nicolás Sebastian Capriz</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit enim in ratione dolorum ullam aut officiis et, modi sed ipsum adipisci illum esse ducimus quaerat aspernatur est amet. Minus!</p>
                    </div> 
                    <div>
                        <img src={men} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
