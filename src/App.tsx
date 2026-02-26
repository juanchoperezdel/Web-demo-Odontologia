import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, ArrowRight, Star, ChevronLeft, ChevronRight, MessageCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-navy overflow-x-hidden">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold tracking-tight">Sonríe Dental<span className="text-gold">.</span></a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-sm font-medium hover:text-gold transition-colors">Inicio</a>
            <a href="#servicios" className="text-sm font-medium hover:text-gold transition-colors">Servicios</a>
            <a href="#nosotros" className="text-sm font-medium hover:text-gold transition-colors">Nosotros</a>
            <a href="#testimonios" className="text-sm font-medium hover:text-gold transition-colors">Testimonios</a>
            <a href="#contacto" className="bg-gold hover:bg-gold-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              Reservar turno
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-cream border-t border-navy/10 py-4 px-6 flex flex-col space-y-4 shadow-lg">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">Inicio</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">Servicios</a>
            <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">Nosotros</a>
            <a href="#testimonios" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">Testimonios</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="bg-gold text-white px-6 py-3 rounded-full text-center font-medium mt-4">
              Reservar turno
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 md:order-1"
          >
            <motion.div variants={fadeInUp} className="inline-block px-3 py-1 border border-navy/20 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              Consultorio odontológico
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
              Tu sonrisa merece atención de <span className="italic text-gold">excelencia</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-navy/70 mb-10 max-w-md leading-relaxed">
              Brindamos odontología integral y estética de primer nivel en el corazón de Córdoba. Combinamos tecnología avanzada con un trato humano y personalizado.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a href="#nosotros" className="group inline-flex items-center space-x-2 text-navy font-medium border-b border-navy pb-1 hover:text-gold hover:border-gold transition-colors">
                <span>Conocé el consultorio</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-t-full rounded-b-[40px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
                alt="Paciente sonriendo en el consultorio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-4"
            >
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div>
                <p className="text-sm font-bold">138+ pacientes</p>
                <p className="text-xs text-navy/60">felices este mes</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-16 border-y border-navy/10 bg-cream/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { number: "98%", label: "Satisfacción de pacientes" },
              { number: "4.9/5", label: "Rating en Google" },
              { number: "10K+", label: "Pacientes atendidos" },
              { number: "20+", label: "Años de experiencia" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center md:text-left">
                <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-2">{stat.number}</p>
                <p className="text-xs md:text-sm font-medium text-navy/60 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24 md:w-2/3"
        >
          <div className="inline-block px-3 py-1 border border-navy/20 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
            Nuestros servicios
          </div>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight">
            Odontología integral para toda la familia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Implantes dentales", desc: "Recuperá la funcionalidad y estética de tu sonrisa con implantes de titanio de máxima calidad.", img: "https://images.unsplash.com/photo-1598256989800-fea5f6c810fd?q=80&w=800&auto=format&fit=crop" },
            { title: "Ortodoncia", desc: "Alineación dental invisible y tradicional para lograr una mordida perfecta y sonrisa armónica.", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
            { title: "Blanqueamiento", desc: "Tratamientos seguros y efectivos para devolverle la luminosidad natural a tus dientes.", img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop" },
            { title: "Limpieza dental", desc: "Profilaxis profunda para prevenir caries y enfermedades periodontales.", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop" },
            { title: "Urgencias 24hs", desc: "Atención inmediata para aliviar el dolor y resolver problemas dentales agudos.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" },
            { title: "Odontopediatría", desc: "Cuidado dental especializado y amable para los más pequeños de la familia.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-[24px] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-navy/70 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="#contacto" className="inline-flex items-center text-sm font-medium text-gold group-hover:text-gold-hover transition-colors">
                  Ver más <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT / CLINIC */}
      <section id="nosotros" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-7 order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop" 
                  alt="Interior del consultorio" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-48 md:w-64 aspect-square rounded-full overflow-hidden border-8 border-white hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" 
                  alt="Dr. trabajando" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <motion.div variants={fadeInUp} className="inline-block px-3 py-1 border border-navy/20 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                Sobre nosotros
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6">
                Más de 20 años cuidando sonrisas en Córdoba
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-navy/70 leading-relaxed mb-8">
                En Sonríe Dental creemos que ir al dentista no debe ser una experiencia estresante. Hemos diseñado nuestro espacio y nuestros protocolos para brindarte confort, seguridad y resultados estéticos impecables.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="pl-6 border-l-2 border-gold py-2 mb-8">
                <p className="font-serif italic text-xl md:text-2xl text-navy mb-4">
                  "Nuestra filosofía es tratar a cada paciente como si fuera de nuestra propia familia, priorizando siempre la ética y la excelencia médica."
                </p>
                <div>
                  <p className="font-bold text-sm">Dr. Martín Rossi</p>
                  <p className="text-xs text-navy/60 uppercase tracking-wider">Director Médico</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonios" className="py-24 md:py-32 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 md:mb-24"
          >
            <div className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 text-white/80">
              Lo que dicen nuestros pacientes
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
              Historias de sonrisas reales
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center px-8 md:px-16"
            >
              <div className="flex justify-center space-x-1 mb-8 text-gold">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <p className="font-serif italic text-2xl md:text-4xl leading-relaxed mb-10 text-white/90">
                "El nivel de profesionalismo y calidez humana es excepcional. Me hice un tratamiento de implantes y el proceso fue indoloro y con resultados que superaron mis expectativas. Totalmente recomendados."
              </p>
              <div className="flex flex-col items-center">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" alt="Paciente" className="w-16 h-16 rounded-full mb-4 object-cover" />
                <p className="font-bold tracking-wide">Laura M.</p>
                <p className="text-sm text-white/50">Paciente desde 2021</p>
              </div>
            </motion.div>

            {/* Carousel Controls (Visual only) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors pointer-events-auto">
                <ChevronLeft size={24} />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-colors pointer-events-auto">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section id="contacto" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-cream border border-navy/10 rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6">
              ¿Necesitás un turno?
            </h2>
            <p className="text-lg text-navy/70 mb-10">
              Escribinos por WhatsApp y te respondemos en minutos para coordinar tu visita. Estamos para ayudarte.
            </p>
            <a 
              href="https://wa.me/5493515555555?text=Hola,%20quiero%20agendar%20un%20turno" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-white pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a href="#" className="font-serif text-2xl font-bold tracking-tight block mb-6">Sonríe Dental<span className="text-gold">.</span></a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Odontología de excelencia en Córdoba. Combinamos arte, ciencia y calidez humana para cuidar tu sonrisa.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Servicios</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Implantes dentales</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Ortodoncia invisible</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Estética dental</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Odontopediatría</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Urgencias 24hs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Enlaces rápidos</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#inicio" className="hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-gold transition-colors">Sobre nosotros</a></li>
              <li><a href="#servicios" className="hover:text-gold transition-colors">Tratamientos</a></li>
              <li><a href="#testimonios" className="hover:text-gold transition-colors">Pacientes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>Av. Hipólito Yrigoyen 146, Nueva Córdoba, Córdoba</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+54 9 351 555-5555</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>hola@sonriedental.com.ar</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <span>Lun a Vie: 9:00 - 19:00<br/>Sábados: 9:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Sonríe Dental. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Términos y condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/5493515555555?text=Hola,%20quiero%20agendar%20un%20turno"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <MessageCircle size={32} className="relative z-10" />
      </a>
    </div>
  );
}
