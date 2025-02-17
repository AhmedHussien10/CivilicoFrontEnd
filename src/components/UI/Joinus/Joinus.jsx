import phone from "../../../assets/Joinus/phone.jpg";
import JoinCivil from "./Joincivil";

const JoinUs = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div
          className="relative rounded-lg p-8 text-white flex flex-col md:flex-row items-center justify-between h-auto lg:h-[269px]" // Override height for lg screens
          style={{
            width: "100%",
            maxWidth: "1568px",
            padding: "20px 40px", // Adjusted padding for mobile and small screens
            borderRadius: "40px",
            background: `
              linear-gradient(0deg, #FEFFEF, #FEFFEF),
              radial-gradient(170.09% 184.59% at 124.04% 140%, #3B5F5D 35.4%, #3A3F42 67.4%, #2E3133 77.9%),
              linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
            `,
            backgroundBlendMode: "multiply",
          }}
        >
          {/* Text Section */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Join Us As A Civil And Enjoy
            </h1>
            <p className="text-base md:text-lg">
              Civilin contracted with and still going up
            </p>
          </div>

          {/* Image with "Look Out" Animation */}
          <img
            src={phone}
            alt="Decorative Image"
            className="w-[100px] md:w-[196.403px] h-[200px] md:h-[426.006px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] rotate-12 rounded-[22.28px] object-cover transition-transform duration-300 hover:scale-110 hover:translate-x-[40px] hover:translate-y-[-20px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          />

          {/* Button */}
          <button className="bg-black w-full md:w-[165px] h-[50px] md:h-[65px] text-white font-semibold px-4 md:px-6 py-2 rounded-3xl hover:bg-[#C28E21] transition duration-300 mt-8 md:mt-0">
            About Us
          </button>
        </div>
      </div>
      <JoinCivil />
    </>
  );
};

export default JoinUs;
