import React from 'react';
import { motion } from "motion/react";
import { siteConfig } from "../../config/site-content";

// --- Types ---
interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
    {
        text: "El nivel de profesionalismo y calidez humana es excepcional. Me hice un tratamiento de implantes y el proceso fue indoloro y con resultados increíbles.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Laura M.",
        role: "Paciente desde 2021",
    },
    {
        text: "El consultorio es hermoso y moderno. El equipo me hizo sentir cómodo desde el primer momento. Totalmente recomendado para cualquier tratamiento.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Martín G.",
        role: "Paciente desde 2022",
    },
    {
        text: "Mi hija le tenía miedo al dentista hasta que conocimos Sonríe Dental. La Dra. fue increíblemente paciente y ahora mi hija quiere ir a cada control.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Carolina S.",
        role: "Mamá de Sofía",
    },
    {
        text: "Me hice un blanqueamiento y quedó espectacular. El resultado fue natural y los dientes quedaron varios tonos más blancos. Super profesionales.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Diego R.",
        role: "Paciente desde 2023",
    },
    {
        text: "La ortodoncia invisible cambió mi vida. Nadie se da cuenta que llevo alineadores y en pocos meses ya veo resultados impresionantes.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Valentina P.",
        role: "Paciente desde 2023",
    },
    {
        text: "Tuve una urgencia un sábado y me atendieron al instante. La rapidez y calidad de atención es insuperable. Son los mejores de Córdoba.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Lucía F.",
        role: "Paciente desde 2020",
    },
    {
        text: "Después de años sin ir al dentista, el equipo me hizo sentir seguro y sin culpa. La limpieza fue indolora y el trato, inmejorable.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Fernando T.",
        role: "Paciente desde 2024",
    },
    {
        text: "Las instalaciones son de primer nivel y la tecnología que usan es impresionante. Se nota que invierten en ofrecer lo mejor.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Andrea M.",
        role: "Paciente desde 2022",
    },
    {
        text: "Me recomendaron Sonríe Dental para carillas y no me arrepiento. El resultado es natural y hermoso. ¡Ahora no paro de sonreír!",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sebastián L.",
        role: "Paciente desde 2023",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.ul
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <motion.li
                                    key={`${index}-${i}`}
                                    aria-hidden={index === 1 ? "true" : "false"}
                                    tabIndex={index === 1 ? -1 : 0}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -8,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className="p-8 rounded-3xl border border-primary/10 shadow-lg max-w-xs w-full bg-white cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-accent/30"
                                >
                                    <blockquote className="m-0 p-0">
                                        <p className="text-primary/80 leading-relaxed font-normal m-0 text-sm">
                                            "{text}"
                                        </p>
                                        <footer className="flex items-center gap-3 mt-6">
                                            <img
                                                width={40}
                                                height={40}
                                                src={image}
                                                alt={`Avatar de ${name}`}
                                                className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/10 group-hover:ring-accent/40 transition-all duration-300 ease-in-out"
                                                referrerPolicy="no-referrer"
                                            />
                                            <div className="flex flex-col">
                                                <cite className="font-semibold not-italic tracking-tight leading-5 text-primary">
                                                    {name}
                                                </cite>
                                                <span className="text-xs leading-5 tracking-tight text-primary/50 mt-0.5">
                                                    {role}
                                                </span>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </motion.li>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.ul>
        </div>
    );
};

export const TestimonialsSection = () => {
    return (
        <section
            id="testimonios"
            aria-labelledby="testimonials-heading"
            className="py-24 md:py-32 bg-background text-primary relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: { duration: 0.8 }
                }}
                className="max-w-7xl px-6 md:px-12 z-10 mx-auto"
            >
                <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16 md:mb-24">
                    <div className="flex justify-center">
                        <div className="border border-primary/20 py-1 px-4 rounded-full text-xs font-semibold tracking-wider uppercase text-primary/60">
                            Lo que dicen nuestros pacientes
                        </div>
                    </div>

                    <h2 id="testimonials-heading" className="font-serif text-4xl md:text-5xl tracking-tight mt-6 text-center text-primary leading-[1.1]">
                        Historias de sonrisas reales
                    </h2>
                    <p className="text-center mt-5 text-primary/60 text-lg leading-relaxed max-w-sm">
                        {siteConfig.stats[2].number}{siteConfig.stats[2].suffix} pacientes confían en nosotros para cuidar su sonrisa.
                    </p>
                </div>

                <div
                    className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
                    role="region"
                    aria-label="Testimonios de pacientes"
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </motion.div>
        </section>
    );
};

export default TestimonialsSection;
