import React, { useState } from "react";
import { toast } from "react-toastify";
import '../css/BMICalculator.css';

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advice from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        "You have normal weight. Keep maintaining a healthy lifestyle."
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You are overweight. Consider seeking advice from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist."
      );
    }
  };

  return (
    <section
      className="bmi py-5"
      style={{
        background: "linear-gradient(45deg, #0a2b42, #60698b)",
        color: "whitesmoke",
      }}
    >
      <div className="container">
        <h1 className="text-center mb-5 text-uppercase">BMI CALCULATOR</h1>
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <form
              onSubmit={calculateBMI}
              className="bg-transparent p-3 p-md-4 rounded"
            >
              <div className="mb-3">
                <label className="form-label">Height (cm)</label>
                <input
                  type="number"
                  className="form-control bg-transparent text-white"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                  style={{ borderBottom: "1px solid #fff" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Weight (kg)</label>
                <input
                  type="number"
                  className="form-control bg-transparent text-white"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                  style={{ borderBottom: "1px solid #fff" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select
                  className="form-select bg-transparent text-white"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  style={{ borderBottom: "1px solid #fff" }}
                >
                  <option value="">Select Gender</option>
                  <option value="Male" className="bg-none">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-3 w-100"
              >
                Calculate BMI
              </button>

              {bmi && (
                <p className="mt-3 text-center fs-5">
                  Your BMI is: <strong>{bmi}</strong>
                </p>
              )}
            </form>
          </div>

          {/* Image */}
          <div className="col-12 col-lg-6">
            <img
              src="/bmi.jpg"
              alt="bmiImage"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
