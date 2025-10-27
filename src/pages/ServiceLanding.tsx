import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

function useMeta(title: string, description: string, image?: string) {
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
    if (image) upsertProp("image", image);
    upsertProp("type", "article");
  }, [title, description, image]);
}

export default function ServiceLanding() {
  const { id } = useParams<{ id: string }>();
  const service = useMemo(() => services.find((s) => s.id === id), [id]);

  useMeta(
    service ? service.title : "Servicio",
    service
      ? `${service.short} ${service.title} – Montaño Abogados.`.slice(0, 160)
      : "Servicio de familia no contencioso – Montaño Abogados.",
    service?.image
  );

  useEffect(() => {
    if (!service) return;
    if (service.faq?.length) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      const json = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      };
      script.text = JSON.stringify(json);
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [service]);

  if (!service) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold text-white">Servicio no encontrado</h1>
        <p className="text-white/80 mt-2">Revisa el catálogo de la categoría.</p>
        <div className="mt-4">
          <Link to="/familia/no-contencioso">
            <Button>Volver a la categoría</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="relative border-b">
        <div className="absolute inset-0 -z-10">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 text-white">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-3 text-white/90 max-w-3xl">{service.short}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6">
              <Link to="/contacto">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#c39c2f]">
                  {service.ctaLabel}
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Reveal>
              <Card className="bg-white">
                <CardContent className="p-6 text-zinc-900">
                  <h2 className="text-xl font-semibold">¿En qué consiste?</h2>
                  <p className="text-zinc-700 mt-3 leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            {service.faq?.length ? (
              <Reveal>
                <Card className="bg-white">
                  <CardContent className="p-6 text-zinc-900">
                    <h2 className="text-xl font-semibold">Preguntas frecuentes</h2>
                    <div className="mt-4 space-y-3">
                      {service.faq.map((f, i) => (
                        <details key={i} className="bg-white border rounded-xl p-4">
                          <summary className="font-medium cursor-pointer">{f.q}</summary>
                          <p className="text-sm text-zinc-700 mt-2">{f.a}</p>
                        </details>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ) : null}
          </div>

          <aside className="space-y-4">
            <Reveal delay={0.06}>
              <Card className="bg-white">
                <CardContent className="p-6 text-zinc-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl w-full aspect-[3/2] object-cover border mb-4"
                  />
                  <Link to={service.ctaHref}>
                    <Button className="w-full">{service.ctaLabel}</Button>
                  </Link>
                </CardContent>
              </Card>
            </Reveal>
          </aside>
        </div>
      </section>

      <div className="sticky bottom-0 z-40 border-t bg-gradient-to-r from-black to-[#D4AF37] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-white">
          <div className="text-sm hidden md:block">
            ¿Listo para dar el siguiente paso?
          </div>
          <Link to={service.ctaHref}>
            <Button variant="secondary" className="text-black">{service.ctaLabel}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
