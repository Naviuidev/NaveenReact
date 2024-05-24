import React, { useState } from "react";
import "./Clints.css"; // Import CSS file for styling

const Clients = ({ setCategorySelected }) => { // Pass setCategorySelected as a prop
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCategorySelected(false); // Set category selected status to false when a category is selected
    };

    // Define a mapping of categories to arrays of image URLs
    const categoryImages = {
        "Airport & Aviation": [
            "https://www.piloggroup.com/img/Client%20Logos/Aeronautical-Defence/ABU_Dhabi_Airports.png",
            "https://www.piloggroup.com/img/Client%20Logos/Aeronautical-Defence/Al_Maktoum_Airports.png",
            "https://www.piloggroup.com/img/Client%20Logos/Aeronautical-Defence/Client-Logos-09.jpg",
            // Add more image URLs for this category as needed
        ],
        "Cement": [
            "url_for_cement_image_1",
            "url_for_cement_image_2",
            "url_for_cement_image_3",
            // Add more image URLs for this category as needed
        ],
        "Chemicals and Refineries": [
            "url_for_chemicals_image_1",
            "url_for_chemicals_image_2",
            "url_for_chemicals_image_3",
            // Add more image URLs for this category as needed
        ],
        // Add more categories and corresponding image URL arrays as needed
    };

    return (
        <div>
            <section className="pt-3">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        {/* Your buttons */}
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-center">
                                {[
                                    "Airport & Aviation",
                                    "Cement",
                                    "Chemicals and Refineries",
                                    "Defence",
                                    "Education",
                                    "Energy & Utilities",
                                    "Food & Beverages",
                                    "Iron & Steel",
                                    "Manufacture",
                                    "Mining",
                                    "Oil & Gas",
                                    "Telecommunications",
                                    "Textile",
                                    "Transport",
                                ].map((category, index) => (
                                    <div key={index} className="m-1">
                                        <button
                                            type="button"
                                            className="text-dark clintBtn px-3 bg-white border rounded-pill"
                                            onClick={() => handleCategoryClick(category)}
                                        >
                                            {category}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Render content based on selected category */}
            {selectedCategory && (
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="my-2">
                                    <h4 className="text-dark">{selectedCategory}</h4>
                                    {/* Render specific content for the selected category here */}
                                    <div className="d-flex align-items-center">
                                        {categoryImages[selectedCategory].map((imageUrl, index) => (
                                            <img key={index} src={imageUrl} alt={`${selectedCategory} ${index}`} className="img-fluid mx-1" style={{ maxWidth: "100%", height: "100px" }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
           
        </div>
    );
};

export default Clients;
