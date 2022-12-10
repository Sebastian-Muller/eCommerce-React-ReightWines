import React from 'react'

import logo from "../assets/images/logoLetrasBlancas.webp"
import location from "../assets/icons/maps.svg"
import phone from "../assets/icons/telephone.svg"
import wsp from "../assets/icons/wa.svg"
import mail from "../assets/icons/mail.svg"
import cace from "../assets/icons/cace.webp"
import ssl from "../assets/icons/descarga.webp"
import dFiscal from "../assets/icons/dataFiscal.png"
import mPago from "../assets/icons/mercadopago.webp"
import visa from "../assets/icons/visa.webp"
import mc from "../assets/icons/mastercard.webp"
import amex from "../assets/icons/american.webp"



const Footer = () => {

    const footer__container = {
        backgroundColor: "#252827",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem"
    }

    const logoFooter = {
        width: "25rem"
    }

    const box = {
        margin: "1.5rem 0",
        width: "25rem"
    }
    const anchor = {
        color: "#fff",
        textDecoration: "none"
    }

    const footer__contact = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
    const box__title = {
        fontFamily: "var(--title-font)",
        borderBottom: "1px solid",
        marginBottom: "2rem"
    }
    const box__content = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1.3rem"
    }
    const box__text = {
        display: "flex",
        alignItems: "center"
    }
    const box__img = {
        width: "2rem",
        marginRight: "1rem"
    }

    const content__payment = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem"
    }
    const pay__img = {
        width: "7rem"
    }


  return (
    <footer>
        <div style={footer__container} className="footer__container">

            <div className="footer__img">
                <img style={logoFooter} src={logo} alt="logo reight" />
            </div>

            <div style={box} className="footer__contact">
                <div style={box__title} className="contact__title">
                    <h3>Atencion al Cliente</h3>
                </div>
                <div style={box__content} className="contact__content">
                    <div style={box__text} className="content__text">
                        <img style={box__img} src={location} alt="location img" />
                        <p>Av. Las Heras 2440 - C.A.B.A</p>
                    </div>
                    <div style={box__text} className="content__text">
                        <img style={box__img} src={phone} alt="phone img" />
                        <a style={anchor} href="tel:+5491148036587">4803 - 6587</a>
                    </div>
                    <div style={box__text} className="content__text">
                        <img style={box__img} src={wsp} alt="whatsApp img" />
                        <a style={anchor} href="https://wa.me/+5491156298468?text=¡Me+encanto+su+proyecto...+Quiero+sumarme!" target="_blank" >+54 9 11-5629-8468</a>
                    </div>
                    <div style={box__text} className="content__text">
                        <img style={box__img} src={mail} alt="email img" />
                        <a style={anchor} href="mailto:reight@gmail.com">reight@gmail.com</a>
                    </div>
                </div>
            </div>

            <div style={box} className="footer__info">
                <div style={box__title} className="info__title">
                    <h3>PARA SABER</h3>
                </div>
                <div style={box__content} className="info__content">
                    <div style={box__text} className="content__text">
                        <a style={anchor} href="#">Politicas de Privacidad</a>
                    </div>
                    <div style={box__text} className="content__text">
                        <a style={anchor} href="#">Términos y Condiciones</a>
                    </div>
                    <div style={box__text} className="content__text">
                        <a style={anchor} href="#">Arrepentimiento de Compra</a>
                    </div>
                </div>

            </div>

            <div style={box} className="footer__safeZone">
                <div style={box__title} className="safeZone__title">
                    <h3>SITIO SEGURO</h3>
                </div>
                <div style={box__content} className="safeZone__content">
                    <div style={box__text} className="content__text">
                        <p>A través de todos los medios de pago y promociones bancarias de Mercado Pago</p>
                    </div>
                    <div style={content__payment} className="content__payments">
                        <div className="payment">
                            <img style={pay__img} src={visa} alt="cama argentina de comercio electronico" />
                        </div>
                        <div className="payment">
                            <img style={pay__img} src={mc} alt="cama argentina de comercio electronico" />
                        </div>
                        <div className="payment">
                            <img style={pay__img} src={amex} alt="cama argentina de comercio electronico" />
                        </div>
                        <div className="payment">
                            <img style={pay__img} src={mPago} alt="mercado pago" />
                        </div>
                        <div className="payment">
                            <img style={pay__img} src={cace} alt="cama argentina de comercio electronico" />
                        </div>
                        <div className="payment">
                            <img style={pay__img} src={ssl} alt=" certificado ssl" />
                        </div>
                        <div className="payment">
                            <img style={pay__img} src={dFiscal} alt="data fiscal" />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </footer>
  )
}

export default Footer