
import {
  faArrowsRotate,
  faBuildingLock,
  faCalculator,
  faChartColumn,
  faCheckToSlot,
  faClock,
  faClockRotateLeft,
  faComputer,
  faDollar,
  faEnvelope,
  faGaugeHigh,
  faHands,
  faKey,
  faLayerGroup,
  faLocationDot,
  faPhone,
  faPieChart,
  faSliders,
  faUsersGear,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { images } from 'assets';
import { Products } from 'const';



const siteContent: siteContent = {
  hero: {
    title:
      'AUTOMATIZANDO PROCESOS EN EL MERCADO FINANCIERO Y DE SEGUROS',
    content:
      'Tecnología sofisticada, eficaz e intuitiva que responde a problemas complejos en un ambiente de alto crecimiento, demandante y competitivo.',
  },
  addedValue: {
    title: 'UNA PROPUESTA DIGITAL ROBUSTA',
    contentP1:
      'Especialmente diseñada para la comercialización de seguros y préstamos',
    contentP2: ', en instituciones financieras y canales alternos de distribución masiva o especializada.',
      items: [
      {
        icon: faHands,
        text: 'Eliminamos procesos manuales y reducimos el costo de operaciones.',
      },
      {
        icon: faCheckToSlot,
        text: 'Disminuimos errores en los procesos de negocios.',
      },
      {
        icon: faCalculator,
        text: 'Cálculo, análisis específicos, validaciones y transformación de datos.',
      },
      {
        icon: faClockRotateLeft,
        text: 'Mejoramos el tiempo de respuesta de los procesos.',
      },
      {
        icon: faUsersGear,
        text: 'Incrementamos la consistencia de las decisiones en un ambiente de alto volumen transaccional.',
      },
      {
        icon: faGaugeHigh,
        text: 'Brindamos una gestión de negocios ágil y eficiente a todo el universo de seguros.',
      },
    ],
  },
  aboutUs: {
    title: '¿QUÉ NOS IMPULSA?',
    contentP1: 'Somos una empresa de alto perfil tecnológico e innovador, formada por un grupo de profesionales de alta especializacion. ',
    contentP2: 'Nuestra motivación es brindar apoyo a nuestros clientes para mejorar su gestion y la eficiencia de sus procesos, con el objetivo de incrementar sus beneficios. Nuestro trabajo se caracteriza por el servicio personalizado y la garantia del trabajo realizado. ',
    contentP3: 'Buscamos cumplir siempre con las expectativas de nuestros clientes en cada proyecto, proporcionando un servicio con un alto sentido de responsabilidad y compromiso.'
  },
  products: {
    title: 'NUESTROS PRODUCTOS',
    "bancaseguros": {
      contentP1: 'Una solución de BANCASEGUROS y canales alternativos de distribución que permite la comercialización masiva de pólizas de diversos ramos. ',
      contentP2: 'Al utilizar la red de  establecimientos bancarios así como otros canales alternativos, se generan estadísticas de estos procesos, se gestiona los cobros y pagos programados, entre otras funcionalidades especialmente enfocadas para optimizar su ecosistema operativo.',
      features: [
        {
          title: 'Flexibilice la Parametrización',
          content: 'Permite la parametrización de productos y condiciones de cotización para el cálculo automático de primas de pólizas y endosos.',
          icon: faSliders,
        },
        {
          title: 'Automatize sus Procesos Operativos',
          content: 'Disminuya su carga operativa al integrar las emisiones de pólizas con los sistemas operacionales de las empresas entrelazadas.',
          icon: faArrowsRotate,
        },
        {
          title: 'Reduzca sus Tiempos de Respuesta',
          content: 'Mejore los tiempos de respuesta al integrar la emisión de pólizas directamente con los proveedores de servicio, recibiendo sus datos validados y transformados.',
          icon: faClock,
        },
        {
          title: 'Defina sus Ciclos de Cobranza',
          content: 'Configure los ciclos de cobranza que mejor se ajuste a su negocio. Integramos con los principales procesadores de Pagos del mercado.',
          icon: faDollar,
        },
        {
          title: 'Delegue la Administración',
          content: 'Delegar la configuración de sucursales, fuerza de venta y usuarios a cada intermediario. Además, le proveemos de herramientas de auditoría y control de las transacciones realizadas.',
          icon: faKey,
        },
        {
          title: 'Obtenga Información en Tiempo Real',
          content: 'Configure diversos cuadros de mandos por perfil y explore las diferentes variables que le brinda la solución. Comisiones, Ventas, Cobros, Facturación e incentivos entre otros.',
          icon: faPieChart,
        },
      ],
      sectionImage: `url("${images.handsomeYoungBusinessManWorkingWithComputerOffice}")`,
      footer: {
        content: 'Completamente preparado para la planificación, organización, direción y control de una amplia gama de productos del sector de BANCASEGUROS.',
        products: [
          'Accidentes personales',
          'Renta por hospitalización',
          'Enfermedades graves',
          'Viajes',
          'Vida',
          'Moto',
          'Auto',
          'Salud',
        ]
      },
    },
    "subagentes": {
      contentP1: 'Argento Subagentes es una solución de corresponsalía bancaria que permite negocios o comercios, que mantenga contacto cotidiano con el público, aprovechar su infraestructura física y recursos humanos de manera que estos puedan funcionar directamente como representante comercial del banco. ',
      contentP2: 'De esta forma, permite que se ofrecezcan en nombre de la organización los servicios financieros básicos al público en general.',
      features: [
        {
          title: 'Arquitectura de Seguridad',
          content: 'Privilegios asociados a operaciones, asignación de perfiles a usuario, registros de acceso al sistema, control de acceso por días y horas.',
          icon: faBuildingLock,
        },
        {
          title: 'Configuración del Sistema',
          content: 'Controle el monto por tipo de transacción, el cupo o cantidad de recursos asignados, la frecuencia de depósitos, el cupo por punto comercial. Además de brindarle herramientas de auditoría y control de las transacciones realizadas.',
          icon: faComputer,
        },
        {
          title: 'Estadísticas en Tiempo Real',
          content: 'Depósitos de ahorros, pago de préstamos, retiro de ahorros, consulta de balances, apertura de cuentas, pago de servicios y más...',
          icon: faChartColumn,
        },
        {
          title: 'Operaciones Disponibles',
          content: 'Operaciones por usuarios, operaciones por localidad, por tipo de producto, pagos y cobros, bitácora de intentos de cobros y otros reportes de productividad que fueran requeridos.',
          icon: faLayerGroup,
        },
      ],
      sectionImage: `url("${images.groupPeopleWorkingOutBusinessPlanOffice}")`,
    },
   /*  "puntos-de-pago": {
    }, */
  },
  contact: {
    title: 'CONTACTO',
    adress: {
      icon: faLocationDot, place: 'Calle José Andrés Aybar Castellanos No. 87 APT 3-B. ', location: 'La Esperilla. Santo Domingo, República Dominicana.'
    },
    phone: { icon: faPhone, number: '(809) 231-6879' },
    email: { icon: faEnvelope, text: 'admin@argento.do' },
  },
  promise: {
    title: 'UNA EXPERIENCIA',
    titleTag: ['ÁGIL', 'SIMPLE', 'SEGURA', 'COMPLETA'],
    contentP1: 'Nos comprometemos a brindarle un servicio altamente atento y disponible, adaptando nustros servicio a sus necesidades y presupuesto. ',
    contentP2: 'Nuestra motivación es brindar apoyo a nuestros clientes y ayudarlos a mejorar su gestión, haciendo más eficientes sus procesos e incrementando los beneficios obtenidos.'
  },
  footer: {
    copyRight: `© ${(new Date()).getFullYear()} Argento, Todos los derechos reservados.`
  }
};

type textContent = Partial<Record<'content' | `contentP${number}`, string>>
type imgUrl = `url("${string}")`

type siteContent = {
  hero: {
    title: string,
  } & textContent,
  addedValue: {
    title: string,
    items:
    {
      icon: IconDefinition,
      text: string,
    }[],
  } & textContent,
  aboutUs: {
    title: string,
  } & textContent,
  products: {
    title: string,
  } & Partial<Record<Products, {
    features?: ({
      title: string,
      content: string,
      icon: IconDefinition,
    })[],
    sectionImage?: imgUrl,
    footer?: {
      products: string[]
    } & textContent,
  } & textContent>>,
  contact: {
    title: string,
    adress: { icon: IconDefinition, place: string, location: string },
    phone: { icon: IconDefinition, number: `(${number}) ${number}-${number}` },
    email: { icon: IconDefinition, text: `${string}@${string}` },
  }
  promise: {
    title: string;
    titleTag: string[]
  } & textContent,
  footer: {
    copyRight: string
  }
};
export default siteContent
