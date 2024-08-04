function Slider(){
    return(
    <>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://img.pikbest.com/wp/202404/vibrant-orange-e-commerce-made-easy-smartphone-checkout-and-cardboard-box-delivery-on-background-3d-rendering_9799414.jpg!sw800" className="d-block w-100" alt="..." style={{ width: '100%', height: '90vh' }} />
                </div>
                <div className="carousel-item">
                <img src="https://miro.medium.com/v2/resize:fit:960/1*7YNJyJgUc06DzUj1kfwOEQ.png" className="d-block w-100" alt="..."style={{ width: '100%', height: '90vh' }} />
                </div>
                <div className="carousel-item">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-e-commerce-in-india-3d-rendering-for-social-media-and-websites-image_3637552.jpg" className="d-block w-100" alt="..."style={{ width: '100%', height: '90vh' }} />
                </div>
                <div className="carousel-item">
                <img src="https://ecommercegermany.com/wp-content/uploads/2024/01/how-to-sell-more-in-cee-in-2024-2-1170x693.png" className="d-block w-100" alt="..."style={{ width: '100%', height: '90vh' }} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}

export default Slider;