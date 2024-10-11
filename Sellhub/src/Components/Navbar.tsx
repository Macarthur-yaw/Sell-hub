import {FaSearch,FaAngleDown} from 'react-icons/fa'
import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react'
import { Data, Datatyp } from '../Constant/Data'
// import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { PropsContext } from '../Routes'
import { Link, useNavigate } from 'react-router-dom'
// import { ShoppingCartOutlined } from '@mui/icons-material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

export default function Navbar(){
    const[search,setSearch]=useState('')
    const context=useContext(PropsContext)
    const[showSearch,setShowSearch]=useState(false)
    const navigate=useNavigate()
    if(!context){
        throw new Error('error')
    }
    const {carts}=context.cart
    

const setData=context.dataProd?.setData
    const[cartlength,setCartlength]=useState<number>(0)
  const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
       
    }
    const handleSearch=useCallback(()=>{
        const results= search.toLocaleLowerCase()
        const removedWhitespace=results.trim()
        console.log(removedWhitespace)
        const matchingResult:Datatyp[]=Data.filter((content)=>content.title.toLowerCase().includes(removedWhitespace))
    
   if(matchingResult){
    setData?.(matchingResult)
                     }
    },[search,setData])
    const handleLogin=()=>{
navigate('/login')
    }
    useEffect(()=>{

        if(carts){
          setCartlength(carts.length)  
        }
       
handleSearch()

       
    },[search,handleSearch, cartlength, carts])
    return (
        <div className='flex flex-row items-center lg:justify-around justify-between max-w-[100%] lg:min-w-[80%] p-3 md:p-4'>
            
            <Link to='/'>           
            
            
            <h1 className='font-black text-[22px] tracking-widest'>
    SHOP
</h1>
            </Link>
            


<ul className='lg:flex flex-row items-center gap-10 font-medium hidden'>
    <li className='inline-flex items-center gap-1'>
        Categories
        <FaAngleDown/>
    </li>

    <li>
        Sale
    </li>
    <li>
        NEW
    </li>
    <li>
        Popular
    </li>
    <li>
        Explore
    </li>
</ul>

<div
 className='flex flex-row items-center gap-2'
><span className={` ${showSearch ? 'border-b-[1px] border-gray-600 rounded-br-none rounded-bl-none text-gray-600':''}  py-1  text-[14px] inline-flex items-center gap-6 px-2 w-[64]`}>

{
    showSearch && (    <input type='text' value={search} onChange={(e)=>handleChange(e)} placeholder='Search Product' className='bg-transparent outline-none'/>)
}
<FaSearch onClick={()=>setShowSearch((prevItem=>!prevItem))}/>

</span>
<span onClick={handleLogin}>
    <PersonOutlineOutlinedIcon/>
</span>

<span 

className={` relative md:hidden rounded-full p-1 ${cartlength === 0 ? 'cursor-not-allowed':''}`}>
  <Link to='/carts'><ShoppingCartOutlinedIcon />
  </Link>
    
    <span className='absolute bg-gray-100 top-0 text-[12px] font-medium'>
{cartlength === 0 ? '':cartlength }
    </span>
</span>
</div>
</div>
    )
}