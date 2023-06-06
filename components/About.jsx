import Image from "next/image";
import Title from "./ui/Title";


const About = () => {
  return (
    <div className="bg-secondary py-14">
    <div className="container mx-auto flex items-center
     text-white gap-20 justify-center flex-wrap-reverse">
      <div className="flex justify-center">
        <div className="relative sm:w-[445px] sm:h-[600px]  
        flex justify-center w-[300px] h-[450px]">
          <Image src="/resimler/resim11.png" alt="" layout="fill" />
        </div>
      </div>


<div className="md:w-1/2 ">
<Title addClass="text-[9xl]"> We Are Acessório</Title>

<p> Acessório, trend takılar ve aksesuarlar için stil ortağınızdır. İşlemeli yüzük, el yapımı kolye, charm bileklik ,cam inci küpe gibi bir çok yepyeni
 trend için bizi takip ederek fırsatlar ve ayrıcalıklardan haberdar olun.
İsteklerinize göre yeni model ürün fikirleriyle tarzınız ve isteğiniz öncelik
 alınarak yeni model ürünleri sizlere sunuyoruz. Mevsim trendlerine yönelik sıcak yaz kum boncuk,
 renkli tona, renkli kalpler, yemeni örgü vs. ile her tarza ve mevsime uygun ürünler üretilmektedir.
 Bizleri takip ederek daha fazla bilgiye ve ürüne rahatlıkla ulaşabilirsiniz.
 İyi alışverişler dileriz.. </p>

 <button className="btn-primary bg-yellow-500">Daha Fazla</button>
</div>
    </div>
  </div>

  );
};

export default About;