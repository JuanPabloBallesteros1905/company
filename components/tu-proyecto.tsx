// "use client";
// import { useState } from "react";

// export default function CardReservada() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Card */}
//       <article
//         onClick={() => setIsOpen(true)}
//         className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 cursor-pointer"
//       >
//         {/* Imagen / área animada */}
//         <div className="relative w-full h-80 md:h-64 lg:h-44 overflow-hidden bg-gray-50 flex flex-col items-center justify-center gap-2">
//           {/* Anillos de pulso */}
//           <span className="absolute w-16 h-16 rounded-full border-2 border-blue-400 opacity-20 animate-ping" />
//           <span className="absolute w-16 h-16 rounded-full border-2 border-blue-400 opacity-10 animate-ping [animation-delay:0.8s]" />

//           {/* Ícono central */}
//           <div className="relative z-10 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
//             </svg>
//           </div>

//           <p className="relative z-10 text-xs text-gray-400 tracking-wide">Tu proyecto podría estar aquí</p>
//         </div>

//         {/* Cuerpo */}
//         <div className="px-3 h-60 py-4">
//           <h3 className="text-sm text-gray-500 pb-2">
//             <span className="bg-blue-50 text-blue-700 py-1 px-2 rounded-lg text-xs font-medium">
//               Próximamente
//             </span>
//           </h3>

//           <p className="pt-2 text-base font-semibold text-gray-400 group-hover:text-gray-700 transition duration-200">
//             Reservado para tu proyecto <span className="text-red-400">♥</span>
//           </p>

//           <p className="pt-1 text-sm text-gray-400">
//             Este espacio está esperando tu idea. Trabajemos juntos para convertirla en algo real <span className="text-red-400">♥</span>
//           </p>
//         </div>
//       </article>

//       {/* Modal */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
//           onClick={() => setIsOpen(false)}
//         >
//           <div
//             className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Área imagen del modal */}
//             <div className="relative w-full h-48 bg-blue-50 flex flex-col items-center justify-center gap-3">
//               <span className="absolute w-20 h-20 rounded-full border-2 border-blue-400 opacity-20 animate-ping" />
//               <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
//                 </svg>
//               </div>
//               <p className="relative z-10 text-sm text-blue-400">Tu proyecto podría estar aquí</p>

//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow transition"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Contenido del modal */}
//             <div className="p-6">
//               <span className="bg-blue-50 text-blue-700 py-1 px-3 text-sm rounded-lg font-medium">
//                 Próximamente
//               </span>

//               <p className="mt-4 text-gray-700 font-semibold text-base">
//                 Reservado para tu proyecto <span className="text-red-400">♥</span>
//               </p>

//               <p className="mt-2 text-gray-500 text-sm leading-relaxed">
//                 Este espacio está esperando tu idea. Nos encantaría trabajar contigo para convertirla en algo real. ¡Escríbenos y hagámoslo posible!
//               </p>

//               {/* Botones */}
//               <div className="mt-6 flex gap-3">
                
//                   href="mailto:tu@correo.com" {/* 👈 Cambia esto */}
//                   className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg font-semibold transition duration-200"
//                 >
//                   Hablemos de tu proyecto
//                 </a>

//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg transition duration-200"
//                 >
//                   Cerrar
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }