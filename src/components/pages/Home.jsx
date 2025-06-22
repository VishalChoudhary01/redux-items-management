import React from 'react';

const Home = () => {
  const images = [
    "https://static.wixstatic.com/media/11062b_7a24382cfac549cb919f5859ed6a80c3~mv2.jpg/v1/crop/x_1938,y_0,w_2438,h_3333/fill/w_534,h_729,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Information%20Technology.jpg",
    "https://static.wixstatic.com/media/11062b_fe91a8caa70d43a38046670159a2d3e9~mv2.jpeg/v1/crop/x_1309,y_0,w_3142,h_3956/fill/w_478,h_728,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Working%20Woman.jpeg",
    "https://static.wixstatic.com/media/11062b_cfb12a194e3748b094c3f4cc0ba7d09c~mv2.jpg/v1/fill/w_476,h_729,fp_0.34_0.30,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Designing%20on%20Laptop.jpg",
    "https://static.wixstatic.com/media/11062b_c1983ca15e58438a85c9e982c3958151~mv2.jpg/v1/fill/w_149,h_213,fp_0.51_0.33,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Work%20From%20Home.jpg",
  ];

  return (
    <div className="w-full bg-white text-center">
      {/* Top Grid with Images and Overlay Text */}
      <div className="relative w-full flex flex-col md:flex-row">
        {images.map((img, index) => (
          <div key={index} className="w-full md:w-1/4 h-[300px] md:h-[500px] overflow-hidden">
            <img src={img} alt={`team-${index}`} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center p-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Empower Your Business with Scalable <br className="hidden md:block" />
            & Skilled Development Teams
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="py-10 px-4 md:px-16 text-center text-gray-800 text-base md:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed">
        At AMRR TechSols, we offer cost-effective, fully-trained teams of web developers, AI/ML Developers and Data Scientist and Engineers to scale your projects and achieve rapid growth — without the hassle of hiring or payroll management.
      </div>

      {/* Button */}
      <div className="pb-10">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 text-sm md:text-base">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Home;
