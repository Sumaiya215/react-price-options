import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner';
import { ColorRing } from 'react-loader-spinner';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone =>{
                const obj = {
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData);
            setLoading(false);
        })
    },[])
    return (
        <div>
                 
            {loading && <div><Audio
               height="80"
               width="80"
               radius="9"
               color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
               wrapperClass
                />

         <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
             wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          /> </div>}

             <h2 className="text-5xl">Phones:{phones.length}</h2>
             <BarChart width={1200} height={400} data={phones}>
                   <Bar dataKey="price" fill="royalblue" />
                   <XAxis dataKey="name"></XAxis>
                   <YAxis></YAxis>
                   <Tooltip></Tooltip>
              </BarChart>
        </div>
    );
};

export default Phones;