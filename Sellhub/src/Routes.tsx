import { Route, Routes } from "react-router";
import SingleProduct from "./Pages/SingleProduct";
import Home from "./Pages/Home";
import React, {  useEffect } from "react";
import Carts from "./Pages/Carts";
import { Suspense } from "react";
import { createContext, useState } from "react";
import Login from "./Pages/Login";
import Homepage from "./Homepage";
import { Data, Datatyp } from "./Constant/Data";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Checkout from './Pages/Checkout'
import Signup from "./Pages/Signup";
import Saved from "./Pages/Saved";
interface ContextValues{
cart:{  carts:number[],
  setCarts:React.Dispatch<React.SetStateAction<number[]>>
},
dataProd?:{
data:Datatyp[],
setData:React.Dispatch<React.SetStateAction<Datatyp[]>>
}
,showPop?:{
  show:boolean,
  setShow:React.Dispatch<React.SetStateAction<boolean>>
}
}
export const PropsContext=createContext<ContextValues | undefined >(undefined)
export default function RoutePage(){
  const [loading,setLoading]=useState(true)
  const [carts,setCarts]=useState<number[]>([])
  const[data,setData]=useState<Datatyp[]>(Data)
  const[show,setShow]=useState(false)
 

useEffect(()=>{
  
  const timer=setTimeout(() => {
    setLoading(false)
  }, 5000);

  return ()=>{
    clearTimeout(timer)
  }
},[])

return (
<>
        



<PropsContext.Provider value={{cart:{carts,setCarts},dataProd:{data,setData},showPop:{show,setShow}}}>

<Routes>

    <Route element={<Homepage/>}>
    <Route path='/product/:id' element={<SingleProduct />}/>
  <Route path="/" element={<Home/>}/>
  
  <Route path="/carts" element={<Suspense fallback={loading && 'loading...'}>
    {!loading ? <Carts/>: (
    <Stack sx={{ width: '100%', color: 'grey.500',position:"fixed",top:"0" }} spacing={2}>
    
    <LinearProgress color="inherit" />
  </Stack>
  )}
    </Suspense>} />

    <Route path="/saved" element={<Saved/>}/> 
  </Route>
<Route path="/login" element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/checkout' element={<Checkout/>}/>
</Routes>
</PropsContext.Provider>
</>
  )
}