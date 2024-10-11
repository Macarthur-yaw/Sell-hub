import adidasImage from '../assets/samba.avif'
export default function FooterCard(){
    return (
        <div className='relative mt-10 border-[1px] shadow-2xl mb-4 rounded-xl w-[90%] md:w-[85%] mx-auto'>
           <img src={adidasImage} alt='an adidas picture' className=' w-[96px] min-h-[200px] sm:h-[300px] mx-auto object-contain '/>
        
            <span className='absolute left-1/2 transform w-full sm:w-auto -translate-x-1/2 bg-clip-text  z-10 top-0 p-2'>

            <h1 className="uppercase font-semibold tracking-wider text-white text-center text-md pt-4 md:text-2xl lg:text-[40px]">
                Bringing you to update Fantastic Footwear
            </h1>

            <h2 className='text-gray-300 text-sm md:text-[15px] pt-4 text-center'>
                View all brands of our collections on Footwear, there is another collection. Please check it out bro. seriously!
            </h2>
         
         <div className=' w-fit mx-auto pt-4 md:pt-6'>

         <button className='tracking-tight rounded-2xl font-bold  shadow-md text-sm md:text-[14px] px-4 md:mt-6 p-2 bg-white text-black'>
            More about us
           </button>
            
         </div>
            </span>
         

           <div className='bg-black bg-gradient-to-r from-black to-black via-transparent  absolute top-0 rounded-xl bg-opacity-90 w-full z-2 h-full'>
           
           </div>

          
        </div>
    )
}