import SubscribeCard from "./SubscribeCard";


export default function Footer(){
    return (
        <div className="bg-black px-4 py-4 flex flex-col-reverse md:flex-row w-full sm:justify-around gap-10 mt-10  sm:items-start">

<span className="">
    <h1 className="text-white  mb-1 font-semibold text-[20px]">
        SELLHUB
    </h1>
    <p className="text-[#e6e2e1] text-sm max-w-[400px]">
        SELLHUB was designed and foundedin 2023 by person. The theme is about sneakers ecommerce that use for shoes selling around the world.
    </p>


    <SubscribeCard/>
</span>
<span className=" flex flex-row justify-between p-2 gap-4">
    <span className="flex flex-col justify-between">
    <ul className="list-none  flex flex-col gap-1">
        <h1 className="text-white text-[20px]">
            Products
        </h1>
        <li className="text-sm md:text-lg text-gray-300 ">
         Shoes
        </li>
        <li className=" text-gray-300 text-sm md:text-lg ">
            Apparel 
        </li>
    </ul>

    <ul className="flex flex-col gap-1">
     
    <h1 className="text-white text-[20px]">
            Featured
        </h1>
     
        <li  className=" text-gray-300  text-sm md:text-lg">
            New Arrivals
        </li>
        <li className=" text-gray-300  text-sm md:text-lg">
            Sale
        </li>
        <li className=" text-gray-300 text-sm md:text-lg ">
            Start Selling
        </li>
    </ul>
    </span>
    <ul className=" flex-col gap-4 hidden">
    <h1 className="text-white text-[20px]">
            Collections
        </h1>
     
        <li className=" text-gray-300  text-sm md:text-lg">
            Nike
        </li>
        <li className=" text-gray-300 text-sm md:text-lg ">
            Adidas
        </li>
        <li className=" text-gray-300  text-sm md:text-lg">
            Vans
        </li>
        <li className=" text-gray-300  text-sm md:text-lg">
            AeroStart
        </li>
        <li className=" text-gray-300 text-sm md:text-lg">
            Compass
        </li>
        <li className=" text-gray-300 text-sm md:text-lg">
            Ventelo
        </li>
    </ul>

<span className="flex flex-col md:justify-between gap-1">
    <ul className="flex flex-col gap-1 pb-2" >
        
    <h1 className="text-white text-[20px]">
            Featured
        </h1>
        <li className=" text-gray-300 text-sm md:text-lg">
            Legal
        </li>
        <li className=" text-gray-300 text-sm md:text-lg">
Privacy 
        </li>
        <li className=" text-gray-300 text-sm md:text-lg">
            Terms and Conditions 
        </li>
        </ul>

        <ul className="flex flex-col gap-1">
        <h1 className="text-white text-[20px]">
            Featured
        </h1>
 
            <li className=" text-gray-300 text-sm md:text-lg">
                Support 
            </li>
            <li className=" text-gray-300 text-sm md:text-lg">
                Contact us 
            </li>
            <li className=" text-gray-300 text-sm md:text-lg">
                Give Feedback 
            </li>
            <li className=" text-gray-300 text-sm md:text-lg">  
                Help center
            </li>
        </ul></span>
</span>


        </div>
    )
}