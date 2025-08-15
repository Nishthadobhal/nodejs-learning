export const port=isNaN(process.env.port)?3000:parseInt(process.env.port);
// import {z,ZodError} from "zod";
//  const ageschema=z.number().min(18).max(100).int();
//   const userage=17;

// //   const parseuserage=ageschema.parse(userage);
// //   console.log(parseuserage);

//  try{
//     const parseuserage=ageschema.parse(userage);
//     console.log(parseuserage);
//  }
//  catch(error){
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message);
//     }
//     else{
//         console.log("unexpeected error:",error);
//     }
//  }