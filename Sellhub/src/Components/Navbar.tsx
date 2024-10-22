import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { PropsContext } from '../Routes';
import { Link, useNavigate } from 'react-router-dom';
import { Data, Datatyp } from '../Constant/Data';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import NorthWestIcon from '@mui/icons-material/NorthWest';
export default function Navbar() {
    const context = useContext(PropsContext);
    const setShow = context?.showPop?.setShow;
    const show = context?.showPop?.show;
    const [menu, setMenu] = useState(false);
    const [cartLength, setCartLength] = useState<number>(0);
    const data = context?.dataProd?.data;
    const setData = context?.dataProd?.setData;
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const carts = context?.cart.carts;
    const [search, setSearch] = useState('');
    const [hidden, setHidden] = useState(false);

    const handleSearch = useCallback(() => {
        const results = search.toLowerCase().trim();
        const matchingResult: Datatyp[] = Data.filter((content) =>
            content.title.toLowerCase().includes(results)
        );

        if (matchingResult) {
            setHidden(true);
            setData?.(matchingResult);
        }
    }, [search, setData]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        setHidden(false);
        if (search.length > 0) {
            handleSearch();
        }
    }, [search, handleSearch]);

    // const handleLogin = () => {
    //     navigate('/login');
    // };

    useEffect(() => {
        if (carts) {
            setCartLength(carts.length);
        }
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            const parsedName = JSON.parse(storedName);
            parsedName && setName(parsedName);
        }
    }, [carts]);

    const handleLogout = () => {
        localStorage.removeItem('userName');
        setName('');
        setMenu(false);
    };

    return (
        <>
            <div className='flex flex-row items-center lg:justify-around justify-between max-w-[100%] lg:min-w-[80%] p-3 md:p-4'>
                <Link to='/'>
                    <h1 className='font-black text-[22px] tracking-widest'>SHOP</h1>
                </Link>

                <div className='flex flex-row items-center gap-2'>
                <span className='py-1 hidden  sm:flex text-[14px] inline-flex items-center gap-6 px-2 w-[64]'>
                        <FaSearch onClick={() => setShow?.((prev) => !prev)} />
                    </span>

                  
                    <span className={`relative md:hidden rounded-full p-1 `}>
                        <Link to='/carts'>
                            <ShoppingCartOutlinedIcon />
                        </Link>
                        <span className='absolute bg-gray-100 top-0 text-[12px] font-medium'>
                            {cartLength === 0 ? '' : cartLength}
                        </span>
                    </span>
                    <span onClick={() => setMenu(true)}>
                        <MenuIcon />
                    </span>
                </div>
            </div>

            {menu && (
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-50`} onClick={() => setMenu(false)} />
            )}

            <div
                className={`fixed top-0 left-0 w-[250px] bg-white h-full z-50 transform transition-transform duration-300 ${
                    menu ? 'translate-x-0' : '-translate-x-full'
                } flex flex-col justify-between`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="font-extrabold text-xl tracking-wide">Sell Hub</h1>
                    <CloseIcon className="cursor-pointer" onClick={() => setMenu(false)} />
                </div>

                <div className="p-4 flex-grow">
                    <div className="space-y-6 text-lg">
                        {name && <span><h1>Hello, {name}</h1></span>}
                        <span onClick={() => navigate('/saved')} className="block font-semibold flex gap-2 items-center">
                            <FavoriteBorderIcon />
                            Saved Items
                        </span>
                        <span className="block font-semibold inline-flex gap-2 items-center">
                            <CardTravelIcon />
                            Orders
                        </span>

                        <div className="mt-6">
                            <h1 className="font-bold text-md mb-4">Our Brands</h1>
                            <ul className="space-y-4">
                                <li className="text-gray-700 hover:text-black cursor-pointer">Nike</li>
                                <li className="text-gray-700 hover:text-black cursor-pointer">Adidas</li>
                                <li className="text-gray-700 hover:text-black cursor-pointer">Puma</li>
                                <li className="text-gray-700 hover:text-black cursor-pointer">Reebok</li>
                                <li className="text-gray-700 hover:text-black cursor-pointer">New Balance</li>
                            </ul>
                        </div>

                        <span className='px-4'>
                            <h1>Help Center</h1>
                        </span>
                    </div>
                </div>

                {name ? (
                    <div className="p-4 border-t">
                        <button
                            onClick={handleLogout}
                            className="bg-black  w-full text-white font-bold px-4 py-2 rounded hover:bg-red-700 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="p-4 border-t">
                        <button
                            onClick={() => navigate('signin')}
                            className="bg-black  w-full text-white font-bold px-4 py-2 rounded hover:bg-red-700 transition-colors"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>


            <div>
            {
    show && (
        <div className='bg-black absolute top-0'>
       
        </div>
    )
}
            {
                show && (
<div onClick={()=>setShow?.(prevValue=>!prevValue)} className='bg-white overflow-none fixed inset-0 h-screen w-full z-40'>

</div>
    
                )
            } 

                <div className={`${show ? 'px-2':'px-2'}`}>
                <div onClick={()=>setShow?.(false)} className={`${show ? 'absolute z-40 top-0 right-0 p-2':'hidden'}`}>
                <CloseIcon />
                </div>
                <div
             onClick={()=>setShow?.(true)}
             className={`${show ? 'flex flex-col  px-2 absolute z-40 w-[90%] left-1/2   transform -translate-x-1/2 ':'flex flex-row items-center px-2'}  `}>
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
         
                </div>
            </div>
        </>
    );
}
