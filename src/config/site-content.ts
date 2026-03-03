export const siteConfig = {
    name: "Sonríe Dental",
    tagline: "Clínica de Especialidades",
    hero: {
        title: "Tu sonrisa merece",
        loopWords: ["atención", "cuidado", "tratamiento"],
        subtitle: "premium",
        description: "Transformamos sonrisas en Córdoba con tecnología 3D y un enfoque 100% humanizado. Resultados garantizados sin dolor.",
        cta: "Agendar Evaluación",
        secondaryCta: "Ver casos clínicos",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
        stats: {
            value: 138,
            label: "pacientes",
            sublabel: "felices este mes"
        }
    },
    marquee: [
        "✦ Escáner intraoral 3D",
        "✦ Odontología sin dolor",
        "✦ Especialistas Certificados",
        "✦ Urgencias 24h",
        "✦ Materiales Importados"
    ],
    stats: [
        { number: 98, suffix: "%", label: "Satisfacción total" },
        { number: 5, prefix: "", suffix: "/5", label: "Rating Google" },
        { number: 10, suffix: "K+", label: "Sonrisas nuevas" },
        { number: 20, suffix: "+", label: "Años experiencia" }
    ],
    services: {
        title: "Odontología de primer nivel para toda la familia",
        badge: "Especialidades",
        items: [
            {
                title: "Implantes y Prótesis",
                description: "Recuperá la funcionalidad y estética con implantes de titanio suizos de máxima durabilidad.",
                image: "https://images.unsplash.com/photo-1598256989800-fea5f6c810fd?q=80&w=1200&auto=format&fit=crop",
                large: true
            },
            {
                title: "Ortodoncia Invisible",
                description: "Alineadores transparentes para una sonrisa perfecta sin brackets dolorosos ni metálicos.",
                image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
            },
            {
                title: "Blanqueamiento Láser",
                description: "Aclará hasta 4 tonos en una sola sesión de 45 minutos. Rápido, seguro e indoloro.",
                cta: "Consultar",
                accent: true
            },
            {
                title: "Urgencias y Cuidado Familiar",
                description: "Atención inmediata para aliviar dolor extremo. Además, contamos con especialistas en odontopediatría para los más chiquitos de la casa.",
                image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
                large: true,
                secondary: true
            }
        ]
    },
    results: {
        title: "Resultados que impactan",
        description: "Deslizá para ver los cambios reales en nuestros pacientes. Usamos carillas de porcelana ultra finas.",
        before: "https://images.squarespace-cdn.com/content/v1/5c1bebb37106990d1f114a8f/1550953153578-QZJHRYJ9M0W9P48O8P5V/Before+%26+Afters-Braces.jpg",
        after: "https://images.squarespace-cdn.com/content/v1/5c1bebb37106990d1f114a8f/1550953138815-S4XY5YQZ8T2RQ0VQ5T5G/Before+%26+Afters-Braces+After.jpg"
    },
    about: {
        badge: "El Consultorio",
        title: "Instalaciones boutique en el corazón de Córdoba",
        description: "Diseñamos un ambiente donde la ansiedad no existe. Sillas con masajeador incorporado, aromaterapia cálida y tu música favorita durante toda la sesión.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
        quote: "No parece que estuvieras en el dentista, es literal un spa dental.",
        features: [
            "Equipamiento de diagnóstico 3D (Radiación mínima)",
            "Materiales importados de Suiza y Alemania",
            "Esterilización con protocolos hospitalarios Nivel 3"
        ]
    },
    cta: {
        title: "Tu nueva sonrisa a un mensaje de distancia",
        description: "Disponemos de turnos para esta misma semana. Escribinos para una evaluación inicial sin cargo.",
        whatsapp: "https://wa.me/5493515555555?text=Hola,%20quiero%20agendar%20una%20revisi%C3%B3n"
    },
    contact: {
        address: "Av. Hipólito Yrigoyen 146, Nva Córdoba",
        phone: "+54 9 351 555-5555",
        whatsapp: "https://wa.me/5493515555555",
        email: "hola@sonriedental.com"
    },
    footer: {
        categories: [
            {
                title: "Especialidades",
                links: ["Implantes suizos", "Ortodoncia invisible", "Estética y Blanqueamiento"]
            }
        ]
    },
    sections: {
        hero: { enabled: true, variant: "classic" },
        marquee: { enabled: true },
        stats: { enabled: true },
        services: { enabled: true, layout: "bento" },
        results: { enabled: true },
        about: { enabled: true },
        testimonials: { enabled: true },
        cta: { enabled: true }
    }
};
