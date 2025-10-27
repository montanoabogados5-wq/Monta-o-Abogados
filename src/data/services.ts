export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  image: string;
  category: "litigios-familiares-no-contenciosos" | "proteccion-inmobiliaria";
  faq: { q: string; a: string }[];
  ctaLabel: string;
  ctaHref: string;
};

export const services: Service[] = [
  {
    id: "acreditacion-de-concubinato",
    title: "Acreditación de concubinato",
    short: "Procedimiento para reconocer legalmente la unión de hecho.",
    description:
      "La acreditación de concubinato es un procedimiento orientado a reconocer la unión de hecho entre dos personas que han vivido juntas de manera constante y permanente. Este reconocimiento puede ser relevante para efectos sucesorios, de seguridad social, derechos patrimoniales y otras prestaciones. El trámite se apoya en pruebas documentales y testimoniales, así como en la demostración del tiempo de convivencia y ausencia de impedimentos legales. Nuestro enfoque prioriza la claridad de requisitos, el resguardo de la información y la preparación cuidadosa de la evidencia, sin prometer resultados, buscando siempre la vía más adecuada para proteger tus derechos.",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22f47574?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Qué documentos se requieren?", a: "Identificaciones, comprobantes de domicilio y pruebas de convivencia (testigos, contratos, recibos, fotografías)." },
      { q: "¿Cuánto tiempo puede tomar?", a: "Varía por juzgado y calidad de prueba; puede ir de semanas a meses." },
      { q: "¿Es necesario que ambas personas comparezcan?", a: "Ayuda, pero existen vías probatorias cuando una de las partes no puede presentarse." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "autorizacion-para-salir-del-pais",
    title: "Autorización para salir del país",
    short: "Permiso judicial cuando falta consentimiento de quien ejerce patria potestad.",
    description:
      "Este procedimiento busca obtener la autorización judicial para que un menor pueda salir del país cuando no se cuenta con el consentimiento de quien ejerce la patria potestad o tutela. Implica demostrar la conveniencia del viaje, el resguardo de la integridad del menor y la temporalidad de la salida. Se valoran documentos del itinerario, hospedaje, motivos del desplazamiento y medidas de contacto. Se prioriza la protección del interés superior de niñas, niños y adolescentes, sustentando la solicitud con evidencia clara y respetando los plazos procesales aplicables.",
    image: "https://images.unsplash.com/photo-1518544801976-3e1883a3a57a?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Qué evidencia se sugiere?", a: "Itinerario, boletos, hospedaje, motivos del viaje y medios de localización del adulto acompañante." },
      { q: "¿Se puede negar la autorización?", a: "Puede negarse si no se acredita conveniencia o existen riesgos; por eso se sustenta con pruebas." },
      { q: "¿Se requiere audiencia?", a: "Usualmente sí; el juzgado escucha a las partes y puede pedir informes adicionales." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "cambio-de-regimen-patrimonial",
    title: "Cambio de régimen patrimonial",
    short: "Trámite para modificar el régimen económico del matrimonio.",
    description:
      "El cambio de régimen patrimonial permite pasar de separación de bienes a sociedad conyugal o viceversa, según nuevas circunstancias familiares y patrimoniales. Involucra acuerdos claros entre las partes, inventario y, en su caso, protocolización de convenios. Se revisan pasivos y activos, responsabilidades y efectos fiscales/registrales. La asesoría contempla viabilidad, formalidades notariales o judiciales y la documentación necesaria para minimizar contingencias futuras, con expectativas realistas y respeto al marco legal.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1523285367489-d38aec03b6bd?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Se requiere acuerdo de ambos?", a: "Sí, generalmente con consentimiento y convenio claro que refleje la voluntad de las partes." },
      { q: "¿Interviene notario o juzgado?", a: "Depende del caso; con acuerdo y claridad patrimonial puede ser notarial; de lo contrario, judicial." },
      { q: "¿Qué pasa con las deudas?", a: "Se define su asignación conforme al nuevo régimen, evitando confusiones sobre responsabilidad futura." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "dependencia-economica",
    title: "Dependencia económica",
    short: "Declaración para fines de seguridad social y prestaciones.",
    description:
      "La declaración de dependencia económica busca reconocer la relación mediante la cual una persona sostiene económicamente a otra, con efectos en acceso a prestaciones, pensiones o servicios de salud. Requiere demostrar aportaciones constantes, convivencia o relación de cuidado y la ausencia de medios propios suficientes. El expediente se integra con comprobantes de gastos, estados de cuenta y testimonios. La preparación adecuada de la prueba y la elección de la vía facilitan el reconocimiento, con claridad sobre alcances y límites.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1515165562835-c4c1b572ef17?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Para qué sirve?", a: "Para afiliación, pensiones o prestaciones donde se exige acreditar dependencia formalmente." },
      { q: "¿Qué pruebas ayudan?", a: "Depósitos periódicos, recibos de pago de servicios, gastos médicos y testimonios coherentes." },
      { q: "¿Puede negarse?", a: "Sí, si las pruebas son insuficientes; por eso se cuida la consistencia documental y testimonial." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "identidad-de-persona",
    title: "Identidad de persona",
    short: "Procedimiento para acreditar identidad ante inconsistencias documentales.",
    description:
      "Se utiliza cuando existen inconsistencias en documentos oficiales que dificultan trámites o generan dudas sobre la identidad. Se compilan actas, identificaciones, constancias y testimonios que demuestran la identidad y, en su caso, se gestionan rectificaciones. El objetivo es ofrecer certeza jurídica mediante un expediente sólido y ordenado. Se evita prometer resultados y se enfoca el análisis en la vía idónea y en la prevención de errores futuros en registros y dependencias.",
    image: "https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Cuándo procede?", a: "Cuando hay diferencias entre actas o identificaciones que impiden trámites o generan dudas." },
      { q: "¿Qué documentos se anexan?", a: "Actas, identificaciones, constancias y pruebas que acrediten de forma consistente la identidad." },
      { q: "¿Se relaciona con rectificación de acta?", a: "Puede derivar en rectificaciones; se evalúa el camino más eficiente según el caso." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "los-procedimientos-de-divorcio-por-mutuo-consentimiento",
    title: "Los procedimientos de divorcio por mutuo consentimiento",
    short: "Ruta acordada para terminar el vínculo matrimonial con convenio.",
    description:
      "El divorcio por mutuo consentimiento implica que ambas personas acuerdan terminar el vínculo matrimonial mediante un convenio que regula custodia, convivencia, alimentos y bienes. La asesoría se centra en estructurar un convenio claro y ejecutable, prevenir controversias futuras y cumplir con requisitos formales. Los tiempos y etapas dependen del juzgado y de la complejidad de los acuerdos. Se privilegia un proceso ordenado y transparente, priorizando el interés superior de niñas, niños y adolescentes, cuando corresponda.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1518397387277-7843f7251311?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Qué debe incluir el convenio?", a: "Custodia, convivencia, pensión, bienes y cualquier acuerdo relevante, con redacción clara." },
      { q: "¿Cuánto tarda?", a: "Depende del juzgado y la claridad del convenio; trámites sencillos pueden resolverse en semanas." },
      { q: "¿Se requiere audiencia?", a: "Usualmente sí; el juzgado verifica el convenio y puede solicitar ajustes para salvaguardar derechos." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "homologacion-de-convenios",
    title: "Homologación de convenios",
    short: "Reconocimiento judicial de acuerdos privados para darles fuerza ejecutiva.",
    description:
      "La homologación busca que un acuerdo privado sea reconocido por la autoridad para tener fuerza ejecutiva. Es útil para pactos sobre alimentos, convivencia, entrega de bienes u otras obligaciones. Se revisa la licitud, claridad y equilibrio del convenio, procurando que su redacción sea precisa y fácil de ejecutar. El proceso puede incluir ratificación y revisión judicial. Se privilegia transparencia en alcances y límites, sin generar expectativas de resultado.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Qué convenios se homologan?", a: "Por ejemplo: alimentos, convivencia, entrega de bienes, liquidaciones; deben ser lícitos y claros." },
      { q: "¿Tiene efectos ejecutivos?", a: "Sí, al ser homologado puede exigirse su cumplimiento vía judicial si se incumple." },
      { q: "¿Se puede modificar?", a: "Sí, con nueva homologación cuando cambian sustancialmente las circunstancias o hay acuerdo." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "rectificacion-de-acta",
    title: "Rectificación de Acta",
    short: "Corrección de errores en actas del Registro Civil.",
    description:
      "Busca corregir errores u omisiones en documentos del Registro Civil (nacimiento, matrimonio, defunción). Puede tramitarse por vía administrativa o judicial según el error y la normativa local. Se analizan documentos soporte, antecedentes y afectaciones. El objetivo es lograr coherencia entre registros y respetar el debido proceso. La preparación de pruebas documentales y, en su caso, testimoniales, resulta clave para la viabilidad del trámite.",
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Cuándo es administrativa?", a: "Cuando el error es evidente y la ley local lo permite; de lo contrario, se recurre a la vía judicial." },
      { q: "¿Qué pruebas se anexan?", a: "Actas relacionadas, identificaciones y documentos que acrediten el error y la corrección solicitada." },
      { q: "¿Cuánto tarda?", a: "Varía según complejidad y autoridad; puede ser de semanas a meses." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "anotacion-de-acta",
    title: "Anotación de Acta",
    short: "Asentar notas marginales o complementarias en actas.",
    description:
      "Permite incorporar notas marginales o complementarias en registros para reflejar cambios legales (divorcios, reconocimientos, rectificaciones). Requiere verificar procedencia, contar con resolución o documento base y seguir la ruta administrativa o judicial según la normativa. Se documenta con precisión para mantener consistencia entre registros y evitar contratiempos posteriores.",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Qué se anota?", a: "Notas que reflejan resoluciones o hechos relevantes que modifican o complementan el registro original." },
      { q: "¿Qué documento base se requiere?", a: "Resolución, sentencia o instrumento que justifique la anotación, con identificación y formato oficial." },
      { q: "¿Dónde se tramita?", a: "Ante Registro Civil o juzgado, según el supuesto y la legislación local." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "nulidad-de-acta-de-nacimiento",
    title: "Nulidad de Acta de Nacimiento",
    short: "Vía judicial para declarar la nulidad de un acta por vicios graves.",
    description:
      "Procede cuando existen vicios graves que afectan su validez (suplantación, error esencial o falta de formalidades sustantivas). Es un proceso judicial que exige estrategia probatoria robusta y análisis de efectos colaterales. Se evita generar expectativas de resultado; se privilegia la claridad de la pretensión y la coherencia documental para respaldar la solicitud ante la autoridad competente.",
    image: "https://images.unsplash.com/photo-1516924962500-6a024f01f91c?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Cuándo procede la nulidad?", a: "Cuando hay vicios esenciales en el acta que la hacen inválida, conforme a la ley aplicable." },
      { q: "¿Qué riesgos hay?", a: "Puede impactar otros registros; se planifica la regularización posterior si resulta procedente." },
      { q: "¿Es largo el proceso?", a: "Requiere análisis y pruebas; los tiempos dependen de la carga del juzgado y la complejidad." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "levantamiento-de-acta-de-defuncion",
    title: "Levantamiento de Acta de Defunción",
    short: "Gestión para registrar una defunción no asentada oportunamente.",
    description:
      "Se realiza cuando el fallecimiento no fue registrado oportunamente y se requiere regularizar la situación ante el Registro Civil. Implica recabar documentos médicos, testimonios y, en su caso, intervenciones de autoridades. Se busca dar certeza jurídica para trámites subsecuentes, como sucesiones o pensiones. El acompañamiento incluye la organización del expediente y la orientación sobre la vía correcta, administrativa o judicial.",
    image: "https://images.unsplash.com/photo-1489365091240-6a18fc761ec2?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Qué documentos se piden?", a: "Constancias médicas, identificaciones, testimonios y documentos que acrediten la defunción y su circunstancia." },
      { q: "¿Se puede hacer por vía administrativa?", a: "En algunos supuestos sí; de lo contrario, se solicita ante autoridad judicial con pruebas suficientes." },
      { q: "¿Para qué sirve regularizar?", a: "Permite realizar trámites sucesorios, pensiones y demás gestiones que exigen el acta registrada." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "divorcio-incausado-sin-hijos-menor-de-edad",
    title: "Divorcio Incausado sin hijos menor de edad",
    short: "Disolución del matrimonio por voluntad unilateral sin hijos menores.",
    description:
      "El divorcio incausado permite disolver el matrimonio por decisión unilateral, sin necesidad de invocar causa específica. Cuando no hay hijas o hijos menores, el proceso suele concentrarse en bienes y acuerdos colaterales. Se elaboran escritos claros y se atienden medidas provisionales cuando proceden. Se informa con transparencia sobre etapas y plazos, cuidando la integridad del expediente y el respeto a los derechos de ambas partes.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Requiere convenio?", a: "Puede requerir acuerdos sobre bienes y otras medidas; se busca claridad para evitar conflictos posteriores." },
      { q: "¿Cuánto tarda?", a: "Varía por juzgado y carga de trabajo; en escenarios simples puede resolverse con mayor agilidad." },
      { q: "¿Se notifica a la otra parte?", a: "Sí, y puede presentar contestación u oposiciones conforme a derecho." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "homologacion-de-sentencia-extranjera",
    title: "Homologación de sentencia extranjera",
    short: "Reconocimiento en México de resoluciones emitidas en el extranjero.",
    description:
      "Busca que una resolución emitida por autoridad de otro país surta efectos en México. Se revisan requisitos de reconocimiento, competencia, notificación, cosa juzgada y compatibilidad con el orden público. Es un proceso técnico que demanda expediente bien integrado. Se acompaña con transparencia sobre posibilidades y límites, y se define la estrategia documental adecuada al caso concreto.",
    image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Qué requisitos se valoran?", a: "Competencia, notificación válida, cosa juzgada, autenticidad y compatibilidad con el orden público." },
      { q: "¿Se admite cualquier sentencia?", a: "No; debe cumplir condiciones legales y formales, por lo que se analiza caso por caso." },
      { q: "¿Se necesita traducción?", a: "Sí, por lo general traducción oficial y, en su caso, apostilla o legalización." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "autorizacion-de-venta-de-bienes-de-menores-de-edad",
    title: "Autorización de venta de bienes de menores de edad",
    short: "Permiso judicial para enajenar bienes pertenecientes a menores.",
    description:
      "Trámite que busca proteger el patrimonio del menor, garantizando que la operación sea necesaria, conveniente y transparente. Se justifican motivos, destino de los recursos y medidas de seguridad. La autoridad valora el interés superior y puede requerir informes o garantías. El acompañamiento incluye la preparación de la solicitud, anexos y atención a audiencias o prevenciones que se emitan.",
    image: "https://images.unsplash.com/photo-1496302662116-85c3c3a2731c?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop
    category: "litigios-familiares-no-contenciosos",
    faq: [
      { q: "¿Cuándo procede?", a: "Cuando la venta es en beneficio del menor y se acredita necesidad, conveniencia y transparencia." },
      { q: "¿Se requiere avalúo?", a: "Comúnmente sí; además de informes y, en su caso, garantías o medidas de seguimiento." },
      { q: "¿Qué tan largo es el trámite?", a: "Depende de la complejidad y de las prevenciones que emita el juzgado; se atienden puntualmente." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },

  // === PROTECCIÓN INMOBILIARIA ===
  {
    id: "asesoria-y-proteccion-inmobiliaria",
    title: "Asesoría y protección inmobiliaria",
    short: "Diagnóstico legal integral del inmueble y prevención de riesgos.",
    description:
      "Realizamos un diagnóstico jurídico completo del inmueble para detectar y prevenir riesgos antes de cualquier operación. Revisamos la cadena de titularidad y antecedentes registrales, coincidencia entre realidad física, catastro y registro; estado fiscal y cargas vigentes. Evaluamos contratos existentes (arrendamientos, promesas, comodatos), conflictos posesorios o sucesorios, y proponemos medidas para proteger el patrimonio frente a terceros. Nuestro enfoque es preventivo y transparente: definimos la vía idónea de regularización o formalización cuando corresponde, y establecemos un plan de acción con prioridades, tiempos y requisitos, sin prometer resultados. La meta es que tomes decisiones informadas con certeza jurídica.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop
    category: "proteccion-inmobiliaria",
    faq: [
      { q: "¿Qué revisan en el diagnóstico?", a: "Titularidad, gravámenes, coincidencia registral‑catastral, adeudos y riesgos contractuales." },
      { q: "¿Sirve si ya firmé contrato?", a: "Sí; evaluamos riesgos y proponemos ajustes o rutas de regularización cuando sea posible." },
      { q: "¿Cuánto tarda?", a: "Depende del acceso a información (RPP, Catastro, fiscal); entregamos un plan con tiempos estimados." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "acompanamiento-en-escrituracion-notarial",
    title: "Acompañamiento en escrituración notarial",
    short: "Coordinación con notaría: documentos, certificados y firma segura.",
    description:
      "Te acompañamos durante la escrituración para que la escritura refleje exactamente tus derechos y obligaciones. Coordinamos la integración del expediente con el notario público, gestionamos certificados de libertad de gravamen, avalúos, pagos de derechos e impuestos; verificamos identidad y facultades de quienes intervienen, así como la licitud y claridad de las cláusulas. Si se trata de inmuebles en condominio o con régimen especial (ejidal, fideicomiso), delineamos la documentación adicional requerida. El objetivo es reducir fricciones en firma y minimizar riesgos futuros, con seguimiento puntual hasta la inscripción en el Registro Público.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1200&auto=format&fit=crop
    category: "proteccion-inmobiliaria",
    faq: [
      { q: "¿Qué documentos suelen pedir?", a: "Identificaciones, títulos, boletas predial/agua, avalúo, CURP/RFC, y certificados de gravamen." },
      { q: "¿Apoyan con pagos e impuestos?", a: "Orientamos sobre cálculos y momentos de pago; la liquidación se realiza conforme a ley y práctica notarial." },
      { q: "¿Incluye registro?", a: "Damos seguimiento hasta la inscripción, coordinándonos con notaría y Registro Público." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "contratos-y-operaciones-inmobiliarias",
    title: "Contratos y operaciones inmobiliarias",
    short: "Contratos claros y ejecutables: compraventa, arrendamiento, fideicomiso.",
    description:
      "Redactamos y revisamos contratos de compraventa, arrendamiento, comodato, usufructo, promesa, corretaje/exclusividad y garantías (hipoteca o fideicomiso). Adaptamos cláusulas a tu caso para equilibrar riesgos, asegurar cumplimiento y facilitar la ejecución en caso de incumplimiento. Verificamos anexos esenciales (planos, inventarios, estados de cuenta) y compatibilidad con normativa aplicable, evitando ambigüedades que deriven en litigios. Nuestra prioridad es que el documento sea claro, lícito y práctico.",
    image: "https://images.unsplash.com/photo-1554224155-3a589877462e?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1200&auto=format&fit=crop
    category: "proteccion-inmobiliaria",
    faq: [
      { q: "¿Pueden adaptar cláusulas?", a: "Sí, diseñamos penalidades, garantías, condiciones y mecanismos de resolución de controversias." },
      { q: "¿Revisan due diligence?", a: "Sí, validamos titularidad, cargas, facultades y congruencia física‑registral." },
      { q: "¿Sirve un contrato simple?", a: "Sí, si está bien hecho: claridad + ejecutabilidad = menos riesgos." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "defensa-y-litigios-inmobiliarios",
    title: "Defensa y litigios inmobiliarios",
    short: "Desocupación, usucapión, nulidad o rescisión, reivindicación y más.",
    description:
      "Representamos tus intereses en controversias inmobiliarias: juicios de desocupación por falta de pago o vencimiento, acciones de usucapión (prescripción positiva), nulidad o rescisión de compraventa por vicios o incumplimientos, acciones reivindicatorias y diligencias ante Registro Público o Catastro. La estrategia considera medidas precautorias, pruebas idóneas y seguimiento de notificaciones electrónicas. Informamos etapas y alcances con transparencia, cuidando expectativas y procurando salidas eficientes dentro del marco legal.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop
    category: "proteccion-inmobiliaria",
    faq: [
      { q: "¿Cuánto tarda un juicio?", a: "Depende de la vía y carga del juzgado; planificamos escritos y prueba para optimizar tiempos legales." },
      { q: "¿Se pueden pedir medidas?", a: "Sí, se analizan medidas precautorias y cautelares conforme al caso." },
      { q: "¿Qué pruebas ayudan?", a: "Documentales, periciales y testimoniales relacionadas con posesión, contratos y pagos." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "regularizacion-y-actualizacion-patrimonial",
    title: "Regularización y actualización patrimonial",
    short: "Subdivisión/fusión, cambios catastrales y correcciones registrales.",
    description:
      "Te ayudamos a poner en regla tu patrimonio para facilitar operaciones futuras. Atendemos subdivisiones, fusiones o relotificaciones; cambios de propietario, actualizaciones catastrales y correcciones de escrituras o asientos registrales. También regularizamos propiedades con antecedentes incompletos, copropiedad o régimen en condominio. Priorizamos orden documental, coherencia entre catastro‑registro‑realidad física y cumplimiento fiscal, con un plan de trabajo por etapas y requisitos claros.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1465804575741-338df8554e9c?q=80&w=1200&auto=format&fit=crop
    category: "proteccion-inmobiliaria",
    faq: [
      { q: "¿Qué documentos se requieren?", a: "Escrituras, planos, recibos, boletas y, en su caso, dictámenes y permisos municipales." },
      { q: "¿Puedo vender sin regularizar?", a: "Es posible que no; lo recomendable es corregir para evitar rechazos notariales o registrales." },
      { q: "¿Cuánto tarda?", a: "Depende del municipio/registro; se estima por etapa con base en requisitos y cargas de trabajo." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "planeacion-patrimonial-y-asesoria-preventiva",
    title: "Planeación patrimonial y asesoría preventiva",
    short: "Testamentos, donaciones, fideicomisos y blindaje patrimonial.",
    description:
      "Diseñamos estrategias de planeación patrimonial para proteger tu patrimonio y planear su transmisión. Asesoramos sobre testamentos, donaciones, fideicomisos, pólizas y estructuras de tenencia/uso que reduzcan riesgos. Evaluamos implicaciones fiscales y legales de operaciones inmobiliarias y recomendamos cláusulas preventivas en contratos. La prevención oportuna suele evitar litigios futuros y facilita la ejecución de acuerdos.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1523285367489-d38aec03b6bd?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1496302662116-85c3c3a2731c?q=80&w=1200&auto=format&fit=crop
    category: "proteccion-inmobiliaria",
    faq: [
      { q: "¿Qué instrumento me conviene?", a: "Depende de tu objetivo (uso, herencia, protección). Analizamos alternativas y sus implicaciones." },
      { q: "¿Puedo combinar figuras?", a: "Sí; por ejemplo, testamento + donación con reserva de usufructo + fideicomiso según el caso." },
      { q: "¿Qué previene litigios?", a: "Cláusulas claras, documentación completa y congruencia registral/fiscal." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
  {
    id: "servicios-complementarios-inmobiliarios",
    title: "Servicios complementarios inmobiliarios",
    short: "Hipotecas, inversión, extranjeros y administración de bienes.",
    description:
      "Brindamos apoyo en servicios complementarios que redondean la protección inmobiliaria: inscripción y cancelación de hipotecas; asesoría en créditos y financiamientos; lineamientos para adquisición por extranjeros; acompañamiento para desarrollos o condominios; y administración de bienes con contratos y bitácoras. Cada servicio se adapta a tu objetivo, como inversión, renta o venta con seguridad jurídica.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
    // image_alternatives:
    // - https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=1200&auto=format&fit=crop
    // - https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop
    category: "proteccion-inmobiliaria",
    faq: [
      { q: "¿Ayudan con cancelación de hipoteca?", a: "Sí; coordinamos documentación, liquidación y trámite ante notaría y registro." },
      { q: "¿Pueden asesorar a extranjeros?", a: "Sí; revisamos restricciones y mecanismos (fideicomiso en zona restringida, por ejemplo)." },
      { q: "¿Administran rentas?", a: "Sí; con contratos, cobranza y bitácoras conforme a lineamientos del propietario." },
    ],
    ctaLabel: "Agenda una consulta",
    ctaHref: "/contacto",
  },
];

// Para usar imágenes locales, coloca los archivos en /public/services y cambia `image` a "/services/<id>.jpg".
