import { CheckCircle, TrendingUp, Clock, Users } from "lucide-react"
import Image from "next/image";

const metrics = [
  {
    icon: CheckCircle,
    value: "100+",
    label: "Proyectos entregados",
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "Incremento promedio en eficiencia",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Soporte garantizado",
  },
  {
    icon: Users,
    value: "250+",
    label: "Empresas confían en nosotros",
  },
]

export function MetricsSection() {
  return (
    <section className="relative overflow-hidden  bg-white py-20">
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
          {/* <p className="text-lg text-slate-600">
            Datos reales de proyectos exitosos con empresas líderes
          </p> */}
        </div>

        {/* Projects cards */}



        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 px-6" >

          <CourseCard />
          <CourseCard />
          <CourseCard />
 


        </div>

      </div>
    </section>
  )
}






export function CourseCard() {
  return (
    <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-200">
      <div className="relative w-full h-80 md:h-64 lg:h-44">
        <Image
          src={'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}
          alt={'Course Image'}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="px-3 h-60 py-4">
        <h3 className="text-sm text-gray-500 pb-2">
          <span className="bg-indigo-600 py-1 px-2 text-white rounded-lg">
            'Course'
          </span>
        </h3>

        <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
          'Course Name'
        </p>
      </div>
    </article>
  );
}