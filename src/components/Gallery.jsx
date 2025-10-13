import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially

  const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/300x200?text=Campus+Life+1",
      title: "Campus Life 1",
      category: "Campus Life",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/300x200?text=Event+1",
      title: "Event 1",
      category: "Events",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/300x200?text=Academics+1",
      title: "Academics 1",
      category: "Academics",
    },
    {
      id: 4,
      src: "https://timogkatagalugan.com/wp-content/uploads/2023/03/photo_2023-03-29_11-06-36.jpg",
      title: "Campus Life 2",
      category: "Campus Life",
    },
    {
      id: 5,
      src: "https://timogkatagalugan.com/wp-content/uploads/2023/03/photo_2023-03-29_11-06-36.jpg",
      title: "Event 2",
      category: "Events",
    },
    {
      id: 6,
      src: "https://timogkatagalugan.com/wp-content/uploads/2023/03/photo_2023-03-29_11-06-36.jpg",
      title: "Academics 2",
      category: "Academics",
    },
    {
      id: 7,
      src: "https://via.placeholder.com/300x200?text=Campus+Life+3",
      title: "Campus Life 3",
      category: "Campus Life",
    },
    {
      id: 8,
      src: "https://via.placeholder.com/300x200?text=Event+3",
      title: "Event 3",
      category: "Events",
    },
    {
      id: 9,
      src: "https://via.placeholder.com/300x200?text=Academics+3",
      title: "Academics 3",
      category: "Academics",
    },
  ];

  const categories = ["All", "Campus Life", "Events", "Academics"];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleToggleImages = () => {
    if (visibleCount < filteredImages.length) {
      setVisibleCount(filteredImages.length); // show all
    } else {
      setVisibleCount(3); // collapse back to 3
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Gallery</h2>

      {/* Filter Buttons */}
      <div className="text-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn mx-2 ${
              selectedCategory === category
                ? "btn-success"
                : "btn-outline-success"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setVisibleCount(3); // reset visible count on category change
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="row g-4">
        {visibleImages.map((img) => (
          <div key={img.id} className="col-sm-6 col-md-4">
            <div className="card shadow-sm border-0">
              <img
                src={img.src}
                className="card-img-top"
                alt={img.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title mb-0">{img.title}</h6>
                <small className="text-muted">{img.category}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More / Show Less Button */}
      {filteredImages.length > 3 && (
        <div className="text-center mt-4">
          <button className="btn btn-success px-4" onClick={handleToggleImages}>
            {visibleCount < filteredImages.length ? "See More" : "Show Less"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
