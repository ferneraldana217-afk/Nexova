/* ==============================================================
   NEXOVA — Bot knowledge base (keywords / modismos by service)
   ==============================================================
   Standalone library, separate from index.html, so the vocabulary
   can keep growing without touching the page's core logic.

   BOT_KEYWORDS is an array aligned 1:1 with the SERVICES array in
   index.html (same order, same index):
     0 Desarrollo de Software / Software Development
     1 Plataformas Web / Web Platforms
     2 Apps Móviles / Mobile Apps
     3 Análisis de Datos / Data Analysis
     4 Marketing Digital / Digital Marketing
     5 Cloud & Infraestructura / Cloud & Infrastructure
     6 Automatización & IA / Automation & AI
     7 Mejoras a Excel & Hojas de Cálculo / Excel & Spreadsheets

   Each entry has { es: [...], en: [...] } — plain phrases, no need
   to worry about accents/case, the bot normalizes everything.
   To extend: just add more phrases/idioms to the right array.
   ============================================================== */
const BOT_KEYWORDS = [

  /* 0 — Desarrollo de Software */
  {
    es: [
      'necesito un sistema','quiero un sistema','sistema a medida','software a medida',
      'sistema propio','plataforma a medida','base de datos','gestion interna',
      'todo lo hago a mano','todo lo llevamos en papel','no tenemos un sistema',
      'cada uno usa su propio metodo','mi negocio no tiene sistema','quiero modernizar mi negocio',
      'mis procesos son un caos','quiero ordenar mis procesos','necesito digitalizar mi negocio',
      'quiero llevar todo en un solo lugar','un crm para mi negocio','un erp para mi negocio',
      'conectar mis sistemas','integrar mis herramientas','mis sistemas no se hablan entre si',
      'duplico información en varios lugares','quiero un software que se adapte a mi negocio'
    ],
    en: [
      'need a system','want a system','custom system','custom software','own platform',
      'internal management software','database','we do everything by hand','no real system',
      'everyone uses their own method','want to modernize my business','my processes are a mess',
      'want to organize my operations','need to digitize my business','want everything in one place',
      'need a crm','need an erp','connect my systems','integrate my tools',
      'my systems dont talk to each other','duplicate data everywhere'
    ]
  },

  /* 1 — Plataformas Web */
  {
    es: [
      'pagina web','sitio web','no tengo pagina web','quiero una pagina','necesito un sitio web',
      'mi web no convierte','mi pagina no vende','mi sitio es viejo','quiero renovar mi web',
      'tienda en linea','vender en linea','presencia digital','no existo en internet',
      'la gente no me encuentra en google','quiero aparecer en google','mi competencia tiene mejor web',
      'mi pagina se ve anticuada','necesito un catalogo en linea','quiero un e-commerce',
      'mi pagina carga lento','mi web no se ve bien en el celular'
    ],
    en: [
      'website','landing page','dont have a website','need a website','my site doesnt convert',
      'my site doesnt sell','outdated website','want to redo my website','online store','sell online',
      'web presence','dont exist online','people cant find me on google','want to rank on google',
      'my competitors have a better site','my page looks old','need an online catalog',
      'want an e-commerce','my site loads slow','my site isnt mobile friendly'
    ]
  },

  /* 2 — Apps Móviles */
  {
    es: [
      'necesito una app','quiero una app','aplicacion movil','app para clientes',
      'pedidos desde el celular','app de pedidos','app de reservas','quiero fidelizar clientes',
      'mis clientes piden por whatsapp','quiero una app como las grandes empresas',
      'aplicacion para mi negocio','app para ios','app para android','quiero estar en el celular de mis clientes',
      'mis clientes viven en el celular','necesito una aplicacion para que mis clientes hagan pedidos'
    ],
    en: [
      'need an app','want an app','mobile app','app for customers','ordering app','booking app',
      'want to build customer loyalty','customers order through whatsapp','want an app like big companies',
      'app for my business','ios app','android app','want to be on my customers phones'
    ]
  },

  /* 3 — Análisis de Datos */
  {
    es: [
      'no entiendo mis numeros','reportes manuales','necesito un dashboard','decisiones con datos',
      'no sé qué esta pasando con mi negocio','metricas','quiero ver mis datos','analizar mis numeros',
      'no sé si estoy ganando o perdiendo','no tengo visibilidad de mi negocio','mis datos estan regados',
      'tengo datos pero no los uso','quiero saber que producto vende mas','no tengo reportes',
      'tomo decisiones a ciegas','no me cuadran las cuentas','no se de donde vienen mis ventas',
      'quiero un reporte automatico','necesito entender mi negocio mejor','tengo informacion pero no la entiendo'
    ],
    en: [
      'dont understand my numbers','manual reports','need a dashboard','data driven decisions',
      'dont know whats happening with my business','metrics','want to see my data','analyze my numbers',
      'dont know if im making money','no visibility into my business','my data is scattered',
      'have data but dont use it','want to know what sells most','dont have reports',
      'making decisions blindly','numbers dont add up','want an automatic report'
    ]
  },

  /* 4 — Marketing Digital */
  {
    es: [
      'necesito incrementar mis ventas','aumentar mis ventas','aumentar ventas','vender mas',
      'quiero vender mas','conseguir clientes','quiero mas clientes','no tengo clientes',
      'publicidad','anuncios','redes sociales','quiero crecer mis ventas','captar clientes',
      'generar mas ventas','mejorar mis ventas','mejorar ventas','como mejorar mis ventas',
      'el negocio esta estancado','las ventas estan bajas','las ventas han bajado','quiero crecer',
      'no me llegan clientes','no tengo movimiento en el negocio','el negocio esta flojo',
      'quiero llenar mi local de clientes','quiero que mas gente me conozca','nadie me conoce en redes',
      'mis redes sociales no funcionan','quiero salir en instagram','quiero hacer publicidad en facebook',
      'el negocio no jala como antes','quiero levantar las ventas','quiero posicionar mi marca',
      'necesito mas clientela','quiero atraer clientes nuevos'
    ],
    en: [
      'need to increase my sales','increase sales','sell more','want more customers',
      'get more customers','no customers','advertising','ads','social media','grow my sales',
      'generate more sales','improve my sales','how to improve my sales','business is stuck',
      'sales are low','sales have dropped','want to grow','no customers coming in',
      'business is slow','want to fill my store with customers','nobody knows my brand',
      'my social media isnt working','want to advertise on facebook','want to boost my brand',
      'need more clients','want to attract new customers'
    ]
  },

  /* 5 — Cloud & Infraestructura */
  {
    es: [
      'mi sistema se cae','se cae la pagina','no aguanta el trafico','servidor lento',
      'necesito infraestructura','quiero escalar','mi pagina se cae mucho','el sistema truena',
      'se traba todo cuando hay mucha gente','en temporada alta se cae el sistema',
      'tengo miedo de perder informacion','no tengo respaldos','si se va la luz pierdo todo',
      'mi sistema esta improvisado','todo corre de panzazo','el servidor no aguanta',
      'necesito que mi sistema sea estable','quiero migrar a la nube','necesito mas seguridad en mis datos'
    ],
    en: [
      'my system crashes','site goes down','cant handle traffic','slow server',
      'need infrastructure','need to scale','site crashes a lot','system breaks down',
      'everything freezes with lots of users','system crashes during busy season',
      'afraid of losing data','no backups','need more stability','want to migrate to the cloud',
      'need more data security'
    ]
  },

  /* 6 — Automatización & IA */
  {
    es: [
      'perder tiempo','tareas repetitivas','quiero automatizar','necesito un bot',
      'whatsapp automatico','inteligencia artificial','ahorrar tiempo','mi equipo pierde tiempo',
      'hago lo mismo todos los dias','estoy quemado con tanto trabajo manual','ya no aguanto hacer lo mismo',
      'se me amontona el trabajo','ando hasta el cuello de papeleo','quiero que mi negocio jale solo',
      'quiero que el negocio trabaje sin mi','responder mensajes todo el dia','contestar lo mismo siempre',
      'quiero un chatbot','automatizar whatsapp','automatizar correos','automatizar reportes',
      'mi equipo hace tareas que un sistema podria hacer','quiero liberar tiempo de mi equipo'
    ],
    en: [
      'wasting time','repetitive tasks','want to automate','need a bot','whatsapp bot',
      'artificial intelligence','save time','my team wastes time','doing the same thing every day',
      'burned out from manual work','tired of repeating the same tasks','work piles up',
      'want the business to run itself','want to free up my time','answering messages all day',
      'want a chatbot','automate whatsapp','automate emails','automate reports'
    ]
  },

  /* 7 — Mejoras a Excel & Hojas de Cálculo */
  {
    es: [
      'mi excel es un desastre','hojas de calculo','excel lento','formulas','necesito una plantilla',
      'mi excel esta desordenado','mi excel se traba','el excel se daña','solo una persona sabe usar el excel',
      'si esa persona falta nadie sabe usar el archivo','mi hoja de calculo es un dolor de cabeza',
      'quiero mejorar mi excel','necesito automatizar mi excel','mi google sheets es un caos',
      'quiero un dashboard en excel','mis formulas no funcionan bien','el archivo pesa demasiado'
    ],
    en: [
      'my spreadsheet is a mess','spreadsheets','excel is slow','formulas','need a template',
      'my excel is disorganized','my spreadsheet freezes','file gets corrupted',
      'only one person knows how to use the file','my spreadsheet is a headache',
      'want to improve my excel','need to automate my excel','my google sheets is chaos',
      'want a dashboard in excel','my formulas dont work right','file is too heavy'
    ]
  }

];
