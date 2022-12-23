import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../owl.css';






const OwlCarrousel = () => {




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
                <OwlCarousel items={2}
                    className="owl-theme"
                    loop
                    nav
                    margin={8} >
                    <div ><img className="img" src={'../assets/carousel/img1.webp'} /></div>
                    <div ><img className="img" src={'../assets/carousel/img2.webp'} /></div>
                    <div ><img className="img" src={'../assets/carousel/img3.webp'} /></div>
                    <div ><img className="img" src={'../assets/carousel/img4.webp'} /></div>
                    <div ><img className="img" src={'../assets/carousel/img5.webp'} /></div>
                    <div ><img className="img" src={'../assets/carousel/img6.webp'} /></div>
                    <div ><img className="img" src={'../assets/carousel/img7.webp'} /></div>
                    <div ><img className="img" src={'../assets/carousel/img8.webp'} /></div>
                    <div ><img className="img" src={'../assets/carousel/img9.webp'} /></div>
                    <div ><img className="img" src={'../assets/carousel/img10.webp'} /></div>
                </OwlCarousel>
            </div>

        </div>
    )
}

export default OwlCarrousel

