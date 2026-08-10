export type WorkType = 'api' | 'product' | 'ux' | 'ops';

export interface WorkItemDetails {
  overview: string;
  keyWork: string[];
  outcome: string;
}

export interface WorkItem {
  id: string;
  company: string;
  type: WorkType;
  typeLabel: string;
  title: string;
  tags: string[];
  description: string;
  details: WorkItemDetails;
  link?: string;
  linkLabel?: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  featured?: boolean;
  logoUrl?: string;
  coverImage?: string;
}

export const WORK_TYPE_LABELS: Record<WorkType, string> = {
  api:     'API Docs',
  product: 'Product Docs',
  ux:      'UX Writing',
  ops:     'Doc Ops',
};

export const workItems: WorkItem[] = [
  // ── FEATURED ──────────────────────────────────────────────────────────────

  {
    id: 'thousandeyes-v7-api',
    company: 'Cisco · ThousandEyes',
    type: 'api',
    typeLabel: 'API Docs',
    title: 'ThousandEyes v7 API: From Limited Preview to Default API',
    tags: ['OpenAPI', 'REST API', 'OAuth2', 'Migration guides', 'Versioning', 'Changelog'],
    description: 'Ground-up API redesign. 20 product areas, 300+ endpoints. Took this from limited preview to default API, now serving 88% of production API traffic.',
    details: {
      overview: "The v7 API was a ground-up redesign: standardised verbs, consistent error codes, OAuth2 bearer-token authentication, cursor pagination, and resource expansion. I was the single documentation owner through the whole launch, working alongside engineering, product, and PMM from Limited Preview in November 2023, through GA in February 2024, to Default API in May 2024.",
      keyWork: [
        'Documented the complete v7 surface from OpenAPI specs: 20 product areas, 300+ endpoints, published on Cisco DevNet',
        'Authored the connective tissue: getting-started content, OAuth2 authentication flow, versioning and support policy, and the changelog tracking every release',
        'Reviewed the API surface for Cisco consistency, catching contract and documentation mismatches and driving fixes to the spec rather than papering over them in prose',
        'Cleaned up the authentication story as v7 moved to OAuth Bearer-token-only: removed all legacy Basic-Auth references, documented the bearer-token regeneration endpoint and its expiry behaviour, and resolved OAuth2 scope inconsistencies across the spec',
        'Wrote v6 to v7 migration guides for the highest-traffic areas (Test Results, Alerts) — the content customers needed to actually make the move',
        'Kept migration pressure on by writing recurring v6 end-of-life reminders in public release notes and changelog across 2025 and 2026',
        'Coordinated documentation releases in lockstep with feature launches across all 20 product areas, reducing documentation release times by 30%',
      ],
      outcome: "During limited preview, one customer's data pulls dropped from 16 hours on v6 to about one hour on v7. That was on the API surface I documented. v7 reached 88% of all API traffic and 99.6% of new-organisation traffic by May 2026. Major enterprises including JPMC (98%), Schwab, Salesforce, Slack, and SAP migrated almost entirely to v7. Documentation was a core part of that adoption story.",
    },
    link: 'https://developer.cisco.com/docs/thousandeyes/v7/',
    linkLabel: 'View v7 API reference',
    featured: true,
    logoUrl: '/images/logos/thousandeyes.avif',
    coverImage: '/images/work/thousandeyes-api-v7.png',
  },

  {
    id: 'tealium-consent-privacy',
    company: 'Tealium',
    type: 'product',
    typeLabel: 'Product Docs',
    title: 'Consent and Privacy Documentation: Sole Ownership of a Regulated Product Area',
    tags: ['Consent Orchestration', 'Consent Integration', 'Privacy', 'GA launch', 'UX writing', 'CMP'],
    description: 'Owned all consent and privacy documentation at Tealium, a regulated, high-consequence product area. Consent Integration and Consent Orchestration both reached General Availability. Early Access documentation adopted by a major UK financial institution before GA.',
    details: {
      overview: "Owned consent and privacy documentation at Tealium, across Consent Integration, Consent Orchestration, and server-side consent management. This is a regulated, high-consequence product area where clarity, governance, and user trust matter directly. My role was not passive documentation intake. I owned the documentation from Early Access through to GA for both products, and restructured the entire consent documentation section as the product area matured.",
      keyWork: [
        'Delivered Consent Integration Early Access documentation, including both the product docs and microcopy review, for a major feature providing out-of-the-box Tealium iQ and CMP integration. Expected adoption target: 25% of customers using a consent management platform within six months',
        'Published Consent Orchestration Early Access documentation, adopted by a major UK financial institution for production use before General Availability',
        'Owned both products through to General Availability. Consent Integration and Consent Orchestration are now publicly available and GA',
        'Restructured the entire consent documentation section as the products matured, reorganising the information architecture so the full consent feature set is navigable and maintainable',
        'Owned server-side consent management documentation across multiple implementation patterns, keeping the consent model current as Tealium evolved toward orchestration',
        'Completed multiple microcopy reviews across Consent Integration, Consent Orchestration, and related UI surfaces: naming conventions, workflow language, error messages',
        'Shaped the documentation strategy for custom consent integrations, pushing toward a permanent reusable guide rather than time-bound Early Access artifacts',
      ],
      outcome: "Consent Orchestration Early Access documentation adopted by a major UK financial institution for production use before GA. Both products reached General Availability, with Consent Integration meeting its 25% adoption target among CMP users within six months. Sustained ownership of a regulated product area that combined product documentation, information architecture, UX writing, and documentation strategy.",
    },
    link: 'https://docs.tealium.com/consent/',
    linkLabel: 'View consent documentation',
    featured: true,
    logoUrl: '/images/logos/tealium.svg',
    coverImage: '/images/work/tealium-consent-docs.png',
  },

  {
    id: 'thousandeyes-opentelemetry',
    company: 'Cisco · ThousandEyes',
    type: 'api',
    typeLabel: 'API Docs',
    title: 'ThousandEyes for OpenTelemetry: Sole Owner Across 10 Platforms and a Full Data Model Migration',
    tags: ['OTel', 'Datadog', 'Splunk', 'Grafana', 'New Relic', 'Dynatrace', 'Data model', 'Multi-platform'],
    description: '10 observability platforms, 3 telemetry signals, and a complete data model migration. The documentation solutions engineers reach for first when customers have streaming questions.',
    details: {
      overview: "ThousandEyes for OpenTelemetry exports network and digital-experience telemetry into Splunk, Grafana, Datadog, Dynatrace, and others, without polling the REST API. It sits at the intersection of the ThousandEyes platform, the OTel collector, OTLP transport protocols, TLS requirements, per-platform exporter config, and a data model that defines exactly which metrics and attributes each test type emits. I've owned this documentation set solo through continuous, fast-moving development.",
      keyWork: [
        'Owned the documentation solo through fast-moving development. This is the source of truth solutions engineers link to when answering customer streaming questions',
        'Worked through a full v1 to v2 data model migration: documented both models, the differences, and the migration path. A wrong attribute name breaks a customer dashboard, so getting this right mattered',
        'Rebuilt the information architecture into something navigable: getting started, data model, URL requirements, collector configuration, managing integrations, and a dedicated guide per platform',
        'Documented integrations for all 10 observability platforms: Datadog, Dynatrace, Elastic, Grafana, Honeycomb, New Relic, ServiceNow Cloud Observability, SigNoz, Splunk Cloud/Enterprise, and Splunk Observability Cloud',
        'Documented the precise constraints customers actually hit: 30-stream limit per account group per data-model version, shared test exclusions, traces requiring v2, OTLP/gRPC and HTTP transport options',
        'Kept pace with every new launch so solutions engineers and customers could adopt immediately',
      ],
      outcome: "10 platforms and 3 signals (metrics, traces, logs) documented to a consistent standard. The data-model and limits documentation means customers can size, configure, and troubleshoot streams correctly on first attempt, which reduces support escalations for the streaming team.",
    },
    link: 'https://docs.thousandeyes.com/product-documentation/integration-guides/opentelemetry',
    linkLabel: 'View OpenTelemetry documentation',
    featured: true,
    logoUrl: '/images/logos/thousandeyes.avif',
    coverImage: '/images/work/thousandeyes-opentelemetry.png',
  },

  {
    id: 'tealium-doc-ops',
    company: 'Tealium',
    type: 'ops',
    typeLabel: 'Doc Ops',
    title: 'Documentation Platform, Workflow Automation and AI-Assisted Pipeline',
    tags: ['Hugo', 'Vale', 'GitHub Actions', 'Claude Code', 'AI pipeline', 'Multilingual', 'Docs-as-code'],
    description: 'Upgraded Hugo across three major versions (0.56 to 0.111.3), migrated all documentation from legacy TLC to Hugo, integrated Vale linting into CI, and co-developed a 4-stage AI-assisted documentation pipeline using Claude Code skills.',
    details: {
      overview: "The Tealium documentation system is a multi-repo, multilingual Hugo-based setup with separate preview and production repositories for English and Japanese content. Improving this system was not a side project: it was active ownership of the delivery infrastructure behind all documentation. That work expanded over time to include AI tooling that changed how the team approaches research, planning, drafting, and review.",
      keyWork: [
        'Upgraded Hugo from v0.56 to v0.98, then to v0.111.3, including migration from Blackfriday to Goldmark Markdown rendering for CommonMark/GFM compliance and improved performance',
        'Migrated all documentation from the legacy TLC platform to Hugo, consolidating product guides and documentation that had been split across two systems into a single platform and workflow',
        'Implemented Vale linting in the GitHub workflow. Team feedback: "amazingly helpful" and "super useful and time-saving." Later upgraded the Vale GitHub Action to add inline PR comment functionality',
        'Automated deployment of a documentation preview site and integrated link validation into CI to catch broken links before they reach production',
        'Co-developed a four-stage AI-assisted documentation pipeline using Claude Code skills, separating discovery, planning, drafting, and review into distinct phases. Each stage produces a structured output the next stage reads, and gates between stages prevent jumping straight to drafting when research is incomplete',
        'Currently building a documentation quality baseline scoring and reporting framework using AI to measure and track documentation health over time',
        'Enabled and maintained the translation workflow for English and Japanese documentation, and trained the full technical writing team on the updated publish process',
      ],
      outcome: "Documentation quality improved measurably with automated linting and link validation in CI. The full documentation estate consolidated onto Hugo: one platform, one workflow. The AI pipeline moved quality controls into the workflow itself, surfacing research gaps and structural problems earlier where they are cheaper to fix. Documentation baseline scoring is being established to give the team a measurable foundation for ongoing quality improvement.",
    },
    link: 'https://docs.tealium.com',
    linkLabel: 'View Tealium documentation',
    featured: true,
    logoUrl: '/images/logos/tealium.svg',
    coverImage: '/images/work/tealium-doc-ops.png',
  },

  {
    id: 'thousandeyes-devnet-migration',
    company: 'Cisco · ThousandEyes',
    type: 'api',
    typeLabel: 'API Docs',
    title: 'Migrating the ThousandEyes Developer Portal to Cisco DevNet',
    tags: ['Platform migration', 'OpenAPI', 'PubHub', 'Information architecture', 'Postman', 'Learning Labs'],
    description: 'Moved the ThousandEyes developer portal off a standalone site onto Cisco DevNet, replacing the old SwaggerHub-based toolchain with a single, repeatable publishing pipeline. Owned the documentation side end to end across a 10-month migration while keeping v6 and v7 both live.',
    details: {
      overview: "After the Cisco acquisition, ThousandEyes' API documentation lived on a separate, ThousandEyes-branded developer site with its own publishing process and SwaggerHub-based tooling. Customers who lived in Cisco's developer ecosystem had to leave it to find ThousandEyes APIs. Getting onto Cisco DevNet wasn't a copy-paste job. It meant migrating 16 v6 API areas and the full v7 surface, replacing the old toolchain, and protecting hundreds of inbound links that customers and SDKs already depended on.",
      keyWork: [
        'Owned the migration plan and execution for documentation: wrote the migration plan and ran the task breakdown that took the portal from scoping to launch across a 10-month timeline',
        'Migrated the full v6 surface — 16 distinct API areas — and the v7 reference onto Cisco DevNet\'s publishing system, standing up the ThousandEyes landing experience on developer.cisco.com',
        'Drove the move off SwaggerHub, replacing the old interactive-docs toolchain with a single, docs-as-code publishing pipeline aligned with the rest of Cisco\'s developer platform',
        'Ran a limited preview before full GA: collected and actioned feedback, then published v6 and v7 together on schedule',
        'Protected existing customers: replaced every developer.thousandeyes.com link with Cisco DevNet equivalents and hunted down broken links surfaced after launch',
        'Managed the controlled v6 wind-down by moving the v6 reference behind internal access rather than deleting it, so support teams could still serve customers who needed it',
        'Maintained ongoing DevNet correctness work post-migration: rendering of deprecated objects, support policy notices, and version availability documentation',
      ],
      outcome: "ThousandEyes API documentation now lives inside Cisco's official developer platform, discoverable alongside the rest of Cisco's APIs instead of on an island. The migration delivered zero-loss version coverage — both v6 and v7 carried over with no broken integrations — and replaced the legacy SwaggerHub toolchain with a single, repeatable publishing pipeline.",
    },
    link: 'https://developer.cisco.com/docs/thousandeyes/',
    linkLabel: 'View DevNet portal',
    featured: true,
    logoUrl: '/images/logos/thousandeyes.avif',
    coverImage: '/images/work/thousandeyes-devnet-migration.png',
  },

  {
    id: 'jenkins-documentation',
    company: 'Jenkins · Open Source',
    type: 'product',
    typeLabel: 'Product Docs',
    title: 'Jenkins Documentation: Kubernetes, Cloud, and Docs-as-Code Migration',
    tags: ['Kubernetes', 'AWS', 'Cloud', 'Docs-as-code', 'Open source', 'Jenkins'],
    description: 'Filled a critical documentation gap for Jenkins on Kubernetes, the first official installation and scaling guides. Also contributed Windows, AWS, and troubleshooting documentation, and supported the migration of Jenkins docs from Wiki to GitHub.',
    details: {
      overview: "Between 2020 and 2022, I contributed to Jenkins documentation at a point where significant gaps existed for cloud-native users. Jenkins on Kubernetes was widely discussed in presentations and blog posts, but there were no official guides. I identified that gap and contributed the documentation that filled it, making Jenkins accessible to a growing audience of Kubernetes and cloud infrastructure teams worldwide.",
      keyWork: [
        'Authored the official Jenkins on Kubernetes installation guide: the first structured documentation for deploying Jenkins in Kubernetes environments',
        'Authored the official guide for scaling Jenkins on Kubernetes, covering the infrastructure and configuration decisions teams face as Jenkins workloads grow',
        'Updated the Windows installation guides to improve onboarding for Windows users',
        'Developed a new troubleshooting section to help users diagnose and resolve common setup issues more efficiently',
        'Authored a Jenkins on AWS tutorial, helping users integrate Jenkins into cloud environments',
        'Contributed to the migration of Jenkins documentation from the legacy Wiki to GitHub, supporting Jenkins\' transition to a docs-as-code approach',
      ],
      outcome: "The Jenkins on Kubernetes and AWS documentation continues to support thousands of developers deploying and managing Jenkins in cloud and container environments. The troubleshooting section reduced friction for new users. Contributions were recognised by the Jenkins governance team.",
    },
    link: 'https://www.jenkins.io/doc/book/installing/kubernetes/',
    linkLabel: 'View Jenkins on Kubernetes docs',
    featured: true,
    logoUrl: 'https://avatars.githubusercontent.com/u/107424',
    coverImage: '/images/work/jenkins-on-kubernetes.png',
  },

  {
    id: 'magnopus-csp-certification',
    company: 'Magnopus',
    type: 'product',
    typeLabel: 'Product Docs',
    title: 'CSP Certification Course: 5-Module Technical Curriculum Built from Scratch',
    tags: ['C#', 'Spatial computing', 'Curriculum design', 'Technical training', 'Connected Spaces Platform', 'Code samples'],
    description: 'Designed and wrote a 5-module certification course covering 24 CSP topics. No existing docs to reference, no prior C# background. Delivered on deadline. Now live as the official Magnopus training resource.',
    details: {
      overview: "Magnopus builds spatial computing and immersive experience products. They needed a Connected Spaces Platform (CSP) Certification Course: structured training covering 24 interrelated topics. There was nothing to reference. No public documentation existed, no prior C# experience on my team, and the timeline was tight. WriteTech Hub (operating as Zaycodes at the time) was brought in to develop the full curriculum from scratch.",
      keyWork: [
        'Outlined 24 interrelated CSP topics with a logical progression designed to take learners from foundational concepts through to architectural application',
        'Wrote technical documentation from scratch covering platform concepts, architecture, and hands-on application, balancing accuracy with accessibility throughout',
        'Created visual aids including conceptual diagrams to explain core CSP concepts where prose alone was insufficient',
        'Developed C# code snippets and interactive elements aligned with CSP\'s API and scripting engine requirements. All C# knowledge was self-taught for this project.',
        'Worked without external documentation or prior public references. All content came from direct stakeholder conversations and knowledge-sharing sessions with the Magnopus team.',
        'Ran multiple review loops with the Magnopus team to ensure technical accuracy across unfamiliar territory',
        'Delivered all modules on time, with accuracy and clarity consistent across the full course',
      ],
      outcome: "The completed CSP Certification Course is live as the official Magnopus training resource. Magnopus can now onboard new developers faster, standardise how CSP is taught across teams, and scale platform adoption without requiring direct engineering time for every new contributor. The work demonstrated that a focused documentation team can produce authoritative technical training in an entirely new domain under time pressure.",
    },
    link: 'https://connected-spaces-platform.net/learn/learn.html',
    linkLabel: 'View CSP certification course',
    featured: false,
    logoUrl: '/images/logos/magnopus.webp',
    coverImage: '/images/work/magnopus-csp.png',
  },

  {
    id: 'camunda-self-managed-ia',
    company: 'Camunda',
    type: 'product',
    typeLabel: 'Product Docs',
    title: 'Self-Managed Documentation: Rearchitecting 280+ Pages Around the User Journey, Not the Org Chart',
    tags: ['Information architecture', 'Content strategy', 'User research', 'Content design', 'Developer experience', 'Diátaxis', 'User journeys', 'Documentation strategy'],
    description: 'Camunda 8 Self-Managed had 280+ pages of documentation organised by product component, but the engineers using it work in deployment phases. I led the initiative to rethink the information architecture around what users are actually trying to do, from first deployment through day-two operations, and delivered its first phase into production.',
    details: {
      overview: "Camunda 8 Self-Managed is the self-hosted version of Camunda's process orchestration platform, run by teams inside their own infrastructure. Its documentation had grown past 280 pages, organised the way the product is built: by component. The problem is that nobody deploying software thinks in components. A platform engineer standing up their first cluster, an SRE handling backups and upgrades, an operator configuring identity across services, none of them know or care which internal component owns a given feature, yet the old structure required them to. First-time users had no official path and assembled their own across disconnected sections; day-two operators couldn't find backup, scaling, or upgrade guidance without already knowing where it lived. That gap drives support tickets and a rough first-deployment experience. I owned the initiative to restructure the entire section around the user's journey instead of the org chart. The research and reasoning came first: I mapped the real audiences and the jobs they come to the docs to do, looked at how comparable platforms structure operational documentation, and used that to define a journey-based information architecture, grounded in Diátaxis as a per-page discipline rather than a navigational gimmick. The moves came only after the thinking. The initiative is public on GitHub, linked below.",
      keyWork: [
        'Diagnosed the core failure of the old structure: a component-organised navigation that only works if the reader already knows which component owns the feature they need, which first-time deployers and day-two operators do not',
        'Researched the real audiences and their goals, first deployment, day-two operations (backup, upgrade, scaling, monitoring), and cross-component configuration, and mapped the journey each one takes so the navigation could follow it',
        'Designed a journey-based information architecture: a clear line from Introduction and Quickstart through Deploy to production, then Manage (the operational essentials every deployment runs) and Extend (capabilities teams adopt selectively), with Troubleshooting and Reference as first-class destinations',
        'Made the Manage-versus-Extend split a deliberate content-design decision, separating what every deployment must operate from optional advanced capabilities, so readers running the basics are not forced to wade through everything else',
        "Dissolved the old component-shaped 'Concepts' catch-all, relocating each explanatory page next to the task it supports so concepts are met in context rather than in a disconnected reference dump",
        "Resolved the terminology and scope decisions that shape a docs set: keeping 'Upgrade' as the lifecycle term, trimming Reference to genuine cross-cutting lookup, and framing reference architectures as explanatory blueprints rather than step-by-step tasks",
        'Delivered the first phase as a non-breaking migration, moving 280+ pages without breaking a single existing link, so customer bookmarks, support links, and search rankings kept working, and left a complete old-to-new page map so the team can continue the later phases without losing the reasoning behind them',
      ],
      outcome: "The first phase ships with Camunda 8.10: the Self-Managed documentation now mirrors how engineers actually deploy and operate the platform. A first-time deployer can follow an official path, and a day-two operator can find backup, upgrade, or scaling guidance without knowing which component owns it. The migration preserved every existing link and left behind a documented IA blueprint and page map so the remaining phases can continue from a clear foundation. Start to finish this was information architecture and content strategy, defining the problem, researching the users, designing the structure, and owning its delivery, on documentation where findability directly shapes first-deployment success and support load.",
    },
    link: 'https://docs.camunda.io/docs/next/self-managed/',
    linkLabel: 'View the restructured documentation',
    secondaryLink: 'https://github.com/camunda/camunda-docs/issues/9119',
    secondaryLinkLabel: 'View the initiative on GitHub',
    featured: true,
    logoUrl: '/images/logos/camunda.svg',
    coverImage: '/images/work/camunda-self-managed-ia.png',
  },

  {
    id: 'camunda-upgrade-guide',
    company: 'Camunda',
    type: 'product',
    typeLabel: 'Product Docs',
    title: 'Self-Managed Upgrade Documentation: Rebuilding a Fragmented, Escalation-Driving Guide into a Single Guided Path',
    tags: ['Information architecture', 'Content strategy', 'User research', 'Stakeholder alignment', 'Developer experience', 'Support deflection', 'Technical documentation', 'Self-Managed'],
    description: 'Upgrading Camunda 8 Self-Managed was a recurring source of support escalations because the guidance was scattered across entry points with no clear path. I led a research-driven restructure of the upgrade documentation, grounded in support data and cross-functional input, into a single end-to-end journey, and shipped it.',
    details: {
      overview: "Upgrading a self-hosted Camunda deployment is high-stakes and infrequent, exactly the kind of task where unclear documentation becomes a support ticket. And it was: completing an 8.7 to 8.8 Self-Managed upgrade independently was a repeated pain point, called out in the 8.8 retrospective and traceable to real Support escalations and Consulting involvement. The information existed, but it was spread across an overview, a Helm section, and component pages, so depending on where someone landed they saw only part of the upgrade story and missed required steps. I owned the work to fix it, and I started from evidence rather than opinion: I mined Support's recurring findings and the specific escalated cases to understand where operators actually got stuck, mapped the existing sitemap against the journey an operator takes to plan and perform an upgrade, and used that to design a single, guided upgrade path. Then I took it through the people who carry the risk, Support, Consulting, Engineering, and the wider docs team, before writing a line. The problem definition and the cross-team decisions are documented publicly in the initiative issue, linked below.",
      keyWork: [
        "Traced the problem to evidence, not opinion: pulled Support's recurring findings, the specific escalated cases, and the 8.8 retrospective to pinpoint where operators got stuck, distinguishing the main upgrade path from component-level changes, ambiguous configuration examples (Helm values versus application config), and undocumented required settings",
        'Mapped the existing upgrade documentation against the journey an operator actually takes, and identified the core failure: no single entry point for the end-to-end flow, and deployment-specific pages that hid the prepare and follow-up steps, raising cognitive load exactly when operators are trying to plan impact',
        'Designed a single guided upgrade path, Overview, Prepare for upgrade, Perform the upgrade, deployment-method steps (Helm and manual), and component-level changes, so planning, execution, and component tuning are separated by intent and an operator can assess impact before touching anything',
        "Positioned everything else as clearly labelled supporting or reference material, cutting the page-hopping and the 'where do I start, what do I read next' ambiguity that was generating tickets",
        'Resolved the strategic versioning question the restructure exposed: instead of duplicating every historical upgrade path forward, I scoped each version\'s upgrade section to what is needed to reach that version and routed the required sequential hops from the overview, keeping each release a lean, single source of truth, a direction I weighed against the counter-argument that upgrades are sequential and then aligned with Engineering and the docs team',
        'Drove cross-functional sign-off, sharing the proposed structure and a content-mapping plan with Support, Consulting, Engineering, and the tech-writing team, and iterating the direction on their input before drafting',
        'Shipped the restructured 8.7 to 8.8 upgrade guide and scoped the remaining improvements into a tracked follow-up so the work continues past the initial release',
      ],
      outcome: "The restructured guide shipped and is live. Operators now follow one coherent path from planning to a completed upgrade, with a clear entry point, separated prepare, perform, and component stages, and unambiguous configuration guidance, directly targeting the issues that had been driving Support escalations and Consulting time. Beyond the immediate fix, it set a reusable pattern for how every future release scopes its upgrade docs. Start to finish this was evidence-led content strategy and information architecture: defining the problem from support data, researching the operator journey, designing the structure, aligning the stakeholders who carry the risk, and delivering.",
    },
    link: 'https://docs.camunda.io/docs/self-managed/upgrade/',
    linkLabel: 'View the upgrade documentation',
    secondaryLink: 'https://github.com/camunda/camunda-docs/issues/7617',
    secondaryLinkLabel: 'See the initiative and decisions on GitHub',
    featured: true,
    logoUrl: '/images/logos/camunda.svg',
    coverImage: '/images/work/camunda-upgrade-guide.png',
  },

  // ── NOT FEATURED ──────────────────────────────────────────────────────────

  {
    id: 'thousandeyes-docs-as-code',
    company: 'Cisco · ThousandEyes',
    type: 'ops',
    typeLabel: 'Doc Ops',
    title: 'Docs-as-Code and AI-Assisted Release Pipeline',
    tags: ['GitHub Actions', 'CI/CD', 'OpenAPI pipeline', 'AI automation', 'Release engineering', 'Knowledge transfer'],
    description: 'Runs the OpenAPI release pipeline end to end (currently v7.0.88). Built reusable AI-assisted skills to automate release mechanics. Process survived extended owner absence through documented knowledge transfer.',
    details: {
      overview: "ThousandEyes API documentation is generated from OpenAPI specs, validated in CI, and published to Cisco DevNet. Releasing docs is an engineering workflow: spec changes land via pull requests, get linted and diff-checked, are layered with overlays, and go out as a versioned release with release notes. Done well, it's invisible. I own this pipeline end to end and have built AI tooling to automate the repetitive mechanics.",
      keyWork: [
        'Run the release pipeline end to end: managing spec PRs, working through CI checks (linting, spec diffs that catch breaking or malformed changes), resolving release-note conflicts, and publishing each versioned release (currently v7.0.88)',
        'Built reusable AI-assisted skills to automate the repetitive mechanics of the API release process. Repeatable, shareable, and adoptable across the wider docs team',
        'Made the process resilient: documented the release workflow so it is not locked in one person\'s head, trained a colleague to run it during extended leave, and the pipeline kept shipping without me',
        'Maintained lockstep releases at the cadence a 20-area API demands, with no backlog of unpublished spec changes',
      ],
      outcome: "Reliable, validated documentation ships with every feature at the cadence a 20-area API demands. The process survived owner absence through documented knowledge transfer, which is proof the system is robust rather than heroic. AI tooling removes manual toil from release mechanics and frees focus for the writing work only a human writer can do.",
    },
    link: 'https://developer.cisco.com/docs/thousandeyes/',
    linkLabel: 'View API reference',
    logoUrl: '/images/logos/thousandeyes.avif',
  },

  {
    id: 'thousandeyes-splunk',
    company: 'Cisco · ThousandEyes',
    type: 'product',
    typeLabel: 'Product Docs',
    title: 'ThousandEyes Custom-Built Integrations: Splunk and Distributed Tracing',
    tags: ['Splunk', 'Dynatrace', 'Distributed tracing', 'Custom integrations', 'Observability'],
    description: 'Documented the ThousandEyes custom-built integration paths: the app for Splunk, distributed tracing with Splunk Observability Cloud, and distributed tracing with Dynatrace.',
    details: {
      overview: "ThousandEyes offers custom-built integration paths that let customers send data to observability platforms outside the standard OTel streaming model. I documented the specific integrations in this custom-built set: the packaged Splunk app distributed on Splunkbase, and the distributed tracing integrations for Splunk Observability Cloud and Dynatrace.",
      keyWork: [
        'Documented the ThousandEyes app for Splunk, the custom-built integration available on Splunkbase',
        'Documented distributed tracing with Splunk Observability Cloud',
        'Documented distributed tracing with Dynatrace',
      ],
      outcome: "Accurate, targeted documentation for each custom integration path, giving customers the specific setup guidance they need for their platform.",
    },
    link: 'https://docs.thousandeyes.com/product-documentation/integration-guides/custom-built-integrations/splunk-app',
    linkLabel: 'View Splunk integration docs',
    logoUrl: '/images/logos/thousandeyes.avif',
    coverImage: '/images/work/thousandeyes-distributed-tracing.png',
  },

  {
    id: 'tealium-ux-writing',
    company: 'Tealium',
    type: 'ux',
    typeLabel: 'UX Writing',
    logoUrl: '/images/logos/tealium.svg',
    coverImage: '/images/work/tealium-ux-writing.png',
    title: 'UX Writing as a Formal Workstream Across Product Surfaces',
    tags: ['Microcopy', 'Content design', 'Figma', 'Error messages', 'Naming conventions', 'Confirmation dialogs'],
    description: 'Sustained UX writing workstream treating microcopy as a formal documentation-team responsibility. Notable surfaces include Consent Integration, Consent Orchestration, Tealium Insights, and the Snowflake-native Audience Discovery launch.',
    details: {
      overview: "UX writing at Tealium was a formal documentation-team responsibility, not an afterthought. I maintained a sustained workstream across multiple product surfaces covering UI text, naming conventions, error messages, confirmation dialogs, and onboarding flows. The surfaces listed here are notable examples; the full scope spanned additional products and launches across my time at Tealium.",
      keyWork: [
        'Completed structured microcopy reviews for Consent Integration and Consent Orchestration: terms, workflows, error messages, and UI naming conventions to a consistent standard. System-level UX work, not casual copy editing',
        'Argued for and implemented confirmation dialogs where destructive actions lacked sufficient friction, based on documented technical consequence analysis. Product managers adopted the recommendations and updated engineering accordingly',
        'Reviewed UX designs in Figma for Tealium Insights, added suggested copy and questions directly in the design file, and completed microcopy reviews so front-end updates could proceed',
        'Exercised strategic information architecture judgment on the Audience Discovery for Snowflake launch: called out confusion risk with existing product area naming and pushed for clearer placement',
        'Drafted release notes language for multiple launches covering point-and-click filters, custom SQL, Cortex natural language queries, and scheduled refreshes',
        'Applied audience analysis throughout to ensure microcopy worked for both technical users (developers, data engineers) and non-technical users (marketing teams, privacy officers) on the same interfaces',
      ],
      outcome: "Multiple product launches shipped with consistent, reviewed UX copy. Confirmation dialog improvements reduced the risk of accidental destructive actions. Evidence-based terminology recommendations were adopted because they were grounded in technical consequence analysis rather than editorial preference. Microcopy was treated as a quality gate throughout.",
    },
  },

  {
    id: 'interswitch-docs-revamp',
    company: 'Interswitch Group',
    type: 'api',
    typeLabel: 'API Docs',
    title: 'Interswitch API Documentation Revamp',
    tags: ['Slate', 'Postman', 'Python', 'Java', 'Automation', 'Developer experience'],
    description: 'Led the overhaul of Interswitch\'s developer documentation: migrated from the legacy DocBase platform to Slate, built an automation service that converted Postman collections into Markdown, and added code samples in Python and Java for previously undocumented APIs.',
    details: {
      overview: "Developers integrating with Interswitch APIs faced challenges due to outdated documentation, inconsistent content, and difficult onboarding. As a key member of the Developer Relations team, I led a documentation overhaul that transformed how developers accessed and interacted with Interswitch APIs — spanning tooling migration, content creation, automation, and community engagement.",
      keyWork: [
        'Implemented Slate, an open-source documentation tool, and migrated documentation from the outdated DocBase platform, creating a more structured and user-friendly interface',
        'Created sample code snippets in Python and Java for previously undocumented APIs, making it easier for developers to integrate with Interswitch systems',
        'Built an automation service that converted Postman collections into Markdown, significantly reducing manual documentation effort and ensuring consistency as APIs changed',
        'Conducted developer surveys to identify pain points and used the feedback directly to improve documentation accuracy and usability',
        'Published articles on the Interswitch Engineering Blog, sharing best practices and increasing external engagement with the developer platform',
      ],
      outcome: "The revamp streamlined developer onboarding, increased API adoption, and improved the efficiency of documentation updates. External developers could integrate with Interswitch APIs faster and with fewer errors. The work was documented in a published engineering blog article.",
    },
    link: 'https://medium.com/interswitch-engineering-blog/the-evolution-of-the-interswitch-api-documentation-166d6771cc7a',
    linkLabel: 'Read the published article',
    logoUrl: '/images/logos/interswitch.png',
    coverImage: '/images/work/interswitch-docs.png',
  },

  {
    id: 'wikimedia-mediawiki-api',
    company: 'Wikimedia Foundation',
    type: 'api',
    typeLabel: 'API Docs',
    title: 'MediaWiki Action API: 32 Pages Improved and Multi-Language Code Samples',
    tags: ['JavaScript', 'Python', 'PHP', 'MediaWiki JS', 'Open source', 'Outreachy', 'MediaWiki'],
    description: 'Rewrote documentation for 32 of the most-viewed MediaWiki Action API pages during a 3-month Outreachy internship. Added code samples in JavaScript, Python, PHP, and MediaWiki JS for each API.',
    details: {
      overview: "During a three-month Outreachy internship with the Wikimedia Foundation, I improved documentation for the top-viewed MediaWiki Action API pages: the APIs powering Wikipedia, MediaWiki, and the broader Wikimedia ecosystem, used by developers building bots, tools, and integrations worldwide. The project focused on rewriting API documentation to a consistent template and adding multi-language code examples.",
      keyWork: [
        'Rewrote documentation for 32 of the most-viewed MediaWiki Action API pages to follow the established documentation template, improving consistency across the entire developer-facing API surface',
        'Authored code samples in JavaScript, Python, PHP, and MediaWiki JS for each API, meeting developers where they work rather than forcing them to translate a single-language example',
        'Focused on the top 100 most-viewed API pages to maximise impact across the global developer community',
        'Collaborated with Wikimedia community members and maintainers on documentation contributions via GitHub pull requests',
      ],
      outcome: "Documentation improved for 32 top MediaWiki Action APIs. Multi-language code samples significantly reduced time-to-first-call for new API users and improved accessibility for developers across the global Wikimedia ecosystem.",
    },
    link: 'https://m.mediawiki.org/wiki/User:Zaycodes',
    linkLabel: 'View contributions',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/120px-Wikimedia-logo.svg.png',
    coverImage: '/images/work/mediawiki-docs.png',
  },
];

// Stats ticker
export const stats = [
  { value: '300+',  label: 'API endpoints documented' },
  { value: '88%',   label: 'API traffic adoption driven' },
  { value: '20+',   label: 'Product areas owned end to end' },
  { value: '600+',  label: 'Technical writers mentored globally' },
  { value: '500+',  label: 'Women supported in tech' },
];

// Marquee companies
export const companies = [
  'Cisco · ThousandEyes',
  'Tealium',
  'Google · Bard',
  'Interswitch Group',
  'Wikimedia Foundation',
  'Jenkins',
  'Magnopus',
  'IOV Labs',
  'She Code Africa',
  'WriteTech Hub',
];

// Tools data for About page
export const toolGroups = [
  {
    label: 'Documentation Tools',
    color: 'purple',
    tools: ['Hugo', 'Docusaurus', 'GitBook', 'MadCap Flare', 'Read the Docs', 'Slate', 'GitHub Pages', 'ReadMe'],
  },
  {
    label: 'Workflow & Operations',
    color: 'teal',
    tools: ['GitHub & Git', 'GitHub Actions', 'Vale', 'CI/CD Pipelines', 'Jira', 'Confluence', 'OpenAPI/Swagger', 'Postman'],
  },
  {
    label: 'AI & Automation',
    color: 'yellow',
    tools: ['Claude / Anthropic API', 'AI-assisted authoring', 'Custom agent workflows', 'Claude Code skills', 'Prompt engineering'],
  },
  {
    label: 'Languages & Markup',
    color: 'mint',
    tools: ['Markdown', 'HTML & CSS', 'XML', 'Python', 'JavaScript', 'Java', 'C#', 'SQL'],
  },
  {
    label: 'Cloud & Observability',
    color: 'neutral',
    tools: ['Kubernetes', 'Helm', 'Jenkins', 'OpenTelemetry', 'Splunk', 'Grafana', 'Kibana', 'Datadog', 'Spring Boot'],
  },
];
