import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Phone, Mail, MapPin, FileText, ChevronRight, ChevronLeft, Star, Shield, Gavel, Scale, Building, Users, MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import CategoryLanding from "@/pages/CategoryLanding";
import ServiceLandingNew from "@/pages/ServiceLanding";
import InmobiliariaLanding from "@/pages/InmobiliariaLanding";
import Reveal from "@/components/Reveal";
import ImgWithWebp from "@/components/ImgWithWebp";

// === CONFIGURACIÓN CENTRAL ===
const BRAND = {
  name: "Montaño Abogados | Consorcio Jurídico e Inmobiliaria",
  short: "Montaño Abogados",
  city: "Guadalajara, Jalisco",
  address: "Esteban Baca Calderón 1999, Col. Jardines Alcalde, Guadalajara, Jalisco, 44298",
  mapsUrl: "https://www.google.com/maps/place/Esteban+Baca+Calder%C3%B3n+1999-Planta+alta+interior+B,+Jardines+Alcalde,+44298+Guadalajara,+Jal./@20.7038664,-103.3451463,3a,75y,298.59h,80.78t/data=!3m7!1e1!3m5!1sTpmkvVg323K9isSzqAuc7w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D9.220167328531033%26panoid%3DTpmkvVg323K9isSzqAuc7w%26yaw%3D298.5865045993568!7i16384!8i8192!4m6!3m5!1s0x8428b1ce4cdcdb0d:0x9881f875c2fc7ddc!8m2!3d20.7039204!4d-103.3452335!16s%2Fg%2F11vspmzncl?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D",
  phones: {
    office: "+52 33 3824 5783",
    mobile1: "+52 33 1568 8809",
    mobile2: "+52 33 1430 0177",
  },
  phone: "+52 33 3824 5783",
  whatsapp: "5213315688809",
  email: "montanoabogados5@gmail.com",
  slogan: "Situaciones legales, soluciones reales",
  instagram: "https://www.instagram.com/montano_abogados/",
  colors: {
    primary: "#000000",
    accent: "#D4AF37",
  },
};

// Para máxima estabilidad usaremos imágenes locales en /public/social
const SOCIAL_FALLBACK = "/logo-montano.png";
const SOCIAL_POSTS = [
  { src: "/social/rectificacion-actas.jpg", alt: "¿Sabías que? Rectificación de actas", href: "https://www.instagram.com/p/DJAkIH3x39E/?utm_source=ig_web_copy_link", square: true },
  { src: "/social/asesoria-juridica.jpg", alt: "¿Necesitas asesoría jurídica?", href: "https://www.instagram.com/p/DI7fjidROIz/?utm_source=ig_web_copy_link", square: true },
  { src: "/social/comprar-propiedad.jpg", alt: "¿Quieres comprar una propiedad?", href: "https://www.instagram.com/p/DJ7-8W6xUir/?utm_source=ig_web_copy_link" },
  { src: "/social/adeudo-vehicular.jpg", alt: "Eliminamos tu adeudo vehicular", href: "https://www.instagram.com/p/DJAkAGNR07J/?utm_source=ig_web_copy_link" },
  { src: "/social/administrar-arrendamiento.jpg", alt: "Dificultades para encontrar inquilinos y administrar arrendamiento", href: "https://www.instagram.com/p/DJ8BuWSRg2X/?utm_source=ig_web_copy_link" },
  { src: "/social/vender-propiedad.jpg", alt: "¿Necesitas vender una propiedad?", href: "https://www.instagram.com/p/DJ8Bp-bRydL/?utm_source=ig_web_copy_link" },
  { src: "/social/divorcio-mutuo.jpg", alt: "Divorcio por mutuo consentimiento – promoción", href: "https://www.instagram.com/p/DJAkUZJR3do/?utm_source=ig_web_copy_link" },
];

const SERVICES = [
  { slug: "divorcios", title: "Divorcios (Mutuo consentimiento e incausado/contencioso)", icon: <Users className="w-6 h-6" />, img: "/services/divorcios.png",
    summary: "Divorcio por mutuo consentimiento con convenio y divorcio incausado/contencioso. Medidas provisionales, guarda y custodia, pensión alimenticia y régimen de convivencia.",
    bullets: ["Convenio regulador: custodia, alimentos, convivencia y bienes", "Medidas provisionales y audiencias", "Trámite ágil con expediente electrónico (cuando aplique)", "Ejecución y cumplimiento de convenios", "Acompañamiento integral en negociación"],
    faqs: [{ q: "¿Qué documentos se requieren?", a: "Identificaciones, acta de matrimonio reciente, actas de nacimiento de los hijos (si los hay) y un convenio regulador con acuerdos claros." }, { q: "¿Cuánto tarda un divorcio?", a: "Depende del juzgado y de si hay controversia. En escenarios simples puede resolverse en semanas; con incidentes y pruebas, puede extenderse." }],
    cta: { headline: "Comienza tu proceso con claridad y empatía", sub: "Protegemos el interés superior de niñas y niños y tus derechos." } },
  { slug: "sucesiones", title: "Sucesiones (Testamentarias e Intestamentarias)", icon: <FileText className="w-6 h-6" />, img: "/services/sucesiones.jpg",
    summary: "Apertura y tramitación de sucesiones, aceptación de herencia, albacea, inventario y avalúo, partición y adjudicación; coordinación con notaría cuando procede.",
    bullets: ["Promoción de sucesión y nombramiento de albacea", "Reconocimiento de herederos", "Inventario, avalúos y proyecto de partición", "Inscripción y adjudicación de bienes", "Estrategia ante conflictos entre coherederos"],
    faqs: [{ q: "¿Cuándo procede la vía notarial?", a: "Cuando hay acuerdo entre herederos, no hay menores sin representación y el testamento es claro. De lo contrario, ante juzgado." }, { q: "¿Qué documentos necesito?", a: "Acta de defunción reciente, actas de nacimiento/matrimonio, identificaciones y, si existe, copia certificada del testamento." }],
    cta: { headline: "Ordena la herencia con seguridad jurídica", sub: "Te acompañamos en cada etapa hasta la adjudicación." } },
  { slug: "regularizacion-inmuebles", title: "Regularización de Inmuebles", icon: <Building className="w-6 h-6" />, img: "/services/regularizacion-inmuebles.jpg",
    summary: "Solucionamos problemas de titularidad, alineación y número oficial, régimen de propiedad en condominio, posesión, escrituración y saneamiento de gravámenes.",
    bullets: ["Revisión de cadena de títulos y gravámenes", "Correcciones catastrales y registrales", "Condominio, indivisión y regularización de fraccionamientos", "Coordinación con notaría y autoridades"],
    faqs: [{ q: "¿Qué es regularizar?", a: "Alinear la situación registral, fiscal y física del inmueble para que puedas vender, heredar o escriturar sin riesgos." }],
    cta: { headline: "Pon tu inmueble en regla", sub: "Diagnóstico registral y plan de acción." } },
  { slug: "renta-venta-inmuebles", title: "Renta y Venta de Inmuebles", icon: <Gavel className="w-6 h-6" />, img: "/services/renta-venta-inmuebles.jpg",
    summary: "Acompañamiento legal en operaciones de renta y compraventa: contratos, due diligence, arras, promesas, escrituración y cierre.",
    bullets: ["Due diligence legal y fiscal", "Contratos de arras, promesa y compraventa", "Checklist de cierre y acompañamiento notarial", "Prevención de fraudes y cargas ocultas"],
    faqs: [{ q: "¿Qué revisan antes de comprar?", a: "Gravámenes, adeudos (predial/agua), identidad y facultades de quien transmite, y coincidencia de superficies." }],
    cta: { headline: "Cierra operaciones sin sorpresas", sub: "Blindamos el trato de inicio a fin." } },
  { slug: "contratos-convenios", title: "Contratos y Convenios", icon: <FileText className="w-6 h-6" />, img: "/services/contratos-convenios.png",
    summary: "Redacción, revisión y negociación de contratos civiles e inmobiliarios, anexos, cláusulas de penalidad, garantías y mecanismos de resolución de controversias.",
    bullets: ["Contratos de arrendamiento, compraventa y prestación de servicios", "Convenios judiciales y extrajudiciales", "Cláusulas de garantía, penalidad y cumplimiento", "Ejecución y medios de apremio"],
    faqs: [{ q: "¿Sirve un contrato simple?", a: "Sí, si está bien hecho. Adaptamos clausulado a tu caso para reducir riesgos y facilitar su ejecución." }],
    cta: { headline: "Contratos claros y ejecutables", sub: "Documento a tu medida y listo para firmar." } },
  { slug: "administracion-arrendamiento", title: "Administración de Arrendamiento", icon: <Scale className="w-6 h-6" />, img: "/services/administracion-arrendamiento.jpg",
    summary: "Gestión integral para propietarios: selección de inquilinos, contratos blindados, cobranza, incrementos, entregas y, si es necesario, recuperación del inmueble.",
    bullets: ["Perfilamiento y filtros de inquilinos", "Contrato con garantías y pólizas", "Cobranza y ajustes anuales", "Actas de entrega-recepción y bitácora"],
    faqs: [{ q: "¿Incluye defensa legal?", a: "Sí, contamos con estrategia para desocupación y cobro de rentas cuando corresponde." }],
    cta: { headline: "Renta sin dolores de cabeza", sub: "Maximiza tu rendimiento con cobertura legal." } },
  { slug: "rectificacion-nulidad-actas", title: "Rectificación y Nulidad de Actas", icon: <FileText className="w-6 h-6" />, img: "/services/rectificacion-nulidad-actas.jpg",
    summary: "Rectificación administrativa y judicial de actas (nacimiento, matrimonio, defunción) y nulidad por vicios, homonimias o errores esenciales.",
    bullets: ["Detección del error y vía procedente", "Gestión ante Registro Civil y juzgado", "Pruebas documentales y testimoniales", "Actualización en CURP/INE/otros registros"],
    faqs: [{ q: "¿Siempre es judicial?", a: "No. Algunos errores se corrigen de forma administrativa; cuando no procede, acudimos a la vía judicial." }],
    cta: { headline: "Corrige tu documentación civil", sub: "Agilizamos el trámite correcto." } },
  { slug: "impugnacion-actos-administrativos", title: "Impugnación de Actos Administrativos (multas, clausuras, infracciones)", icon: <Scale className="w-6 h-6" />, img: "/services/impugnacion-actos-administrativos.jpg",
    summary: "Defensa frente a actos de autoridad: recursos, juicios de nulidad y amparo. Suspensión, medidas cautelares y cómputo fino de términos.",
    bullets: ["Recurso administrativo y juicio de nulidad", "Suspensión y medidas cautelares", "Cómputo de plazos con notificación electrónica y Boletín", "Estrategia probatoria (pericial/documental)"],
    faqs: [{ q: "¿Desde cuándo corre el término?", a: "Si no accedes al sistema en 3 días, la notificación surte efectos a la fecha de publicación en el Boletín Electrónico." }],
    cta: { headline: "Detén efectos y anula sanciones injustas", sub: "Analizamos la vía idónea a tiempo." } },
  { slug: "juicios-desocupacion", title: "Juicios de Desocupación", icon: <Building className="w-6 h-6" />, img: "/services/juicios-desocupacion.jpg",
    summary: "Recuperación de inmuebles por falta de pago o vencimiento de contrato. Estrategia para ruptura de prórroga tácita, pruebas y entrega material.",
    bullets: ["Demanda y medidas precautorias", "Ruptura de prórroga tácita cuando procede", "Cobro de rentas y daños", "Acompañamiento hasta la entrega del inmueble"],
    faqs: [{ q: "¿Cuánto tarda?", a: "Depende de la vía y del juzgado. Optimizamos escritos y pruebas para acelerar tiempos dentro del marco legal." }],
    cta: { headline: "Recupera tu propiedad con respaldo legal", sub: "Ruta clara de inicio a entrega." } },
  { slug: "proteccion-inmobiliaria", title: "Protección Inmobiliaria", icon: <Shield className="w-6 h-6" />, img: "/services/proteccion-inmobiliaria.jpg",
    summary: "Blindamos tu patrimonio con diagnósticos preventivos: contratos bien hechos, seguros, auditoría registral y estrategias de tenencia y uso.",
    bullets: ["Diagnóstico legal del inmueble", "Coberturas y seguros recomendados", "Cláusulas preventivas en contratos", "Plan de contingencias y compliance inmobiliario"],
    faqs: [{ q: "¿Sirve si ya rento o vendo?", a: "Sí. Ajustamos contratos y verificamos cargas para evitar litigios futuros." }],
    cta: { headline: "Patrimonio blindado, menos riesgos", sub: "Prevención jurídica integral." } },
];

// === HELPERS ===
function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} – Montaño Abogados | Consorcio Jurídico e Inmobiliaria`
      : "Montaño Abogados | Consorcio Jurídico e Inmobiliaria";
  }, [title]);
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-lg hover:scale-[1.02] transition"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="w-5 h-5" /> <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

// === COMPONENTES ===
function Navbar() {
  const base = "hover:underline";
  const active = "text-[#D4AF37] font-semibold";
  return (
    <header className="sticky top-0 z-50 bg-black/80 text-white backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-montano.png" alt="Montaño Abogados | Consorcio Jurídico e Inmobiliaria" className="h-7 w-auto" />
          <span className="font-semibold">{BRAND.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => `${base} ${isActive ? active : ""}`}>Inicio</NavLink>
          <NavLink to="/servicios" className={({isActive}) => `${base} ${isActive ? active : ""}`}>Servicios</NavLink>
          <NavLink to="/familia/no-contencioso" className={({isActive}) => `${base} ${isActive ? active : ""}`}>Familia (no contencioso)</NavLink>
          <NavLink to="/inmobiliaria/proteccion" className={({isActive}) => `${base} ${isActive ? active : ""}`}>Protección inmobiliaria</NavLink>
          <NavLink to="/contacto" className={({isActive}) => `${base} ${isActive ? active : ""}`}>Contacto</NavLink>
          <a className="hover:underline" href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
        <a href={`tel:${BRAND.phone}`} className="md:hidden"><Phone className="w-5 h-5" /></a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white text-zinc-900">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo-montano.png" alt="Montaño Abogados | Consorcio Jurídico e Inmobiliaria" className="h-6 w-auto" />
            <span className="font-semibold">{BRAND.short}</span>
          </div>
          <p className="text-zinc-600">{BRAND.address}</p>
          <p className="text-zinc-600 flex items-center gap-2 mt-2"><Phone className="w-4 h-4" /> Oficina: {BRAND.phones.office}</p>
          <p className="text-zinc-600 flex items-center gap-2"><Phone className="w-4 h-4" /> Contacto/WhatsApp: {BRAND.phones.mobile1}</p>
          <p className="text-zinc-600 flex items-center gap-2"><Phone className="w-4 h-4" /> Contacto: {BRAND.phones.mobile2}</p>
          <p className="text-zinc-600 flex items-center gap-2"><Mail className="w-4 h-4" />{BRAND.email}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Servicios</h4>
          <ul className="space-y-1">
            {SERVICES.map(s => (
              <li key={s.slug}><Link to={`/servicio/${s.slug}`} className="hover:underline">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Confianza</h4>
          <ul className="space-y-2 text-zinc-600">
            <li className="flex items-center gap-2"><Star className="w-4 h-4" />Atención personalizada</li>
            <li className="flex items-center gap-2"><FileText className="w-4 h-4" />Contratos y escritos a medida</li>
            <li className="flex items-center gap-2"><Scale className="w-4 h-4" />Ética y transparencia</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Ubicación</h4>
          <p className="text-zinc-600 flex items-center gap-2"><MapPin className="w-4 h-4" />{BRAND.address}</p>
          <a className="text-[#D4AF37] underline" href={BRAND.mapsUrl} target="_blank" rel="noreferrer">Ver en Google Maps</a>
        </div>
      </div>
      <div className="text-center text-xs text-zinc-500 py-4 border-t">© {new Date().getFullYear()} {BRAND.short}. Todos los derechos reservados.</div>
    </footer>
  );
}

function Hero() {
  usePageTitle("Inicio");
  return (
    <section className="relative border-b">
      <div className="absolute inset-0 -z-10">
        <img src="/nuevas-tendencias-del-derecho-utpl.png" alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/0" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center text-white">
        <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.2}} transition={{duration:0.6, ease:'easeOut'}}>
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-3xl md:text-5xl font-bold leading-tight">
            Situaciones Legales, Soluciones Reales
          </motion.h1>
          <p className="mt-4 text-white/90">{BRAND.slogan}. Somos un despacho juridico e inmobiliario en Guadalajara que combina práctica jurídica civil–familiar y un área inmobiliaria para resolver integralmente tus asuntos.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/servicios"><Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#c39c2f]">Ver servicios</Button></Link>
            <Link to="/contacto"><Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Agendar consulta</Button></Link>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-white/90">
            <Check className="w-4 h-4" /> Primera asesoría de valoración sin costo
          </div>
        </motion.div>
        <div>
          <Card className="shadow-xl bg-white text-zinc-900">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Solicita tu diagnóstico legal</h3>
              <LeadForm compact />
              <p className="text-xs text-zinc-500 mt-3">Al enviar, aceptas nuestro aviso de privacidad. Te contactaremos por WhatsApp o correo.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="bg-white border-b">
      <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.2}} transition={{duration:0.6, ease:'easeOut'}} className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-4 text-sm text-zinc-900">
        <div className="flex items-start gap-3"><Shield className="w-5 h-5 mt-0.5" /><p><b>Estrategia procesal</b> alineada a plazos y notificaciones electrónicas.</p></div>
        <div className="flex items-start gap-3"><Gavel className="w-5 h-5 mt-0.5" /><p><b>Documentos sólidos</b> (escritos, convenios, contratos) listos para presentar.</p></div>
        <div className="flex items-start gap-3"><Scale className="w-5 h-5 mt-0.5" /><p><b>Transparencia</b> en honorarios y etapas de tu asunto.</p></div>
      </motion.div>
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold">Áreas principales</h2>
        <p className="text-zinc-600 mt-2">Explora los servicios y entra a la landing page específica para conocer casos, FAQs, tiempos y costos estimados.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {SERVICES.map((s, idx) => (
            <Reveal key={s.slug} delay={idx * 0.06}>
              <Link to={`/servicio/${s.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-zinc-100 p-3">{s.icon}</div>
                      <h3 className="font-semibold">{s.title}</h3>
                    </div>
                    <p className="text-sm text-zinc-600 mt-3 line-clamp-3">{s.summary}</p>
                    <ImgWithWebp src={s.img} alt={s.title} className="mt-3 rounded-xl w-full aspect-[3/2] object-cover border-2" />
                    <div className="mt-4 flex items-center text-[#D4AF37] text-sm">Ver detalles <ChevronRight className="w-4 h-4" /></div>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <SocialSection />
      <CTAStrip />
    </main>
  );
}

function SocialSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-14">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Redes sociales</h2>
          <p className="text-zinc-600">Algunos posts recientes de Instagram.</p>
        </div>
        <a
          href={BRAND.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-black px-4 py-2 hover:bg-[#c39c2f]"
        >
          <Instagram className="w-5 h-5" /> Síguenos en Instagram
        </a>
      </div>
      {/* Carrusel en móviles */}
      <div className="md:hidden mb-6">
        <SocialCarousel posts={SOCIAL_POSTS} />
      </div>

      {/* Grid en pantallas medianas y grandes */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4">
        {SOCIAL_POSTS.map((p, idx) => (
          <Reveal key={idx} delay={idx * 0.05}>
            <a href={p.href || BRAND.instagram} target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative overflow-hidden rounded-xl border-2 aspect-square">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e)=>{ e.currentTarget.src = SOCIAL_FALLBACK; e.currentTarget.onerror = null; }}
                  className="w-full h-full object-cover group-hover:opacity-90 transition"
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SocialCarousel({ posts = [] }) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const next = React.useCallback(() => {
    setIndex((i) => (i + 1) % posts.length);
  }, [posts.length]);

  const prev = React.useCallback(() => {
    setIndex((i) => (i - 1 + posts.length) % posts.length);
  }, [posts.length]);

  React.useEffect(() => {
    if (!posts.length || paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [posts.length, paused, next]);

  if (!posts.length) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-xl border-2">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)`, width: `${posts.length * 100}%` }}
        >
          {posts.map((p, i) => (
            <a
              key={i}
              href={p.href || BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-shrink-0"
              aria-label={p.alt}
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  referrerPolicy="no-referrer"
                  onError={(e)=>{ e.currentTarget.src = SOCIAL_FALLBACK; e.currentTarget.onerror = null; }}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={prev}
        className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="mt-3 flex justify-center gap-2">
        {posts.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#D4AF37]' : 'bg-zinc-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

function CTAStrip() {
  return (
    <section className="bg-gradient-to-r from-black to-[#D4AF37] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-xl font-semibold">¿Listo para dar el siguiente paso?</h3>
          <p className="text-white/90">Hablemos por WhatsApp y agenda tu valoración.</p>
        </div>
        <div className="flex md:justify-end">
          <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="lg" className="text-black">Escríbenos por WhatsApp</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesIndex() {
  usePageTitle("Servicios");
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Servicios</h1>
      <p className="text-zinc-600 mt-2">Selecciona un servicio para ver su landing page específica.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {SERVICES.map((s, idx) => (
          <Reveal key={s.slug} delay={idx * 0.06}>
            <Link to={`/servicio/${s.slug}`} className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-zinc-100 p-3">{s.icon}</div>
                    <h3 className="font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-600 mt-3 line-clamp-3">{s.summary}</p>
                  <ImgWithWebp src={s.img} alt={s.title} className="mt-3 rounded-xl w-full aspect-[3/2] object-cover border-2" />
                  <div className="mt-4 flex items-center text-[#D4AF37] text-sm">Ver landing <ChevronRight className="w-4 h-4" /></div>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}

function LeadForm({ compact=false, serviceTitle }) {
  const [data, setData] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!data.nombre.trim()) e.nombre = "Ingresa tu nombre";
    if (!data.telefono.trim()) e.telefono = "Ingresa tu teléfono";
    if (data.email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(data.email)) e.email = "Correo no válido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const text = encodeURIComponent(`Hola, soy ${data.nombre}. Me interesa ${serviceTitle || "una consulta"}.\\nTel: ${data.telefono}\\nCorreo: ${data.email}\\nMensaje: ${data.mensaje}`);
    const url = `https://wa.me/${BRAND.whatsapp}?text=${text}`;
    window.open(url, "_blank");
    navigate("/gracias");
  };

  return (
    <form onSubmit={handleSubmit} className={`grid gap-3 ${compact ? "" : "max-w-lg"}`} noValidate>
      <div>
        <Input placeholder="Nombre" required value={data.nombre} onChange={e=>setData({...data,nombre:e.target.value})} />
        {errors.nombre && <p className="text-xs text-red-600 mt-1">{errors.nombre}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Input placeholder="Teléfono" required value={data.telefono} onChange={e=>setData({...data,telefono:e.target.value})} />
          {errors.telefono && <p className="text-xs text-red-600 mt-1">{errors.telefono}</p>}
        </div>
        <div>
          <Input placeholder="Correo" type="email" value={data.email} onChange={e=>setData({...data,email:e.target.value})} />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>
      {!compact && (
        <Textarea placeholder="Cuéntanos brevemente tu caso (opcional)" value={data.mensaje} onChange={e=>setData({...data,mensaje:e.target.value})} />
      )}
      <Button type="submit" className="mt-1">Solicitar consulta</Button>
      <p className="text-xs text-zinc-500">Tiempo de respuesta promedio: 15–45 min en horario laboral.</p>
    </form>
  );
}

function ServiceLanding() {
  const { slug } = useParams();
  const service = useMemo(() => SERVICES.find(s => s.slug === slug), [slug]);
  usePageTitle(service ? service.title : "Servicio");

  if (!service) return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold">Servicio no encontrado</h1>
      <Link to="/servicios" className="text-[#D4AF37] underline">Regresar a servicios</Link>
    </main>
  );

  return (
    <main>
      <section className="bg-white border-b text-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="text-zinc-600 mt-2">{service.summary}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 text-[#D4AF37]" /> <span>{b}</span></li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer"><Button size="lg">Hablar por WhatsApp</Button></a>
              <Link to="/contacto"><Button variant="outline" size="lg" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">Agendar consulta</Button></Link>
            </div>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <ImgWithWebp src={service.img} alt={service.title} className="rounded-xl w-full aspect-[3/2] object-cover border-2 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Solicita asesoría en {service.title}</h3>
                <LeadForm serviceTitle={service.title} />
              </CardContent>
            </Card>
            <p className="text-xs text-zinc-500 mt-3 px-1">Resguardamos tu información. Sin spam.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold">Cómo trabajamos tu caso</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {["Diagnóstico", "Estrategia y escritos", "Seguimiento y cierre"].map((step, i) => (
            <Card key={step}>
              <CardContent className="p-5">
                <div className="text-3xl font-bold text-[#D4AF37]">{i+1}</div>
                <h3 className="font-semibold mt-2">{step}</h3>
                <p className="text-sm text-zinc-600 mt-1">Explicamos tiempos, documentos necesarios y probables escenarios; redactamos demandas, contestaciones o contratos; y te mantenemos al tanto en cada etapa.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {service.faqs?.length ? (
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <h2 className="text-xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-4 space-y-4">
            {service.faqs.map((f, i) => (
              <details key={i} className="bg-white border-2 rounded-xl p-4 text-zinc-900">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="text-sm text-zinc-600 mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <CTAStrip />
    </main>
  );
}

function ContactPage() {
  usePageTitle("Contacto");
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(BRAND.address)}&output=embed`;
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-2xl font-semibold">Contacto</h1>
        <p className="text-zinc-600 mt-2">Cuéntanos tu caso y agenda una consulta. Respondemos rápido por WhatsApp o correo.</p>
        <div className="mt-4 space-y-2 text-sm">
          <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a className="text-[#D4AF37] underline" href={`tel:${BRAND.phones.office}`}>{BRAND.phones.office} (Oficina)</a></p>
          <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a className="text-[#D4AF37] underline" href={`tel:${BRAND.phones.mobile1}`}>{BRAND.phones.mobile1} (WhatsApp)</a></p>
          <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a className="text-[#D4AF37] underline" href={`tel:${BRAND.phones.mobile2}`}>{BRAND.phones.mobile2}</a></p>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a className="text-[#D4AF37] underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {BRAND.address}</p>
          <a className="text-[#D4AF37] underline" href={BRAND.mapsUrl} target="_blank" rel="noreferrer">Ver en Google Maps</a>
        </div>
        <div className="mt-6 aspect-video w-full rounded-2xl overflow-hidden border">
          <iframe title="Mapa" src={mapsEmbed} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">Escríbenos</h3>
            <LeadForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function ThankYou() {
  usePageTitle("Gracias");
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-2xl font-semibold">¡Gracias por escribirnos!</h1>
      <p className="text-zinc-600 mt-2">En breve un abogado te contactará por WhatsApp o correo. Si es urgente, llámanos al <a className="text-[#D4AF37] underline" href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>.</p>
      <div className="mt-6"><Link to="/"><Button>Volver al inicio</Button></Link></div>
    </main>
  );
}

function SeoHead() {
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": BRAND.name,
    "areaServed": "Guadalajara, Jalisco, MX",
    "email": BRAND.email,
    "telephone": BRAND.phone,
    "url": "https://montanoabogados.mx",
    "knowsAbout": SERVICES.map(s => s.title),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonld)}} />
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SeoHead />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesIndex />} />
          <Route path="/servicio/:slug" element={<ServiceLanding />} />
          <Route path="/familia/no-contencioso" element={<CategoryLanding />} />
          <Route path="/familia/no-contencioso/:id" element={<ServiceLandingNew />} />
          <Route path="/inmobiliaria/proteccion" element={<InmobiliariaLanding />} />
          <Route path="/inmobiliaria/proteccion/:id" element={<ServiceLandingNew />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/gracias" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </BrowserRouter>
    </div>
  );
}

function NotFound() {
  usePageTitle("404");
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold">Página no encontrada</h1>
      <p className="text-zinc-600 mt-2">La URL no existe. Regresa al inicio.</p>
      <div className="mt-4"><Link to="/"><Button>Ir al inicio</Button></Link></div>
    </main>
  );
}
