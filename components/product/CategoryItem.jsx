import Image from "next/image";
import Link from "next/link";
import {RiShoppingCart2Fill} from "react-icons/ri";
const CategoryItem = () => {
  return ( 
  <div className="bg-secondary rounded-3xl">
    <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center
    rounded-bl-[46px] rounded-tl-3xl rounded-tr-3xl">
    <Link href="/product">
    <div className="relative w-36 h-36 hover:scale-110 transition-all">
        <Image src="/resimler/kolye2.png" alt="" 
        layout="fill"   />
    </div>
    </Link>
    </div>
    <div className="p-[25px] text-white">
        <h4 className="text-xl fond-semibold">Kırmızı Kalpli Kolye</h4>
        
        <p className="text-[15px]">Taşsız Kolye.</p>
        <p className="text-[15px]">Maden: 14K</p>
        <p className="text-[15px]">Maden Rengi: Sarı</p>
        <p className="text-[15px]">Gram: 1,15 gr.</p>
        <p className="text-[15px]">Vermiş olduğunuz siparişleri özenle hazırlayarak şık bir hediye paketine dönüştürüyoruz.</p>
<div className="flex justify-between items-center mt-4">
    <span>$10</span>
    <button className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid">
        <RiShoppingCart2Fill />
    </button>
</div>

    </div>
  </div>


  );
  };

export default CategoryItem;