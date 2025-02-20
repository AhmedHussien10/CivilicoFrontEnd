// eslint-disable-next-line react/prop-types
const CustomButton = ({ text, onClick, className }) => {
    return (
        <button
            className={`w-full bg-[#3B5F5D] text-white py-3 rounded-lg cursor-pointer font-bold ${className}`}
            onClick={onClick} // onClick is passed here
        >
            {text}
        </button>
    );
};

export default CustomButton;