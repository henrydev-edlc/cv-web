const SKILL_GROUPS = [
  {
    group: 'Lenguajes',
    title: 'Lenguajes de programación',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C++', 'Kotlin']
  },
  {
    group: 'Backend',
    title: 'Backend y Frameworks',
    items: ['Spring Boot', 'Spring Cloud', 'FastAPI', 'API Gateway', 'Resilience4j']
  },
  {
    group: 'Bases de datos',
    title: 'Bases de datos',
    items: ['MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    group: 'Cloud & DevOps',
    title: 'Cloud, DevOps e Infraestructura',
    items: ['Docker', 'Kubernetes', 'Google Cloud Platform']
  },
  {
    group: 'Mensajería & Obs.',
    title: 'Mensajería y Observabilidad',
    items: ['RabbitMQ', 'OpenTelemetry', 'LGTM']
  },
  {
    group: 'Herramientas',
    title: 'Herramientas de desarrollo',
    items: ['Git', 'GitHub', 'Postman', 'Maven', 'Swagger', 'OpenAPI']
  }
];

const ARCH_ITEMS = [
  'Diseño y desarrollo de APIs REST.',
  'Arquitectura de microservicios.',
  'Patrones de diseño y separación de responsabilidades.',
  'Autenticación y autorización mediante JWT.',
  'Integración de servicios y comunicación entre microservicios.'
];

const PROJECTS = [
  {
    category: 'Backend y Arquitectura',
    name: 'Microservicios Ecommerce',
    description: 'Plataforma de e-commerce distribuida con API Gateway, Service Discovery, Config Server, servicios de producto, órdenes, inventario y notificaciones, mensajería asíncrona con RabbitMQ, observabilidad con OpenTelemetry y stack LGMT, y despliegue en Docker y Kubernetes.',
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'RabbitMQ', 'OpenTelemetry', 'LGMT', 'Docker', 'Kubernetes'],
    url: 'https://github.com/henrydev-edlc/microservices-ecommerce'
  },
  {
    category: 'Backend y Arquitectura',
    name: 'Sistema de Autenticación',
    description: 'Microservicio REST bajo arquitectura en capas para gestión de identidad, autenticación y validación de usuarios mediante tokens JWT e integración con Firebase.',
    stack: ['Python', 'FastAPI', 'Firebase', 'JWT'],
    url: 'https://github.com/henrydev-edlc/microservices-auth'
  },
  {
    category: 'Backend y Arquitectura',
    name: 'Gestión de Libros API',
    description: 'API REST para gestión de biblioteca con buscador unificado, validaciones personalizadas, pruebas en JUnit 5 y despliegue contenedorizado con MySQL.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
    url: 'https://github.com/henrydev-edlc/gestion-libros-api'
  },
  {
    category: 'Otros proyectos',
    name: 'Separador de Cargas Académicas',
    description: 'Script de automatización en Python para el procesamiento, segmentación y renombrado dinámico de documentos PDF por identificador de alumno.',
    stack: ['Python', 'Procesamiento PDF'],
    url: 'https://github.com/henrydev-edlc/separador-cargas-academicas'
  },
  {
    category: 'Otros proyectos',
    name: 'Countries Explorer',
    description: 'Aplicación web para consulta y comparación de datos de países mediante consumo de APIs REST, desplegada en contenedor Docker.',
    stack: ['TypeScript', 'React', 'Material UI', 'Docker'],
    url: 'https://github.com/henrydev-edlc/countries-explorer-frontend'
  },
  {
    category: 'Otros proyectos',
    name: 'Mantenimiento de Catálogos e Inventario',
    description: 'Sistema en Java para la administración CRUD de catálogos de datos personales e inventario con persistencia en base de datos.',
    stack: ['Java', 'SQL'],
    url: 'https://github.com/henrydev-edlc/mantenimiento-catalogos-datos-personales-y-inventario'
  },
  {
    category: 'Académicos y algoritmia',
    name: 'Control de Menores',
    description: 'Sistema en Java para la gestión de registros implementado desde cero mediante estructuras de datos dinámicas basadas en listas enlazadas (nodos y referencias).',
    stack: ['Java', 'Estructuras de Datos'],
    url: 'https://github.com/henrydev-edlc/control-menores'
  },
  {
    category: 'Académicos y algoritmia',
    name: 'Login y Gestión de Contraseñas',
    description: 'Módulo en Java conectado a base de datos para la validación de acceso de usuarios y actualización segura de credenciales.',
    stack: ['Java', 'SQL'],
    url: 'https://github.com/henrydev-edlc/login-cambio-contrasenia'
  },
  {
    category: 'Académicos y algoritmia',
    name: 'Torres de Hanói',
    description: 'Implementación interactiva del problema clásico de Torres de Hanói enfocada en lógica recursiva, manejo de pilas y validación de movimientos.',
    stack: ['Python', 'Recursividad'],
    url: 'https://github.com/henrydev-edlc/videojuego-torres-hanoi'
  }
];

let activeSkillGroup = 'Todos';
let activeProjectCategory = 'Todos';

function renderSkillTabs() {
  const container = document.getElementById('skill-tabs');
  const groups = ['Todos', ...SKILL_GROUPS.map((g) => g.group)];

  container.innerHTML = groups
    .map((group) => {
      const isActive = group === activeSkillGroup;
      const cls = isActive
        ? 'bg-navyAccent text-paper border-navyAccent'
        : 'bg-paper text-mutedText border-lineGray hover:border-forestAccent hover:text-forestAccent';
      return `<button type="button" data-skill-group="${group}" class="rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${cls}">${group}</button>`;
    })
    .join('');

  container.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeSkillGroup = btn.dataset.skillGroup;
      renderSkillTabs();
      renderSkillsGrid();
    });
  });
}

function renderSkillsGrid() {
  const container = document.getElementById('skills-grid');
  const list =
    activeSkillGroup === 'Todos'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.group === activeSkillGroup);

  container.innerHTML = list
    .map(
      (block) => `
      <article class="rounded-2xl border border-lineGray bg-paper p-6 transition hover:border-navyAccent">
        <p class="font-mono text-[11px] font-semibold uppercase tracking-wider text-forestAccent">${block.group}</p>
        <h3 class="mt-1 text-lg font-bold text-inkBlack">${block.title}</h3>
        <div class="mt-4 flex flex-wrap gap-2">
          ${block.items
            .map(
              (tech) =>
                `<span class="rounded-md bg-softGray px-2.5 py-1 font-mono text-xs font-medium text-charcoal ring-1 ring-lineGray">${tech}</span>`
            )
            .join('')}
        </div>
      </article>
    `
    )
    .join('');
}

function renderArchList() {
  const container = document.getElementById('arch-list');
  container.innerHTML = ARCH_ITEMS.map(
    (text) => `<li class="flex items-start gap-2"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forestAccent"></span><span>${text}</span></li>`
  ).join('');
}

function renderProjectTabs() {
  const container = document.getElementById('project-tabs');
  const categories = ['Todos', ...new Set(PROJECTS.map((p) => p.category))];

  container.innerHTML = categories
    .map((cat) => {
      const isActive = cat === activeProjectCategory;
      const cls = isActive
        ? 'bg-charcoal text-paper border-charcoal'
        : 'bg-paper text-mutedText border-lineGray hover:border-navyAccent hover:text-navyAccent';
      return `<button type="button" data-proj-cat="${cat}" class="rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition ${cls}">${cat}</button>`;
    })
    .join('');

  container.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeProjectCategory = btn.dataset.projCat;
      renderProjectTabs();
      renderProjectsGrid();
    });
  });
}

function renderProjectsGrid() {
  const container = document.getElementById('projects-grid');
  const list =
    activeProjectCategory === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeProjectCategory);

  container.innerHTML = list
    .map(
      (proj) => `
      <article class="flex flex-col justify-between rounded-2xl border border-lineGray bg-paper p-6 transition hover:border-navyAccent">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-2">
            <span class="font-mono text-xs font-semibold text-navyAccent">${proj.category}</span>
            <a href="${proj.url}" target="_blank" rel="noreferrer" class="font-mono text-xs font-semibold text-charcoal transition hover:text-forestAccent">
              Repositorio →
            </a>
          </div>
          <h3 class="text-xl font-bold text-inkBlack">${proj.name}</h3>
          <p class="text-sm leading-relaxed text-mutedText">${proj.description}</p>
        </div>
        <div class="mt-5 flex flex-wrap gap-1.5 border-t border-lineGray pt-4">
          ${proj.stack
            .map(
              (tech) =>
                `<span class="rounded-md bg-softGray px-2.5 py-1 font-mono text-[11px] font-medium text-charcoal ring-1 ring-lineGray">${tech}</span>`
            )
            .join('')}
        </div>
      </article>
    `
    )
    .join('');
}

document.getElementById('btn-print').addEventListener('click', () => {
  window.print();
});

renderSkillTabs();
renderSkillsGrid();
renderArchList();
renderProjectTabs();
renderProjectsGrid();