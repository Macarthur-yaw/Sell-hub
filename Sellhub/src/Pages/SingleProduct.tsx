import { useParams } from "react-router"
import { Data } from "../Constant/Data"
import {  useEffect, useState,useContext} from "react"
import { PropsContext } from "../Routes";
import { FaStar,FaStarHalf
 } from "react-icons/fa"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {AnimatePresence, motion} from 'framer-motion'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

export default function SingleProduct(){
   const {id}= useParams()
   const[hidden,setHidden]=useState<boolean>(false)
  const [select,setSelect]=useState<number | undefined>(1)
   const changeNumber=Number(id)
   const singleP=Data.find((content)=>changeNumber===content.id)
   const[img,setImg]=useState<string >(`${singleP?.otherImages.image1}`)
   const [numcarts, setNumcarts] = useState<number[]>([]);
   const[add,setAdd]=useState(false)
     
     const context = useContext(PropsContext);
     
     if (!context) {
         throw new Error("context must be provided");
     }
     
     const { setCarts } = context.cart;
   
  


   console.log(singleP)
   const changeCurrentPic=(imageUrl:string | undefined,index:number)=>{
   setImg(`${imageUrl}`)
  setSelect(index)
  console.log(singleP)
 }


 function addCarts(_id: number ) {
  setNumcarts((prevCarts) => [...prevCarts, _id]);
 
  setAdd(true)
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
        <div className="">
 <div>
  
  <div className="absolute top-0">
  <Snackbar 
  open={add} 
  autoHideDuration={500} 
  onClose={()=>setAdd(!true)}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
>
  <Alert
    severity="success"
    variant="filled"
    sx={{ width: '100%', backgroundColor: 'black' }}
  >
    You have added an item!
  </Alert>
</Snackbar>


  </div>
  
 </div>
            <div className="flex md:flex-row flex-col md:gap-10 gap-4 items-start mx-auto w-fit md:mt-10 ">
                <div>
                <img src={img} className="md:w-[450px] h-[400px]  min-w-[400px] rounded md:h-[450px] p-1 "/>
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
       

                </div>
        {/* <h1>{singleP?.title}</h1> */}
        <span className={`${hidden ? 'flex flex-col relative':' grid grid-cols-1'}   gap-1 p-1`}>

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
    <span>
<h1 className="font-bold md:text-[20px]">
{singleP?.productDetails.name} SAMBA

</h1>
<span className="inline-flex flex-row items-center gap-2 mb-4 mt-4">
 <div className="flex flex-row items-center gap-2">
 <FaStar/>
  <FaStar/>
  <FaStar/>
<FaStarHalf/>
  
  </div>
  

  <h2 className="text-gray-500 font-semibold">42 reviews</h2>
  </span>


<h2 className=" text-[30px] font-semibold tracking-wide">
${singleP?.productDetails.price}.00 
    
</h2>
</span>



<div className="flex flex-col   mt-4">
 <span className="inline-flex mb-2 gap-1">
  
  <h1 className="font-medium">Color</h1>
  <h2 className="text-gray-500 font-semibold">
   * White 
  </h2>
   
 </span>
 <div >

{
  singleP && (
<div className="flex flex-row gap-2  items-center justify-start">
    <img onClick={()=>changeCurrentPic(singleP?.otherImages.image1,singleP.id)} src={singleP?.otherImages.image1} className="w-[60px] bg-cover focus:border-[1px] h-[80px] cursor-pointer"/>
         <img onClick={()=>changeCurrentPic(singleP?.otherImages.image2,singleP.id)} src={singleP?.otherImages.image2} className="w-[60px] h-[80px] cursor-pointer"/>
       <img onClick={()=>changeCurrentPic(singleP?.otherImages.image2,singleP.id)} src={singleP?.otherImages.image2} className="w-[60px] h-[80px] cursor-pointer"/>
         <img onClick={()=>changeCurrentPic(singleP?.otherImages.image2 ,singleP.id)} src={singleP?.otherImages.image2} className="w-[60px] h-[80px] cursor-pointer"/>
     </div>   
  )
}

         
         </div>
      
        </div>
 



<div className="md:mt-6 mt-2">
    <h1 className="font-semibold text-[20px]  mb-2">
        Size 
    </h1>
    <span className="grid grid-cols-5 gap-4">
<h3 className="uppercase text-[16px] rounded px-6 hover:bg-black hover:text-white cursor-pointer p-3 border-[1px] ">
    {singleP?.productDetails.size}
 </h3>
        
 <h3 className="uppercase text-[16px] rounded px-6 hover:bg-black hover:text-white cursor-pointer p-3 border-[1px]">
   {singleP?.productDetails.size}
 </h3>
 <h3 className="uppercase text-[16px] rounded px-6 hover:bg-black hover:text-white cursor-pointer p-3 border-[1px]">
   {singleP?.productDetails.size}
 </h3>
 <h3 className="uppercase text-[16px] rounded px-6 hover:bg-black hover:text-white cursor-pointer p-3 border-[1px]">
   {singleP?.productDetails.size}
 </h3>
 <h3 className="uppercase text-[16px] rounded px-6 hover:bg-black hover:text-white cursor-pointer p-3 border-[1px]">
   {singleP?.productDetails.size}
 </h3>
 <h3 className="uppercase text-[16px] rounded px-6 hover:bg-black hover:text-white cursor-pointer p-3 border-[1px]">
   {singleP?.productDetails.size}
 </h3><h3 className="uppercase text-[16px] rounded px-6 hover:bg-black hover:text-white cursor-pointer p-3 border-[1px]">
   {singleP?.productDetails.size}
 </h3>
 </span>
</div>
</motion.div>
  )
}
</AnimatePresence>
<p className="underline underline-offset-2" onClick={()=>setHidden(preItem=>!preItem)}>{ hidden ? 'See less':'More details'}</p>
      </span>   
        </div>

        <div>
        <span className="flex flex-row mb-4  border-black w-full p-2 gap-1 md:mt-10 mt-1">
      {
        singleP && (
<button
         onClick={()=>addCarts(singleP.id)}
         className="border-[1px] flex-1 inline-flex justify-start gap-20   border-black bg-black rounded text-white md:p-1 p-4 text-lg tracking-wider
           md:text-[20px] md:w-24 md:flex-1">
            <ShoppingCartOutlinedIcon/>
            
            ADD TO CART  
           </button>
        )
      }
         
         <button className="border-[1px] p-2   md:p-1 rounded bg-[#FFFF7]  md:text-[20px]"><FavoriteBorderIcon/></button></span> 
      
 </div>     
        </div>
    )
}