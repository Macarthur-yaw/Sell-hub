import adidasSamba from '../assets/samba.avif'
import jordanTwo from '../assets/jordan.png'
import AirJordan1 from '../assets/jordan1.webp'
import AirJordan2 from '../assets/Air-Jordan-4-Retro-Fire-Red-2.jpg'
import AirJordan3 from '../assets/jordan4.webp'
// import Yeezy from '../assets/yeezy.jpg'
import Yeezy1 from '../assets/yeezy2.webp'
import newBalance from '../assets/newb.webp'
import AirJordan4 from '../assets/airj.png'
export type Datatyp={
    id:number, 
    title:string,
    imageUrl:string,
    count:number,
    checked:false
    productDetails:{
        name:string,
        price:number,
        size:number,
    }
    otherImages:{
        image1:string,
        image2:string,
   
    }
}
export const Data:Datatyp[]=[
    {
        id:1,
        title:'adidas',
        imageUrl:AirJordan1,
        count:1,
        checked:false,
        productDetails:
            {name:"Adidas",
            price:100,
            size:30,
   
    },
    otherImages:{
        image1:AirJordan1,
        image2:jordanTwo
    }
    },
    {
        id:2,
        title:'yeezy',
        imageUrl:AirJordan2,
        count:1,
        checked:false,
        productDetails:
            {name:"Adidas",
            price:100,
            size:31,
   
    },
    otherImages:{
        image1:AirJordan2,
        image2:AirJordan1
    }
    }
    ,{
        id:3,
        title:'jordan 1',
        imageUrl:newBalance,
        count:1,
        checked:false,
        productDetails:
            {name:"Adidas",
            price:200,
            size:30,
   
    },
    otherImages:{
        image1:adidasSamba,
        image2:AirJordan3
    }
    },
    {
        id:4,
        title:'Adidas',
        imageUrl:AirJordan4,
        count:1,
        checked:false,
        productDetails:
        {name:"Adidas",
        price:300,
        size:30,

},
otherImages:{
    image1:Yeezy1,
    image2:AirJordan4
}
    },
   
]