import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
      };

  return (
   <div className="h-screen w-full container mx-auto -mt-[88px]">
    <div className="absolute top-0 left-0 w-full h-full "> 
    <div className="relative h-full w-full">
   <Image 
    src="/resimler/resim5.jpg"
    alt="" 
    layout="fill"
    objectFit="cover"/>
     
    </div>
    </div>
<Slider {...settings}>
<div>
    <div className=" mt-48 text-white  flex flex-col items-start gap-y-10">
    <Title addClass="text-9px"> Accessorie Shop </Title>
        <p className="text-base  sm:w-2/5 w-full">Alışverişin En Şık Hali  </p>
        <button className="btn-primary bg-yellow-500 "> Order Now</button>
    </div>
</div>

<div>
slider da ikinci sayfanın boş görünmesi için bu divi oluşturdum.
</div>


</Slider>
    
  </div>
  );
  };

export default Carousel;