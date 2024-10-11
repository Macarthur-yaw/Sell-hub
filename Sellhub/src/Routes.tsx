import { Route, Routes } from "react-router";
import SingleProduct from "./Pages/SingleProduct";
import Home from "./Pages/Home";
import React, { useEffect } from "react";
import Carts from "./Pages/Carts";
import { Suspense } from "react";
import { createContext, useState } from "react";
import Login from "./Pages/Login";
import Homepage from "./Homepage";
import { Data, Datatyp } from "./Constant/Data";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Checkout from './Pages/Checkout'
interface ContextValues{
cart:{  carts:number[],
  setCarts:React.Dispatch<React.SetStateAction<number[]>>
},
dataProd?:{
data:Datatyp[],
setData:React.Dispatch<React.SetStateAction<Datatyp[]>>
}
}
export const PropsContext=createContext<ContextValues | undefined >(undefined)
export default function RoutePage(){
  const [loading,setLoading]=useState(true)
  const [carts,setCarts]=useState<number[]>([])
  const[data,setData]=useState<Datatyp[]>(Data)
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

<PropsContext.Provider value={{cart:{carts,setCarts},dataProd:{data,setData}}}>

<Routes>
    <Route element={<Homepage/>}>
  <Route path="/" element={<Home/>}/>
  <Route path='/product/:id' element={<SingleProduct />}/>
  <Route path="/carts" element={<Suspense fallback={loading && 'loading...'}>
    {!loading ? <Carts/>: (
    <Stack sx={{ width: '100%', color: 'grey.500',position:"fixed",top:"0" }} spacing={2}>
    
    <LinearProgress color="inherit" />
  </Stack>
  )}
    </Suspense>} />
  </Route>
<Route path="/login" element={<Login/>}/>
<Route path='/checkout' element={<Checkout/>}/>
</Routes>
</PropsContext.Provider>
</>
  )
}