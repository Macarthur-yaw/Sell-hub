import { useParams } from "react-router"
import { Data } from "../Constant/Data"
import {  useEffect, useState,useContext} from "react"
import { PropsContext } from "../Routes";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {AnimatePresence, motion} from 'framer-motion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ExpandLess } from "@mui/icons-material";

export default function SingleProduct(){
   const {id}= useParams()
   const[hidden,setHidden]=useState<boolean>(false)
  const [select,setSelect]=useState<number | undefined>(1)
   const changeNumber=Number(id)
   const singleP=Data.find((content)=>changeNumber===content.id)
   const[img,setImg]=useState<string >(`${singleP?.otherImages.image1}`)
   const [numcarts, setNumcarts] = useState<number[]>([]);
   
     
     const context = useContext(PropsContext);
     
     if (!context) {
         throw new Error("context must be provided");
     }
     
     const { setCarts } = context.cart;
    const data=context.dataProd?.data
  


   console.log(singleP)
   const changeCurrentPic=(imageUrl:string | undefined,index:number)=>{
   setImg(`${imageUrl}`)
  setSelect(index)
  console.log(singleP)
 }


 function addCarts(_id: number ) {
  setNumcarts((prevCarts) => [...prevCarts, _id]);
 
  
}
useEffect(() => {
  if (numcarts.length > 0) {
      
      setCarts?.([...numcarts]); 
  }
  
  
}, [numcarts, setCarts]);
useEffect(()=>{
setSelect(1)
},[])  
    return (
        <div className="mt-4">
 <div>
  
  <div className="">
  

  </div>
  
 </div>
            <div className="flex md:flex-row flex-col md:gap-10 gap-4 items-start mx-auto w-fit md:mt-10 ">
                <div className="relative">
                <img src={img} className="md:w-[450px] h-[400px]  min-w-[400px] rounded md:h-[450px]  "/>
         <span className="absolute top-2 right-4">
                <FavoriteBorderIcon/>
         </span>
                <div >

                  {
                    singleP && (
        <div className="flex flex-row  gap-[2px] md:gap-1 justify-start md:mt-2  px-1">
                      <img onClick={()=>changeCurrentPic(singleP.otherImages.image1,1)} src={singleP?.otherImages.image1} 
                      className={`${select === 1 ? 'border-[1px] border-black rounded':''} w-[100px] h-[100px] cursor-pointer`}/>
                      <img onClick={()=>changeCurrentPic(singleP.otherImages.image2,2)} src={singleP?.otherImages.image2} 
                      className={`${select === 2 ? 'border-[1px] border-black rounded':''} w-[100px] h-[100px] cursor-pointer`}/>
                    
             </div>        
                    )
                  }
    
      
      
        </div>
       
        <span>
<h1 className="font-bold md:text-[20px] text-3xl mt-4">
{singleP?.productDetails.name} SAMBA

</h1>



<h2 className=" text-[30px] mt-2 font-semibold tracking-wide">
${singleP?.productDetails.price}.00 
    
</h2>
</span>
                </div>
        {/* <h1>{singleP?.title}</h1> */}
       
        </div>

        <div>
        <span className="flex  flex-row mb-6   border-black w-full p-2 gap-1 md:mt-10 mt-1">
      {
        singleP && (
<button
         onClick={()=>addCarts(singleP.id)}
         className="border-[1px] flex-1 sticky bottom-0 inline-flex justify-center gap-20   border-black bg-black rounded-md text-white md:p-1 p-4 text-lg tracking-wider
           md:text-[20px] md:w-24 md:flex-1">
           
            
            ADD TO CART  
           </button>
        )
      }
         
         </span> 
      
 </div>  

      <span className={`${hidden ? 'flex flex-col relative':' grid grid-cols-1'}   gap-1 p-1`}>


<p className="inline-flex justify-between p-1 border-b-[0.2px] pb-2 border-slate-300" onClick={()=>setHidden(preItem=>!preItem)}>
  <span className="text-2xl uppercase tracking-wide font-medium text-slate-800">
    The Details
  </span>

  <span> {hidden ? (<ExpandLess/>):  (<ExpandMoreIcon sx={{fontSize:'30px'}}/>)}
  </span>
  </p>

  <AnimatePresence>
{
  hidden && (
    <motion.div
    initial={{y:-20,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.05}}
    exit={{opacity:0,y:-20}}
    className="relative"
    >
  



<div className="flex flex-col   mt-4">
 {/* <span className="inline-flex mb-2 gap-1">
  
  <h1 className="font-medium">Color</h1>
  <h2 className="text-gray-500 font-semibold">
   * White 
  </h2>
   
 </span> */}
 <div >

{/* {
  singleP && (
<div className="flex flex-row gap-2  items-center justify-start">
    <img onClick={()=>changeCurrentPic(singleP?.otherImages.image1,singleP.id)} src={singleP?.otherImages.image1} className="w-[60px] bg-cover focus:border-[1px] h-[80px] cursor-pointer"/>
         <img onClick={()=>changeCurrentPic(singleP?.otherImages.image2,singleP.id)} src={singleP?.otherImages.image2} className="w-[60px] h-[80px] cursor-pointer"/>
       <img onClick={()=>changeCurrentPic(singleP?.otherImages.image2,singleP.id)} src={singleP?.otherImages.image2} className="w-[60px] h-[80px] cursor-pointer"/>
         <img onClick={()=>changeCurrentPic(singleP?.otherImages.image2 ,singleP.id)} src={singleP?.otherImages.image2} className="w-[60px] h-[80px] cursor-pointer"/>
     </div>   
  )
} */}

         
         </div>
      
        </div>
 



<div className="md:mt-6 mt-2 p-2">
    <h1 className="font-semibold text-2xl  mb-2">
        ADIDAS SAMBA
    </h1>
 <span className="mt-2">
 <h3 className="text-xl font-medium py-2">Highlight</h3>
 <ul className="list-disc pl-4">
 <li className=" text-lg mb-2">Black</li>
<li className=" text-lg mb-2" >
Call leather 
</li> 
<li className=" text-lg mb-2" >
Smooth grain
</li>
<li className=" text-lg mb-2" >Signature</li>
<li className=" text-lg mb-2" >
Rubber shoe</li>

<li className=" text-lg mb-2"  >
Rubber sole 
</li>
 </ul>
 </span>


<span className="mt-2">
 <h3 className="text-xl font-medium py-2">Composition</h3>
 <ul className="list-disc pl-4">
 <li className="text-lg mb-2">Black</li>
<li className=" text-lg mb-2" >
Call leather 
</li> 

 </ul>
 </span>

</div>
</motion.div>
  )
}
</AnimatePresence>
      </span> 


      <span className="mt-2 w-full">
      <p className="inline-flex justify-between p-1 mt-2 w-full border-b-[0.2px] pb-2 border-slate-300" onClick={()=>setHidden(preItem=>!preItem)}>
  <span className="text-2xl uppercase tracking-wide font-medium text-slate-800">
    Deliry  Details
  </span>

  <span> {hidden ? (<ExpandLess/>):  (<ExpandMoreIcon sx={{fontSize:'30px'}}/>)}
  </span>
  </p>
      </span>


      <section className="mt-10 p-1 ">
      
      <span>
      <h1 className="text-xl tracking-wider">Recommendations</h1>
      </span>
      <div className="flex overflow-x-scroll gap-10 space-x-4">
      {
      data?.map((content,index)=>{

        return (
          <div key={index} className="relative mt-4 p-2 min-w-[300px]  ">
<img src={content.imageUrl} className="h-[300px] object-cover w-full"/>

<span className="px-2">
  <h1 className="text-2xl font-medium">{content.title}</h1>

  <h2>canvas shorts </h2>

  <h3 className="mt-4 text-xl tracking-wide">$650</h3>
</span>

<span className="absolute top-4 right-4">
  <FavoriteBorderIcon/>
</span>
            </div>
        )
      })
      }
      </div>
      </section>
        </div>
    )
}