// eslint-disable-next-line react/prop-types
function InputField({ placeholder, type = "text", className }) {
    return (
        <div className="w-full">
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full rounded-lg bg-[#EEEEEE66] text-black placeholder:text-[#3B5F5D] text-sm focus:outline-none border border-black ${className}`}
                style={{ height: "52px", padding: "12px" }} // Keep height and padding if needed
            />
        </div>
    );
}

export default InputField;