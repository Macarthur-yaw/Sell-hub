import { useEffect, useState } from "react"

export default function Saved(){
  const[loading,setloading]=useState(false)
    useEffect(()=>{
const timer=setTimeout(() => {
    setloading(true)
}, 2000);
return ()=>{clearTimeout(timer)}
    },[])
    return (
        <div>
           {loading && (
            <div>
                <span><h1>Weelcome</h1></span>
                </div>
           )}
        </div>
    )
}