export const links = {
  email: 'mailto:rishabhky@outlook.com',
  github: 'https://github.com/rishabhky',
  linkedin: 'https://www.linkedin.com/in/rishabh-yadav-625559275/',
  resume: '/resume.pdf',
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Software Engineer · SuperAGI · Bengaluru',
  name: 'Rishabh Kumar Yadav',
  statement: 'I build products end to end: native iOS apps, web frontends, and the services behind them.',
  paragraphs: [
    'I own iOS development of OK, SuperAGI’s quick-commerce app. I bootstrapped it from an empty Xcode project to the App Store, and now run its release cycle end to end. 8,000+ downloads, 1,000+ orders a day.',
    'Before that I worked across SuperAGI’s AI app builder: the Vibe Coder frontend and its Go backend (template system, Expo preview, APK builds), and the frontend for Digital Employees, AI teammates that run sales demos in live meetings. On the side I ship freelance work like Goodlife, a returns-audit platform for an Amazon seller doing ~40k orders a month.',
  ],
}

export const projects = [
  {
    title: 'OK, Food Essentials Delivered',
    company: 'SuperAGI',
    year: '2026',
    description:
      'SuperAGI’s quick-commerce app with an AI shopping assistant. I own the iOS app solo: a 13-module SPM architecture bootstrapped from scratch, an SSE-streamed chat assistant, a server-driven CMS home that lets ops publish pages without a release, live order tracking over MQTT, and Razorpay/Stripe checkout with price-change reconciliation.',
    stats: [
      { value: '8,000+', label: 'downloads' },
      { value: '1,000+', label: 'daily orders' },
      { value: 'v1.5 → v2.12', label: '63 PRs, solo' },
    ],
    tags: ['Swift', 'SwiftUI', 'SPM', 'SSE', 'MQTT', 'Razorpay', 'Stripe'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/in/app/ok-food-essentials-delivered/id6766455870',
      },
    ],
  },
  {
    title: 'Goodlife: Returns & RTO Audit',
    company: 'Freelance',
    year: '2026',
    description:
      'A production dashboard for an Amazon India seller, auditing returned orders and recovering refunds through SAFE-T claims, replacing a 59-column Excel workflow. Built solo: Supabase Postgres with row-level security and four roles across 12 branches, 13-slot photo evidence with client-side compression and signed URLs from private storage, and seller-report ingestion with a nightly auto-import.',
    stats: [
      { value: '~40k', label: 'orders/month' },
      { value: '12', label: 'branches' },
      { value: '13', label: 'evidence slots' },
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    links: [],
  },
  {
    title: 'Vibe Coder',
    company: 'SuperAGI',
    year: '2026',
    description:
      'SuperAGI’s AI app builder: describe an app in plain language and watch it get built with a live preview. I built the frontend, an embeddable editor package with SSE streaming and deploy hooks, and core pieces of the Go backend: the template system, agent and app services, and mobile app generation with Expo Go preview and APK build-and-download. I also built Hyperframes, its video-generation pipeline, where coder agents write GSAP-animated compositions and a sandboxed headless-Chrome renderer on Modal turns them into finished video.',
    stats: [],
    tags: ['React', 'TypeScript', 'Go', 'SSE', 'Expo', 'GSAP', 'Modal'],
    links: [
      {
        label: 'Launch post',
        href: 'https://www.linkedin.com/posts/superagi_the-distance-between-a-new-website-idea-and-activity-7428031958112161792-hhub',
      },
    ],
  },
  {
    title: 'Inference Router',
    company: 'SuperAGI',
    year: '2026',
    description:
      'SuperAGI’s LLM gateway, routing platform traffic across model providers. I contributed on both sides. Backend: streaming relay of reasoning content and a resilience layer with circuit breaking and client-cancellation handling. Frontend: the full product surface, from provider setup and detail pages to routing logic, a logs view with a raw API drawer, and analytics for cache tokens, hit rates, and cache-aware cost.',
    stats: [],
    tags: ['Go', 'SSE', 'Vue.js', 'Rails'],
    links: [],
  },
  {
    title: 'Digital Employees',
    company: 'SuperAGI',
    year: '2026',
    description:
      'AI teammates that join live meetings to run sales demos with voice, avatar, and slide coordination. I built the product frontend, meeting surfaces and Live Assist, plus the analytics UI for the inference router: cache hit-rates, cost per call, and raw API log inspection.',
    stats: [],
    tags: ['Vue.js', 'Rails', 'TypeScript'],
    links: [
      {
        label: 'Launch post',
        href: 'https://www.linkedin.com/posts/superagi_customer-onboarding-has-always-been-one-of-activity-7437858739761782784-1oWl',
      },
    ],
  },
  {
    title: 'resound',
    company: 'Open source',
    year: '2026',
    description:
      'A small, self-hostable realtime fanout server that takes reconnection seriously. One Go binary: topic-based pub/sub over SSE and WebSocket, replay on reconnect via Last-Event-ID (the half of the SSE spec almost nobody implements server-side), an optional Redis Streams backplane for multi-node fanout, and per-topic backpressure policies.',
    stats: [],
    tags: ['Go', 'SSE', 'WebSocket', 'Redis Streams', 'Docker'],
    links: [{ label: 'Code', href: 'https://github.com/rishabhky/resound' }],
  },
  {
    title: 'graph-linearize',
    company: 'Open source',
    year: '2026',
    description:
      'A Python library that turns retrieved knowledge-graph triples into a pruned, ordered, citation-tagged prompt block, with no extra LLM call. It scores triples against the question with local embeddings, prunes with a connectivity guard or greedy PCST, orders facts outward from the question entity, serializes to a hard token budget, and verifies every ID the LLM cites against what it was shown.',
    stats: [],
    tags: ['Python', 'NetworkX', 'NumPy', 'sentence-transformers'],
    links: [{ label: 'Code', href: 'https://github.com/rishabhky/graph-linearize' }],
  },
  {
    title: 'Seventify',
    company: 'Personal',
    year: '2024',
    description:
      'An attendance and task management app for college students, built with Flutter and Firebase and released on the Play Store.',
    stats: [
      { value: '250+', label: 'downloads' },
      { value: '100+', label: 'active users' },
    ],
    tags: ['Flutter', 'Firebase'],
    links: [
      {
        label: 'Post',
        href: 'https://www.linkedin.com/posts/rishabh-yadav-625559275_seventify-attendanceapp-taskmanagement-activity-7162326916295774208-H5Qm',
      },
    ],
  },
]

export const experience = [
  {
    company: 'SuperAGI',
    period: 'Jan 2026 - Present',
    blurb: 'Building consumer and AI products across iOS, web, and backend services. 200+ PRs merged across the platform in my first seven months.',
    roles: [
      {
        title: 'Software Development Engineer 1',
        period: 'Jul 2026 - Present',
        bullets: [
          'Own iOS development of OK, SuperAGI’s quick-commerce app: architecture, features, and the App Store release cycle end to end.',
          'Shipped multi-fulfillment-center commerce: address-driven store resolution, per-store catalogs and pricing, and checkout price-change reconciliation so orders always bill what the user was shown.',
          'Built a server-driven CMS layout engine with multi-page layouts, TTL caching, and graceful fallbacks, letting ops publish app pages without a release.',
          'Shipped dual-channel realtime (MQTT + SSE) for agent messaging and live order tracking.',
        ],
      },
      {
        title: 'SDE Intern',
        period: 'Jan 2026 - Jun 2026',
        bullets: [
          'Built the frontend for Vibe Coder, SuperAGI’s AI app builder, plus core pieces of its Go backend: the template system, agent and app services, Expo Go preview, and the APK build pipeline for generated mobile apps.',
          'Built the frontend for Digital Employees, AI teammates that autonomously run sales demos in live meetings.',
          'Contributed to the Go inference router: streaming reasoning-content relay, client-cancellation circuit breaking, and its analytics frontend.',
        ],
      },
    ],
    tags: ['Swift', 'Go', 'React', 'Vue', 'TypeScript'],
  },
  {
    company: 'SLK Software',
    period: 'Jun 2025 - Aug 2025',
    blurb: null,
    roles: [
      {
        title: 'GenAI Intern',
        period: null,
        bullets: [
          'Built an AI-powered n8n workflow using the OpenAI API to turn natural-language questions into live SQL Server queries.',
          'Streamlined business-intelligence access through a chat-based interface for company data.',
        ],
      },
    ],
    tags: ['n8n', 'OpenAI API', 'SQL Server'],
  },
  {
    company: 'Application Development Cell, MIT',
    period: 'Oct 2024 - Feb 2025',
    blurb: null,
    roles: [
      {
        title: 'Frontend Developer',
        period: null,
        bullets: [
          'Built the responsive frontend for the institute’s accreditation system and integrated it with the backend team’s APIs.',
        ],
      },
    ],
    tags: ['React', 'REST APIs'],
  },
]

export const education = {
  school: 'Manipal Institute of Technology, Bengaluru',
  degree: 'BTech Computer Science Engineering (AI)',
  period: '2022 - 2026',
  detail: 'CGPA 8.9',
}

export const contact = {
  heading: 'Let’s build something.',
  line: 'Happy to talk about iOS, frontends, AI products, or anything on this page.',
  email: 'rishabhky@outlook.com',
}
