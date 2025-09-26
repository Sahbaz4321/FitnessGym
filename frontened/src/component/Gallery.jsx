import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <section className="py-5 bg-dark">
      <div className="container">
        <h1 className="text-primary text-center mb-4">BETTER BEATS BEST</h1>

        <div className="row g-3">
          {gallery.map((img, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <img
                src={img}
                alt={`galleryImage-${index}`}
                className="img-fluid rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
