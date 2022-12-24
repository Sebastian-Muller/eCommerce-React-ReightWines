import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../owl.css';
import { useState } from 'react';

import img1 from '../assets/carousel/img1.webp';
import img2 from '../assets/carousel/img2.webp';
import img3 from '../assets/carousel/img3.webp';
import img4 from '../assets/carousel/img4.webp';
import img5 from '../assets/carousel/img5.webp';
import img6 from '../assets/carousel/img6.webp';
import img7 from '../assets/carousel/img7.webp';
import img8 from '../assets/carousel/img8.webp';
import img9 from '../assets/carousel/img9.webp';
import img10 from '../assets/carousel/img10.webp';




const OwlCarrousel = () => {

    const options = {
        loop: true,
        rtl: true,
        margin: 8,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        dots: false,
        autoWidth:false,
        smartSpeed: 700,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
    
            }
    
        },
    }


    return (
        <div>
            <div class='container-fluid' >
                <div className="row title" style={{ marginBottom: "20px" }} >
                    <div class="col-sm-12 btn btn-info">
                        GIFT
                    </div>
                </div>
            </div>
            <div class='container-fluid' >
                <OwlCarousel
                    className="owl-theme"
                    {...options} >
                    <div ><img className="img" src={img1} /></div>
                    <div ><img className="img" src={img2} /></div>
                    <div ><img className="img" src={img3} /></div>
                    <div ><img className="img" src={img4} /></div>
                    <div ><img className="img" src={img5} /></div>
                    <div ><img className="img" src={img6} /></div>
                    <div ><img className="img" src={img7} /></div>
                    <div ><img className="img" src={img8} /></div>
                    <div ><img className="img" src={img9} /></div>
                    <div ><img className="img" src={img10} /></div>
                </OwlCarousel>
            </div>

        </div>
    )
}

export default OwlCarrousel

