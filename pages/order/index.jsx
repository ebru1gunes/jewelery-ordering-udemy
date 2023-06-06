import Image from "next/image";

const Order = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_433px)] flex  justify-center
       items-center flex-col p-10  min-w-[1000px]">
        <div className=" flex items-center flex-1  w-full max-h-28 ">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                 SİPARİŞ
                </th>
                <th scope="col" className="py-3 px-6">
                  MÜŞTERİ
                </th>
                <th scope="col" className="py-3 px-6">
                  ADRES
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  63107f5559...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Ebru Güneş
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  İstanbul
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $10
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 bg-primary mt-6 bg-yellow-500">
          <div className="relative flex flex-col">
            <Image
              src="/resimler/paid.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Ödeme</span>
          </div>
          <div className="relative flex flex-col animate-pulse">
            <Image
              src="/resimler/bake.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Hazırlanıyor</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/resimler/bike.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Yolda</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/resimler/delivered.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Teslim Edildi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;