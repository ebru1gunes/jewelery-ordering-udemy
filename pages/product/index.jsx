import Image from "next/image";
import { useState } from "react";
import Title from "../../components/ui/Title";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryItems = [
  {
    id:1,
    name:"kırmızı kalpli kolye",
    price: 12,
    desc: "Ağırlığı:20 gr. Kombinlerinizi tamamlayacak küpe modelidir.Gösterişli ve şık modeldir. Krem, parfüm ve alkol gibi maddeler ile temasından kaçınılmıştır." ,
  },
]


const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const changePrice = (number) => {
    setPrice(price + number);
  };
  const handleChange = (e, item) => {
    const checked = e.target.checked;
    
  };

  
  
  const handleClick = () => {
    dispatch(addProduct({ ...CategoryItems[0] , price, quantity: 1 }));
  };

  console.log(cart);

  return (
  <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap">
<div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
    <Image src="/resimler/resim12.png" alt=""  layout="fill"/>
</div>
<div className="md:flex-1  md:text-start text-center">
    <Title addClass="text-9xl">Altın Renk Kalp Figürlü Çelik Küpe </Title>
    <span className="text-yellow-500 text-2xl font-bold  underline
     underline-offset-1 my-4 inline-block ">$12</span>
    
<p className="text-sm my-4">Ağırlık : 20 gr</p>
<p className="text-sm my-4">Kombinlerinizi tamamlayacak küpe modelidir.</p>
<p className="text-sm my-4">Gösterişli ve şık modeldir.</p>
<p className="text-sm my-4">Krem, parfüm, alkol gibi maddeler ile temasından kaçınılmalıdır.</p>
    <div className="flex items-center gap-x-20" >

        <h4 className="text-xl font-bold">Farklı Çekimler = </h4>

       <div className="flex items-center gap-x-8 md:justify-start justify-center">
        <div className="relative w-24 h-24">
       <Image src="/resimler/resim13.png" alt=""  layout="fill"/>
       </div>
       <div className="relative w-24 h-24">
       <Image src="/resimler/resim14.png" alt=""  layout="fill"/>
      </div>
      
     </div>
      
</div>

<div>  
  <button className=" text-2xl text-black rounded-b-lg sm:w-32 mt-4 my-6  bg-yellow-500  " onClick={handleClick}>
  Karta Ekle
  </button>
</div>

</div>

</div>
  );
  
};

export default Index;

