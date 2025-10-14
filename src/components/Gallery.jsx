import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // show 6 initially

  const images = [
    // Campus Life - Brigada
    { id: 1, src: new URL("../assets/Images/brigada1.jpg", import.meta.url).href, title: "Brigada Eskwela", category: "Campus Life", event: "Brigada" },
    { id: 2, src: new URL("../assets/Images/brigada2.jpg", import.meta.url).href, title: "Brigada Eskwela", category: "Campus Life", event: "Brigada" },
    { id: 3, src: new URL("../assets/Images/brigada3.jpg", import.meta.url).href, title: "Brigada Eskwela", category: "Campus Life", event: "Brigada" },
    { id: 4, src: new URL("../assets/Images/brigada4.jpg", import.meta.url).href, title: "Brigada Eskwela", category: "Campus Life", event: "Brigada" },
    { id: 5, src: new URL("../assets/Images/brigada5.jpg", import.meta.url).href, title: "Brigada Eskwela", category: "Campus Life", event: "Brigada" },
    { id: 6, src: new URL("../assets/Images/brigada6.jpg", import.meta.url).href, title: "Brigada Eskwela", category: "Campus Life", event: "Brigada" },
    
    // Campus Life - CCS Party
    { id: 7, src: new URL("../assets/Images/ccscapade1.jpg", import.meta.url).href, title: "CCS Party", category: "Campus Life", event: "CCS Party" },
    { id: 8, src: new URL("../assets/Images/ccscapade2.jpg", import.meta.url).href, title: "CCS Party", category: "Campus Life", event: "CCS Party" },
    { id: 9, src: new URL("../assets/Images/ccscapade3.jpg", import.meta.url).href, title: "CCS Party", category: "Campus Life", event: "CCS Party" },
    { id: 10, src: new URL("../assets/Images/ccscapade4.jpg", import.meta.url).href, title: "CCS Party", category: "Campus Life", event: "CCS Party" },
    { id: 11, src: new URL("../assets/Images/ccscapade5.jpg", import.meta.url).href, title: "CCS Party", category: "Campus Life", event: "CCS Party" },
    { id: 12, src: new URL("../assets/Images/ccscapade6.jpg", import.meta.url).href, title: "CCS Party", category: "Campus Life", event: "CCS Party" },
    
    // Events - Teachers' Day
    { id: 13, src: new URL("../assets/Images/teacher'sday1.jpg", import.meta.url).href, title: "Teachers' Day", category: "Events", event: "Teachers' Day" },
    { id: 14, src: new URL("../assets/Images/teacher'sday2.jpg", import.meta.url).href, title: "Teachers' Day", category: "Events", event: "Teachers' Day" },
    { id: 15, src: new URL("../assets/Images/teacher'sday3.jpg", import.meta.url).href, title: "Teachers' Day", category: "Events", event: "Teachers' Day" },
    { id: 16, src: new URL("../assets/Images/teacher'sday4.jpg", import.meta.url).href, title: "Teachers' Day", category: "Events", event: "Teachers' Day" },
    { id: 17, src: new URL("../assets/Images/teacher'sday5.jpg", import.meta.url).href, title: "Teachers' Day", category: "Events", event: "Teachers' Day" },
    { id: 18, src: new URL("../assets/Images/teacher'sday6.jpg", import.meta.url).href, title: "Teachers' Day", category: "Events", event: "Teachers' Day" },
    
    // Academics - ACA Assembly
    { id: 19, src: new URL("../assets/Images/𝗔𝗖𝗔𝘀𝘀𝗲𝗺𝗯𝗹𝗲1.jpg", import.meta.url).href, title: "ACA Assembly", category: "Academics", event: "ACA Assembly" },
    { id: 20, src: new URL("../assets/Images/𝗔𝗖𝗔𝘀𝘀𝗲𝗺𝗯𝗹𝗲2.jpg", import.meta.url).href, title: "ACA Assembly", category: "Academics", event: "ACA Assembly" },
    { id: 21, src: new URL("../assets/Images/𝗔𝗖𝗔𝘀𝘀𝗲𝗺𝗯𝗹𝗲3.jpg", import.meta.url).href, title: "ACA Assembly", category: "Academics", event: "ACA Assembly" },
    { id: 22, src: new URL("../assets/Images/𝗔𝗖𝗔𝘀𝘀𝗲𝗺𝗯𝗹𝗲4.jpg", import.meta.url).href, title: "ACA Assembly", category: "Academics", event: "ACA Assembly" },
    { id: 23, src: new URL("../assets/Images/𝗔𝗖𝗔𝘀𝘀𝗲𝗺𝗯𝗹𝗲5.jpg", import.meta.url).href, title: "ACA Assembly", category: "Academics", event: "ACA Assembly" },
    { id: 24, src: new URL("../assets/Images/𝗔𝗖𝗔𝘀𝘀𝗲𝗺𝗯𝗹𝗲6.jpg", import.meta.url).href, title: "ACA Assembly", category: "Academics", event: "ACA Assembly" },
    
    // Academics - Graduation
    { id: 25, src: new URL("../assets/Images/graduation1.jpg", import.meta.url).href, title: "Graduation", category: "Academics", event: "Graduation" },
    { id: 26, src: new URL("../assets/Images/graduation2.jpg", import.meta.url).href, title: "Graduation", category: "Academics", event: "Graduation" },
    { id: 27, src: new URL("../assets/Images/graduation3.jpg", import.meta.url).href, title: "Graduation", category: "Academics", event: "Graduation" },
    { id: 28, src: new URL("../assets/Images/graduation4.jpg", import.meta.url).href, title: "Graduation", category: "Academics", event: "Graduation" },
    { id: 29, src: new URL("../assets/Images/graduation5.jpg", import.meta.url).href, title: "Graduation", category: "Academics", event: "Graduation" },
    { id: 30, src: new URL("../assets/Images/graduation6.jpg", import.meta.url).href, title: "Graduation", category: "Academics", event: "Graduation" },
    
    // Community Outreach - Donation Drive
    { id: 31, src: new URL("../assets/Images/donationdrive1.jpg", import.meta.url).href, title: "Donation Drive", category: "Community Outreach", event: "Donation Drive" },
    { id: 32, src: new URL("../assets/Images/donationdrive2.jpg", import.meta.url).href, title: "Donation Drive", category: "Community Outreach", event: "Donation Drive" },
    { id: 33, src: new URL("../assets/Images/donationdrive3.jpg", import.meta.url).href, title: "Donation Drive", category: "Community Outreach", event: "Donation Drive" },
    { id: 34, src: new URL("../assets/Images/donationdrive4.jpg", import.meta.url).href, title: "Donation Drive", category: "Community Outreach", event: "Donation Drive" },
    { id: 35, src: new URL("../assets/Images/donationdrive5.jpg", import.meta.url).href, title: "Donation Drive", category: "Community Outreach", event: "Donation Drive" },
    { id: 36, src: new URL("../assets/Images/donationdrive6.jpg", import.meta.url).href, title: "Donation Drive", category: "Community Outreach", event: "Donation Drive" },
    
    // Community Outreach - Blood Donation
    { id: 37, src: new URL("../assets/Images/blooddonation1.jpg", import.meta.url).href, title: "Blood Donation", category: "Community Outreach", event: "Blood Donation" },
    { id: 38, src: new URL("../assets/Images/blooddonation2.jpg", import.meta.url).href, title: "Blood Donation", category: "Community Outreach", event: "Blood Donation" },
    { id: 39, src: new URL("../assets/Images/blooddonation3.jpg", import.meta.url).href, title: "Blood Donation", category: "Community Outreach", event: "Blood Donation" },
    { id: 40, src: new URL("../assets/Images/blooddonation4.jpg", import.meta.url).href, title: "Blood Donation", category: "Community Outreach", event: "Blood Donation" },
    { id: 41, src: new URL("../assets/Images/blooddonation5.jpg", import.meta.url).href, title: "Blood Donation", category: "Community Outreach", event: "Blood Donation" },
    { id: 42, src: new URL("../assets/Images/blooddonation6.jpg", import.meta.url).href, title: "Blood Donation", category: "Community Outreach", event: "Blood Donation" },
  ];

  const categories = ["All", "Campus Life", "Events", "Academics", "Community Outreach"];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleToggleImages = () => {
    if (visibleCount < filteredImages.length) {
      setVisibleCount(filteredImages.length); // show all
    } else {
      setVisibleCount(6); // collapse back to 6
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
              setVisibleCount(6); // reset visible count on category change
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
      {filteredImages.length > 6 && (
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
