// import React from "react";

// const WorkoutSessions = () => {
//   return (
//     <section className="py-5 bg-light">
//       <div className="container">
//         <div className="row mb-5">
//             <div className="col-md-6 mb-3 mb-md-0">
//         <h1>TOP WORKOUT SESSION</h1>
//  <p className="text-muted">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
//           quisquam. Eaque alias, blanditiis quidem maiores illo unde ipsam!
//         </p>
//         <img src="/img5.jpg" alt="workout" />

//             </div>

//             <div className="col-md-6">
//                <div className="mb-5">
//           <h1 className="fw-bold mb-3">FEATURED BOOTCAMPS</h1>
//           <p className="text-muted mb-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit quasi sunt amet rerum accusamus odio eveniet unde?
//           </p>
//           <div className="row g-3">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i} className="col-md-6 col-lg-3">
//                 <div className="card h-100 border-secondary text-dark hover-effect">
//                   <div className="card-body d-flex flex-column gap-2">
//                     <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
//                     <p className="card-text">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe repellendus nemo sit facere ipsam!
//                     </p>
//                   </div>  
//             </div>
// </div>
//             ))}
// </div>
// </div>        
       
//     </div>
     
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkoutSessions;

import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          {/* Left side: Top Workout Session + Image */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h1>TOP WORKOUT SESSION</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam. Eaque alias, blanditiis quidem maiores illo unde ipsam!
            </p>
            <img src="/img5.jpg" alt="workout" className="img-fluid rounded" />
          </div>

          {/* Right side: Featured Bootcamps */}
       <div className="col-12 col-md-6">
  <div className="mb-5">
    <h1 className="fw-bold mb-3">FEATURED BOOTCAMPS</h1>
    <p className="text-muted mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit quasi sunt amet rerum accusamus odio eveniet unde?
    </p>

    {/* Cards stacked vertically, width 100% of container, height auto */}
    <div className="d-flex flex-column gap-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="card text-dark  w-100"
        >
          <div className="card-body d-flex flex-column gap-2">
            <h5 className="card-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
