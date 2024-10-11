export default function SubscribeCard(){
    return (
        <div className="bg-[#1c1917]  shadow-lg mt-6 mb-6 rounded-lg p-4">
<span className="flex flex-row gap-10 ">
    <h1 className="text-[#e6e2e1] text-xl tracking-wide font-semibold">
        Don't Wanna 
        <br/>
        Miss our office?
    </h1>
    <h2 className="lg:w-[280px] max-w-[200px] text-sm tracking-tighter text-[#e6e2e1] ">
        Drop your email below and start receiving the best offers from footWear!
    </h2>
</span>

<span className="inline-flex mt-4 gap-6">
    <input type='text' placeholder="Your email@gmail.com"  className="p-1 text-sm   placeholder-[#e6e2e1] placeholder-opacity-60 bg-transparent border-b-[1px] mt-2 rounded-br-none rounded-bl-none"/>
    <button className="p-2 rounded-3xl font-bold px-4 bg-white">Subscribe</button>
</span>
        </div>
    )
}