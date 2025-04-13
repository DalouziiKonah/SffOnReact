import React from 'react';
import CarouselConfig from './config/CarouselConfig';

function Carousel() {
  const { images, caption } = CarouselConfig;

  return (
    // enable auto-sliding
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel" // ✅ Enables auto-sliding
      data-bs-interval="2000" // ✅ Sets auto-slide interval to 5 seconds
    >
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner col-lg-6 text-lg-start text-center mb-lg-0">
        {images.map((img, index) => (
          <div
            className={`carousel-item ${img.active ? 'active' : ''}`}
            key={index}
          >
            <img src={img.src} className={img.className} alt={img.alt} />
          </div>
        ))}

        <div className="carousel-caption d-md-block position-absolute top-50 translate-middle-y p-3 text-start ms-5 ms-3">
          <h1
            className="welcome-text fw-bold fs-3 fs-md-1 gleaming-text"
            dangerouslySetInnerHTML={{ __html: caption.heading }}
          />
          <p className="p1 fs-6 fs-md-4">{caption.subheading}</p>
        </div>
      </div>

      <button
        className="carousel-control-prev btn-primary"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
