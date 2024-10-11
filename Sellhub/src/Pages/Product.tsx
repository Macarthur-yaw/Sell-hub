import { useNavigate } from "react-router";
import { useContext} from "react";
import { PropsContext } from "../Routes";

import StarIcon from "@mui/icons-material/Star";


export default function Product() {
    
      const navigate = useNavigate();
      const context = useContext(PropsContext);
    function changeProduct(id: number) {
        navigate(`/product/${id}`);
    }
    const data = context?.dataProd?.data;
   

    
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-1 lg:w-[85%] px-2 mx-auto mt-4">
            {data?.map((content) => (
                <div key={content.id} className="border-[1px] cursor-pointer rounded">
                    <div className="relative">
                    
                        <div onClick={() => changeProduct(content.id)}>
                            <img
                                src={content.imageUrl}
                                className="w-[350px] h-[200px] lg:w-auto object-cover p-1 rounded"
                            />
                            <span className="flex flex-row">
                                <div>
                                    <h1 className="font-semibold tracking-widest text-[14px] pl-2 pt-2">
                                        {content.title}
                                    </h1>
                                    <h2 className="pt-2 pl-2 md:text-[20px] text-sm font-semibold mb-2">
                                        ${content.productDetails.price}.00
                                    </h2>
                                    <span className="inline-flex items-center gap-1 pl-2">
                                        <StarIcon className="h-[1px]" /> 4.9
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}