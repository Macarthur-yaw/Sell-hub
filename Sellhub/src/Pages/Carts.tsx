import { useCallback, useContext, useEffect, useState } from "react";
import { PropsContext } from "../Routes";
import { Add, Close, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import axios from "axios";
type newData = {
  id: number;
  title: string;
  imageUrl: string;
  count: number;
  productDetails: { name: string; price: number; size: number };
  otherImages: { image1: string; image2: string };
};

export default function Carts() {
  const [cartsitems, setCartitems] = useState<newData[]>([]);
  const context = useContext(PropsContext);
  const [sumprice, setSumprice] = useState<number>(0);

  if (!context) {
    throw new Error("context is not defined");
  }

  const navigate = useNavigate();
  const { carts, setCarts } = context.cart;
  const data = context.dataProd?.data;

  function increaseCounter(id: number) {
    setCartitems(prevItems =>
      prevItems.map(content =>
        content.id === id ? { ...content, count: content.count + 1 } : content
      )
    );


   
  }

  useEffect(()=>{
    const postCarts=async()=>{
let getToken;
const tokens=localStorage?.getItem('token')
      if(tokens){
getToken=tokens
}

console.log(getToken)
const data={
  cartsitems
}
    if(cartsitems){
    try {
      const response=   await axios.post("http://localhost:3000/carts",data,{headers: {Authorization: `Bearer ${getToken}`}})
    console.log(response)
        } catch (error) {
          
        }
  }
  
}
postCarts()

  },[cartsitems])

  function decreaseCounter(id: number) {
    setCartitems(prevItems =>
      prevItems.map(content =>
        content.id === id && content.count > 1
          ? { ...content, count: content.count - 1 }
          : content
      )
    );
  }

  const removeCarts = (id: number) => {
    const newCarts = carts.filter(content => content !== id);
    setCarts(newCarts);
  };

  const compareAndFind = useCallback(() => {
    const arrayElements: newData[] = [];
    const obj: { [key: number]: number } = {};

    carts.forEach(id => {
      if (!obj[id]) obj[id] = 0;
      obj[id]++;
    });

    for (const id in obj) {
      const filteredElements = data?.filter(content => content.id === Number(id));
      const newArray = filteredElements?.map(content => ({
        ...content,
        count: obj[id],
      }));
      if (newArray) arrayElements.push(...newArray);
    }

    setCartitems(prev =>
      JSON.stringify(prev) !== JSON.stringify(arrayElements)
        ? arrayElements
        : prev
    );
  }, [carts, data]);

  useEffect(() => {
    let sum = 0;
    cartsitems.forEach(item => {
      sum += item.productDetails.price * item.count;
    });
    setSumprice(sum);
  }, [cartsitems]);

  useEffect(() => {
    compareAndFind();
  }, [carts, compareAndFind]);

  return (
    <div className="p-4 min-h-screen">
      {carts.length < 1 ? (
        <div className="mt-20 text-center">
          <div className="bg-slate-200 p-4 rounded-full w-fit mx-auto">
            <ShoppingCartOutlinedIcon sx={{ fontSize: '40px' }} />
          </div>
          <h1 className="text-3xl font-semibold mt-4">Your cart is empty</h1>
          <p className="text-gray-600 mt-2">
            Browse our categories and discover the best deals.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-black text-white mt-6 px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          {cartsitems.map((content, index) => (
            <div
              key={index}
              className="flex flex-row relative  justify-between items-center bg-white rounded-lg border border-gray-100 shadow-sm p-4 mb-6"
            >
              <img
                src={content.imageUrl}
                alt={content.title}
                className="w-[150px] h-[150px] object-cover rounded"
              />
              <div className="flex-col flex-1 ml-4">
                <h2 className="text-lg font-semibold">{content.title}</h2>
                <p className="text-gray-500 mt-1">Yeezy - In stock</p>
                <p className="text-2xl font-bold mt-2">${content.productDetails.price}</p>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                  <button
                    onClick={() => decreaseCounter(content.id)}
                    className="bg-black text-white p-2 rounded-full"
                  >
                    <Remove />
                  </button>
                  <span className="text-xl font-bold">{content.count}</span>
                  <button
                    onClick={() => increaseCounter(content.id)}
                    className="bg-black text-white p-2 rounded-full"
                  >
                    <Add />
                  </button>
                </div>
                <button
                  onClick={() => removeCarts(content.id)}
                  className="flex absolute top-1 right-0 items-center"
                >
                  <Close />
                </button>
              </div>
            </div>
          ))}

          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total: ${sumprice}</h2>
            <button
              onClick={() => navigate('/checkout')}
              className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
