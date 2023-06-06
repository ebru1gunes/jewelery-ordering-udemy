import Image from "next/image";
import Title from "./ui/Title";
import {MdShoppingCart} from "react-icons/md";


const CampaignItem =() => {
return <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] 
flex items-center gap-x-4">
    <div className="relative md:w-44 md:h-44  w-36 h-36 after:content-[''] 
    border-[5px]
     border-yellow-300 rounded-full flex ">
<Image 
src="/resimler/resim10.png" 
alt=""
layout="fill"
className="hover:scale-105 transition-all "     
objectFit="cover" 
/>

</div>
 
    <div className="text-white">
        <Title addClass=" text-2xl">Salı Rüzgarı</Title>
        <div className="font-dancing my-1">
        <span className="text-[40px] ">20%</span>
        <span className="text-sm inline-block ml-1">Off</span>
        </div>
<buttton className="btn-primary flex items-center gap-x-2 bg-yellow-500">
    Order Now <MdShoppingCart size={20}/> 
</buttton>
</div>

</div>

 }

const Campaigns = () => {
  return  (
  <div className="flex justify-between container mx-auto py-20 
  gap-6 flex-wrap">
    <CampaignItem />
    <CampaignItem />
</div>


);
   };
   
   

export default Campaigns;