import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    { imgUrl: "/pricing.jpg", title: "QUARTERLY", price: 18000, length: 3 },
    { imgUrl: "/pricing.jpg", title: "HALF_YEARLY", price: 34000, length: 6 },
    { imgUrl: "/pricing.jpg", title: "YEARLY", price: 67000, length: 12 },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <h1 className="text-center mb-5">ELITE EDGE FITNESS PLANS</h1>
        <div className="row g-4 justify-content-center">
          {pricing.map((element) => (
            <div key={element.title} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="card flex-fill position-relative shadow-lg">
                <img
                  src={element.imgUrl}
                  alt={element.title}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="title mb-3">
                    <h1 className="h4 text-primary">{element.title}</h1>
                    <h1 className="h6">PACKAGE</h1>
                    <h3>Rs {element.price}</h3>
                    <p>For {element.length} Months</p>
                  </div>
                  <div className="description d-flex flex-column gap-2">
                    <p>
                      <Check /> Equipment
                    </p>
                    <p>
                      <Check /> All Day Free Training
                    </p>
                    <p>
                      <Check /> Free Restroom
                    </p>
                    <p>
                      <Check /> 24/7 Skilled Support
                    </p>
                    <p>
                      <Check /> 20 Days Freezing Option
                    </p>
                    <Link
                      to={"/"}
                      className="btn btn-primary mt-3 align-self-start"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
