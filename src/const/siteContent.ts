
import { faSliders, faArrowsRotate, faClock, faDollar, faKey, faPieChart, faHands, faCheckToSlot, faCalculator, faClockRotateLeft, faUserGear, faGaugeHigh } from '@fortawesome/free-solid-svg-icons'



const siteContent = {
  hero: {
    title:
      'UNA GESTIÓN DE NEGOCIOS ÁGIL Y EFICIENTE PARA TODO EL UNIVERSO DE SEGUROS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae pretium turpis. Suspendisse vehicula congue turpis, et lobortis nulla auctor sodales. Ut in purus ac justo tempus condimentum. ',
  },
  addedValue: {
    title: 'UNA PROPUESTA DIGITAL ROBUSTA',
    resume:
      'Especialmente diseñada para la comercialización de seguros y préstamos, en instituciones financieras y canales alternos de distribución masiva o especializada.',
    content: [
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
        icon: faUserGear,
        text: 'Incrementamos la consistencia de las decisiones en un ambiente de alto volumen transaccional.',
      },
      {
        icon: faGaugeHigh,
        text: 'Brindamos una gestión de negocios ágil y eficiente a todo el universo de seguros.',
      },
    ],
  },
  aboutUs: {
    title: '¿QUIÉNES SOMOS?',
    contentP1: 'Somos una empresa de alto perfil tecnológico e innovador, formada por un grupo de profesionales de alta especializacion. Nuestra motivación es brindar apoyo a nuestros clientes ayudandolos a mejorar su gestion. Para aumentar la eficiencia de sus procesos e incrementando sus beneficios. Nuestro trabajo se caracteriza por el servicio personalizado y la garantia del trabajo realizado.',
    contentP2: 'Buscamos cumplir siempre con las expectativas de nuestros clientes en cada proyecto, por lo que proporcionamos un servicio con un alto sentido de responsabilidad y compromiso.'
  },
  products: {
    title: 'NUESTROS PRODUCTOS',
    bancaseguros: {
      description1: 'Una solución de BANCASEGUROS y canales alternativos de distribución que permite la comercialización masiva de pólizas de diversos ramos.',
      description2: 'Al utilizar la red de  establecimientos bancarios así como otros canales alternativos, se generan estadísticas de estos procesos, se gestiona los cobros y pagos programados, entre otras funcionalidades especialmente enfocadas para optimizar su ecosistema operativo.',
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
    finanzas: {
      description: 'Argento Finanzas es una solución de corresponsalía bancaria que permite que un negocio o comercio que mantenga contacto cotidiano con el público aprovechar su infraestructura física y recursos humanos para funcionar como representante comercial del banco, de manera que ofrecezca en su nombre los servicios financieros básicos al público en general.',
      features: [
        {
          title: 'Flexibilice la Parametrización',
          content: 'Privilegios asociados a operaciones, asignación de perfiles a usuario, registros de acceso al sistema, control de acceso por días y horas.',
          icon: '',
        },
        {
          title: 'Automatize sus Procesos Operativos',
          content: 'Controle el monto por tipo de transacción, el cupo o cantidad de recursos asignados, la frecuencia de depósitos, el cupo por punto comercial. Además de brindarle herramientas de auditoría y control de las transacciones realizadas.',
          icon: '',
        },
        {
          title: 'Defina sus Ciclos de Cobranza',
          content: 'Operaciones por usuarios, operaciones por localidad, por tipo de producto, pagos y cobros, bitácora de intentos de cobros y otros reportes de productividad que fueran requeridos.',
          icon: '',
        },
        {
          title: 'Reduzca sus Tiempos de Respuesta',
          content: 'Depósitos de ahorros, pago de préstamos, retiro de ahorros, consulta de balances, apertura de cuentas, pago de servicios y más...',
          icon: '',
        },
      ]
    }
  }
} as const;


export default siteContent
