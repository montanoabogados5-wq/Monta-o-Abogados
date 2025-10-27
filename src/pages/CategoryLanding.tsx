import React, { useEffect } from "react";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";

const TITLE = "Litigios familiares no contenciosos";
const DESCRIPTION =
  "Servicios legales de familia no contenciosos: acreditación de concubinato, autorizaciones, rectificaciones y homologaciones. Agenda una consulta y recibe orientación clara.";

function useMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} – Montaño Abogados`;
    const upsertName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const upsertProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="og:${prop}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", `og:${prop}`);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    upsertName("description", description);
    upsertProp("title", `${title} – Montaño Abogados`);
    upsertProp("description", description);
    upsertProp("type", "website");
  }, [title, description]);
}

export default function CategoryLanding() {
  useMeta(TITLE, DESCRIPTION);
  const items = services.filter(
    (s) => s.category === "litigios-familiares-no-contenciosos"
  );

  return (
    <main className="min-h-screen">
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{TITLE}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-white/80 mt-2 max-w-3xl">{DESCRIPTION}</p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, idx) => (
            <Reveal key={s.id} delay={idx * 0.06}>
              <ServiceCard
                to={`/familia/no-contencioso/${s.id}`}
                title={s.title}
                short={s.short}
                image={s.image}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
