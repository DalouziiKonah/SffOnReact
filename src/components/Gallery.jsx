import React, { useState } from 'react';


function Gallery({GalleryConfig}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get unique categories
  const categories = ['all', ...new Set(GalleryConfig.items.map(item => item.category))];

  // Filter items by category
  const filteredItems = selectedCategory === 'all' 
    ? GalleryConfig.items 
    : GalleryConfig.items.filter(item => item.category === selectedCategory);

  // Sort featured items first if enabled
  const sortedItems = GalleryConfig.layout.featuredFirst
    ? [...filteredItems].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    : filteredItems;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next'
      ? (currentImageIndex + 1) % sortedItems.length
      : (currentImageIndex - 1 + sortedItems.length) % sortedItems.length;
    setCurrentImageIndex(newIndex);
  };

  // Determine column classes based on layout type
  const getGridClasses = () => {
    switch(GalleryConfig.layout.type) {
      case 'masonry':
        return 'col-sm-6 col-md-4 col-lg-3';
      case 'grid':
      default:
        return 'col-sm-6 col-md-4 col-lg-3';
      case 'carousel':
        return 'col-12';
    }
  };

  return (
    <section className="container gallery-container py-4" id="gallery">
      <div className="gallery-header text-center mb-4">
        <h2>{GalleryConfig.title}</h2>
        <p className="lead">{GalleryConfig.description}</p>
        
        <div className="gallery-filters btn-group flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn btn-outline-secondary ${selectedCategory === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-3">
        {sortedItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`${getGridClasses()} ${item.featured ? GalleryConfig.layout.featuredClass || 'col-lg-6' : ''}`}
            onClick={() => openLightbox(index)}
            data-aos={"animationType"}
          >
            <div className="gallery-item h-100 position-relative overflow-hidden rounded">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="img-fluid w-100 h-100 object-fit-cover"
                loading="lazy"
              />
              <div className="item-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3 text-white">
                <h3 className="h5">{item.title}</h3>
                <p className="small mb-0">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox position-fixed  start-0 w-100 h-100 d-flex align-items-center justify-content-center">
          <button className="close-btn position-absolute top-0 end-0 m-4 fs-1 bg-transparent border-0" onClick={closeLightbox}>×</button>
          <button className="nav-btn prev position-absolute start-0 ms-4 fs-1 bg-transparent border-0" onClick={() => navigateImage('prev')}>‹</button>
          
          <div className="lightbox-content container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <img 
                  src={sortedItems[currentImageIndex].imageUrl} 
                  alt={sortedItems[currentImageIndex].title}
                  className="img-fluid rounded"
                />
                <div className="lightbox-info mt-3">
                  <h3>{sortedItems[currentImageIndex].title}</h3>
                  <p>{sortedItems[currentImageIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="nav-btn next position-absolute end-0 me-4 fs-1 bg-transparent border-0" onClick={() => navigateImage('next')}>›</button>
        </div>
      )}
    </section>
  );
}

export default Gallery;