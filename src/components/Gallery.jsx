import React, { useState } from 'react';
import GalleryConfig from './config/GalleryConfig.js';

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

  return (
    <section className="gallery-container">
      <div className="gallery-header">
        <h2>{GalleryConfig.title}</h2>
        <p>{GalleryConfig.description}</p>
        
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={`gallery-grid ${GalleryConfig.layout.type}`}>
        {sortedItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`gallery-item ${item.featured ? 'featured' : ''}`}
            onClick={() => openLightbox(index)}
            data-aos={"animationType"}
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              loading="lazy"
            />
            <div className="item-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>×</button>
          <button className="nav-btn prev" onClick={() => navigateImage('prev')}>‹</button>
          
          <div className="lightbox-content">
            <img 
              src={sortedItems[currentImageIndex].imageUrl} 
              alt={sortedItems[currentImageIndex].title}
            />
            <div className="lightbox-info">
              <h3>{sortedItems[currentImageIndex].title}</h3>
              <p>{sortedItems[currentImageIndex].description}</p>
            </div>
          </div>
          
          <button className="nav-btn next" onClick={() => navigateImage('next')}>›</button>
        </div>
      )}
    </section>
  );
}

export default Gallery;