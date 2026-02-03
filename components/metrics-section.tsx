import { CheckCircle, TrendingUp, Clock, Users } from "lucide-react"
import Image from "next/image";


export function MetricsSection() {


  const projets = [
    {
      id: 1,
      title: "Joyeria italiana",
      description: "Joyeria italiana digitalizó su catalogo para asi lograr mas clientes a nivel nacional",
      image: "/portada_web.png",

    },
    {
      id: 2,
      title: "Esta pagina",
      description: "Desarrollamos nuestra web de una manera sencilla de comprender para nuestros clientes",
      image: "/portada_solu.png",

    }
    ,

    {
      id: 3,
      title: "DashGestion",
      description: "Gestiona tus ventas e inventario en un solo lugar",
      image: "/portal_gestion.png",

    },


    {
      id: 4,
      title: "FerreMag",
      description: "Tienda de ferreteria digitalizada, con una interfaz intuitiva y un diseño moderno",
      image: "/ferre_mag.png",

    },

    {
      id: 5,
      title: "Fraktur",
      description: "Aplicacion movil que conecta médicos con pacientes de manera segura y eficiente",
      image: "/fraktur.png",

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






interface cardProps {
  title: string;
  description: string;

  image: string;
}




export function CourseCard({ title, description, image }: cardProps) {
  return (
    <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-200">
      <div className="relative w-full h-80 md:h-64 lg:h-44 overflow-hidden bg-gray-100">
        {/* Imagen de fondo borrosa para llenar huecos */}
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
          className="object-contain relative z-10" // 'contain' muestra la imagen completa
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
  );
}