
type propsType={
    data?:number,
    title:string,
    content:string,
    subContent:string 
}
export default function Card({title,content,subContent}:propsType){
   
    return (
        <>
            <span className="md:p-10 p-6 text-start flex flex-col gap-4  md:flex-1   ">
                <h1 className="md:text-[30px] text-lg font-bold tracking-wide leading-tight ">
                    {title}
                </h1>
                <button className="bg-white p-2 rounded-3xl md:max-w-28  text-black font-medium text-[12px] md:text-[14px]">{content}</button>
            </span>


<span className="p-10 ">
    <h2 className="font-semibold uppercase tracking-widest text-lg md:text-[30px]">
        {subContent}
    </h2>
</span>
            </>
    )
}