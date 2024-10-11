import { useCallback, useContext, useEffect, useState } from "react";
import { PropsContext } from "../Routes";
// import { Data } from "./Constant/Data";
import { Add,Remove,DeleteOutlineSharp } from "@mui/icons-material";
// import { filter } from "framer-motion/client";
import { useNavigate } from "react-router";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
type newData = {
  id: number;
  title: string;
  imageUrl: string;
  count:number;
  productDetails: { name: string; price: number; size: number };
  otherImages: { image1: string; image2: string };
};
export default function Carts() {
  const [cartsitems, setCartitems] = useState<newData[]>([]);
const context = useContext(PropsContext);
const[sumprice,setSumprice]=useState<number>(0)
  if (!context) {
    throw new Error("context is not defined");
  }
const navigate=useNavigate()
  const {carts,setCarts}=context.cart
 const data=context.dataProd?.data
 
  function increaseCounter(id:number){
    console.log(id)
  setCartitems(prevItems=>prevItems.map(content=>content.id === id ? {...content,count:content.count+1} :content)) 
  }

   function decreaseCounter(id:number){
const data=cartsitems.map((content)=>content.id ===id ? {...content,count:content.count-1}:content)
console.log(data)
setCartitems(data)
   }
  const removeCarts=(_id:number)=>{
  console.log(_id)
  console.log(carts)
  const newData=carts.filter(content=>content!==_id)

setCarts(newData)
    
    
  }
  
  const compareAndFind = useCallback(() => {
    const arrayElements: newData[] = [];

console.log(carts)
let obj: { [key: number]: number } = {};
    for (let i = 0; i < carts.length; i++) {
      const key = carts[i]; 
    
  
     
      if (!obj[key]) {
          obj[key] = 0;
      }
  
      obj[key]++; 


    }
  //what do i want to do now
  //find the element by id and increase the count to the number right 
for (const x in obj){
  console.log(obj[x])
  const filteredElements=data?.filter((content)=>content.id === Number(x))
 const generateNewArray=filteredElements?.map((content)=> ({...content,count:obj[x]}))
if(generateNewArray){
  arrayElements.push(...generateNewArray)

}
 
}
console.log(arrayElements)
//  const {number}=obj
   
    setCartitems((prev) => {
      if (JSON.stringify(prev)
         !== JSON.stringify(arrayElements)) {
        return arrayElements;
      }
      return prev;
    });
  }, [carts]);

  useEffect(()=>{
    console.log(cartsitems)
  let countNumberOf=0
  let initialValue=cartsitems[0]

  for(let i=0; i<cartsitems.length;i ++){
    if(initialValue === cartsitems[i]){
      countNumberOf++
      console.log(countNumberOf)
    }
    initialValue=cartsitems[i]
  }
    const newPrice =cartsitems.map((content)=>content.productDetails.price*content.count)

   const findSum=()=>{
    let sum=0
    for(let i=0; i<newPrice.length;i++){
      sum+=newPrice[i]

    }
  if(sum>0){
setSumprice(sum)
  }
   }
   findSum()
    
  },[cartsitems])

  useEffect(() => {
    compareAndFind();
    

    
    
  }, [carts]); 

  return (
    <div className="p-2 bg-slate-150 h-screen">

      {
        carts.length < 1 && (
          <div className=" mt-10">

            <span className="text-center flex flex-col gap-4">
<p className="bg-slate-200 w-fit mx-auto p-4 rounded-full">
<ShoppingCartOutlinedIcon sx={{fontSize:'40px'}}/>
</p>

              <h1 className="font-semibold text-3xl">
                No item in carts 
              </h1>
              <h2>
                Browse our categories and discover our best deals.
              </h2>
            </span>
          </div>
        )
      }

        {
            cartsitems.map((content,index)=>(
                <div key={index} className="flex flex-col gap-2 mt-4 border-[1px] bg-white border-white rounded-lg shadow-2xl ">
         
         <div className="flex flex-row justify-start items-start gap-10 px-4  p-2">
       
       <img src={content.imageUrl}  className="w-[200px] h-[150px] rounded" />
       <span className=" flex flex-col gap-1">
          <h2 className="text-md font-normal ">{content.title}-106 yeezy-Bottom Freezer Double Door Fridge </h2>
            <p>Yeezy</p>
            <p className="text-sm text-slate-150">In stock</p>
            <p className="font-semibold text-2xl">${content.productDetails.price}.00</p>
         
         </span>  

</div>     
<div className="flex flex-row justify-between p-2 px-4">

       <button 
       onClick={()=>removeCarts(content.id)}
       className="text-[20px] inline-flex items-center font-semibold">
        <DeleteOutlineSharp/>
        Remove</button>  
         <span className=" flex flex-row gap-10 items-center">
  
    <button
    onClick={()=>decreaseCounter(content.id)}
    className="bg-black rounded shadow-lg  text-white p-1 md:p-2 border-black"
    
    ><Remove/></button>
  <h1 className="font-semibold text-3xl">

    {content.count < 1 ? '1' :(content.count) }
  </h1>
  <button
  onClick={()=>increaseCounter(content.id)}
  className="bg-black rounded shadow-lg text-white p-1 md:sp-2 border-black"><Add/></button>  
</span>
            </div> 


                    </div>
            ))
        }
   
      <div >
        
             
      <span className="bg-white mt-2">
{carts.length < 1 ?(
<div className="border-[1px] mt-6 w-fit mx-auto">
<button 
onClick={()=>navigate('/')}
className="w-full bg-black   text-lg     font-semibold tracking-widest  text-white p-2 px-4 rounded-md shadow-md">

    Start Shopping
    
</button>
</div>
):(

<button 
onClick={()=>navigate('/checkout')}
className="w-full bg-black font-semibold tracking-widest  text-white p-2 rounded-md shadow-md">

    CHECKOUT ${sumprice && (sumprice)}

    
</button>

) }                         </span>
          
          
         

         

           </div>

          </div>
        
    
  );
}
