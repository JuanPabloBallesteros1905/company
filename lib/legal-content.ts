type LegalSection = {
  heading: string
  body: string[]
}

type LegalDocument = {
  title: string
  description: string
  updated: string
  intro: string
  sections: LegalSection[]
}

const updated = "22 de octubre de 2026"
const updatedEn = "October 22, 2026"

export const privacy: Record<"es" | "en", LegalDocument> = {
  es: {
    title: "Política de privacidad",
    description:
      "Cómo SolutiaCorp recolecta, usa y protege los datos personales que recibimos a través de este sitio web.",
    updated,
    intro:
      "En SolutiaCorp respetamos tu privacidad. Esta política explica qué datos personales recolectamos, con qué finalidad, cuánto tiempo los conservamos y cómo puedes ejercer tus derechos, de acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        body: [
          "El responsable del tratamiento es Juan Pablo Ballesteros Sosa, persona natural, con domicilio en Santa Marta, Magdalena, Colombia.",
          "Canal de atención para asuntos de datos personales: jpballesterossosa@gmail.com.",
        ],
      },
      {
        heading: "2. Datos que recolectamos",
        body: [
          "Datos que nos proporcionas voluntariamente en el formulario de contacto: nombre, correo electrónico, teléfono o WhatsApp (opcional), empresa (opcional) y el mensaje que escribes.",
          "Datos técnicos de navegación agregados y anónimos: páginas visitadas, navegador, sistema operativo, país aproximado y fuente de la visita. No utilizamos estos datos para identificarte.",
          "No recolectamos datos sensibles, datos de menores de edad ni información financiera a través de este sitio.",
        ],
      },
      {
        heading: "3. Finalidad del tratamiento",
        body: [
          "Responder a tu solicitud, cotización o consulta.",
          "Contactarte para dar seguimiento comercial al proyecto que nos planteas.",
          "Enviarte, solo si lo aceptas, información ocasional sobre nuestros servicios.",
          "Medir el rendimiento del sitio y mejorar su contenido y experiencia de uso.",
        ],
      },
      {
        heading: "4. Base legal",
        body: [
          "La base legal es tu consentimiento libre, previo, expreso e informado, otorgado al marcar la casilla de aceptación del formulario.",
          "Puedes retirar tu consentimiento en cualquier momento escribiendo al canal de atención indicado, sin que ello afecte la legalidad del tratamiento previo.",
        ],
      },
      {
        heading: "5. Conservación de los datos",
        body: [
          "Conservamos los datos de contacto mientras exista una relación comercial o un interés legítimo en dar seguimiento a tu solicitud.",
          "Si no se concreta ningún proyecto, eliminamos los datos dentro de los veinticuatro (24) meses siguientes al último contacto, salvo obligación legal de conservarlos.",
        ],
      },
      {
        heading: "6. Encargados y transferencias",
        body: [
          "Nos apoyamos en proveedores tecnológicos que actúan como encargados del tratamiento: Brevo (envío de correos transaccionales) y Umami Cloud (analítica web sin cookies).",
          "Estos proveedores pueden almacenar datos en servidores fuera de Colombia. En todos los casos exigimos medidas contractuales de seguridad y confidencialidad.",
          "No vendemos, alquilamos ni compartimos tus datos personales con terceros para fines publicitarios.",
        ],
      },
      {
        heading: "7. Tus derechos",
        body: [
          "Como titular de los datos puedes: conocer, actualizar, rectificar y suprimir tu información; solicitar prueba de la autorización otorgada; ser informado sobre el uso dado a tus datos; presentar quejas ante la Superintendencia de Industria y Comercio; y revocar la autorización.",
          "Para ejercer estos derechos escríbenos a jpballesterossosa@gmail.com indicando tu nombre, el derecho que deseas ejercer y los datos involucrados. Responderemos en los términos legales (máximo 15 días hábiles para consultas y 15 días hábiles para reclamos).",
        ],
      },
      {
        heading: "8. Seguridad",
        body: [
          "Aplicamos medidas técnicas y organizativas razonables para proteger tu información: cifrado en tránsito (HTTPS), acceso restringido a las credenciales y minimización de los datos recolectados.",
          "Ningún sistema es absolutamente infalible. Si ocurre un incidente que afecte tus datos, te informaremos y tomaremos las medidas correctivas necesarias.",
        ],
      },
      {
        heading: "9. Cookies y tecnologías similares",
        body: [
          "Este sitio no utiliza cookies. La analítica se realiza con Umami, una herramienta sin cookies que no crea identificadores persistentes ni perfila usuarios.",
          "Puedes consultar el detalle en nuestra Política de cookies.",
        ],
      },
      {
        heading: "10. Cambios a esta política",
        body: [
          "Podemos actualizar esta política para reflejar cambios legales u operativos. La versión vigente estará siempre publicada en esta página con su fecha de actualización.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    description:
      "How SolutiaCorp collects, uses and protects the personal data we receive through this website.",
    updated: updatedEn,
    intro:
      "At SolutiaCorp we respect your privacy. This policy explains what personal data we collect, why, how long we keep it and how you can exercise your rights under Colombian Law 1581 of 2012 and Decree 1377 of 2013.",
    sections: [
      {
        heading: "1. Data controller",
        body: [
          "The data controller is Juan Pablo Ballesteros Sosa, a natural person domiciled in Santa Marta, Magdalena, Colombia.",
          "Data protection contact: jpballesterossosa@gmail.com.",
        ],
      },
      {
        heading: "2. Data we collect",
        body: [
          "Data you voluntarily provide in the contact form: name, email, phone or WhatsApp (optional), company (optional) and your message.",
          "Aggregated, anonymous technical data: pages visited, browser, operating system, approximate country and traffic source. We do not use it to identify you.",
          "We do not collect sensitive data, data from minors or financial information through this site.",
        ],
      },
      {
        heading: "3. Purpose",
        body: [
          "To reply to your request, quote or inquiry.",
          "To follow up commercially on the project you describe.",
          "To send occasional information about our services, only if you agree.",
          "To measure site performance and improve content and usability.",
        ],
      },
      {
        heading: "4. Legal basis",
        body: [
          "The legal basis is your free, prior, express and informed consent, given when you check the acceptance box in the form.",
          "You may withdraw your consent at any time by writing to the contact channel above.",
        ],
      },
      {
        heading: "5. Retention",
        body: [
          "We keep contact data while there is a commercial relationship or a legitimate interest in following up on your request.",
          "If no project is agreed, we delete the data within 24 months of the last contact, unless a legal obligation requires otherwise.",
        ],
      },
      {
        heading: "6. Processors and transfers",
        body: [
          "We rely on technology providers acting as data processors: Brevo (transactional email) and Umami Cloud (cookieless web analytics).",
          "These providers may store data outside Colombia. We require contractual security and confidentiality measures in all cases.",
          "We do not sell, rent or share your personal data with third parties for advertising purposes.",
        ],
      },
      {
        heading: "7. Your rights",
        body: [
          "You may know, update, rectify and delete your information; request proof of authorization; be informed about the use of your data; file complaints with the Superintendence of Industry and Commerce; and revoke authorization.",
          "To exercise these rights, email jpballesterossosa@gmail.com with your name, the right you wish to exercise and the data involved. We will respond within the legal deadlines.",
        ],
      },
      {
        heading: "8. Security",
        body: [
          "We apply reasonable technical and organizational measures: HTTPS encryption, restricted access to credentials and data minimization.",
          "No system is completely infallible. If an incident affects your data, we will inform you and take corrective measures.",
        ],
      },
      {
        heading: "9. Cookies and similar technologies",
        body: [
          "This site does not use cookies. Analytics are provided by Umami, which does not use cookies, persistent identifiers or user profiling.",
          "See our Cookie policy for details.",
        ],
      },
      {
        heading: "10. Changes",
        body: [
          "We may update this policy to reflect legal or operational changes. The current version will always be published on this page with its update date.",
        ],
      },
    ],
  },
}

export const cookies: Record<"es" | "en", LegalDocument> = {
  es: {
    title: "Política de cookies",
    description: "Qué tecnologías de almacenamiento usa este sitio y por qué.",
    updated,
    intro:
      "Esta política explica el uso de cookies y tecnologías similares en solutiacorp.co. Puedes navegar por el sitio sin aceptar cookies de publicidad o seguimiento.",
    sections: [
      {
        heading: "1. Qué son las cookies",
        body: [
          "Las cookies son pequeños archivos que un sitio guarda en tu navegador para recordar información entre visitas o durante una misma sesión. También existen tecnologías equivalentes, como el almacenamiento local.",
        ],
      },
      {
        heading: "2. Cookies que usamos",
        body: [
          "Este sitio no instala cookies propias. El idioma se define por la URL (/es o /en), así que no necesitamos guardar tu preferencia en el navegador.",
          "Analítica sin cookies: usamos Umami, que no instala cookies ni crea identificadores personales. Mide visitas de forma agregada y anónima.",
        ],
      },
      {
        heading: "3. Cookies de terceros",
        body: [
          "No utilizamos cookies de publicidad, remarketing ni redes sociales. No incorporamos píxeles de seguimiento de terceros.",
          "Si en el futuro incorporamos herramientas que requieran consentimiento, actualizaremos esta política y mostraremos un banner para que puedas aceptar o rechazar.",
        ],
      },
      {
        heading: "4. Cómo controlarlas",
        body: [
          "Puedes eliminar o bloquear cookies desde la configuración de tu navegador (Chrome, Safari, Firefox, Edge). Este sitio seguirá funcionando igual porque no las utiliza.",
          "También puedes usar el modo incógnito o extensiones de privacidad sin perder funcionalidad.",
        ],
      },
      {
        heading: "5. Contacto",
        body: [
          "Si tienes dudas sobre esta política, escríbenos a jpballesterossosa@gmail.com.",
        ],
      },
    ],
  },
  en: {
    title: "Cookie policy",
    description: "Which storage technologies this site uses and why.",
    updated: updatedEn,
    intro:
      "This policy explains the use of cookies and similar technologies on solutiacorp.co. You can browse the site without accepting advertising or tracking cookies.",
    sections: [
      {
        heading: "1. What cookies are",
        body: [
          "Cookies are small files a site stores in your browser to remember information between visits or during a session. Local storage is an equivalent technology.",
        ],
      },
      {
        heading: "2. Cookies we use",
        body: [
          "This site does not set its own cookies. The language is defined by the URL (/es or /en), so we do not need to store your preference in the browser.",
          "Cookieless analytics: we use Umami, which installs no cookies and creates no personal identifiers. It measures visits in an aggregated, anonymous way.",
        ],
      },
      {
        heading: "3. Third-party cookies",
        body: [
          "We do not use advertising, remarketing or social media cookies, and we do not embed third-party tracking pixels.",
          "If we add tools that require consent in the future, we will update this policy and show a banner so you can accept or reject them.",
        ],
      },
      {
        heading: "4. How to control them",
        body: [
          "You can delete or block cookies in your browser settings (Chrome, Safari, Firefox, Edge). This site will keep working because it does not use cookies.",
          "You can also use private browsing or privacy extensions without losing functionality.",
        ],
      },
      {
        heading: "5. Contact",
        body: ["If you have questions about this policy, email jpballesterossosa@gmail.com."],
      },
    ],
  },
}

export const terms: Record<"es" | "en", LegalDocument> = {
  es: {
    title: "Términos y condiciones",
    description: "Condiciones de uso del sitio web de SolutiaCorp.",
    updated,
    intro:
      "Al acceder y usar solutiacorp.co aceptas estos términos. Si no estás de acuerdo, te pedimos no utilizar el sitio.",
    sections: [
      {
        heading: "1. Identificación",
        body: [
          "El sitio es operado por Juan Pablo Ballesteros Sosa, persona natural, con domicilio en Santa Marta, Magdalena, Colombia. Contacto: jpballesterossosa@gmail.com.",
        ],
      },
      {
        heading: "2. Objeto del sitio",
        body: [
          "Este sitio presenta información sobre servicios de desarrollo de software, aplicaciones web y móviles, automatización de procesos y consultoría tecnológica, y permite solicitar una cotización.",
          "La información publicada es de carácter informativo y no constituye una oferta comercial vinculante ni una garantía de resultados específicos.",
        ],
      },
      {
        heading: "3. Solicitudes y cotizaciones",
        body: [
          "El envío del formulario no crea ninguna relación contractual. Toda propuesta se formaliza por escrito, con alcance, entregables, plazos y precio definidos.",
          "Los plazos y valores mencionados en el sitio son referenciales y pueden variar según el alcance del proyecto.",
        ],
      },
      {
        heading: "4. Uso permitido",
        body: [
          "Te comprometes a usar el sitio de forma lícita, sin intentar vulnerar su seguridad, interferir con su funcionamiento, extraer datos de forma automatizada o suplantar a terceros.",
          "El contenido, las marcas, los textos y los elementos gráficos son propiedad de SolutiaCorp o se usan con autorización. No pueden reproducirse sin permiso previo.",
        ],
      },
      {
        heading: "5. Enlaces externos",
        body: [
          "El sitio puede enlazar a sitios de terceros. No controlamos su contenido ni sus políticas y no asumimos responsabilidad por ellos.",
        ],
      },
      {
        heading: "6. Limitación de responsabilidad",
        body: [
          "Hacemos esfuerzos razonables para mantener la información actualizada y el sitio disponible, pero no garantizamos ausencia de errores o interrupciones.",
          "En la medida permitida por la ley, no seremos responsables por daños indirectos derivados del uso o de la imposibilidad de uso del sitio.",
        ],
      },
      {
        heading: "7. Propiedad intelectual de proyectos",
        body: [
          "Los derechos sobre el software desarrollado se definen en cada contrato. Salvo pacto en contrario, el cliente recibe una licencia de uso y SolutiaCorp conserva la titularidad de componentes, metodologías y librerías reutilizables.",
        ],
      },
      {
        heading: "8. Legislación aplicable",
        body: [
          "Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia se someterá a los jueces competentes de Santa Marta, Magdalena.",
        ],
      },
      {
        heading: "9. Contacto",
        body: ["Para consultas sobre estos términos, escríbenos a jpballesterossosa@gmail.com."],
      },
    ],
  },
  en: {
    title: "Terms and conditions",
    description: "Terms of use for the SolutiaCorp website.",
    updated: updatedEn,
    intro:
      "By accessing and using solutiacorp.co you accept these terms. If you disagree, please do not use the site.",
    sections: [
      {
        heading: "1. Identification",
        body: [
          "The site is operated by Juan Pablo Ballesteros Sosa, a natural person domiciled in Santa Marta, Magdalena, Colombia. Contact: jpballesterossosa@gmail.com.",
        ],
      },
      {
        heading: "2. Purpose",
        body: [
          "This site presents information about software development, web and mobile applications, process automation and technology consulting, and allows you to request a quote.",
          "Published information is for informational purposes only and does not constitute a binding commercial offer or a guarantee of specific results.",
        ],
      },
      {
        heading: "3. Requests and quotes",
        body: [
          "Submitting the form does not create a contractual relationship. Every proposal is formalized in writing with scope, deliverables, timelines and price.",
          "Timelines and prices mentioned on the site are indicative and may vary depending on project scope.",
        ],
      },
      {
        heading: "4. Permitted use",
        body: [
          "You agree to use the site lawfully, without attempting to breach its security, interfere with its operation, scrape data automatically or impersonate third parties.",
          "Content, trademarks, text and graphic elements are owned by SolutiaCorp or used with authorization and may not be reproduced without prior permission.",
        ],
      },
      {
        heading: "5. External links",
        body: [
          "The site may link to third-party sites. We do not control their content or policies and assume no responsibility for them.",
        ],
      },
      {
        heading: "6. Limitation of liability",
        body: [
          "We make reasonable efforts to keep information current and the site available, but we do not guarantee the absence of errors or interruptions.",
          "To the extent permitted by law, we are not liable for indirect damages arising from the use or inability to use the site.",
        ],
      },
      {
        heading: "7. Project intellectual property",
        body: [
          "Rights over developed software are defined in each contract. Unless otherwise agreed, the client receives a license to use it and SolutiaCorp retains ownership of reusable components, methodologies and libraries.",
        ],
      },
      {
        heading: "8. Governing law",
        body: [
          "These terms are governed by the laws of the Republic of Colombia. Any dispute shall be submitted to the competent courts of Santa Marta, Magdalena.",
        ],
      },
      {
        heading: "9. Contact",
        body: ["For questions about these terms, email jpballesterossosa@gmail.com."],
      },
    ],
  },
}
