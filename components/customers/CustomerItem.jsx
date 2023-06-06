import Image from "next/image";

const CustomerItem = ({imgSrc}) => {
  return (
    <div className="mt-5">
        <div className="p-6  bg-secondary text-white rounded-[9px]">
<p>Ürünler çok şık ve modern.Her tarza uygun ürünün olması muhteşem.</p>
        
        <div className="flex flex-col mt-4">
<span className="text-lg font-semibold">Ebru Güneş </span> </div>

        </div>


        <div  className="relative w-28 h-28 border-4 border-yellow-500 rounded-full 
        mt-8 before:content-[''] before:absolute before:top-0 
      flex justify-center before:-translate-y-3 before:rotate-45
       before:bg-yellow-500 before:w-5 before:h-5 ">
            <Image src={imgSrc} alt="" layout="fill"
             objextFit="contain" className="rounded-full"/>
        </div>
    </div>
  );
};

export default CustomerItem;