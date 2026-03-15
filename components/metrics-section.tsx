'use client'
import Image from "next/image";
import { useState } from "react";


export function MetricsSection() {


  const projets = [
    {
      id: 1,
      title: "Joyeria italiana",
      description: "Joyeria italiana digitalizó su catalogo para asi lograr mas clientes a nivel nacional",
      image: "/portada_web.png",
      privado: false,
      url: "https://joyeriaitaliana.com/",


    },
    {
      id: 2,
      title: "Esta pagina",
      description: "Desarrollamos nuestra web de una manera sencilla de comprender para nuestros clientes",
      image: "/portada_solu.png",
      privado: false,
      url: "https://www.solutiacorp.co/",

    }
    ,

    {
      id: 3,
      title: "DashGestion",
      description: "Gestiona tus ventas e inventario en un solo lugar",
      image: "/portal_gestion.png",
      privado: true,
      url: "/portada_web.png",

    },


    {
      id: 4,
      title: "FerreMag",
      description: "Tienda de ferreteria digitalizada, con una interfaz intuitiva y un diseño moderno",
      image: "/ferre_mag.png",
      privado: true,
      url: "/portada_web.png",

    },

    {
      id: 5,
      title: "Fraktur",
      description: "Aplicacion movil que conecta médicos con pacientes de manera segura y eficiente",
      image: "/fraktur.png",
      privado: false,
      url: "https://play.google.com/store/apps/details?id=com.medical.fraktur.hn&hl=es_CO",

    },





  ]


  return (
    <section id="proyectos" className="relative overflow-hidden  bg-white py-20">
      {/* Soft blue shapes in background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-sky-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-400/6 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Simple centered header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl text-slate-900">
            Resultados que respaldan
            <span className="block text-blue-600  mt-2">nuestra experiencia</span>
          </h2>

        </div>

        {/* Projects cards */}



        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 px-6" >


          {
            projets.map((item) => (
              <CourseCard {...item} key={item.id} />
            ))
          }





        </div>

      </div>
    </section>
  )
}


// "use client";

// import { useState } from "react";
// import Image from "next/image";

interface cardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  fullDescription?: string;
  privado: boolean
}

export function CourseCard({ privado, title, description, image, url = "#", fullDescription }: cardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <article
        onClick={() => setIsOpen(true)}
        className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 cursor-pointer"
      >
        <div className="relative w-full h-80 md:h-64 lg:h-44 overflow-hidden bg-gray-100">
          {/* Imagen de fondo borrosa */}
          <Image
            src={image}
            alt=""
            fill
            className="object-cover blur-xl opacity-50"
          />
          {/* Imagen principal */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain relative z-10"
          />
        </div>

        <div className="px-3 h-60 py-4">
          <h3 className="text-sm text-gray-500 pb-2">
            <span className="bg-blue-600 py-1 px-2 text-white rounded-lg">
              {title}
            </span>
          </h3>
          <p className="pt-2 text-base font-semibold text-gray-500 group-hover:text-gray-900">
            {description}
          </p>
        </div>
      </article>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen del modal */}
            <div className="relative w-full h-56 bg-gray-100">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover blur-xl opacity-40"
              />
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain relative z-10"
              />
              {/* Botón cerrar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow transition"
              >
                ✕
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <span className="bg-blue-600 py-1 px-3 text-white text-sm rounded-lg">
                {title}
              </span>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {fullDescription || description}
              </p>
              <div className="mt-6 flex gap-3">

                {privado ? <div className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg font-semibold transition duration-200">Este proyecto es de uso privado</div> : <a


                  href={url}

                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg font-semibold transition duration-200"
                >
                  {privado ? "Este proyecto es de uso privado" : "Visitar proyecto"}

                </a>


                }



                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg transition duration-200"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}