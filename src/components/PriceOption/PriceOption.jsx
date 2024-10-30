import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className='bg-blue-600 rounded-md p-4 flex flex-col text-white'>
            
            <h2 className="my-2 text-center">
                <span className="text-5xl font-extrabold ">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
             <div className="pl-8 flex-grow">
               {
                 features.map((feature,index) => <Feature key={index}
                 feature={feature}></Feature>)
               }
             </div>
             <button className="mt-12 bg-red-300 w-full 
             py-2 font-bold rounded-lg hover:cursor-pointer
              hover:text-gray-300">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
}

export default PriceOption;