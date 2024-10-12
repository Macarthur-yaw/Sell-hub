import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { PropsContext } from '../Routes';
import { Link, useNavigate } from 'react-router-dom';
import { Data, Datatyp } from '../Constant/Data';
import CloseIcon from '@mui/icons-material/Close';
import NorthWestIcon from '@mui/icons-material/NorthWest';

export default function Navbar() {
    const context = useContext(PropsContext);
    const setShow = context?.showPop?.setShow;
    const show = context?.showPop?.show;

    const [cartLength, setCartLength] = useState<number>(0);
    const data = context?.dataProd?.data;
    const setData = context?.dataProd?.setData;
// const[message,setMessage]=useState(false)
    const navigate = useNavigate();
    const carts = context?.cart.carts;
    const [search, setSearch] = useState('');
const[hidden,setHidden]=useState(false)
    const handleSearch = useCallback(() => {
        const results = search.toLowerCase().trim();
        const matchingResult: Datatyp[] = Data.filter((content) =>
            content.title.toLowerCase().includes(results)
        );

        if (matchingResult) {
            setHidden(true)
            setData?.(matchingResult);
        } 
      
    }, [search, setData]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        setHidden(false)
        if(search.length>0){
        
            handleSearch();
        
        }
     
        
    }, [search, handleSearch]);

    const handleLogin = () => {
        navigate('/login');
    };

    useEffect(() => {
        if (carts) {
            setCartLength(carts.length);
        }
    }, [carts]);

    return (
        <>
            <div className='flex flex-row items-center lg:justify-around justify-between max-w-[100%] lg:min-w-[80%] p-3 md:p-4'>
                <Link to='/'>
                    <h1 className='font-black text-[22px] tracking-widest'>SHOP</h1>
                </Link>

                <div className='flex flex-row items-center gap-2'>
                    <span className='py-1 hidden sm:flex text-[14px] inline-flex items-center gap-6 px-2 w-[64]'>
                        <FaSearch onClick={() => setShow?.((prev) => !prev)} />
                    </span>

                    <span onClick={handleLogin}>
                        <PersonOutlineOutlinedIcon />
                    </span>

                    <span className={`relative md:hidden rounded-full p-1 `}>
                        <Link to='/carts'>
                            <ShoppingCartOutlinedIcon />
                        </Link>
                        <span className='absolute bg-gray-100 top-0 text-[12px] font-medium'>
                            {cartLength === 0 ? '' : cartLength}
                        </span>
                    </span>
                </div>
            </div>
{
    show && (
        <div className='bg-black absolute top-0'>
       
        </div>
    )
}
            {
                show && (
<div onClick={()=>setShow?.(prevValue=>!prevValue)} className='bg-white fixed inset-0 h-screen w-full z-30'>

</div>
    
                )
            }
                
             <section className={`${show ? 'px-2':'px-2'}`}>    
                <div onClick={()=>setShow?.(false)} className={`${show ? 'absolute z-30 top-0 right-0 p-2':'hidden'}`}>
                <CloseIcon />
                </div>
                
                   <div
             onClick={()=>setShow?.(true)}
             className={`${show ? 'flex flex-col  px-2 absolute z-40 w-[90%] left-1/2   transform -translate-x-1/2 ':'flex flex-row items-center px-2'} `}>
                 <div  onClick={()=> setShow?.(!show)} className={`${show ? 'flex flex-row items-center px-2':' flex flex-row items-center px-2 w-full'} border-[1px] border-black border-opacity-80 rounded-lg`}>
                    <span className=''>
                        <FaSearch  className='text-slate-400'/>
                    </span> <input
                            type='text'
                           
                            onChange={handleChange}
                            placeholder='Search Product'
                            className='bg-transparent  outline-none p-1 px-2 w-full'
                        /></div>
                        
                      

                        {
                            hidden && (
                                data?.map((content,index) => (
                                    <div key={index}>
                                        <a href={`/product/${content.id}`}>                                    <div  className={` sm:hidden ${show ? 'flex ':'hidden'} flex-fow hover:underline justify-between gap-2 mt-2 rounded`}>
                                   
                                        <span>{content.title}</span>
                                        <span><NorthWestIcon sx={{fontSize:'13px'}}/></span>
                                    </div>
                                    </a>
                                    </div>
                                ))
                            )
                          } 
                    </div>
        
            
                    
                    
                    </section>
                    
                    
                  </>
    );
}
