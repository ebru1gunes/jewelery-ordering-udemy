import React from 'react'
import Title from '../ui/Title'

const Order = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5" >
    <Title addClass="text-[40px]"> Password</Title>
    <div className="  overflow-x-auto w-full mt-5">
      <table  className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
    <tr>
     <th scope="col" className="py-3 px-6">ID</th>
     <th scope="col" className="py-3 px-6">Adres</th>
     <th scope="col" className="py-3 px-6">Tarih</th>
     <th scope="col" className="py-3 px-6">Total</th>
     <th scope="col" className="py-3 px-6">Durum</th>
    </tr>
        </thead>
        <tbody>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
           <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white 
           flex items-center gap-x-1 justify-center">
           
            <span>63107...</span>
           </td>
           <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">İstanbul</td>
           <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">24.05.2023</td>
           <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$14</td>
           <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">hazırlanıyor</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
  )
}

export default Order