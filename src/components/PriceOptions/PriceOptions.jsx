import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "duration": "monthly",
            "description": "Access to gym during standard hours with basic amenities.",
            "features": [
              "Unlimited gym access",
              "Locker room access",
              "Standard support"
            ]
          },
          {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "duration": "monthly",
            "description": "Extended gym hours and additional classes included.",
            "features": [
              "Unlimited gym access",
              "Locker room access",
              "Group classes (5 per month)",
              "One personal training session",
              "24/7 support"
            ]
          },
          {
            "id": 3,
            "name": "Premium Plan",
            "price": 79.99,
            "duration": "monthly",
            "description": "All-inclusive access with extra benefits and flexible options.",
            "features": [
              "24/7 gym access",
              "Locker room with towel service",
              "Unlimited group classes",
              "Three personal training sessions",
              "Access to sauna and pool",
              "Priority customer support"
            ]
          },
          {
            "id": 4,
            "name": "Annual Membership",
            "price": 499.99,
            "duration": "yearly",
            "description": "Year-round access with exclusive benefits and cost savings.",
            "features": [
              "Unlimited gym access all year",
              "Discounted personal training sessions",
              "Access to exclusive members-only classes",
              "10% off at the gym café",
              "Access to all premium facilities"
            ]
          },
          {
            "id": 5,
            "name": "Student Plan",
            "price": 19.99,
            "duration": "monthly",
            "description": "Discounted rate for students with ID verification.",
            "features": [
              "Unlimited gym access",
              "Locker room access",
              "Access to select group classes",
              "Basic support",
              "Flexible pause options for semesters"
            ]
          }
        ]
      
      

    return (
        <div className="m-12">
          <h2 className="text-4xl my-10 font-bold text-center">Best Prices in the Town</h2>
            <div className="flex flex-col my-6 md:grid grid-cols-3 gap-6">
            {
               priceOptions.map(option => <PriceOption key={option.id} 
               option={option}></PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOptions;