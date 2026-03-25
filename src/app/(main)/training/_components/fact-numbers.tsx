import React from "react";

type Props = {};

const FactNumbersComponent = (props: Props) => {
  return (
    // Main container with a dark background for the section
    // Use 'items-center' to vertically align content in the middle
    <div className="min-h-[600px] lg:min-h-[500px] bg-white dark:bg-neutral-700 w-full flex items-center justify-center py-[5rem]">
      
      {/* Content Wrapper (90% width on mobile, 80% on desktop) */}
      <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12">
        
        {/* === LEFT COLUMN: TEXT CONTENT === */}
        <div className="flex-1 flex flex-col items-start justify-center gap-4 order-2 lg:order-1">
          
          <p className="text-sm lg:text-base text-secondary-pink font-normal uppercase">
            Nexainnov Academy
          </p>
          
          <p className="text-primary-blue dark:text-neutral-200 text-4xl lg:text-5xl font-semibold leading-tight">
            How about some fact numbers about us ?
          </p>
          
          <div className="text-wrap text-neutral-800 dark:text-neutral-400 leading-7 font-normal text-base mt-4">
            Our expert-led programs focus on practical, hands-on learning in areas like Infor, IBM i (AS/400), JD Edwards and SAP.
          </div>
          

        </div>
        
        {/* === RIGHT COLUMN: IMAGE === */}
        {/* Use 'flex-1' to make it take up roughly half the space */}
        <div className="flex-1 w-full lg:w-auto order-1 lg:order-2">
          
          {/* The image component using the PUBLIC URL path */}
          <img 
            src="/images/training-get-started-bg.jpg" // <-- CORRECT PUBLIC PATH
            alt="An instructor teaching a group of professional students" 
            // Tailwind classes for styling the image
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
                  </div>

      </div>
    </div>
  );
};

export default FactNumbersComponent;