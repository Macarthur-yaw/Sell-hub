import { useEffect,useState } from "react"

export default function CheckOut(){
    const[datas,setDatas]=useState([])
const [nums,setNums]=useState([])
    useEffect(()=>{
const url='https://restcountries.com/v3.1'
// const urld='https://restcountries.com/v3.1/currency/'
const fetchData=async (url:string)=>{
    const getData=await fetch(`${url}/all`)
    const data=await getData.json()
    
if(data){
    setDatas(data.map((country: { name: { common: any } }) => country.name.common));
}
}

fetchData(url)

const fetchCodes=async (url:string)=>{
    const getData=await fetch(`${url}/alpha/cca2`)

    const dataDone=await getData.json()
    if(dataDone){
        setNums(dataDone)
    }
}
fetchCodes(url)

// console.log(datas)
    },[])
console.log(datas)
 console.log(nums)
    return (
        <div className="p-1">
            <section>

            </section>

            <section className=" mt-2 ">
                <span className="pt-4">
<h1 className="px-3 font-medium font-2xl">

Ship to
    
</h1>
               
                </span>
                <form className="flex flex-col gap-2 p-2">
                    <select className="border-[1px] p-1 rounded w-[40%] text-slate-500">
                    {datas?.map((content,index)=>(
                        <option key={index} value={content}>
  {content}
                        </option>
                    ))}     </select>  


                    <div className="flex flex-col gap-2">
                    <span className=" inline-flex gap-2">
                        <input type="text" placeholder="Enter your name" className="border-[1px] p-1 rounded"/>
                        <input type='text' placeholder="Last name" className="border-[1px] p-1 rounded"/>
                        </span>


                        <span >
                            <input type='text' placeholder="Street Address" className="border-[1px] p-1 rounded"/>
                        </span>
<br/>
                        <span className="flex flex-col gap-1">
                            <input type='text' placeholder="City" className="border-[1px] p-1 rounded"/>
                            <input type='text' placeholder="State/Province/Region" className="border-[1px] p-1 rounded"/>
                            <input type='text' placeholder="Zip Code" className="border-[1px] p-1 rounded"/>
                        </span>

                        <span className="inline-flex gap-1">
                        <input type='text' placeholder="Email" className="border-[1px] p-1 rounded"/>
                        <input type='text' placeholder="Confirm Email" className="border-[1px] p-1 rounded"/>
                        </span>


                        <div>
<span>

</span>

<input type='text' placeholder="Phone number (require)" className="border-[1px] p-1 rounded"/>
                        </div>

                        <button className="border-[1px] bg-black text-white p-1 rounded min-w-[40%] ">Done</button>
                    </div>

                </form>
                </section>

                <section>
<span>
    <h1>
        Item()
    </h1>


</span>

<span>
    Order total 
</span>
<button>Confirm and pay </button>
                </section>
        </div>
    )
}