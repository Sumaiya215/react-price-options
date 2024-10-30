import { IoIosCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-end">
        <IoIosCheckmarkCircle className="text-xl text-green-300 mr-2">

        </IoIosCheckmarkCircle>{feature}</p>
            
        </div>
    );
};

export default Feature;