import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import Image from "next/image";
import { useFormik } from "formik";
import { reservationSchema } from "../schema/reservation";


const Reservation = () => {
const onSubmit= async(values, actions) => {
await new Promise((resolve)=> setTimeout(resolve, 4000));
actions.resetForm();
};


 const {values, errors, touched, handleSubmit, handleChange, handleBlur} =
  useFormik({
  initialValues: {
    fullName:"",
    phoneNumber:"",
    email:"",
},
onSubmit,
validationSchema: reservationSchema,
});

const inputs= [
{
id:1,
name:"isminiz",
type:"text",
placeholder:"İsminiz",
value: values.fullName,
errorMessage: errors.fullName,
touched: touched.fullName,
},

{
  id:2,
  name:"telefon numarası",
  type:"number",
  placeholder:"Telefon Numaranız",
  value: values.phoneNumber,
  errorMessage: errors.phoneNumber,
  touched: touched.phoneNumber,
},

{
  id:3,
  name:"email ",
  type:"email",
  placeholder:"Email Adresiniz ",
  value: values.email,
  errorMessage: errors.email,
  touched: touched.email,
},

];

return (
    <div className="container mx-auto py-12">
    <Title addClass="text-[40px] mb-10">Book A Table</Title>
    <div className="flex justify-between flex-wrap-reverse gap-10">
      <form className="lg:flex-1 w-full " onSubmit={handleSubmit} >
        <div className="flex flex-col gap-y-3">
   {inputs.map((input)=> (
    <Input 
    key={input.id}  
    {...input} 
    onChange={handleChange} 
    onBlur={handleBlur} />
   )    )}
   
        </div>
        
        
     <button className="btn-primary mt-4  bg-yellow-500" type="submit">BOOK NOW</button>

  </form>

   <div className="lg:flex-1  w-full"> 
   <div className="relative h-full w-full">
   <Image
    src="/resimler/resim3.jpg"
    alt="" 
    layout="fill"
    />
   </div>

   </div>
   </div>
    
  </div>
  );
};

export default Reservation;