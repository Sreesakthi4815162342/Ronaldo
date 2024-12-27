function Gallery() {
    return(
        <div className="container py-5">
            <h3 className="text-center">Gallery</h3>
        <div className="row g-4 pt-3">
            <div className="col-md-4 d-flex justify-content-center">
                <img src="https://i.pinimg.com/474x/f2/53/43/f253438604294c88db8c6a54626cd98f.jpg" alt="ronaldo.img" className="gallery-img shadow"></img>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <img src="https://i.pinimg.com/474x/8d/17/5d/8d175dd9f2c6fd7acd2f630ee5c36a9d.jpg" alt="ronaldo.img" className="gallery-img shadow"></img>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <img src="https://i.pinimg.com/736x/f8/32/cb/f832cbbe1a009e0c11b9442b183d386a.jpg" alt="ronaldo.img" className="gallery-img shadow"></img>
            </div>
        </div>
        

        </div>
    )
}

export default Gallery