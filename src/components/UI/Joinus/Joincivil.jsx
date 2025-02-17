const JoinCivil = () => {
    return (
      <div className="p-4 md:p-8">
        {/* Flex container for text and circle */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* Text on the left */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Join any civil project with only{" "}
              <span className="text-[#C28E21]">One Mouse Click</span>
            </h1>
          </div>
  
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Circle */}
            <div className="w-[120px] h-[120px] md:w-[173px] md:h-[177px] rounded-full bg-[#3B5F5D] text-center text-6xl md:text-8xl text-white flex items-center justify-center">
              6+
            </div>
  
            {/* Text and second paragraph */}
            <div className="flex flex-col gap-2 text-center md:text-left">
              {/* First text */}
              <p className="text-2xl md:text-[28px] font-semibold text-[#C28E21]">
                Civils contracted with and still going up
              </p>
  
              {/* Second paragraph */}
              <p className="text-base md:text-[18px] font-medium text-black max-w-[400px]">
                We dedicate all our time to provide more civils in our website to
                increase the variety of options to our website volunteers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default JoinCivil;
  