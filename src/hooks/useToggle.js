import { useState } from "react";

export default function useToggle(){
   const [value,setValue]=useState(false);
   const handleValue=()=>{
      setValue(!value);
   }
   return {
      value,
      handleValue
   }
}