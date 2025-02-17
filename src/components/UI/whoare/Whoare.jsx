import whioIam from '../../../assets/whoWeAre/who i am.svg';

const WhoIam = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 md:p-8">
      {/* Wrapper for Image and Text Sections */}
      <div
        className="flex flex-col md:flex-row w-full overflow-hidden gap-4 md:gap-8"
        style={{ border: "4px solid #3B5F5D", borderRadius: "40px" }}
      >
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 overflow-hidden"
          style={{ borderRadius: "20px" }}
        >
          <img
            src={whioIam}
            alt="Civilco"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-8 p-4 md:p-10">
          {/* Flex container for heading and colored div */}
          <div className="flex items-center mb-4 md:mb-20">
            {" "}
            {/* Increased margin-bottom here */}
            <h1
              className="text-2xl md:text-4xl font-semibold mr-2 md:mr-4"
              style={{ color: "#3B5F5D" }}
            >
              WHO WE ARE
            </h1>
            <div
              className="w-20 md:w-30 h-1 ml-2 md:ml-4"
              style={{ backgroundColor: "#C28E21" }}
            ></div>
          </div>
          {/* Updated "Know more about Civilco" text */}
          <p className="text-3xl md:text-5xl font-semibold mb-6 md:mb-15">
            {" "}
            {/* Increased margin-bottom here */}
            Know more about Civilco
          </p>
          <p className="mb-8 md:mb-20 font-medium text-lg md:text-2xl">
            Our platform provides easy access to multiple civil work projects
            with only one mouse click. Sign in to Civilco now to join and enjoy
            all your favorite projects.
          </p>
          <button className="bg-[#3B5F5D] w-full md:w-[165px] h-[50px] md:h-[65px] text-white font-semibold px-4 md:px-6 py-2 rounded-3xl hover:bg-[#C28E21] transition duration-300">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoIam;
