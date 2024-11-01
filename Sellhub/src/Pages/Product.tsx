import { useNavigate } from "react-router";
import { useContext} from "react";
import { PropsContext } from "../Routes";

// import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function Product() {
    
      const navigate = useNavigate();
      const context = useContext(PropsContext);
    function changeProduct(id: number) {
        navigate(`/product/${id}`);
    }
    const data = context?.dataProd?.data;
   

    
    
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-1 lg:w-[92vw] w-[100%]  gap-4 px-2 mx-auto mt-4">
            {data?.map((content) => (
                <div key={content.id} className="border-[1px]  cursor-pointer rounded-md md:shadow-md">
                  
                    
                        <div onClick={() => changeProduct(content.id)} className="  ">
                          <div className="relative ">
                            <img
                                src={content.imageUrl}
                                className=" min-h-[160px] xl:min-h-[300px] md:w-full aspect-square object-top object-cover p-1 rounded "
                            />
   <span className="absolute bottom-2  right-2 z-20 bg-gray-100 p-1 rounded-full">
                                        <FavoriteBorderIcon className="h-[1px]" /> 
                                    </span> 

                                    <span id="overlay" className="bg-black absolute bg-opacity-20 w-full z-10 h-full top-0">

                                    </span>
</div>
                       

                            <span className="px-2 md:p-1 ">
                                <h1 className="text-lg px-2 font-medium">{content.title}</h1>
                                <h2 className="px-2">Canvas shorts</h2>
                                <h2 className="pt-2 pl-2 md:text-[20px] text-slate-600 text-lg font-medium mb-2">
                                        ${content.productDetails.price}.00
                                    </h2>
                            </span>
                        </div>
                    </div>
                
            ))}
        </div>
    );
}