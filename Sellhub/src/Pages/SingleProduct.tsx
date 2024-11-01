import { useParams } from "react-router";
import { Data } from "../Constant/Data";
import { useEffect, useState, useContext } from "react";
import { PropsContext } from "../Routes";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { AnimatePresence, motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandLess } from "@mui/icons-material";

export default function SingleProduct() {
    const { id } = useParams();
    const [hidden, setHidden] = useState<boolean>(false);
    const [select, setSelect] = useState<number | undefined>(1);
    const [showSizeOptions, setShowSizeOptions] = useState<boolean>(false); 
    const changeNumber = Number(id);
    const singleP = Data.find((content) => changeNumber === content.id);
    const [img, setImg] = useState<string>(`${singleP?.otherImages.image1}`);
    const [numcarts, setNumcarts] = useState<number[]>([]);
    const context = useContext(PropsContext);
    const[favs,setFavs]=useState<number[]>([])
const handleFavorites=(id:number | undefined)=>{
// get the id of the element 
//add the id to an array if the id of the element is defined 
//set it to the localStorage Item 
console.log(id)
if (id){
    setFavs(prevValue=>[...prevValue,id])
}


}
    if (!context) {
        throw new Error("context must be provided");
    }

    const { setCarts } = context.cart;
    const data = context.dataProd?.data;

    const changeCurrentPic = (imageUrl: string | undefined, index: number) => {
        setImg(`${imageUrl}`);
        setSelect(index);
    };

    function addCarts(_id: number | undefined) {
        if (_id) {
            setNumcarts((prevCarts) => [...prevCarts, _id]);
        }
    }

    useEffect(() => {
        if (numcarts.length > 0) {
            setCarts?.([...numcarts]);
        }
    }, [numcarts, setCarts]);

    useEffect(() => {
        setSelect(1);
        console.log(favs)

        if(favs){
            
        }
    }, [favs]);

    return (
        <div className=" lg:px-[60px] px-[10px] ">
            <div className=" border p-2 rounded-md mb-2 bg-white md:gap-10 gap-4 items-start mx-auto w-full md:mt-2 mt-4">
                <div className="flex flex-col xl:flex-row lg:gap-6   w-full h-full ">
                  <div className="relative xl:w-1/2">
                    <img src={img} className="xl:w-full object-cover  aspect-square   rounded 2xl:min-h-[750px]" />
                    <span onClick={()=>handleFavorites(singleP?.id)} className="absolute rounded border-2 p-2 top-2 right-4">
                        <FavoriteBorderIcon />
                    </span>
                    </div>
               
                   <div className="flex flex-col-reverse  h-full xl:w-1/2  "> 
                   <section className="mt-8 p-1 w-full  ">
                <span>
                    <h1 className="text-xl tracking-wider">Recommendations</h1>
                </span>
                <div className="lg:flex grid grid-cols-2 lg:flex-row min-w-[200px]  gap-2 lg:min-h-[325px]  mt-2 ">
                    {data?.map((content, index) => (
                        <div key={index} className="relative cursor-pointer p-2 lg:flex-1  border bg-white rounded-lg">
                            <img src={content.imageUrl} className="  object-cover aspect-square bg-white"/>
                            <span className="px-2">
                                <h1 className="text-lg font-medium">{content.title}</h1>
                                <h2>Canvas shorts</h2>
                                <h3 className="mt-4 text-lg tracking-wide">$650</h3>
                            </span>
                            <span className="absolute top-4 right-4">
                                <FavoriteBorderIcon />
                            </span>
                        </div>
                    ))}
                </div>
            </section>

                

                    <div className="relative w-full">
                    <button 
                        onClick={() => setShowSizeOptions(!showSizeOptions)}
                        className="mt-4 border-[1px] border-black bg-black text-white py-2 px-4 rounded w-full"
                    >
                        Select Size
                    </button>

                   
                    <AnimatePresence>
                        {showSizeOptions && (
                            <>
                        
                                <motion.div
                                    onClick={() => setShowSizeOptions(false)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="fixed inset-0 bg-black bg-opacity-5 z-40"
                                ></motion.div>

           
                                <motion.div
                                    initial={{ y: 300, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 300, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="fixed bottom-0 left-0 right-0 bg-white p-4 z-50 shadow-lg"
                                >
                                    <h2 className="text-xl mb-4">Choose your size:</h2>
                                    <div className="flex gap-4">
                                        <button className="border hover:bg-gray-200 py-2 px-4 w-full">7</button>
                                        <button className="border hover:bg-gray-200 py-2 px-4 w-full">8</button>
                                        <button className="border hover:bg-gray-200 py-2 px-4 w-full">9</button>
                                        <button className="border hover:bg-gray-200 py-2 px-4 w-full">10</button>
                                    </div>
                                    <button 
                                        onClick={() => setShowSizeOptions(false)}
                                        className="mt-4 border-[1px] border-black bg-black text-white py-2 px-4 rounded w-full"
                                    >
                                        Select
                                    </button>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => addCarts(singleP?.id)}
                        className="mt-6 border-[1px] border-black bg-black text-white py-2 px-4 rounded z-20 w-full "
                    >
                        ADD TO CART
                    </button>
                </div>
                <span className={`${hidden ? 'flex flex-col relative' : 'grid grid-cols-1'} gap-1 p-1`}>
                <p className="inline-flex justify-between p-1 border-b-[0.2px] pb-2 border-slate-300" onClick={() => setHidden(prev => !prev)}>
                    <span className="text-xl uppercase tracking-wide font-medium text-slate-800">The Details</span>
                    <span>{hidden ? (<ExpandLess />) : (<ExpandMoreIcon sx={{ fontSize: '30px' }} />)}</span>
                </p>
                <AnimatePresence>
                    {hidden && (
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.05 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="md:mt-6 mt-2 p-2">
                                <h1 className="font-semibold text-xl mb-2">ADIDAS SAMBA</h1>
                                <h3 className="text-lg font-medium py-2">Highlight</h3>
                                <ul className="list-disc pl-4">
                                    <li className="text-base mb-2">Black</li>
                                    <li className="text-base mb-2">Call leather</li>
                                    <li className="text-base mb-2">Smooth grain</li>
                                    <li className="text-base mb-2">Signature</li>
                                    <li className="text-base mb-2">Rubber shoe</li>
                                    <li className="text-base mb-2">Rubber sole</li>
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </span>
            <div>
                        {singleP && (
                            <div className="flex flex-row gap-2 justify-start md:mt-2 px-1">
                                <img onClick={() => changeCurrentPic(singleP.otherImages.image1, 1)} src={singleP?.otherImages.image1} 
                                     className={`${select === 1 ? 'border-[1px] border-black rounded' : ''} w-[100px] h-[100px] cursor-pointer bg-white`} />
                                <img onClick={() => changeCurrentPic(singleP.otherImages.image2, 2)} src={singleP?.otherImages.image2} 
                                     className={`${select === 2 ? 'border-[1px] border-black rounded' : ''} w-[100px] h-[100px] cursor-pointer bg-white`} />
                            </div>
                        )}
                    
                    
                    </div>

                    <span>
                        <h1 className="font-bold md:text-[20px] text-xl mt-4">
                            {singleP?.productDetails.name} SAMBA
                        </h1>

                        <h2 className="text-[28px] mt-2 font-semibold tracking-wide">
                            ${singleP?.productDetails.price}.00
                        </h2>
                    </span>

               


                    </div>
                </div>

                
            </div>

            

        </div>
    );
}
