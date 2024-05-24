import React from "react";
import "./Marquee.css"; // Import CSS file for styling

const Marquee = () => {
  return (
    <div className="marquee-container py-5">
      <div className="marquee">
        {/* Duplicate the images for infinite loop */}
        {[...Array(3)].map((_, index) => (
          <React.Fragment key={index}>
            <img
              src="https://www.piloggroup.com/img/Client%20Logos/Cement/Aditya_MP_Birla%20Group.jpg"
              alt="Image 1"
            />
            <img
              src="https://www.piloggroup.com/img/Client%20Logos/Cement/Birla_Cement.jpg"
              alt="Image 2"
            />
            <img
              src="https://www.piloggroup.com/img/Client%20Logos/Cement/Birla_White_Cement.jpg"
              alt="Image 3"
            />
            <img
              src="https://www.piloggroup.com/img/Client%20Logos/Cement/Nuvoco.jpg"
              alt="Image 4"
            />
            <img
              src="https://www.piloggroup.com/img/Client%20Logos/Cement/PPC_Cement.jpg"
              alt="Image 5"
            />
            <img
              src="https://www.piloggroup.com/img/Client%20Logos/new/logos-106.png"
              alt="Image 6"
            />
            <img
              src="https://www.piloggroup.com/img/Client%20Logos/new/logos-110.png"
              alt="Image 7"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
