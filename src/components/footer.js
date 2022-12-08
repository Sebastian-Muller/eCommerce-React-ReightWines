import logo from "../assets/images/logoNav.webp"
import location from "../assets/icons/maps.svg"
import phone from "../assets/icons/telephone.svg"
import wsp from "../assets/icons/wa.svg"
import mail from "../assets/icons/mail.svg"
import cace from "../assets/icons/cace.webp"
import ssl from "../assets/icons/descarga.webp"
import dFiscal from "../assets/icons/dataFiscal.png"
import mPago from "../assets/icons/mercadopago.webp"


import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer__container">

            <div className="footer__img">
                <img src={logo} alt="" />
            </div>

            <div className="footer__contact">
                <div className="contact__title">
                    <h3>Atencion al Cliente</h3>
                </div>
                <div className="contact__content">
                    <div className="content__text">
                        <img src={location} alt="" />
                        <p>Av. Las Heras 2440 - C.A.B.A</p>
                    </div>
                    <div className="content__text">
                        <img src={phone} alt="" />
                        <a href="tel:+5491148036587">4803 - 6587</a>
                    </div>
                    <div className="content__text">
                        <img src={wsp} alt="" />
                        <a href="https://wa.me/+5491156298468?text=¡Me+encanto+su+proyecto...+Quiero+sumarme!" target="_blank" >+54 9 11-5629-8468</a>
                    </div>
                    <div className="content__text">
                        <img src={mail} alt="" />
                        <a href="mailto:reight@gmail.com">reight@gmail.com</a>
                    </div>
                </div>
            </div>

            <div className="footer__info">
                <div className="info__title">
                    <h3>PARA SABER</h3>
                </div>
                <div className="info__content">
                    <div className="content__text">
                        <a href="#">Politicas de Privacidad</a>
                    </div>
                    <div className="content__text">
                        <a href="#">Términos y Condiciones</a>
                    </div>
                    <div className="content__text">
                        <a href="#">Arrepentimiento de Compra</a>
                    </div>
                </div>

            </div>

            <div className="footer__safeZone">
                <div className="safeZone__title">
                    <h3>SITIO SEGURO</h3>
                </div>
                <div className="safeZone__content">
                    <div className="content__payments">
                        <div className="payment">
                            <img src={cace} alt="cama argentina de comercio electronico" />
                        </div>
                        <div className="payment">
                            <img src={ssl} alt=" certificado ssl" />
                        </div>
                        <div className="payment">
                            <img src={dFiscal} alt="data fiscal" />
                        </div>
                        <div className="payment">
                            <img src={mPago} alt="mercado pago" />
                        </div>
                    </div>
                    <div className="content__text">
                        <h4>Paga en cuotas</h4>
                        <p>a traves de todos los medios de pagos y promociones bancarias y Mercado Pago</p>
                    </div>
                </div>

            </div>

        </div>

    </footer>
  )
}

export default Footer