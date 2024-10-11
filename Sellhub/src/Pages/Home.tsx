import Card from '../Components/Card'
import {    useCallback, useContext, useEffect, useState } from "react";
import { HomeData } from "../Constant/HomeData";
import Product from "./Product";
import { motion } from "framer-motion";
import FooterCard from "../Components/FooterCard";
import Footer from "../Components/Footer";
import { PropsContext } from '../Routes';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Home(){
const[ind,setInd]=useState<number>(1)
const[loading,setLoading]=useState(false)
const[values,setValues]=useState({
  value:'',
  price:0,
  size:0,
  type:''
})
const context=useContext(PropsContext)
const data=context?.dataProd
const setData=context?.dataProd?.setData
const handleIndex=(index:number)=>{
setInd(index)
}

const filterSearch = useCallback(
  (values: { value: string,price:number,size:number,type:string }) => {

    if (values) {
const{value,price,size,type}=values
const numberChanged=Number(price)
// const sizeChanged=Number(price)
// console.log(price)


if(value || price || size || type){
  const newData=data?.data.filter((content)=>value ? content.title === value :content || numberChanged ? content.productDetails.price===numberChanged:content )
//  console.log(newData)
 if(newData){
  setLoading(true)
 }
  if (newData && JSON.stringify(newData) !== JSON.stringify(data?.data)) {
  setData?.(newData);
 }


}


    //   const newData: Datatyp[] | undefined = data?.data.filter(
    //     (content) => content.title === values.value);
    // }
    }
  },
  [data?.data,setData]
);


const handleAutomatic=useCallback(()=>{
  let index=ind
  index++
  
  setInd(index)

},[ind])
const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
  setLoading(false)
setValues({...values,[e.target.name]:e.target.value})  
}
useEffect(()=>{
  const intervalId=setInterval(()=>{
 // console.log('hello')
 
 
handleAutomatic()
if(ind>=HomeData.length){
setInd(1)
}

  //index++
 
  },6000)
  return ()=>{
    clearInterval(intervalId)
  }
 
},[handleAutomatic,ind])  
 
useEffect(()=>{
setLoading(true)
  filterSearch(values)
  if(values){
  }
  console.log(values)
  
},[filterSearch,values,data])
  return (
<>

<div >

  <div className="px-2" >
{
  HomeData.map((content,index)=>(
    <motion.div
    initial={{scale:1,x:0,opacity:0.95}}
    animate={{opacity:ind === content.id ? 1: 0 }
    
  }
  
    whileHover={{scale:1.01}}
    transition={{duration:1}}
  
    key={index} className={`${content.id === ind ? '':'hidden'} rounded-md   text-white flex flex-row items-end bg-black   mt-6 shadow-2xl min-w-[85%] lg:max-w-6xl mx-auto `}>
<Card title={content.title} content={content.content} subContent={content.subContent}/>

      </motion.div>
  ))
}
  </div>

<span className="flex flex-row lg:w-fit  w-fit mx-auto justify-start   gap-2 lg:mt-4 mt-10 lg:mx-auto ">
<button onClick={()=>handleIndex(1)} className={`p-1  h-1 w-1 rounded-lg text-slate-600 shadow-md ${ind === 1 ?  'bg-gray-500 w-2 h-2':'bg-gray-200' }`}></button>
<button onClick={()=>handleIndex(2)}  className={`p-1  h-1 w-1 rounded-lg text-slate-600 shadow-md ${ind === 2 ? 'bg-gray-500 w-2 h-2':'bg-gray-200' }`}></button>
<button onClick={()=>handleIndex(3)}  className={`p-1  h-1 w-1 rounded-lg text-slate-600 shadow-md ${ind === 3 ? 'bg-gray-500 w-2 h-2':'bg-gray-200' }`}></button>

</span>


<div className="flex flex-row px-2 items-center justify-between min-w-[85%] lg:max-w-6xl mx-auto mt-10">

{/* <span className="flex flex-row gap-4">
  <button className="bg-gray-100 p-2 rounded-md  ">Price</button>
  <button className="bg-gray-100 p-2 rounded-md ">Color</button>
  <button className="bg-gray-100 p-2 rounded-md ">
    Style 
  </button>
  <button className="bg-gray-100 p-2 rounded-md ">Colour</button>
</span> */}



  
<button >
</button>
</div>


</div>
<div>
<span className=" ">
            <h1 className=" font-semibold text-xl mt-1 lg:w-[85%]   mx-auto  px-2">
            Today Best Deals!     </h1>
           </span>

           <Product/>
</div>


<div className="mt-10">
  <span className="text-center ">
    <h1 className="font-bold md:text-[30px] text-xl tracking-wide">
      Shop Now, Goodlook Later 
    </h1>

    <p className="text-gray-600 text-sm p-2 sm:text-[20px]">
      We have a bunch collection for you! let's go explore and find your dream shoes, make it happen.
    </p>
  </span>


  <span className=" mt-4 w-full flex flex-row sm:gap-4 gap-2  justify-center  ">
  
    <select
   name='value'
    onChange={handleChange}
    className="bg-gray-100 text-gray-700 p-1 sm:p-2 border-[1px] rounded-2xl">
      <option value='all'>All</option>
      <option  value='yeezy'>Nike</option>
      <option value='adidas'>Adidas</option>
   
    </select>

    <select
    name='price' onChange={handleChange}
    className="bg-gray-100 text-gray-700 sm:p-2 p-1 border-[1px] rounded-2xl">
    <option defaultValue='true'>Price</option>
    <option value={100}>100</option>
    <option value={200}>200</option>
   
    </select>
    
    
    <select
    name='size' onChange={handleChange}
    className="bg-gray-100 text-gray-700 sm:p-2 p-1 border-[1px] rounded-2xl">
    <option>Size</option>
    <option value={30}>30</option>
    <option value={31}>31</option>
   
    </select>
    
  <select
    name='type' onChange={handleChange}
    className="bg-gray-100 text-gray-700 sm:p-2 p-1 border-[1px] rounded-2xl">
    <option value='Type'>Type</option>
    <option value='Type'>New</option>
    <option value='Adidas'>Used</option>
   
    </select> 
    
    {/* <Link to='/carts'>Carts</Link> */}
  </span>
</div>

<div>
  {!loading &&(<div >

    <Box sx={{ display: 'flex',justifyContent:'center',marginTop:'4%' }}>
      <CircularProgress color='inherit' size={20} />
    </Box>
  </div>)}
 
<Product/>
<Product/>
<div className=' w-fit mx-auto mt-10 mb-2'>
<button className="bg-black text-white rounded-2xl p-2 px-4 text-[16px]">View more</button>

</div>
</div>


<div>
 <FooterCard/> 
  </div>

  <div>
    <Footer/>
  </div>
</>
  )
}