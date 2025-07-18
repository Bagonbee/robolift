// Comprehensive Spanish Translation Map
export const spanishTranslations = {
  // Navigation
  navigation: {
    home: 'Inicio',
    about: 'Acerca de',
    programs: 'Programas',
    gallery: 'Galería',
    outreach: 'Alcance Comunitario',
    sponsorship: 'Patrocinio',
    news: 'Noticias',
    join: 'Únete',
    contact: 'Contacto'
  },

  // Common Elements
  common: {
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    submit: 'Enviar',
    cancel: 'Cancelar',
    save: 'Guardar',
    edit: 'Editar',
    delete: 'Eliminar',
    confirm: 'Confirmar',
    back: 'Volver',
    next: 'Siguiente',
    previous: 'Anterior',
    close: 'Cerrar',
    open: 'Abrir',
    search: 'Buscar',
    filter: 'Filtrar',
    sort: 'Ordenar',
    select: 'Seleccionar',
    required: 'Requerido',
    optional: 'Opcional'
  },

  // Home Page
  home: {
    heroTitle: 'Construyendo los Líderes STEM del Mañana',
    heroSubtitle: 'Únete a Robolift y experimenta la emoción de la innovación a través de las competencias VEX, FTC, FRC y MATE ROV',
    joinTeam: 'Únete a Nuestro Equipo',
    explorePrograms: 'Explorar Programas',
    followUs: 'Síguenos @robo_lift',
    potentialMembers: 'Miembros Potenciales',
    teamsInterested: 'Equipos Interesados',
    countriesReached: 'Países Alcanzados',
    communityEvents: 'Eventos Comunitarios',
    roboticsPrograms: 'Nuestros Programas de Robótica',
    programsSubtitle: 'Desde principiantes hasta competidores avanzados, ofrecemos diversas vías para que los estudiantes exploren la robótica y STEM',
    readyToStart: '¿Listo para Comenzar tu Viaje en Robótica?',
    readySubtitle: 'Únete a nuestra comunidad de innovadores, constructores y solucionadores de problemas. ¡No se requiere experiencia previa, solo trae tu curiosidad!',
    contactUs: 'Contáctanos'
  },

  // Programs
  programs: {
    title: 'Nuestros Programas de Robótica',
    subtitle: 'Cuatro vías distintas para que los estudiantes exploren STEM a través de la robótica competitiva',
    vex: {
      name: 'VEX Robótica',
      description: 'Robótica competitiva de primaria a preparatoria usando sistemas de construcción metálicos',
      longDescription: 'La Competencia de Robótica VEX es un programa de robótica para estudiantes de primaria a preparatoria. Los equipos diseñan, construyen y programan robots para competir en un desafío de ingeniería basado en juegos.',
      ageRange: '8-18 años',
      teamSize: '2-5 estudiantes',
      season: 'Todo el año',
      skills: ['Diseño Mecánico', 'Programación', 'Resolución de Problemas', 'Trabajo en Equipo']
    },
    ftc: {
      name: 'FIRST Tech Challenge',
      description: 'Robótica de preparatoria que combina ingeniería, programación y habilidades empresariales',
      longDescription: 'Los estudiantes de FIRST Tech Challenge aprenden a pensar como ingenieros diseñando, construyendo, programando y operando robots para competir en un desafío cara a cara en formato de alianza.',
      ageRange: '12-18 años',
      teamSize: '10-15 estudiantes',
      season: 'Septiembre - Abril',
      skills: ['Programación Java', 'Diseño CAD', 'Plan de Negocios', 'Cuaderno de Ingeniería']
    },
    frc: {
      name: 'FIRST Robotics Competition',
      description: 'La experiencia definitiva de robótica de preparatoria con mentoría industrial',
      longDescription: 'FIRST Robotics Competition combina la emoción del deporte con el rigor de la ciencia y la tecnología. Bajo reglas estrictas y tiempo limitado, los equipos deben recaudar fondos, diseñar marcas de equipo y construir robots de tamaño industrial.',
      ageRange: '14-18 años',
      teamSize: '25-40 estudiantes',
      season: 'Enero - Abril',
      skills: ['Programación Avanzada', 'Diseño Industrial', 'Gestión de Proyectos', 'Marketing']
    },
    mateRov: {
      name: 'MATE ROV',
      description: 'Robótica submarina que desafía a los estudiantes a explorar ambientes marinos',
      longDescription: 'La competencia MATE ROV desafía a los estudiantes a diseñar y construir robots submarinos (ROV) para abordar problemas del mundo real relacionados con la exploración submarina y las ciencias marinas.',
      ageRange: '13-18 años',
      teamSize: '4-6 estudiantes',
      season: 'Octubre - Junio',
      skills: ['Ingeniería Submarina', 'Programación Python', 'Ciencias Marinas', 'Redacción Técnica']
    }
  },

  // Contact Form
  contact: {
    title: 'Contacta a Robolift',
    subtitle: 'Ponte en contacto con nuestro equipo para preguntas, asociaciones o para aprender más sobre nuestros programas de robótica',
    emailUs: 'Envíanos un Email',
    visitUs: 'Visítanos',
    workshopHours: 'Horarios del Taller',
    sendMessage: 'Envíanos un Mensaje',
    messageSubtitle: 'Te responderemos dentro de 24 horas',
    
    // Form Fields
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre completo',
      email: 'Correo Electrónico',
      emailPlaceholder: 'tu.email@ejemplo.com',
      category: 'Categoría',
      categoryPlaceholder: 'Selecciona una categoría',
      subject: 'Asunto',
      subjectPlaceholder: 'Breve descripción de tu consulta',
      message: 'Mensaje',
      messagePlaceholder: 'Por favor proporciona detalles sobre tu consulta...',
      sendMessage: 'Enviar Mensaje',
      
      // Categories
      categories: {
        general: 'Información General',
        join: 'Unirse al Equipo',
        sponsorship: 'Oportunidades de Apoyo',
        outreach: 'Alcance y Eventos Comunitarios',
        media: 'Consultas de Medios y Prensa',
        technical: 'Soporte Técnico'
      },
      
      // Validation Messages
      validation: {
        nameRequired: 'El nombre es requerido',
        emailRequired: 'El correo electrónico es requerido',
        emailInvalid: 'Por favor ingresa un correo electrónico válido',
        categoryRequired: 'Por favor selecciona una categoría',
        subjectRequired: 'El asunto es requerido',
        messageRequired: 'El mensaje es requerido',
        messageMinLength: 'El mensaje debe tener al menos 10 caracteres'
      },
      
      // Status Messages
      status: {
        sending: 'Enviando mensaje...',
        success: '¡Mensaje enviado exitosamente! Te responderemos pronto.',
        error: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
        networkError: 'Error de conexión. Verifica tu internet e intenta de nuevo.'
      }
    }
  },

  // Join Page
  join: {
    title: 'Únete a Robolift',
    subtitle: 'Comienza tu viaje en STEM y forma parte de nuestra innovadora comunidad de robótica',
    whyJoin: '¿Por qué Unirse a Robolift?',
    whyJoinSubtitle: 'Descubre los beneficios de ser parte de nuestro programa de robótica galardonado',
    chooseProgram: 'Elige tu Programa',
    chooseProgramSubtitle: 'Selecciona el programa de robótica que mejor se adapte a tus intereses y nivel de experiencia',
    applicationForm: 'Formulario de Solicitud',
    applicationSubtitle: 'Cuéntanos sobre ti y tu interés en la robótica',
    
    benefits: {
      skillDevelopment: 'Desarrollo de Habilidades',
      skillDescription: 'Aprende programación, ingeniería, diseño y habilidades de resolución de problemas que te beneficiarán de por vida.',
      teamwork: 'Trabajo en Equipo',
      teamworkDescription: 'Colabora con compañeros de ideas afines y aprende el valor de trabajar juntos hacia objetivos comunes.',
      competition: 'Competencia',
      competitionDescription: 'Experimenta la emoción de la competencia mientras aprendes profesionalismo cortés y deportividad.',
      futureReady: 'Preparado para el Futuro',
      futureReadyDescription: 'Prepárate para carreras STEM y la universidad con experiencia práctica y mentoría de profesionales.'
    },
    
    form: {
      studentInfo: 'Información del Estudiante',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      grade: 'Grado Actual',
      gradeSelect: 'Selecciona el grado',
      school: 'Escuela',
      parentInfo: 'Información del Padre/Tutor',
      parentName: 'Nombre del Padre/Tutor',
      parentEmail: 'Correo del Padre',
      experienceInterests: 'Experiencia e Intereses',
      previousExperience: 'Experiencia Previa en Robótica/STEM',
      experiencePlaceholder: 'Describe cualquier experiencia previa con robótica, programación, ingeniería o actividades relacionadas...',
      areasOfInterest: 'Áreas de Interés (selecciona todas las que apliquen)',
      questions: 'Preguntas o Información Adicional',
      questionsPlaceholder: 'Cualquier pregunta sobre el programa o información adicional que te gustaría compartir...',
      submitApplication: 'Enviar Solicitud',
      reviewMessage: 'Revisaremos tu solicitud y te contactaremos dentro de 2-3 días hábiles.'
    }
  },

  // About Page
  about: {
    title: 'Acerca de Robolift',
    subtitle: 'Empoderando estudiantes a través de la educación STEM práctica y la robótica competitiva desde 2024',
    mission: 'Nuestra Misión',
    missionText: 'Inspirar y preparar a la próxima generación de líderes STEM a través de programas de robótica atractivos y prácticos que fomenten la innovación, el trabajo en equipo y las habilidades de resolución de problemas mientras construyen carácter y conexiones comunitarias.',
    vision: 'Nuestra Visión',
    visionText: 'Ser la organización juvenil de robótica premier a nivel global, reconocida por desarrollar estudiantes integrales que no solo son técnicamente hábiles sino también líderes compasivos comprometidos a hacer un impacto positivo en sus comunidades y el mundo.',
    coreValues: 'Nuestros Valores Fundamentales',
    valuesSubtitle: 'Estos principios guían todo lo que hacemos, desde la estrategia de competencia hasta el alcance comunitario'
  },

  // Error Messages
  errors: {
    pageNotFound: 'Página no encontrada',
    serverError: 'Error del servidor',
    networkError: 'Error de red',
    validationError: 'Error de validación',
    translationError: 'Error de traducción',
    formSubmissionError: 'Error al enviar el formulario',
    tryAgain: 'Intentar de nuevo',
    goHome: 'Ir al inicio'
  },

  // SEO Meta Descriptions
  meta: {
    homeDescription: 'Únete a Robolift y construye el futuro a través de programas de robótica VEX, FTC, FRC y MATE ROV. Educación STEM práctica para estudiantes de todas las edades.',
    aboutDescription: 'Conoce más sobre Robolift, nuestra misión de empoderar estudiantes a través de la robótica competitiva y educación STEM desde 2024.',
    programsDescription: 'Explora nuestros programas de robótica: VEX, FIRST Tech Challenge, FIRST Robotics Competition y MATE ROV para estudiantes de 8-18 años.',
    contactDescription: 'Contacta a Robolift para preguntas sobre nuestros programas de robótica, oportunidades de voluntariado o para unirte a nuestro equipo.',
    joinDescription: 'Únete al equipo de Robolift y comienza tu viaje en robótica. Programas gratuitos para estudiantes de todas las edades y niveles de experiencia.'
  }
};

export default spanishTranslations;