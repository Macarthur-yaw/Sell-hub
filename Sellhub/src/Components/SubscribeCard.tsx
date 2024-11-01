export default function SubscribeCard(){
    return (
        <div className="bg-white border  shadow-lg mt-6 mb-6 rounded-lg p-4">
<span className=" ">
    <h1 className="text-[#1c1917] text-xl tracking-wide font-semibold">
        Don't Wanna 
        
        Miss our office?
    </h1>
    {/* <h2 className="lg:w-[280px] 2xl:max-w-[200px] text-sm tracking-tighter text-[#e6e2e1] ">
        Drop your email below and start receiving the best offers from footWear!
    </h2> */}
</span>

<span className="flex flex-row mt-4 gap-6">
    <input type='text' placeholder="Your email@gmail.com"  className="p-1 text-sm    bg-[#e6e2e1] rounded-2xl p-2  border mt-2 "/>
    <button className="p-2 rounded-3xl font-semibold px-4 bg-[#1c1917] text-white">Subscribe</button>
</span>
        </div>
    )
}