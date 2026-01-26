"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Zap, TrendingUp, BarChart3, CheckCircle, Terminal, Code2, Server, Rocket, MousePointer2, ArrowUpRight } from "lucide-react"

export   function HeroSection() {

  const scrollToSection = (   sectionId : string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white py-20 lg:py-32"
    >
      {/* Fondo estático y limpio */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Contenido Izquierdo */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl xl:text-7xl">
                Tecnología que
                <span className="block text-blue-600 mt-2">impulsa negocios</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Transformamos procesos complejos en experiencias digitales simples y rentables para tu empresa.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="group bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all px-8 rounded-full"
                onClick={() => scrollToSection("contacto")}
              >
                ¡Hablemos de tu proyecto!
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Galería de Proyectos con entrada secuencial */}
          <BusinessSolutionShowcase />
           
        </div>
      </div>
    </section>
  )
}

const BusinessSolutionShowcase = () => {
  return (
    <div className="w-full max-w-[1350px] mx-auto p-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. VENTAS - Sale primero */}
        <div className="group animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200 fill-mode-forwards">
          <header className="mb-5 h-20 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Ventas Digitales</h3>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md uppercase">Marketing</span>
            </div>
            <p className="text-sm text-slate-500 leading-tight">Atrae clientes y posiciona tu marca 24/7.</p>
          </header>
          
          <div className="relative h-[480px] rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-blue-500/5">
            <div className="p-6 space-y-8">
              <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <div className="h-2 w-24 bg-slate-100 rounded-full" />
              </div>
              <div className="space-y-3">
                <div className="h-7 w-full bg-slate-900 rounded-md" />
                <div className="h-7 w-2/3 bg-slate-900 rounded-md" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="h-24 rounded-2xl bg-blue-50 border border-blue-100 p-4 flex flex-col justify-between">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-[10px] font-bold text-blue-900 uppercase">Velocidad</span>
                </div>
                <div className="h-24 rounded-2xl bg-slate-50 border border-slate-100 p-4 flex flex-col justify-between">
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase">Conversión</span>
                </div>
              </div>
            </div>
            <footer className="absolute bottom-0 w-full p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
               <div className="flex gap-1">
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-400">SEO</span>
                  <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-400">UX</span>
               </div>
               <ArrowUpRight className="h-4 w-4 text-blue-600" />
            </footer>
          </div>
        </div>

        {/* 2. GESTIÓN - Sale segundo */}
        <div className="group lg:-translate-y-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400 fill-mode-forwards">
          <header className="mb-5 h-20 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Gestión Inteligente</h3>
              <span className="text-[10px] font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md uppercase">Control</span>
            </div>
            <p className="text-sm text-slate-500 leading-tight">Decide con datos reales y precisos.</p>
          </header>

          <div className="relative h-[480px] rounded-3xl bg-slate-950 shadow-2xl overflow-hidden border border-slate-800 transition-all duration-300 group-hover:shadow-blue-500/10">
            <div className="p-6 space-y-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Dashboard</div>
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-light text-white">$42,850</div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-blue-500" style={{ width: '75%' }} />
                </div>
              </div>
              <div className="flex items-end justify-between h-20 gap-1.5">
                {[30, 50, 45, 80, 60, 90, 70, 85].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-600/30 rounded-t-sm" />
                ))}
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Server className="h-3 w-3 text-slate-500" />
                  <span className="text-[10px] text-slate-300 font-mono">Cloud System</span>
                </div>
                <CheckCircle className="h-3 w-3 text-emerald-500" />
              </div>
            </div>
            <footer className="absolute bottom-0 w-full p-4 bg-white/5 border-t border-white/5 flex justify-between items-center">
               <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Métricas en vivo</span>
               <BarChart3 className="h-3 w-3 text-white" />
            </footer>
          </div>
        </div>

        {/* 3. SOFTWARE - Sale tercero */}
        <div className="group animate-in fade-in slide-in-from-bottom-10 duration-700 delay-600 fill-mode-forwards">
          <header className="mb-5 h-20 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-1 lg:justify-start justify-end">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Software a Medida</h3>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md uppercase">Operaciones</span>
            </div>
            <p className="text-sm text-slate-500 leading-tight lg:text-left text-right">Ahorra horas de trabajo manual cada día.</p>
          </header>

          <div className="relative h-[480px] rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xl overflow-hidden transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-emerald-500/5">
             <div className="p-6 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="text-right font-bold text-emerald-600 text-xs">+45% Eficiencia</div>
                </div>
                <div className="space-y-3">
                   {["Facturación Automática", "Control de Inventario", "Sincronización"].map((l, i) => (
                     <div key={i} className="bg-white p-3.5 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                        <span className="text-xs font-bold text-slate-700">{l}</span>
                        <CheckCircle className="h-3 w-3 text-emerald-500" />
                     </div>
                   ))}
                </div>
                <div className="mt-8 p-4 bg-slate-900 rounded-2xl flex items-center gap-3">
                   <Terminal className="h-4 w-4 text-emerald-400" />
                   <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Optimización Activa</span>
                </div>
             </div>
             <footer className="absolute bottom-0 w-full p-4 bg-emerald-50 border-t border-emerald-100 flex justify-between items-center">
               <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-widest">Cero errores manuales</span>
               <MousePointer2 className="h-4 w-4 text-emerald-600" />
            </footer>
          </div>
        </div>

      </div>
    </div>
  );
};