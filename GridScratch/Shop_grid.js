import React, { useState } from 'react';
import { IconStarFilled, IconStar } from '@tabler/icons-react';
import ProductModal from '../Modals/Prod.modal'; // Make sure to create this component
import "./../../../sass/components/Shop_grid.scss";

// Placeholder imports for product images
import Product1 from '../../../../resources/sass/img/tuf.svg';
import Product2 from '../../../../resources/sass/img/tuf.svg';
import Product3 from '../../../../resources/sass/img/tuf.svg';
import Product4 from '../../../../resources/sass/img/tuf.svg';
import Product5 from '../../../../resources/sass/img/tuf.svg';

const ShopGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      id: 1, 
      name: "Razer HKC NTX", 
      price: "P2,000", 
      rating: 5, 
      image: Product1,
      specs: {
        processor: "Intel Core i7-12700H",
        ram: "16GB DDR5",
        storage: "1TB NVMe SSD",
        display: "15.6\" FHD 144Hz",
        graphics: "NVIDIA RTX 3060",
        os: "Windows 11 Home",
        battery: "Up to 6 hours",
        weight: "2.3 kg"
      }
    },
    { 
      id: 2, 
      name: "TITAN 18 HX AI A2XW", 
      price: "P2,000", 
      rating: 4, 
      image: Product2,
      specs: {
        processor: "Intel Core i9-13900HX",
        ram: "32GB DDR5",
        storage: "2TB NVMe SSD",
        display: "18\" QHD 240Hz",
        graphics: "NVIDIA RTX 4090",
        os: "Windows 11 Pro",
        battery: "Up to 5 hours",
        weight: "3.5 kg"
      }
    },
    { 
      id: 3, 
      name: "ASUS TUF GMJING A14", 
      price: "P2,000", 
      rating: 4, 
      image: Product3,
      specs: {
        processor: "AMD Ryzen 7 6800H",
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        display: "14\" FHD 144Hz",
        graphics: "NVIDIA RTX 3050",
        os: "Windows 11 Home",
        battery: "Up to 8 hours",
        weight: "1.7 kg"
      }
    },
    { 
      id: 4, 
      name: "TITAN 18 HX AI A2XW", 
      price: "P2,000", 
      rating: 5, 
      image: Product4,
      specs: {
        processor: "Intel Core i9-13900HX",
        ram: "64GB DDR5",
        storage: "4TB NVMe SSD",
        display: "18\" 4K 120Hz",
        graphics: "NVIDIA RTX 4090",
        os: "Windows 11 Pro",
        battery: "Up to 4 hours",
        weight: "3.8 kg"
      }
    },
    { 
      id: 5, 
      name: "Acer Predator Helios", 
      price: "P2,000", 
      rating: 4, 
      image: Product5,
      specs: {
        processor: "Intel Core i7-13700HX",
        ram: "32GB DDR5",
        storage: "1TB NVMe SSD",
        display: "17.3\" QHD 165Hz",
        graphics: "NVIDIA RTX 4080",
        os: "Windows 11 Home",
        battery: "Up to 5 hours",
        weight: "3.0 kg"
      }
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="product-rating">
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < rating ? (
              <IconStarFilled className="star filled" size={16} />
            ) : (
              <IconStar className="star" size={16} />
            )}
          </span>
        ))}
      </div>
    );
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="product-grid">
      <div className="grid-container">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => handleProductClick(product)}
          >
            <div className="product-top">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              {renderStars(product.rating)}
              <p className="product-price">{product.price}</p>
              <div className="button-container">
                <button 
                  className="add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to cart functionality here
                  }}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Empty divs to maintain 4-column layout */}
        <div className="product-card empty"></div>
        <div className="product-card empty"></div>
        <div className="product-card empty"></div>
      </div>

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </section>
  );
};

export default ShopGrid;
