/* ===================================
   MetricWave - Translations
   Support for: English, French, Dutch, Georgian, Russian
   =================================== */

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            pricing: "Pricing",
            blog: "Blog",
            contact: "Contact"
        },

        // Home Page
        home: {
            // Hero Section
            heroTitle: "Turn Your Data Into Your Greatest Competitive Advantage",
            heroSubtitle: "Stop drowning in spreadsheets. Start making confident, data-driven decisions that grow your business.",
            heroCTA: "Get Started Today",
            heroSecondary: "Explore Our Services",

            // Services Section
            servicesTitle: "How We Help You Thrive",
            servicesSubtitle: "Comprehensive analytics solutions designed for solo entrepreneurs and small business owners",

            // Service Cards
            service1Title: "Data Analytics & Business Intelligence",
            service1Desc: "Connect your data sources and turn them into dashboards, KPIs, and insight reports that drive real decisions.",

            service2Title: "Web Development & Maintenance",
            service2Desc: "Fast, conversion-optimised websites built clean and integrated with your analytics stack from day one.",

            service3Title: "Process Mining & Analytics",
            service3Desc: "Map how your business actually operates and pinpoint exactly where time, money, and effort are being lost.",

            service4Title: "Automation & AI Agents",
            service4Desc: "Replace repetitive manual workflows with intelligent automation — from simple triggers to multi-step AI agents.",

            service5Title: "Business Strategy & Management",
            service5Desc: "Data-informed strategic planning, OKR frameworks, financial modelling, and management reporting.",

            service6Title: "Data Engineering & Integration",
            service6Desc: "Build reliable pipelines, clean warehouses, and connected systems so your analytics are always accurate.",

            learnMore: "Learn More →",

            // Trusted By
            trustedTitle: "Trusted By Leading Organizations",

            // Success Stories
            storiesTitle: "Real Results, Real Impact",
            storiesSubtitle: "See how we've helped businesses like yours make better decisions with data",

            story1Metric: "47%",
            story1Label: "Revenue Increase",
            story1Desc: "\"MetricWave helped us identify our most profitable customer segments. We redirected our marketing spend and saw revenue jump 47% in just 6 months.\"",
            story1Author: "Sarah Chen",
            story1Company: "Founder, Boutique E-commerce",

            story2Metric: "12 hrs/week",
            story2Label: "Time Saved",
            story2Desc: "\"The automated dashboards eliminated hours of manual reporting. Now I spend my time growing the business instead of drowning in spreadsheets.\"",
            story2Author: "Marcus Rodriguez",
            story2Company: "Owner, Digital Marketing Agency",

            story3Metric: "$85K",
            story3Label: "Annual Savings",
            story3Desc: "\"Process optimization revealed inefficiencies costing us thousands monthly. The improvements paid for themselves in the first quarter.\"",
            story3Author: "Jennifer Park",
            story3Company: "CEO, Consulting Firm",

            // CTA Section
            ctaTitle: "Ready to Transform Your Data Into Growth?",
            ctaSubtitle: "Let's discuss how MetricWave can help you make smarter, faster business decisions.",
            ctaButton: "Schedule a Consultation"
        },

        // Footer
        footer: {
            description: "Built for operators who want their data to work as hard as they do.",
            quickLinks: "Quick Links",
            services: "Services",
            contact: "Contact",
            email: "Email",
            phone: "Phone",
            location: "Location",
            locationValue: "Brussels, Belgium",
            connectTitle: "Connect With Us",
            copyright: "© 2026 MetricWave - Thrive Performance Coaching. All rights reserved.",
            industries: "Industries"
        },

        // Shared UI strings
        shared: {
            allServices: "← All Services",
            allIndustries: "← All Industries",
            howWeHelp: "How We Help",
            clientsTitle: "Clients & Organisations",
            otherServices: "Other Services",
            otherServicesSubtitle: "Our six services work together — most clients use two or more.",
            whatWeBuild: "What We Build For You",
            perfectFor: "Perfect For",
            typicalResults: "Typical Results",
            ourStack: "Our stack",
            toolsStackBadge: "· TOOLS & STACK ·",
            viewPricing: "View Pricing",
            ctaConsult: "Book a free consultation to discuss how this service applies to your business.",
            ctaReady: "Ready to Get Started?"
        },

        // Home page service cards (new text)
        homeCards: {
            s1Tag: "· DASHBOARDS · KPIs · REPORTING ·",
            s1Title: "Data Analytics & BI",
            s1Desc: "Executive visibility built on operational truth — not spreadsheet guesswork.",
            s1Link: "Explore Analytics →",
            s2Tag: "· DESIGN · BUILD · MAINTAIN ·",
            s2Title: "Web Development",
            s2Desc: "Your data stack's front door — 92+ Lighthouse, analytics-wired from launch.",
            s2Link: "Explore Web Development →",
            s3Tag: "· DISCOVER · ANALYSE · OPTIMISE ·",
            s3Title: "Process Mining",
            s3Desc: "Map exactly where time and money disappear — with event-level precision, not assumptions.",
            s3Link: "Explore Process Mining →",
            s4Tag: "· WORKFLOWS · AI AGENTS · LLMs ·",
            s4Title: "Automation & AI Agents",
            s4Desc: "31 hours returned per week per client. Custom agents built for your exact workflow.",
            s4Link: "Explore Automation →",
            s5Tag: "· PLANNING · OKRs · ADVISORY ·",
            s5Title: "Business Strategy",
            s5Desc: "Strategy without systems is just a slide deck. We make it executable.",
            s5Link: "Explore Strategy →",
            s6Tag: "· PIPELINES · WAREHOUSES · APIs ·",
            s6Title: "Data Engineering",
            s6Desc: "The infrastructure everything else depends on — pipelines, warehouses, and integrations that never lose a record.",
            s6Link: "Explore Data Engineering →"
        },

        // Home page story cards (new text)
        homeStories: {
            s1Metric: "Sales-first",
            s1Label: "Full Data Stack Handled",
            s1Desc: "\"Before MetricWave, our team was spending too much time trying to make sense of our data instead of doing what we do best — selling. They built out our entire data infrastructure: pipelines, dashboards, KPI reporting, the works. Now we have real-time visibility into performance without anyone on our side having to manage it. Our COO finally has the clarity to make fast decisions, and our sales team is fully focused on growth. It's exactly what a scaling operation needs.\"",
            s1AuthorName: "Angie",
            s1AuthorRole: "COO @ MTL Moving & Delivery",
            s2Metric: "0 → 1",
            s2Label: "Platform Built on Solid Data",
            s2Desc: "\"Building RentandChill from scratch meant every early decision had to count. MetricWave was involved from day one — helping us validate business cases, structure our analytics architecture, and make sense of user behavior as the platform grew. They didn't just hand us dashboards; they helped us think through what metrics actually mattered and why. That strategic layer made all the difference. I'd recommend them to any founder who wants to build something data-driven from the ground up.\"",
            s2AuthorName: "Archie",
            s2AuthorRole: "CEO @ RentAndChill",
            s3Metric: "18%+",
            s3Label: "Operational Cost Reduction",
            s3Desc: "\"Our logistics data existed, but we had no way to act on it. MetricWave came in, cleaned up years of messy operational records, and built models around our routing, scheduling, and capacity management. What came out of it were real, implementable changes — optimized delivery routes, better load planning, and scheduling that actually reflected our constraints. The cost savings paid for the engagement quickly, and we now have systems in place that continue to improve over time.\"",
            s3AuthorName: "Omar",
            s3AuthorRole: "GM @ GFS Georgia"
        },

        // Industries hub page
        industries: {
            navLabel: "Industries",
            logisticsTitle: "Logistics & Mobility",
            logisticsTagline: "Route efficiency, customer intelligence, and market analysis for operators who move things.",
            logisticsBullet1: "Operational analytics and fleet performance",
            logisticsBullet2: "Customer retention and revenue tracking",
            logisticsBullet3: "Competitive benchmarking and market entry",
            techTitle: "Technology & SaaS",
            techTagline: "Process intelligence, data quality, and BI for software companies that need operational clarity.",
            techBullet1: "Process mining and bottleneck analysis",
            techBullet2: "Data quality frameworks and KPI design",
            techBullet3: "Cross-functional dashboards and reporting",
            aiCoachingTitle: "AI Products & Coaching",
            aiCoachingTagline: "Analytics and automation for AI-native startups and coaching businesses that run on data and need to scale.",
            aiCoachingBullet1: "AI product instrumentation and performance analytics",
            aiCoachingBullet2: "Coaching platform CRM and workflow automation",
            aiCoachingBullet3: "Revenue, retention, and growth dashboards",
            govTitle: "Government & Public Sector",
            govTagline: "Evidence-based analysis and program support for institutions where accountability is mandatory.",
            govBullet1: "EU project administration and grant reporting",
            govBullet2: "Policy research and cross-country data synthesis",
            govBullet3: "Strategic documentation for public audiences",
            eduTitle: "Education & Research",
            eduTagline: "Analytical and operational support for universities and research-driven organisations.",
            eduBullet1: "Research data collection and analysis",
            eduBullet2: "Grant reporting and institutional analytics",
            eduBullet3: "Impact measurement and programme evaluation",
            nonprofitTitle: "Non-Profit & NGOs",
            nonprofitTagline: "Operations design and impact measurement for mission-driven organisations with complex stakeholder environments.",
            nonprofitBullet1: "Internal systems and workflow automation",
            nonprofitBullet2: "AI governance and policy research support",
            nonprofitBullet3: "Funder reporting and impact frameworks",
            hubLink: "How We Help",
            ctaTitle: "Working in One of These Sectors?",
            ctaSubtitle: "Let's talk about what's specific to your environment — and what we've already solved in it.",
            ctaButton: "Get In Touch"
        },

        // Logistics industry page
        logistics: {
            overviewTitle: "Operational Reality We've Worked In",
            overviewText: "In logistics, every delayed decision has a physical cost. Vehicles idle, routes inefficiency compounds, and customer churn happens before anyone runs a report. We've worked with both established regional operators and early-stage mobility platforms — and in both cases, the problem is the same: the business generates operational signals it isn't reading. We close that gap.",
            stat1Label: "Regional logistics operators served across Quebec",
            stat2Label: "Mobility platform engagements (market analysis & system design)",
            stat3Label: "Business Analytics background applied to operations and demand data",
            stat4Label: "Custom performance frameworks built from scratch for each client",
            howWeHelpSubtitle: "Three core areas where we deliver measurable results for logistics and mobility clients.",
            sol1Title: "Operational Analytics & Optimization",
            sol1Li1: "Route efficiency and completion time analysis",
            sol1Li2: "Fleet and crew utilization tracking",
            sol1Li3: "Job performance and variance benchmarking",
            sol1Li4: "Capacity planning and demand forecasting",
            sol1Li5: "Custom KPI dashboards for ops managers",
            sol2Title: "Customer & Revenue Intelligence",
            sol2Li1: "Customer lifetime value and retention analysis",
            sol2Li2: "Churn pattern identification",
            sol2Li3: "Pricing strategy and margin optimization",
            sol2Li4: "Service area performance and expansion modelling",
            sol2Li5: "Review and satisfaction data integration",
            sol3Title: "Market Analysis & Systems Design",
            sol3Li1: "Competitive benchmarking and market gap analysis",
            sol3Li2: "Functional requirements for mobility platforms",
            sol3Li3: "Data architecture design for early-stage operators",
            sol3Li4: "Service area and demand density mapping",
            sol3Li5: "Go-to-market intelligence for new service lines",
            clientsTitle: "Clients We've Worked With",
            client1Title: "MTL Moving and Delivery",
            client1Desc: "An established Montreal-based moving and delivery company. We built performance tracking infrastructure, analysed job completion data, and developed customer retention metrics to support operational decision-making across their service area.",
            client2Title: "Dynamic Movers",
            client2Desc: "A Montreal mover serving clients across Quebec and Eastern Ontario. We supported competitive market analysis and customer intelligence work — pricing benchmarking, service quality metrics, and expansion opportunity modelling for new geographic markets.",
            client3Title: "RentAndChill.com",
            client3Desc: "Georgia's car rental aggregator platform connecting travelers with vetted local providers. We supported platform analytics, booking flow optimisation, and performance frameworks — helping the team turn operational data into clear signals for partner management and customer experience improvements.",
            client4Title: "GFS Express",
            client4Desc: "A logistics and eCommerce fulfilment provider delivering B2B and B2C distribution, warehousing, and event kitting services. We worked alongside their operations team to bring structure to fulfilment data — building reporting pipelines and KPI frameworks that give visibility across order flow, inventory, and last-mile delivery performance.",
            ctaTitle: "Your routes are generating data. Are you using it?",
            ctaSubtitle: "Let's find out what your operational signals are actually saying — and what they're costing you.",
            ctaButton: "Talk to Us →"
        },

        // Technology industry page
        technology: {
            overviewTitle: "Where We've Operated Inside SaaS",
            overviewP1: "SaaS companies have the data. They almost always lack the architecture to trust it. KPIs diverge across teams. Analytics gets built reactively. Process inefficiencies compound silently until they become expensive. We've been on both sides of this — as the analyst diagnosing it externally, and as the embedded data operator living it.",
            overviewP2: "At Celonis, we worked directly with enterprise clients to surface those inefficiencies through structured process mining — identifying and quantifying operational losses using event log data. The aggregate across our engagements exceeded $32M in recoverable losses. At Singular (Flutter International), we operated inside a global SaaS platform managing data quality, product analytics, and cross-application reporting across 15+ distinct product lines.",
            overviewP3: "We understand both the consulting-side view — diagnosing a client's process landscape from outside — and the internal view of living inside a SaaS product function for years. That dual perspective is rare.",
            stat1Label: "in recoverable losses surfaced via Celonis EMS across enterprise engagements",
            stat2Label: "SaaS product lines managed across data and analytics operations",
            stat3Label: "embedded inside a global SaaS product function at Flutter International",
            stat4Label: "Celonis-certified process mining using production event log data",
            howWeHelpSubtitle: "From process diagnosis to reporting infrastructure — work that connects your data to decisions.",
            sol1Title: "Process Mining & Analytics",
            sol1Li1: "End-to-end process analysis using event log data",
            sol1Li2: "Bottleneck identification and conformance checking",
            sol1Li3: "Celonis EMS implementation and configuration",
            sol1Li4: "Process documentation in BPMN / UML",
            sol1Li5: "Deviation analysis and root cause reporting",
            sol2Title: "Data Quality & Governance",
            sol2Li1: "Data validation and quality frameworks",
            sol2Li2: "KPI standardisation across teams and tools",
            sol2Li3: "API integration mapping and data lineage",
            sol2Li4: "CRM and product data architecture review",
            sol2Li5: "Reporting infrastructure and data documentation",
            sol3Title: "BI & Executive Reporting",
            sol3Li1: "Cross-functional dashboards (Tableau, Power BI)",
            sol3Li2: "Executive performance metrics and scorecards",
            sol3Li3: "Product analytics and feature usage reporting",
            sol3Li4: "Release and delivery performance tracking",
            sol3Li5: "Custom reporting pipelines for stakeholder needs",
            clientsTitle: "Clients & Organisations",
            client1Title: "Celonis",
            client1Desc: "Celonis is the global leader in process mining and execution management. We delivered analytics consulting engagements helping enterprise clients identify and quantify operational inefficiencies across their core business processes — surfacing over $32M in recoverable losses through structured EMS analysis.",
            client2Title: "Singular (Flutter International)",
            client2Desc: "Singular is a global SaaS platform within Flutter International's technology stack. We were embedded in the product and data function for four years — managing data operations, product analytics, and cross-application reporting across 15+ applications in a compliance-heavy, multi-jurisdictional environment.",
            ctaTitle: "Your product generates the data. We help you act on it.",
            ctaButton: "Talk to Us →"
        },

        // AI & Coaching industry page
        aiCoaching: {
            overviewTitle: "What We've Built Inside This Space",
            overviewP1: "AI-native companies move fast — and their data infrastructure rarely keeps pace. Features ship before tracking is defined. Models go to production before evaluation pipelines exist. Growth metrics are scattered across five tools with no single source of truth. By the time the questions get harder, the data foundation is already fragile.",
            overviewP2: "Coaching businesses face a different version of the same problem. Client journeys live in CRMs that no one built properly. Revenue attribution is guesswork. Onboarding is manual at every step. The operators are excellent at their craft, but the systems behind the business don't match the ambition in front of it.",
            overviewP3: "We don't consult from a distance. We get into the systems and build the things that need building — data infrastructure for AI-native teams that move fast, and client management systems for coaching businesses that need to scale without adding headcount. Both need the same thing: an operating layer that matches the ambition.",
            stat1Label: "product instrumentation — event tracking to model performance monitoring",
            stat2Label: "client lifecycle systems designed and automated for coaching operations",
            stat3Label: "average returned per week per client through workflow automation",
            stat4Label: "integration pipelines connecting AI tools, CRMs, and reporting stacks",
            howWeHelpSubtitle: "From product telemetry to client automation — built for teams that move fast and need their data to keep up.",
            sol1Title: "AI Product Integration & Analytics",
            sol1Li1: "Event tracking design and implementation for AI-powered products",
            sol1Li2: "Model performance dashboards and evaluation pipelines",
            sol1Li3: "User behaviour funnels, activation metrics, and feature adoption",
            sol1Li4: "A/B testing frameworks and experiment analytics",
            sol1Li5: "Data quality monitoring for AI training and inference pipelines",
            sol2Title: "Coaching Platform Operations",
            sol2Li1: "CRM setup and automation (HubSpot, GoHighLevel, Notion)",
            sol2Li2: "Client onboarding workflows and intake automation",
            sol2Li3: "Session scheduling, follow-up, and renewal trigger flows",
            sol2Li4: "Programme delivery tracking and engagement reporting",
            sol2Li5: "Testimonial, referral, and community engagement systems",
            sol3Title: "Revenue & Growth Infrastructure",
            sol3Li1: "Revenue dashboards with MRR, churn, and LTV visibility",
            sol3Li2: "Multi-channel attribution and funnel conversion analytics",
            sol3Li3: "AI-assisted lead scoring and pipeline management",
            sol3Li4: "Retention and upsell trigger automation",
            sol3Li5: "Investor and stakeholder reporting frameworks",
            clientsTitle: "Clients & Organisations",
            client1Title: "IRAP – International Refugee Assistance Project",
            client1Desc: "The International Refugee Assistance Project connects refugees and asylum seekers with legal support worldwide. We built data and reporting infrastructure to track case outcomes and programme impact across their global network.",
            client2Title: "Ambitious Impact (AIM)",
            client2Desc: "AIM trains the next generation of effective altruists and impact-driven leaders through intensive coaching programmes. We designed their client tracking, intake automation, and programme reporting systems.",
            ctaTitle: "AI in production. Coaching at scale. The infrastructure has to keep up.",
            ctaButton: "Build With Us →"
        },

        // Government industry page
        government: {
            overviewTitle: "What We've Seen in This Sector",
            overviewText: "We've administered a €3.3M EU cybersecurity programme at the Council of Europe. We've published policy research across 3,000+ municipalities through the National League of Cities. We've worked with UNDP and NSF-backed research programmes. When we say we understand public sector accountability standards — we mean it at the institutional level.",
            stat1Label: "EU-funded programme administered at the Council of Europe",
            stat2Label: "Municipalities reached through NLC policy guidebook",
            stat3Label: "High-level stakeholder engagements coordinated across one programme",
            stat4Label: "Countries covered in cross-national policy and innovation research",
            howWeHelpSubtitle: "From EU grant reporting to cross-country policy research — work built for institutions that require rigour and accountability at every step.",
            sol1Title: "Programme & Grant Administration",
            sol1Li1: "EU project coordination and funder reporting",
            sol1Li2: "Budget tracking and financial documentation",
            sol1Li3: "Stakeholder meeting facilitation and minute-taking",
            sol1Li4: "Progress reporting and milestone documentation",
            sol1Li5: "Cross-partner coordination in multilateral programmes",
            sol2Title: "Policy Research & Data Analysis",
            sol2Li1: "Cross-country data collection and synthesis",
            sol2Li2: "Stakeholder interviews and qualitative research",
            sol2Li3: "Digital rights and technology policy analysis",
            sol2Li4: "Desk research and literature review",
            sol2Li5: "AI policy and governance frameworks",
            sol3Title: "Strategic Advisory & Documentation",
            sol3Li1: "Policy guidebooks and institutional publications",
            sol3Li2: "Evidence-based recommendations for public audiences",
            sol3Li3: "EU Directive analysis and alignment assessments",
            sol3Li4: "City innovation and digital transformation research",
            sol3Li5: "Impact measurement and programme evaluation",
            clientsTitle: "Clients & Organisations",
            client1Title: "Council of Europe",
            client1Desc: "We provided operational support for the technical administration of a €3.3M EU-funded cybersecurity capacity building programme, coordinating across partner organisations, managing grant reporting to EU funders, and facilitating 45+ high-level stakeholder engagements.",
            client2Title: "National League of Cities",
            client2Desc: "The National League of Cities represents the municipal governments of over 3,000 US cities. We conducted city innovation research across 15+ countries, carried out 50+ stakeholder interviews, and co-authored a policy guidebook distributed across the NLC's full network of city partners.",
            client3Title: "UNDP & NSF",
            client3Desc: "Research analytics and programme support across international development and grant-funded research contexts. Data collection, research synthesis, and documentation support for UNDP-affiliated programmes and National Science Foundation-funded academic research.",
            ctaTitle: "Public sector rigour. We've met it.",
            ctaSubtitle: "EU grant reporting, multi-stakeholder coordination, policy research — with full documentation and audit-ready outputs.",
            ctaButton: "Talk to Our Team →"
        },

        // Education industry page
        education: {
            overviewTitle: "What We've Seen in This Sector",
            overviewText: "Both members of our team are Notre Dame alumni. We've supported analytics work at Notre Dame, the McKenna Center for Human Development, and NSF-funded research programmes. That means we approach academic and research-adjacent work with methodological care and an understanding of what institutional stakeholders actually need — not just what looks good in a presentation.",
            stat1Label: "Notre Dame alumni — MS Business Analytics and interdisciplinary research",
            stat2Label: "Analytics support for National Science Foundation-funded research",
            stat3Label: "statistical tools applied in peer-reviewed research contexts",
            stat4Label: "Stakeholder interviews conducted across research and policy projects",
            howWeHelpSubtitle: "Research-quality analytics and programme support for institutions where rigour is not optional.",
            sol1Title: "Research Analytics",
            sol1Li1: "Data collection, cleaning, and statistical analysis (R, Python, SQL)",
            sol1Li2: "Survey design and qualitative coding",
            sol1Li3: "Longitudinal and cross-sectional data management",
            sol1Li4: "Literature synthesis and desk research",
            sol1Li5: "Visualisation and presentation of research findings",
            sol2Title: "Institutional Reporting",
            sol2Li1: "Analytics documentation for grant-funded programmes",
            sol2Li2: "Progress reporting for institutional and funder audiences",
            sol2Li3: "Impact measurement and outcome tracking",
            sol2Li4: "Cross-departmental data standardisation",
            sol2Li5: "Dashboards for programme monitoring",
            sol3Title: "Programme & Strategy Support",
            sol3Li1: "Stakeholder interview facilitation and synthesis",
            sol3Li2: "Community needs assessment and gap analysis",
            sol3Li3: "Strategic planning support for research centres",
            sol3Li4: "Academic and institutional communications",
            sol3Li5: "Cross-sector partnership documentation",
            clientsTitle: "Clients & Organisations",
            client1Title: "University of Notre Dame",
            client1Desc: "Both team members are Notre Dame alumni. We have supported research assistance and analytics work across Notre Dame's academic programmes — contributing to socioeconomic and development-focused research projects with data collection, analysis, and documentation support.",
            client2Title: "McKenna Center for Human Development",
            client2Desc: "The McKenna Center advances community development and social impact at Notre Dame. We provided research analytics support — including data collection, community needs analysis, and documentation — for McKenna Center-affiliated programmes and research initiatives.",
            client3Title: "NSF-Funded Research",
            client3Desc: "We provided data analytics and research support for National Science Foundation-backed academic research projects — contributing to quantitative analysis, data management, and research documentation for grant-funded studies.",
            ctaTitle: "Research-quality analytics, built by people who've done the research.",
            ctaButton: "Talk to Our Team →"
        },

        // Non-Profit industry page
        nonprofit: {
            overviewTitle: "The Constraints We've Worked Within",
            overviewText: "NGOs operate with constrained resources and expansive mandates. Every hour spent on manual donor reporting is an hour not spent on impact. We build lean, automated analytics systems that let your team focus on mission — while giving donors, funders, and board members the transparency they require.",
            stat1Label: "Non-profit and international development organisations served",
            stat2Label: "Stakeholder interviews conducted across research and advocacy programmes",
            stat3Label: "Operational and research support at a frontier AI governance organisation",
            stat4Label: "Certified project management applied to NGO programme operations",
            howWeHelpSubtitle: "From internal systems to AI policy research — work that builds capacity, not dependency.",
            sol1Title: "Operations Design",
            sol1Li1: "CRM setup and optimisation (Salesforce, Airtable)",
            sol1Li2: "Programme management systems (Asana, Make)",
            sol1Li3: "Workflow automation and process documentation",
            sol1Li4: "AI platform evaluation and adoption strategy",
            sol1Li5: "Organisational data infrastructure design",
            sol2Title: "AI Policy & Governance Research",
            sol2Li1: "AI implications research for advocacy organisations",
            sol2Li2: "Digital rights and technology policy analysis",
            sol2Li3: "AI in the Global South and emerging market contexts",
            sol2Li4: "Stakeholder mapping and expert interview synthesis",
            sol2Li5: "Policy briefs and research publications",
            sol3Title: "Impact Measurement",
            sol3Li1: "Data frameworks for funder and board reporting",
            sol3Li2: "Programme evaluation and outcome tracking",
            sol3Li3: "Salesforce data quality and reporting infrastructure",
            sol3Li4: "Stakeholder surveys and feedback synthesis",
            sol3Li5: "Annual report analytics and impact narrative",
            clientsTitle: "Clients & Organisations",
            client1Title: "International Refugee Assistance Project",
            client1Desc: "IRAP is a legal organisation that uses the power of law to protect and resettle refugees worldwide. We served as Program Manager — leading systems optimisation, managing programme operations, and directing the organisation's AI adoption strategy to improve operational efficiency and case management capacity.",
            client2Title: "Youth Legend",
            client2Desc: "Youth Legend is a mission-driven sports and youth development organisation. We built a data quality framework and Salesforce reporting infrastructure to support funder reporting and programme evaluation — giving the team clear visibility into impact outcomes and operational performance.",
            client3Title: "Ambitious Impact (AIM)",
            client3Desc: "Ambitious Impact — formerly Charity Entrepreneurship — is a training and incubation organisation for high-impact career paths, running flagship programmes including charity incubation, grantmaker training, and career coaching for aspiring founders and philanthropists.",
            ctaTitle: "More impact. Less reporting overhead.",
            ctaSubtitle: "We build the reporting infrastructure so your team can focus on the work that actually matters.",
            ctaButton: "Talk to Our Team →"
        },

        // Analytics BI service page
        analyticsBI: {
            breadcrumb: "Data Analytics & BI",
            badge: "DASHBOARDS · KPIs · REPORTING",
            title: "Executive visibility built on operational truth.",
            lead: "Dashboards are only useful if the data underneath them is trusted. We build analytics environments that connect directly to your operational layer — giving leadership a single, unified North Star they actually act on Monday morning, not just review in the weekly presentation.",
            featuresTitle: "What We Build For You",
            feat1: "GA4, Meta Ads & marketing channel tracking setup",
            feat2: "Custom BI dashboards (Looker Studio, Metabase, Tableau)",
            feat3: "Revenue, cohort & funnel analysis",
            feat4: "Customer segmentation & lifetime value modelling",
            feat5: "KPI frameworks aligned to your growth goals",
            feat6: "Automated insight reports delivered on your schedule",
            perfectForTitle: "Perfect For",
            perfectForText: "Operations and leadership teams who have lost trust in their dashboards — or never had dashboards worth trusting in the first place.",
            resultsTitle: "Typical Results",
            result1: "One trusted number across every team — no more conflicting versions",
            result2: "Dashboards live within days, not months",
            result3: "10–15 hours per week reclaimed from manual reporting",
            result4: "Leadership makes decisions on data they actually believe",
            stackTitle: "Our stack",
            stackSubhead: "The platforms and frameworks we use to deliver data analytics and business intelligence.",
            otherServicesTitle: "Other Services",
            otherServicesSubtitle: "Our six services work together — most clients use two or more.",
            relWebDev: "Web Development",
            relProcessMining: "Process Mining",
            relAutomation: "Automation & AI",
            relStrategy: "Business Strategy",
            relDataEng: "Data Engineering",
            ctaTitle: "Ready to Get Started?",
            ctaSubtitle: "Book a free consultation to discuss how this service applies to your business.",
            ctaButton: "Start With a Stack Audit →"
        },

        // Web Development service page
        webDev: {
            breadcrumb: "Web Development & Maintenance",
            badge: "DESIGN · BUILD · MAINTAIN",
            title: "A website that earns its keep.",
            lead: "We design and build high-performance platforms wired directly into your analytics stack from day one — not brochure sites, but operational interfaces that integrate with your workflows, track your KPIs, and convert your traffic into revenue conversations.",
            featuresTitle: "What We Build For You",
            feat1: "Custom website design and development",
            feat2: "Performance optimisation (Core Web Vitals, page speed)",
            feat3: "Analytics and tracking integration (GA4, pixels, events)",
            feat4: "SEO technical foundation and structured data",
            feat5: "Ongoing content updates and maintenance",
            feat6: "Hosting setup, deployment and uptime monitoring",
            perfectForTitle: "Perfect For",
            perfectForText: "Teams whose current site is a liability — slow, untracked, or disconnected from the rest of their stack. If you cannot see who visited, what they did, or why they left, it is costing you.",
            resultsTitle: "Typical Results",
            result1: "92+ Lighthouse performance score — industry benchmark, not aspiration",
            result2: "Full analytics from first click to conversion decision",
            result3: "Zero maintenance overhead for your team — we handle it",
            result4: "Every form, button, and funnel tracked from day one",
            stackTitle: "Our stack",
            stackSubhead: "The platforms and frameworks we use to design, build, and ship production-ready websites.",
            otherServicesTitle: "Other Services",
            otherServicesSubtitle: "Our six services work together — most clients use two or more.",
            relAnalytics: "Data Analytics & BI",
            relProcessMining: "Process Mining",
            relAutomation: "Automation & AI",
            relStrategy: "Business Strategy",
            relDataEng: "Data Engineering",
            ctaTitle: "Ready to Get Started?",
            ctaSubtitle: "Book a free consultation to discuss how this service applies to your business.",
            ctaButton: "Audit My Site →"
        },

        // Process Mining service page
        processMining: {
            breadcrumb: "Process Mining & Analytics",
            badge: "DISCOVER · ANALYSE · OPTIMISE",
            title: "Your processes have hidden leaks. Here's exactly where.",
            lead: "We use event log data to map precisely where time and money disappear across your operations — producing a navigable process map that shows the gap between how your business is designed and how it actually runs. Not interviews. Not assumptions. Actual event data.",
            featuresTitle: "What We Build For You",
            feat1: "Event log analysis and process discovery",
            feat2: "Bottleneck and deviation detection",
            feat3: "End-to-end process flow visualisation",
            feat4: "Conformance checking against best practices",
            feat5: "Root cause analysis and improvement recommendations",
            feat6: "KPI monitoring dashboards for operations",
            perfectForTitle: "Perfect For",
            perfectForText: "Operations leaders who have already spent on process improvements that did not hold — because they were based on interviews and gut, not event-level data. We bring the evidence.",
            resultsTitle: "Typical Results",
            result1: "20–40% reduction in process cycle times",
            result2: "Every bottleneck gets a time and cost tag attached",
            result3: "Prioritised improvement roadmap: not a presentation, an action list",
            result4: "Infrastructure mapped and documented, ready to scale",
            stackTitle: "Our stack",
            stackSubhead: "The specialist platforms and frameworks we use to discover, analyse, and optimise your processes.",
            otherServicesTitle: "Other Services",
            otherServicesSubtitle: "Our six services work together — most clients use two or more.",
            relAnalytics: "Data Analytics & BI",
            relWebDev: "Web Development",
            relAutomation: "Automation & AI",
            relStrategy: "Business Strategy",
            relDataEng: "Data Engineering",
            ctaTitle: "Ready to Get Started?",
            ctaSubtitle: "Book a free consultation to discuss how this service applies to your business.",
            ctaButton: "Find My Process Leaks →"
        },

        // Automation & AI service page
        automationAI: {
            breadcrumb: "Automation & AI Agents",
            badge: "WORKFLOWS · AI AGENTS · LLMs",
            title: "Automate the repetitive. Reclaim the strategic.",
            lead: "Manual reporting, data entry, status updates, and routine decisions are consuming your team's most expensive resource: focus. We deploy AI agents and automation workflows that return 31 hours per week — per client — to the work that actually moves the needle.",
            featuresTitle: "What We Build For You",
            feat1: "Workflow automation (Make, Zapier, n8n)",
            feat2: "AI agent design and deployment",
            feat3: "CRM and sales process automation",
            feat4: "Data pipeline and reporting automation",
            feat5: "Custom LLM / GPT integrations into existing tools",
            feat6: "Monitoring and maintenance of live automations",
            perfectForTitle: "Perfect For",
            perfectForText: "Teams where senior people are doing junior work — because no one ever built the automation layer. We build it. It runs. Your people focus on what they were actually hired to do.",
            resultsTitle: "Typical Results",
            result1: "31 hours returned per week per client — average across our automation engagements",
            result2: "Custom LLM agents built for your specific workflows, not generic chatbots",
            result3: "Full integration with your existing stack — no rip-and-replace",
            result4: "Documented and auditable: you own the logic",
            stackTitle: "Our stack",
            stackSubhead: "The platforms and frameworks we use to build workflows, AI agents, and automated pipelines.",
            otherServicesTitle: "Other Services",
            otherServicesSubtitle: "Our six services work together — most clients use two or more.",
            relAnalytics: "Data Analytics & BI",
            relWebDev: "Web Development",
            relProcessMining: "Process Mining",
            relStrategy: "Business Strategy",
            relDataEng: "Data Engineering",
            ctaTitle: "Ready to Get Started?",
            ctaSubtitle: "Book a free consultation to discuss how this service applies to your business.",
            ctaButton: "Calculate My Time Savings →"
        },

        // Business Strategy service page
        businessStrategy: {
            breadcrumb: "Business Strategy & Management",
            badge: "PLANNING · OKRs · ADVISORY",
            title: "Strategy that's actually executable.",
            lead: "Most strategic plans fail not because the thinking was wrong — but because the systems to execute them did not exist. We bridge the gap between boardroom objectives and the operational architecture required to reach them. We have delivered a €3.3M EU programme infrastructure. We do not just plan. We build.",
            featuresTitle: "What We Build For You",
            feat1: "Strategic planning workshops and roadmap design",
            feat2: "OKR and KPI framework development",
            feat3: "Financial modelling and scenario planning",
            feat4: "Business performance reviews and management reporting",
            feat5: "Growth roadmap development and prioritisation",
            feat6: "Decision-support frameworks and governance structures",
            perfectForTitle: "Perfect For",
            perfectForText: "Leadership teams with ambitious roadmaps and the operational reality that nothing is moving fast enough. We come in, map the gaps between strategy and execution, and build the systems that close them.",
            resultsTitle: "Typical Results",
            result1: "OKR frameworks connected directly to your data stack — not PowerPoint",
            result2: "€3.3M EU programme delivered: governance-grade, Brussels-approved",
            result3: "Strategic roadmaps that plug into actual technical capacity",
            result4: "Management reporting that the leadership team actually uses",
            stackTitle: "Our stack",
            stackSubhead: "The platforms, frameworks, and methodologies we use to deliver strategic clarity grounded in data.",
            otherServicesTitle: "Other Services",
            otherServicesSubtitle: "Our six services work together — most clients use two or more.",
            relAnalytics: "Data Analytics & BI",
            relWebDev: "Web Development",
            relProcessMining: "Process Mining",
            relAutomation: "Automation & AI",
            ctaTitle: "Ready to Get Started?",
            ctaSubtitle: "Book a free consultation to discuss how this service applies to your business.",
            ctaButton: "Discuss My Strategy →"
        },

        // Data Engineering service page
        dataEngineering: {
            breadcrumb: "Data Engineering & Integration",
            badge: "PIPELINES · WAREHOUSES · APIs",
            title: "The infrastructure layer everything else depends on.",
            lead: "Every dashboard, automation, and decision in your organisation runs on your data infrastructure. If it is fragmented, unreliable, or siloed — everything built on top of it is too. We design pipelines, warehouses, and integration systems that unify your stack from source to decision, and never lose a record.",
            featuresTitle: "What We Build For You",
            feat1: "Data pipeline design and build (ETL / ELT)",
            feat2: "Cloud data warehouse setup (BigQuery, Snowflake, Redshift)",
            feat3: "API and system integrations across your tech stack",
            feat4: "Data quality monitoring and alerting",
            feat5: "Source-to-destination mapping and schema design",
            feat6: "Documentation, lineage tracking and data cataloguing",
            perfectForTitle: "Perfect For",
            perfectForText: "Engineering and data teams who have inherited a patchwork of integrations that break silently — or organisations building their data architecture for the first time and refusing to do it wrong.",
            resultsTitle: "Typical Results",
            result1: "One source of truth — one number every team trusts",
            result2: "No more broken exports or manual data reconciliation at month-end",
            result3: "Monitoring, alerting, and SLA guarantees built in from day one",
            result4: "Stack-agnostic: Kafka, Spark, dbt, Airbyte, Snowflake, BigQuery — we work with what you have",
            stackTitle: "Our stack",
            stackSubhead: "The platforms and frameworks we use to build pipelines, warehouses, and integrations you can actually trust.",
            otherServicesTitle: "Other Services",
            otherServicesSubtitle: "Our six services work together — most clients use two or more.",
            relAnalytics: "Data Analytics & BI",
            relWebDev: "Web Development",
            relProcessMining: "Process Mining",
            relAutomation: "Automation & AI",
            relStrategy: "Business Strategy",
            ctaTitle: "Ready to Get Started?",
            ctaSubtitle: "Book a free consultation to discuss how this service applies to your business.",
            ctaButton: "Audit My Data Stack →"
        },

        // Blog page chrome
        blog: {
            newsletterTitle: "Operational intelligence, weekly.",
            newsletterSubtitle: "No trend-chasing. No filler. Just clear analysis on AI, data systems, and the decisions that compound — delivered directly to operators who want to think clearly.",
            subscribeButton: "Subscribe"
        }
    },

    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            pricing: "Tarifs",
            blog: "Blog",
            contact: "Contact"
        },

        // Home Page
        home: {
            // Hero Section
            heroTitle: "Transformez Vos Données en Votre Plus Grand Avantage Concurrentiel",
            heroSubtitle: "Arrêtez de vous noyer dans les tableurs. Commencez à prendre des décisions basées sur les données qui font croître votre entreprise.",
            heroCTA: "Commencer Aujourd'hui",
            heroSecondary: "Découvrir Nos Services",

            // Services Section
            servicesTitle: "Comment Nous Vous Aidons à Prospérer",
            servicesSubtitle: "Solutions d'analyse complètes conçues pour les entrepreneurs individuels et les propriétaires de petites entreprises",

            // Service Cards
            service1Title: "Analyse de Données & Business Intelligence",
            service1Desc: "Connectez vos sources de données et transformez-les en tableaux de bord, KPIs et rapports qui orientent de vraies décisions.",

            service2Title: "Développement Web & Maintenance",
            service2Desc: "Sites web rapides et optimisés pour la conversion, intégrés à votre stack analytique dès le premier jour.",

            service3Title: "Process Mining & Analytique des Processus",
            service3Desc: "Cartographiez le fonctionnement réel de votre entreprise et identifiez précisément où le temps, l'argent et les efforts sont perdus.",

            service4Title: "Automatisation & Agents IA",
            service4Desc: "Remplacez les workflows manuels répétitifs par une automatisation intelligente — des déclencheurs simples aux agents IA multi-étapes.",

            service5Title: "Stratégie d'Entreprise & Management",
            service5Desc: "Planification stratégique basée sur les données, cadres OKR, modélisation financière et reporting de gestion.",

            service6Title: "Ingénierie des Données & Intégration",
            service6Desc: "Construisez des pipelines fiables, des entrepôts propres et des systèmes connectés pour des analyses toujours précises.",

            learnMore: "En Savoir Plus →",

            // Trusted By
            trustedTitle: "Approuvé par des Organisations Leader",

            // Success Stories
            storiesTitle: "Résultats Réels, Impact Réel",
            storiesSubtitle: "Découvrez comment nous avons aidé des entreprises comme la vôtre à prendre de meilleures décisions grâce aux données",

            story1Metric: "47%",
            story1Label: "Augmentation du Chiffre d'Affaires",
            story1Desc: "\"MetricWave nous a aidés à identifier nos segments de clientèle les plus rentables. Nous avons réorienté nos dépenses marketing et vu notre chiffre d'affaires augmenter de 47% en 6 mois.\"",
            story1Author: "Sarah Chen",
            story1Company: "Fondatrice, E-commerce Boutique",

            story2Metric: "12 h/semaine",
            story2Label: "Temps Gagné",
            story2Desc: "\"Les tableaux de bord automatisés ont éliminé des heures de rapports manuels. Maintenant je passe mon temps à développer l'entreprise au lieu de me noyer dans les tableurs.\"",
            story2Author: "Marcus Rodriguez",
            story2Company: "Propriétaire, Agence de Marketing Digital",

            story3Metric: "85 000 $",
            story3Label: "Économies Annuelles",
            story3Desc: "\"L'optimisation des processus a révélé des inefficacités nous coûtant des milliers mensuellement. Les améliorations se sont rentabilisées dès le premier trimestre.\"",
            story3Author: "Jennifer Park",
            story3Company: "PDG, Société de Conseil",

            // CTA Section
            ctaTitle: "Prêt à Transformer Vos Données en Croissance?",
            ctaSubtitle: "Discutons de la façon dont MetricWave peut vous aider à prendre des décisions commerciales plus intelligentes et plus rapides.",
            ctaButton: "Planifier une Consultation"
        },

        // Footer
        footer: {
            description: "Conçu pour les opérateurs qui veulent que leurs données travaillent aussi dur qu'eux.",
            quickLinks: "Liens Rapides",
            services: "Services",
            contact: "Contact",
            email: "E-mail",
            phone: "Téléphone",
            location: "Localisation",
            locationValue: "Bruxelles, Belgique",
            connectTitle: "Connectez-vous avec Nous",
            copyright: "© 2026 MetricWave - Thrive Performance Coaching. Tous droits réservés.",
            industries: "Secteurs"
        },

        // Shared UI strings
        shared: {
            allServices: "← Tous les Services",
            allIndustries: "← Tous les Secteurs",
            howWeHelp: "Comment Nous Aidons",
            clientsTitle: "Clients & Organisations",
            otherServices: "Autres Services",
            otherServicesSubtitle: "Nos six services fonctionnent ensemble — la plupart des clients en utilisent deux ou plus.",
            whatWeBuild: "Ce Que Nous Construisons Pour Vous",
            perfectFor: "Idéal Pour",
            typicalResults: "Résultats Typiques",
            ourStack: "Notre stack",
            toolsStackBadge: "· OUTILS & STACK ·",
            viewPricing: "Voir les Tarifs",
            ctaConsult: "Réservez une consultation gratuite pour discuter de la façon dont ce service s'applique à votre entreprise.",
            ctaReady: "Prêt à Commencer?"
        },

        // Home page service cards (new text)
        homeCards: {
            s1Tag: "· TABLEAUX DE BORD · KPIs · RAPPORTS ·",
            s1Title: "Analyse de Données & BI",
            s1Desc: "Visibilité exécutive fondée sur la vérité opérationnelle — pas sur des suppositions de tableur.",
            s1Link: "Explorer l'Analyse →",
            s2Tag: "· DESIGN · CONSTRUCTION · MAINTENANCE ·",
            s2Title: "Développement Web",
            s2Desc: "La porte d'entrée de votre stack de données — 92+ Lighthouse, analytique intégrée dès le lancement.",
            s2Link: "Explorer le Développement Web →",
            s3Tag: "· DÉCOUVRIR · ANALYSER · OPTIMISER ·",
            s3Title: "Process Mining",
            s3Desc: "Cartographiez exactement où le temps et l'argent disparaissent — avec une précision au niveau des événements, pas des hypothèses.",
            s3Link: "Explorer le Process Mining →",
            s4Tag: "· WORKFLOWS · AGENTS IA · LLMs ·",
            s4Title: "Automatisation & Agents IA",
            s4Desc: "31 heures récupérées par semaine par client. Agents personnalisés construits pour votre workflow exact.",
            s4Link: "Explorer l'Automatisation →",
            s5Tag: "· PLANIFICATION · OKRs · CONSEIL ·",
            s5Title: "Stratégie d'Entreprise",
            s5Desc: "La stratégie sans systèmes n'est qu'un diaporama. Nous la rendons exécutable.",
            s5Link: "Explorer la Stratégie →",
            s6Tag: "· PIPELINES · ENTREPÔTS · APIs ·",
            s6Title: "Ingénierie des Données",
            s6Desc: "L'infrastructure dont tout le reste dépend — pipelines, entrepôts et intégrations qui ne perdent jamais un enregistrement.",
            s6Link: "Explorer l'Ingénierie des Données →"
        },

        // Home page story cards (new text)
        homeStories: {
            s1Metric: "Ventes en priorité",
            s1Label: "Stack de Données Complète Gérée",
            s1Desc: "\"Avant MetricWave, notre équipe passait trop de temps à essayer de comprendre nos données au lieu de faire ce que nous faisons le mieux — vendre. Ils ont construit toute notre infrastructure de données : pipelines, tableaux de bord, rapports KPI, tout. Maintenant, nous avons une visibilité en temps réel sur les performances sans que personne de notre côté n'ait à la gérer. Notre directrice des opérations a enfin la clarté pour prendre des décisions rapides, et notre équipe de vente est entièrement concentrée sur la croissance. C'est exactement ce dont une opération en pleine croissance a besoin.\"",
            s1AuthorName: "Angie",
            s1AuthorRole: "COO @ MTL Moving & Delivery",
            s2Metric: "0 → 1",
            s2Label: "Plateforme Construite sur des Données Solides",
            s2Desc: "\"Construire RentandChill de zéro signifiait que chaque décision précoce devait compter. MetricWave était impliqué dès le premier jour — nous aidant à valider les cas d'affaires, structurer notre architecture analytique et comprendre le comportement des utilisateurs au fur et à mesure que la plateforme grandissait. Ils ne nous ont pas simplement donné des tableaux de bord; ils nous ont aidés à réfléchir aux métriques qui comptaient vraiment et pourquoi. Cette couche stratégique a fait toute la différence.\"",
            s2AuthorName: "Archie",
            s2AuthorRole: "CEO @ RentAndChill",
            s3Metric: "18%+",
            s3Label: "Réduction des Coûts Opérationnels",
            s3Desc: "\"Nos données logistiques existaient, mais nous n'avions aucun moyen d'agir dessus. MetricWave est intervenu, a nettoyé des années de dossiers opérationnels désordonnés et a construit des modèles autour de notre routage, planification et gestion des capacités. Ce qui en est ressorti était de vrais changements implémentables — routes de livraison optimisées, meilleure planification de charge et planification qui reflétait réellement nos contraintes.\"",
            s3AuthorName: "Omar",
            s3AuthorRole: "GM @ GFS Georgia"
        },

        // Industries hub page
        industries: {
            navLabel: "Secteurs",
            logisticsTitle: "Logistique & Mobilité",
            logisticsTagline: "Efficacité des routes, intelligence client et analyse de marché pour les opérateurs qui déplacent des choses.",
            logisticsBullet1: "Analytique opérationnelle et performance de flotte",
            logisticsBullet2: "Fidélisation client et suivi des revenus",
            logisticsBullet3: "Benchmarking concurrentiel et entrée sur le marché",
            techTitle: "Technologie & SaaS",
            techTagline: "Intelligence des processus, qualité des données et BI pour les entreprises logicielles qui ont besoin de clarté opérationnelle.",
            techBullet1: "Process mining et analyse des goulots d'étranglement",
            techBullet2: "Cadres de qualité des données et conception de KPIs",
            techBullet3: "Tableaux de bord transversaux et reporting",
            aiCoachingTitle: "Produits IA & Coaching",
            aiCoachingTagline: "Analytique et automatisation pour les startups natives à l'IA et les entreprises de coaching qui fonctionnent sur des données et doivent évoluer.",
            aiCoachingBullet1: "Instrumentation des produits IA et analytique de performance",
            aiCoachingBullet2: "CRM et automatisation des workflows pour les plateformes de coaching",
            aiCoachingBullet3: "Tableaux de bord de revenus, rétention et croissance",
            govTitle: "Gouvernement & Secteur Public",
            govTagline: "Analyse basée sur des preuves et soutien aux programmes pour les institutions où la responsabilité est obligatoire.",
            govBullet1: "Administration de projets UE et rapports de subventions",
            govBullet2: "Recherche politique et synthèse de données transnationales",
            govBullet3: "Documentation stratégique pour le public",
            eduTitle: "Éducation & Recherche",
            eduTagline: "Soutien analytique et opérationnel pour les universités et les organisations axées sur la recherche.",
            eduBullet1: "Collecte et analyse de données de recherche",
            eduBullet2: "Rapports de subventions et analytique institutionnelle",
            eduBullet3: "Mesure d'impact et évaluation de programme",
            nonprofitTitle: "Organisations à But Non Lucratif & ONG",
            nonprofitTagline: "Conception opérationnelle et mesure d'impact pour les organisations à mission avec des environnements de parties prenantes complexes.",
            nonprofitBullet1: "Systèmes internes et automatisation des workflows",
            nonprofitBullet2: "Gouvernance de l'IA et soutien à la recherche politique",
            nonprofitBullet3: "Rapports aux donateurs et cadres d'impact",
            hubLink: "Comment Nous Aidons",
            ctaTitle: "Vous Travaillez dans l'un de ces Secteurs?",
            ctaSubtitle: "Parlons de ce qui est spécifique à votre environnement — et de ce que nous avons déjà résolu.",
            ctaButton: "Nous Contacter"
        },

        // Logistics industry page
        logistics: {
            overviewTitle: "La Réalité Opérationnelle dans Laquelle Nous Avons Travaillé",
            overviewText: "En logistique, chaque décision tardive a un coût physique. Les véhicules restent immobilisés, l'inefficacité des routes s'accumule et le désabonnement des clients survient avant que quiconque exécute un rapport. Nous avons travaillé avec des opérateurs régionaux établis et des plateformes de mobilité en phase de démarrage — et dans les deux cas, le problème est le même : l'entreprise génère des signaux opérationnels qu'elle ne lit pas. Nous comblons cette lacune.",
            stat1Label: "Opérateurs logistiques régionaux servis au Québec",
            stat2Label: "Missions sur des plateformes de mobilité (analyse de marché & conception de systèmes)",
            stat3Label: "Formation en Business Analytics appliquée aux données opérationnelles et de demande",
            stat4Label: "Cadres de performance personnalisés construits de zéro pour chaque client",
            howWeHelpSubtitle: "Trois domaines clés où nous livrons des résultats mesurables pour les clients logistiques et de mobilité.",
            sol1Title: "Analytique Opérationnelle & Optimisation",
            sol1Li1: "Analyse de l'efficacité des routes et du temps d'achèvement",
            sol1Li2: "Suivi de l'utilisation des flottes et des équipages",
            sol1Li3: "Benchmarking des performances et des écarts par emploi",
            sol1Li4: "Planification des capacités et prévision de la demande",
            sol1Li5: "Tableaux de bord KPI personnalisés pour les responsables opérationnels",
            sol2Title: "Intelligence Client & Revenus",
            sol2Li1: "Analyse de la valeur vie client et de la rétention",
            sol2Li2: "Identification des modèles de désabonnement",
            sol2Li3: "Stratégie de tarification et optimisation des marges",
            sol2Li4: "Performance des zones de service et modélisation d'expansion",
            sol2Li5: "Intégration des données d'avis et de satisfaction",
            sol3Title: "Analyse de Marché & Conception de Systèmes",
            sol3Li1: "Benchmarking concurrentiel et analyse des lacunes du marché",
            sol3Li2: "Exigences fonctionnelles pour les plateformes de mobilité",
            sol3Li3: "Conception d'architecture de données pour les opérateurs en démarrage",
            sol3Li4: "Cartographie de zone de service et de densité de demande",
            sol3Li5: "Intelligence de mise sur le marché pour de nouvelles lignes de service",
            clientsTitle: "Clients Avec Lesquels Nous Avons Travaillé",
            client1Title: "MTL Moving and Delivery",
            client1Desc: "Une entreprise de déménagement et livraison établie à Montréal. Nous avons construit une infrastructure de suivi des performances, analysé les données d'achèvement des travaux et développé des métriques de fidélisation des clients pour soutenir la prise de décision opérationnelle.",
            client2Title: "Dynamic Movers",
            client2Desc: "Un déménageur montréalais servant des clients au Québec et en Ontario de l'Est. Nous avons soutenu l'analyse concurrentielle du marché et le travail d'intelligence client — benchmarking des prix, métriques de qualité de service et modélisation des opportunités d'expansion.",
            client3Title: "RentAndChill.com",
            client3Desc: "La plateforme agrégateur de location de voitures de Géorgie connectant les voyageurs avec des prestataires locaux vérifiés. Nous avons soutenu l'analytique de plateforme, l'optimisation du flux de réservation et les cadres de performance.",
            client4Title: "GFS Express",
            client4Desc: "Un fournisseur de logistique et d'exécution eCommerce. Nous avons travaillé avec leur équipe d'opérations pour structurer les données d'exécution — construisant des pipelines de reporting et des cadres KPI qui donnent de la visibilité sur le flux de commandes, l'inventaire et la performance de livraison du dernier kilomètre.",
            ctaTitle: "Vos routes génèrent des données. Les utilisez-vous?",
            ctaSubtitle: "Découvrons ce que vos signaux opérationnels disent réellement — et ce qu'ils vous coûtent.",
            ctaButton: "Parlez-nous →"
        },

        // Technology industry page
        technology: {
            overviewTitle: "Où Nous Avons Opéré dans le SaaS",
            overviewP1: "Les entreprises SaaS ont les données. Il leur manque presque toujours l'architecture pour leur faire confiance. Les KPIs divergent entre les équipes. L'analytique est construite de manière réactive. Les inefficacités de processus s'accumulent silencieusement jusqu'à devenir coûteuses. Nous avons été des deux côtés — en tant qu'analyste diagnostiquant de l'extérieur, et en tant qu'opérateur de données embarqué le vivant.",
            overviewP2: "Chez Celonis, nous avons travaillé directement avec des clients d'entreprise pour mettre en évidence ces inefficacités grâce au process mining structuré — identifiant et quantifiant les pertes opérationnelles à l'aide de données de journaux d'événements. L'agrégat de nos missions a dépassé 32 M$ de pertes récupérables. Chez Singular (Flutter International), nous avons opéré à l'intérieur d'une plateforme SaaS mondiale gérant la qualité des données, l'analytique produit et le reporting inter-applications sur 15+ lignes de produits distinctes.",
            overviewP3: "Nous comprenons à la fois la vue côté conseil — diagnostiquer le paysage des processus d'un client de l'extérieur — et la vue interne de vivre à l'intérieur d'une fonction produit SaaS pendant des années. Cette double perspective est rare.",
            stat1Label: "de pertes récupérables surfacées via Celonis EMS dans les missions d'entreprise",
            stat2Label: "Lignes de produits SaaS gérées à travers les opérations de données et d'analytique",
            stat3Label: "intégré dans une fonction produit SaaS mondiale chez Flutter International",
            stat4Label: "Process mining certifié Celonis utilisant des données de journaux d'événements en production",
            howWeHelpSubtitle: "Du diagnostic des processus à l'infrastructure de reporting — un travail qui connecte vos données aux décisions.",
            sol1Title: "Process Mining & Analytique",
            sol1Li1: "Analyse de processus de bout en bout utilisant des données de journaux d'événements",
            sol1Li2: "Identification des goulots d'étranglement et vérification de conformité",
            sol1Li3: "Implémentation et configuration de Celonis EMS",
            sol1Li4: "Documentation des processus en BPMN / UML",
            sol1Li5: "Analyse des écarts et reporting des causes profondes",
            sol2Title: "Qualité des Données & Gouvernance",
            sol2Li1: "Validation des données et cadres de qualité",
            sol2Li2: "Standardisation des KPIs à travers les équipes et les outils",
            sol2Li3: "Cartographie des intégrations API et lignage des données",
            sol2Li4: "Revue de l'architecture des données CRM et produit",
            sol2Li5: "Infrastructure de reporting et documentation des données",
            sol3Title: "BI & Reporting Exécutif",
            sol3Li1: "Tableaux de bord transversaux (Tableau, Power BI)",
            sol3Li2: "Métriques de performance exécutive et tableaux de bord",
            sol3Li3: "Analytique produit et reporting d'utilisation des fonctionnalités",
            sol3Li4: "Suivi des performances de publication et de livraison",
            sol3Li5: "Pipelines de reporting personnalisés pour les parties prenantes",
            clientsTitle: "Clients & Organisations",
            client1Title: "Celonis",
            client1Desc: "Celonis est le leader mondial du process mining et de la gestion d'exécution. Nous avons réalisé des missions de conseil analytique aidant les clients d'entreprise à identifier et quantifier les inefficacités opérationnelles — mettant en évidence plus de 32 M$ de pertes récupérables grâce à l'analyse EMS structurée.",
            client2Title: "Singular (Flutter International)",
            client2Desc: "Singular est une plateforme SaaS mondiale au sein de la pile technologique de Flutter International. Nous avons été intégrés dans la fonction produit et données pendant quatre ans — gérant les opérations de données, l'analytique produit et le reporting inter-applications sur 15+ applications dans un environnement multi-juridictionnel.",
            ctaTitle: "Votre produit génère les données. Nous vous aidons à agir dessus.",
            ctaButton: "Parlez-nous →"
        },

        // AI & Coaching industry page
        aiCoaching: {
            overviewTitle: "Ce Que Nous Avons Construit dans Cet Espace",
            overviewP1: "Les entreprises natives à l'IA évoluent rapidement — et leur infrastructure de données peine rarement à suivre. Les fonctionnalités sont livrées avant que le suivi soit défini. Les modèles passent en production avant que les pipelines d'évaluation existent. Les métriques de croissance sont dispersées sur cinq outils sans source unique de vérité.",
            overviewP2: "Les entreprises de coaching font face à une version différente du même problème. Les parcours clients vivent dans des CRM que personne n'a correctement construits. L'attribution des revenus est une supposition. L'intégration est manuelle à chaque étape. Les opérateurs sont excellents dans leur métier, mais les systèmes derrière l'entreprise ne correspondent pas à l'ambition devant elle.",
            overviewP3: "Nous ne consultons pas à distance. Nous entrons dans les systèmes et construisons ce qui doit être construit — infrastructure de données pour les équipes natives à l'IA qui évoluent vite, et systèmes de gestion client pour les entreprises de coaching qui doivent évoluer sans ajouter d'effectifs.",
            stat1Label: "instrumentation produit — du suivi des événements à la surveillance des performances des modèles",
            stat2Label: "systèmes de cycle de vie client conçus et automatisés pour les opérations de coaching",
            stat3Label: "heures moyennes récupérées par semaine par client grâce à l'automatisation des workflows",
            stat4Label: "pipelines d'intégration multi-outils reliant les outils IA, CRM et stacks de reporting",
            howWeHelpSubtitle: "De la télémétrie produit à l'automatisation client — conçu pour les équipes qui évoluent vite et ont besoin que leurs données suivent le rythme.",
            sol1Title: "Intégration & Analytique des Produits IA",
            sol1Li1: "Conception et implémentation du suivi des événements pour les produits alimentés par l'IA",
            sol1Li2: "Tableaux de bord de performance des modèles et pipelines d'évaluation",
            sol1Li3: "Entonnoirs de comportement utilisateur, métriques d'activation et adoption des fonctionnalités",
            sol1Li4: "Cadres de test A/B et analytique d'expérimentation",
            sol1Li5: "Surveillance de la qualité des données pour les pipelines d'entraînement et d'inférence IA",
            sol2Title: "Opérations de Plateforme de Coaching",
            sol2Li1: "Configuration et automatisation du CRM (HubSpot, GoHighLevel, Notion)",
            sol2Li2: "Workflows d'intégration client et automatisation des formulaires",
            sol2Li3: "Planification des séances, suivi et flux de déclenchement de renouvellement",
            sol2Li4: "Suivi de la livraison du programme et reporting d'engagement",
            sol2Li5: "Systèmes de témoignages, références et engagement communautaire",
            sol3Title: "Infrastructure de Revenus & Croissance",
            sol3Li1: "Tableaux de bord de revenus avec visibilité MRR, désabonnement et LTV",
            sol3Li2: "Attribution multicanal et analytique de conversion d'entonnoir",
            sol3Li3: "Score de leads assisté par IA et gestion du pipeline",
            sol3Li4: "Automatisation des déclencheurs de rétention et d'upsell",
            sol3Li5: "Cadres de reporting pour investisseurs et parties prenantes",
            clientsTitle: "Clients & Organisations",
            client1Title: "IRAP – Projet International d'Assistance aux Réfugiés",
            client1Desc: "Le Projet International d'Assistance aux Réfugiés connecte les réfugiés et les demandeurs d'asile avec un soutien juridique dans le monde entier. Nous avons construit une infrastructure de données et de reporting pour suivre les résultats des cas et l'impact des programmes à travers leur réseau mondial.",
            client2Title: "Ambitious Impact (AIM)",
            client2Desc: "AIM forme la prochaine génération d'altruistes efficaces et de leaders à impact à travers des programmes de coaching intensifs. Nous avons conçu leurs systèmes de suivi client, d'automatisation d'intégration et de reporting de programme.",
            ctaTitle: "IA en production. Coaching à grande échelle. L'infrastructure doit suivre.",
            ctaButton: "Construire Avec Nous →"
        },

        // Government industry page
        government: {
            overviewTitle: "Ce Que Nous Avons Vu dans ce Secteur",
            overviewText: "Nous avons administré un programme UE de cybersécurité de 3,3 M€ au Conseil de l'Europe. Nous avons publié des recherches politiques à travers 3 000+ municipalités via la National League of Cities. Nous avons travaillé avec des programmes de recherche soutenus par le PNUD et la NSF. Quand nous disons que nous comprenons les normes de responsabilité du secteur public — nous le pensons au niveau institutionnel.",
            stat1Label: "Programme financé par l'UE administré au Conseil de l'Europe",
            stat2Label: "Municipalités atteintes grâce au guide politique NLC",
            stat3Label: "Engagements de parties prenantes de haut niveau coordonnés dans un programme",
            stat4Label: "Pays couverts dans la recherche politique et d'innovation transnationale",
            howWeHelpSubtitle: "Du reporting de subventions UE à la recherche politique transnationale — un travail construit pour les institutions qui exigent rigueur et responsabilité à chaque étape.",
            sol1Title: "Administration de Programmes & Subventions",
            sol1Li1: "Coordination de projets UE et reporting aux donateurs",
            sol1Li2: "Suivi budgétaire et documentation financière",
            sol1Li3: "Facilitation des réunions des parties prenantes et prise de notes",
            sol1Li4: "Reporting d'avancement et documentation des jalons",
            sol1Li5: "Coordination multi-partenaires dans les programmes multilatéraux",
            sol2Title: "Recherche Politique & Analyse des Données",
            sol2Li1: "Collecte et synthèse de données transnationales",
            sol2Li2: "Interviews des parties prenantes et recherche qualitative",
            sol2Li3: "Analyse des droits numériques et des politiques technologiques",
            sol2Li4: "Recherche documentaire et revue de littérature",
            sol2Li5: "Cadres de politique et de gouvernance de l'IA",
            sol3Title: "Conseil Stratégique & Documentation",
            sol3Li1: "Guides politiques et publications institutionnelles",
            sol3Li2: "Recommandations basées sur des preuves pour le public",
            sol3Li3: "Analyse des directives UE et évaluations d'alignement",
            sol3Li4: "Recherche sur l'innovation urbaine et la transformation numérique",
            sol3Li5: "Mesure d'impact et évaluation de programme",
            clientsTitle: "Clients & Organisations",
            client1Title: "Conseil de l'Europe",
            client1Desc: "Nous avons fourni un soutien opérationnel pour l'administration technique d'un programme de renforcement des capacités en cybersécurité financé par l'UE à 3,3 M€, coordonnant entre les organisations partenaires et facilitant 45+ engagements de parties prenantes de haut niveau.",
            client2Title: "National League of Cities",
            client2Desc: "La National League of Cities représente les gouvernements municipaux de plus de 3 000 villes américaines. Nous avons mené des recherches sur l'innovation urbaine dans 15+ pays, réalisé 50+ interviews de parties prenantes et co-rédigé un guide politique distribué à travers le réseau NLC.",
            client3Title: "PNUD & NSF",
            client3Desc: "Analytique de recherche et soutien aux programmes dans les contextes de développement international et de recherche financée par des subventions. Collecte de données, synthèse de recherche et soutien à la documentation pour les programmes affiliés au PNUD et les recherches académiques financées par la NSF.",
            ctaTitle: "Rigueur du secteur public. Nous l'avons rencontrée.",
            ctaSubtitle: "Reporting de subventions UE, coordination multi-parties prenantes, recherche politique — avec documentation complète et résultats prêts pour audit.",
            ctaButton: "Parlez à Notre Équipe →"
        },

        // Education industry page
        education: {
            overviewTitle: "Ce Que Nous Avons Vu dans ce Secteur",
            overviewText: "Les deux membres de notre équipe sont des anciens de Notre Dame. Nous avons soutenu le travail analytique à Notre Dame, au McKenna Center for Human Development et dans des programmes de recherche financés par la NSF. Cela signifie que nous abordons le travail académique et adjacent à la recherche avec soin méthodologique et une compréhension de ce dont les parties prenantes institutionnelles ont réellement besoin.",
            stat1Label: "Anciens de Notre Dame — MS Business Analytics et recherche interdisciplinaire",
            stat2Label: "Soutien analytique pour la recherche financée par la National Science Foundation",
            stat3Label: "outils statistiques appliqués dans des contextes de recherche évalués par des pairs",
            stat4Label: "Interviews de parties prenantes conduites à travers des projets de recherche et politique",
            howWeHelpSubtitle: "Analytique de qualité recherche et soutien aux programmes pour les institutions où la rigueur n'est pas optionnelle.",
            sol1Title: "Analytique de Recherche",
            sol1Li1: "Collecte, nettoyage et analyse statistique des données (R, Python, SQL)",
            sol1Li2: "Conception d'enquêtes et codage qualitatif",
            sol1Li3: "Gestion de données longitudinales et transversales",
            sol1Li4: "Synthèse de littérature et recherche documentaire",
            sol1Li5: "Visualisation et présentation des résultats de recherche",
            sol2Title: "Reporting Institutionnel",
            sol2Li1: "Documentation analytique pour les programmes financés par des subventions",
            sol2Li2: "Reporting d'avancement pour les publics institutionnels et donateurs",
            sol2Li3: "Mesure d'impact et suivi des résultats",
            sol2Li4: "Standardisation des données inter-départementaux",
            sol2Li5: "Tableaux de bord pour le suivi des programmes",
            sol3Title: "Soutien aux Programmes & Stratégie",
            sol3Li1: "Facilitation et synthèse des interviews de parties prenantes",
            sol3Li2: "Évaluation des besoins communautaires et analyse des lacunes",
            sol3Li3: "Soutien à la planification stratégique pour les centres de recherche",
            sol3Li4: "Communications académiques et institutionnelles",
            sol3Li5: "Documentation des partenariats intersectoriels",
            clientsTitle: "Clients & Organisations",
            client1Title: "Université de Notre Dame",
            client1Desc: "Les deux membres de l'équipe sont des anciens de Notre Dame. Nous avons soutenu l'assistance à la recherche et le travail analytique à travers les programmes académiques de Notre Dame — contribuant à des projets de recherche socioéconomique et de développement.",
            client2Title: "McKenna Center for Human Development",
            client2Desc: "Le McKenna Center fait avancer le développement communautaire et l'impact social à Notre Dame. Nous avons fourni un soutien analytique de recherche — notamment la collecte de données, l'analyse des besoins communautaires et la documentation — pour les programmes affiliés au McKenna Center.",
            client3Title: "Recherche Financée par la NSF",
            client3Desc: "Nous avons fourni un soutien analytique de données et de recherche pour des projets de recherche académique soutenus par la National Science Foundation — contribuant à l'analyse quantitative, la gestion des données et la documentation pour des études financées par des subventions.",
            ctaTitle: "Analytique de qualité recherche, construite par des personnes qui ont fait la recherche.",
            ctaButton: "Parlez à Notre Équipe →"
        },

        // Non-Profit industry page
        nonprofit: {
            overviewTitle: "Les Contraintes dans Lesquelles Nous Avons Travaillé",
            overviewText: "Les ONG opèrent avec des ressources limitées et des mandats étendus. Chaque heure passée à faire des rapports manuels aux donateurs est une heure non consacrée à l'impact. Nous construisons des systèmes analytiques automatisés et légers qui permettent à votre équipe de se concentrer sur la mission — tout en donnant aux donateurs, bailleurs de fonds et membres du conseil la transparence qu'ils exigent.",
            stat1Label: "Organisations à but non lucratif et de développement international servies",
            stat2Label: "Interviews de parties prenantes conduites à travers des programmes de recherche et de plaidoyer",
            stat3Label: "Soutien opérationnel et de recherche dans une organisation de gouvernance IA de pointe",
            stat4Label: "Gestion de projet certifiée CAPM appliquée aux opérations de programme ONG",
            howWeHelpSubtitle: "Des systèmes internes à la recherche sur la politique de l'IA — un travail qui renforce les capacités, pas la dépendance.",
            sol1Title: "Conception des Opérations",
            sol1Li1: "Configuration et optimisation du CRM (Salesforce, Airtable)",
            sol1Li2: "Systèmes de gestion de programme (Asana, Make)",
            sol1Li3: "Automatisation des workflows et documentation des processus",
            sol1Li4: "Évaluation des plateformes IA et stratégie d'adoption",
            sol1Li5: "Conception d'infrastructure de données organisationnelle",
            sol2Title: "Politique IA & Recherche en Gouvernance",
            sol2Li1: "Recherche sur les implications de l'IA pour les organisations de plaidoyer",
            sol2Li2: "Analyse des droits numériques et des politiques technologiques",
            sol2Li3: "L'IA dans le Sud mondial et les contextes de marchés émergents",
            sol2Li4: "Cartographie des parties prenantes et synthèse d'interviews d'experts",
            sol2Li5: "Notes de politique et publications de recherche",
            sol3Title: "Mesure d'Impact",
            sol3Li1: "Cadres de données pour le reporting aux donateurs et au conseil",
            sol3Li2: "Évaluation des programmes et suivi des résultats",
            sol3Li3: "Qualité des données Salesforce et infrastructure de reporting",
            sol3Li4: "Enquêtes auprès des parties prenantes et synthèse des retours",
            sol3Li5: "Analytique du rapport annuel et narration d'impact",
            clientsTitle: "Clients & Organisations",
            client1Title: "Projet International d'Assistance aux Réfugiés",
            client1Desc: "L'IRAP est une organisation juridique qui utilise la force du droit pour protéger et réinstaller les réfugiés dans le monde entier. Nous avons servi en tant que Responsable de Programme — dirigeant l'optimisation des systèmes, gérant les opérations de programme et dirigeant la stratégie d'adoption de l'IA de l'organisation.",
            client2Title: "Youth Legend",
            client2Desc: "Youth Legend est une organisation à mission de sport et de développement de la jeunesse. Nous avons construit un cadre de qualité des données et une infrastructure de reporting Salesforce pour soutenir le reporting aux donateurs et l'évaluation des programmes.",
            client3Title: "Ambitious Impact (AIM)",
            client3Desc: "Ambitious Impact — anciennement Charity Entrepreneurship — est une organisation de formation et d'incubation pour les parcours de carrière à fort impact, gérant des programmes phares incluant l'incubation caritative, la formation des philanthropes et le coaching de carrière pour les fondateurs.",
            ctaTitle: "Plus d'impact. Moins de charge administrative de reporting.",
            ctaSubtitle: "Nous construisons l'infrastructure de reporting pour que votre équipe puisse se concentrer sur le travail qui compte vraiment.",
            ctaButton: "Parlez à Notre Équipe →"
        },

        // Analytics BI service page
        analyticsBI: {
            breadcrumb: "Analyse de Données & BI",
            badge: "TABLEAUX DE BORD · KPIs · RAPPORTS",
            title: "Visibilité exécutive fondée sur la vérité opérationnelle.",
            lead: "Les tableaux de bord ne sont utiles que si les données en dessous sont fiables. Nous construisons des environnements analytiques qui se connectent directement à votre couche opérationnelle — donnant à la direction une étoile polaire unique et unifiée sur laquelle ils agissent le lundi matin, pas seulement qu'ils passent en revue dans la présentation hebdomadaire.",
            featuresTitle: "Ce Que Nous Construisons Pour Vous",
            feat1: "Configuration du suivi GA4, Meta Ads & canaux marketing",
            feat2: "Tableaux de bord BI personnalisés (Looker Studio, Metabase, Tableau)",
            feat3: "Analyse des revenus, de cohorte & d'entonnoir",
            feat4: "Segmentation client & modélisation de la valeur vie",
            feat5: "Cadres KPI alignés sur vos objectifs de croissance",
            feat6: "Rapports d'insight automatisés livrés selon votre calendrier",
            perfectForTitle: "Idéal Pour",
            perfectForText: "Les équipes opérationnelles et de direction qui ont perdu confiance dans leurs tableaux de bord — ou qui n'ont jamais eu de tableaux de bord dignes de confiance.",
            resultsTitle: "Résultats Typiques",
            result1: "Un chiffre de confiance dans chaque équipe — plus de versions contradictoires",
            result2: "Tableaux de bord opérationnels en jours, pas en mois",
            result3: "10 à 15 heures par semaine récupérées du reporting manuel",
            result4: "La direction prend des décisions sur des données en lesquelles elle croit vraiment",
            stackTitle: "Notre stack",
            stackSubhead: "Les plateformes et cadres que nous utilisons pour livrer l'analytique de données et la business intelligence.",
            otherServicesTitle: "Autres Services",
            otherServicesSubtitle: "Nos six services fonctionnent ensemble — la plupart des clients en utilisent deux ou plus.",
            relWebDev: "Développement Web",
            relProcessMining: "Process Mining",
            relAutomation: "Automatisation & IA",
            relStrategy: "Stratégie d'Entreprise",
            relDataEng: "Ingénierie des Données",
            ctaTitle: "Prêt à Commencer?",
            ctaSubtitle: "Réservez une consultation gratuite pour discuter de la façon dont ce service s'applique à votre entreprise.",
            ctaButton: "Commencer avec un Audit de Stack →"
        },

        // Web Development service page
        webDev: {
            breadcrumb: "Développement Web & Maintenance",
            badge: "DESIGN · CONSTRUCTION · MAINTENANCE",
            title: "Un site web qui rapporte.",
            lead: "Nous concevons et construisons des plateformes haute performance câblées directement dans votre stack analytique dès le premier jour — pas des sites brochure, mais des interfaces opérationnelles qui s'intègrent à vos workflows, suivent vos KPIs et convertissent votre trafic en conversations de revenus.",
            featuresTitle: "Ce Que Nous Construisons Pour Vous",
            feat1: "Conception et développement de site web personnalisé",
            feat2: "Optimisation des performances (Core Web Vitals, vitesse de page)",
            feat3: "Intégration analytique et de suivi (GA4, pixels, événements)",
            feat4: "Base technique SEO et données structurées",
            feat5: "Mises à jour de contenu et maintenance continues",
            feat6: "Configuration d'hébergement, déploiement et surveillance du temps de fonctionnement",
            perfectForTitle: "Idéal Pour",
            perfectForText: "Les équipes dont le site actuel est un passif — lent, non suivi ou déconnecté du reste de leur stack. Si vous ne pouvez pas voir qui a visité, ce qu'ils ont fait ou pourquoi ils sont partis, cela vous coûte.",
            resultsTitle: "Résultats Typiques",
            result1: "Score Lighthouse 92+ — référence de l'industrie, pas une aspiration",
            result2: "Analytique complète du premier clic à la décision de conversion",
            result3: "Zéro surcharge de maintenance pour votre équipe — nous nous en occupons",
            result4: "Chaque formulaire, bouton et entonnoir suivi dès le premier jour",
            stackTitle: "Notre stack",
            stackSubhead: "Les plateformes et cadres que nous utilisons pour concevoir, construire et livrer des sites web prêts pour la production.",
            otherServicesTitle: "Autres Services",
            otherServicesSubtitle: "Nos six services fonctionnent ensemble — la plupart des clients en utilisent deux ou plus.",
            relAnalytics: "Analyse de Données & BI",
            relProcessMining: "Process Mining",
            relAutomation: "Automatisation & IA",
            relStrategy: "Stratégie d'Entreprise",
            relDataEng: "Ingénierie des Données",
            ctaTitle: "Prêt à Commencer?",
            ctaSubtitle: "Réservez une consultation gratuite pour discuter de la façon dont ce service s'applique à votre entreprise.",
            ctaButton: "Auditer Mon Site →"
        },

        // Process Mining service page
        processMining: {
            breadcrumb: "Process Mining & Analytique",
            badge: "DÉCOUVRIR · ANALYSER · OPTIMISER",
            title: "Vos processus ont des fuites cachées. Voici exactement où.",
            lead: "Nous utilisons les données de journaux d'événements pour cartographier précisément où le temps et l'argent disparaissent dans vos opérations — produisant une carte de processus navigable qui montre l'écart entre la façon dont votre entreprise est conçue et comment elle fonctionne réellement. Pas des interviews. Pas des hypothèses. De vraies données d'événements.",
            featuresTitle: "Ce Que Nous Construisons Pour Vous",
            feat1: "Analyse des journaux d'événements et découverte des processus",
            feat2: "Détection des goulots d'étranglement et des écarts",
            feat3: "Visualisation du flux de processus de bout en bout",
            feat4: "Vérification de conformité par rapport aux meilleures pratiques",
            feat5: "Analyse des causes profondes et recommandations d'amélioration",
            feat6: "Tableaux de bord de surveillance KPI pour les opérations",
            perfectForTitle: "Idéal Pour",
            perfectForText: "Les responsables opérationnels qui ont déjà dépensé pour des améliorations de processus qui n'ont pas tenu — parce qu'elles étaient basées sur des interviews et des intuitions, pas sur des données au niveau des événements. Nous apportons les preuves.",
            resultsTitle: "Résultats Typiques",
            result1: "Réduction de 20 à 40% des temps de cycle de processus",
            result2: "Chaque goulot d'étranglement reçoit une étiquette de temps et de coût",
            result3: "Feuille de route d'amélioration priorisée : pas une présentation, une liste d'actions",
            result4: "Infrastructure cartographiée et documentée, prête à évoluer",
            stackTitle: "Notre stack",
            stackSubhead: "Les plateformes spécialisées et cadres que nous utilisons pour découvrir, analyser et optimiser vos processus.",
            otherServicesTitle: "Autres Services",
            otherServicesSubtitle: "Nos six services fonctionnent ensemble — la plupart des clients en utilisent deux ou plus.",
            relAnalytics: "Analyse de Données & BI",
            relWebDev: "Développement Web",
            relAutomation: "Automatisation & IA",
            relStrategy: "Stratégie d'Entreprise",
            relDataEng: "Ingénierie des Données",
            ctaTitle: "Prêt à Commencer?",
            ctaSubtitle: "Réservez une consultation gratuite pour discuter de la façon dont ce service s'applique à votre entreprise.",
            ctaButton: "Trouver Mes Fuites de Processus →"
        },

        // Automation & AI service page
        automationAI: {
            breadcrumb: "Automatisation & Agents IA",
            badge: "WORKFLOWS · AGENTS IA · LLMs",
            title: "Automatisez le répétitif. Récupérez le stratégique.",
            lead: "Le reporting manuel, la saisie de données, les mises à jour de statut et les décisions routinières consomment la ressource la plus précieuse de votre équipe : la concentration. Nous déployons des agents IA et des workflows d'automatisation qui retournent 31 heures par semaine — par client — au travail qui fait vraiment avancer les choses.",
            featuresTitle: "Ce Que Nous Construisons Pour Vous",
            feat1: "Automatisation des workflows (Make, Zapier, n8n)",
            feat2: "Conception et déploiement d'agents IA",
            feat3: "Automatisation des processus CRM et de vente",
            feat4: "Automatisation des pipelines de données et de reporting",
            feat5: "Intégrations LLM / GPT personnalisées dans les outils existants",
            feat6: "Surveillance et maintenance des automatisations en direct",
            perfectForTitle: "Idéal Pour",
            perfectForText: "Les équipes où des personnes senior font un travail junior — parce que personne n'a jamais construit la couche d'automatisation. Nous la construisons. Elle fonctionne. Vos personnes se concentrent sur ce pour quoi elles ont été réellement recrutées.",
            resultsTitle: "Résultats Typiques",
            result1: "31 heures retournées par semaine par client — moyenne sur nos missions d'automatisation",
            result2: "Agents LLM personnalisés construits pour vos workflows spécifiques, pas des chatbots génériques",
            result3: "Intégration complète avec votre stack existant — pas de remplacement radical",
            result4: "Documenté et auditable : vous possédez la logique",
            stackTitle: "Notre stack",
            stackSubhead: "Les plateformes et cadres que nous utilisons pour construire des workflows, des agents IA et des pipelines automatisés.",
            otherServicesTitle: "Autres Services",
            otherServicesSubtitle: "Nos six services fonctionnent ensemble — la plupart des clients en utilisent deux ou plus.",
            relAnalytics: "Analyse de Données & BI",
            relWebDev: "Développement Web",
            relProcessMining: "Process Mining",
            relStrategy: "Stratégie d'Entreprise",
            relDataEng: "Ingénierie des Données",
            ctaTitle: "Prêt à Commencer?",
            ctaSubtitle: "Réservez une consultation gratuite pour discuter de la façon dont ce service s'applique à votre entreprise.",
            ctaButton: "Calculer Mes Économies de Temps →"
        },

        // Business Strategy service page
        businessStrategy: {
            breadcrumb: "Stratégie d'Entreprise & Management",
            badge: "PLANIFICATION · OKRs · CONSEIL",
            title: "Une stratégie réellement exécutable.",
            lead: "La plupart des plans stratégiques échouent non pas parce que la réflexion était mauvaise — mais parce que les systèmes pour les exécuter n'existaient pas. Nous comblons le fossé entre les objectifs de salle de conseil et l'architecture opérationnelle nécessaire pour les atteindre. Nous avons livré une infrastructure de programme UE de 3,3 M€. Nous ne planifions pas simplement. Nous construisons.",
            featuresTitle: "Ce Que Nous Construisons Pour Vous",
            feat1: "Ateliers de planification stratégique et conception de feuille de route",
            feat2: "Développement de cadres OKR et KPI",
            feat3: "Modélisation financière et planification de scénarios",
            feat4: "Revues de performance commerciale et reporting de gestion",
            feat5: "Développement de feuille de route de croissance et priorisation",
            feat6: "Cadres de soutien à la décision et structures de gouvernance",
            perfectForTitle: "Idéal Pour",
            perfectForText: "Les équipes de direction avec des feuilles de route ambitieuses et la réalité opérationnelle que rien n'avance assez vite. Nous intervenons, cartographions les lacunes entre stratégie et exécution, et construisons les systèmes qui les comblent.",
            resultsTitle: "Résultats Typiques",
            result1: "Cadres OKR connectés directement à votre stack de données — pas PowerPoint",
            result2: "Programme UE de 3,3 M€ livré : niveau gouvernance, approuvé à Bruxelles",
            result3: "Feuilles de route stratégiques qui se branchent sur la capacité technique réelle",
            result4: "Reporting de gestion que l'équipe de direction utilise réellement",
            stackTitle: "Notre stack",
            stackSubhead: "Les plateformes, cadres et méthodologies que nous utilisons pour livrer la clarté stratégique ancrée dans les données.",
            otherServicesTitle: "Autres Services",
            otherServicesSubtitle: "Nos six services fonctionnent ensemble — la plupart des clients en utilisent deux ou plus.",
            relAnalytics: "Analyse de Données & BI",
            relWebDev: "Développement Web",
            relProcessMining: "Process Mining",
            relAutomation: "Automatisation & IA",
            ctaTitle: "Prêt à Commencer?",
            ctaSubtitle: "Réservez une consultation gratuite pour discuter de la façon dont ce service s'applique à votre entreprise.",
            ctaButton: "Discuter de Ma Stratégie →"
        },

        // Data Engineering service page
        dataEngineering: {
            breadcrumb: "Ingénierie des Données & Intégration",
            badge: "PIPELINES · ENTREPÔTS · APIs",
            title: "La couche d'infrastructure dont tout le reste dépend.",
            lead: "Chaque tableau de bord, automatisation et décision dans votre organisation fonctionne sur votre infrastructure de données. Si elle est fragmentée, peu fiable ou cloisonnée — tout ce qui est construit dessus l'est aussi. Nous concevons des pipelines, des entrepôts et des systèmes d'intégration qui unifient votre stack de la source à la décision, et ne perdent jamais un enregistrement.",
            featuresTitle: "Ce Que Nous Construisons Pour Vous",
            feat1: "Conception et construction de pipelines de données (ETL / ELT)",
            feat2: "Configuration d'entrepôt de données cloud (BigQuery, Snowflake, Redshift)",
            feat3: "Intégrations API et système à travers votre stack technologique",
            feat4: "Surveillance de la qualité des données et alertes",
            feat5: "Cartographie source-destination et conception de schéma",
            feat6: "Documentation, suivi de lignage et catalogage des données",
            perfectForTitle: "Idéal Pour",
            perfectForText: "Les équipes d'ingénierie et de données qui ont hérité d'un patchwork d'intégrations qui échouent silencieusement — ou les organisations construisant leur architecture de données pour la première fois et refusant de le faire mal.",
            resultsTitle: "Résultats Typiques",
            result1: "Une source de vérité — un chiffre en lequel chaque équipe a confiance",
            result2: "Plus d'exports cassés ou de réconciliation manuelle des données en fin de mois",
            result3: "Surveillance, alertes et garanties SLA intégrés dès le premier jour",
            result4: "Agnostique au stack : Kafka, Spark, dbt, Airbyte, Snowflake, BigQuery — nous travaillons avec ce que vous avez",
            stackTitle: "Notre stack",
            stackSubhead: "Les plateformes et cadres que nous utilisons pour construire des pipelines, des entrepôts et des intégrations en lesquels vous pouvez réellement avoir confiance.",
            otherServicesTitle: "Autres Services",
            otherServicesSubtitle: "Nos six services fonctionnent ensemble — la plupart des clients en utilisent deux ou plus.",
            relAnalytics: "Analyse de Données & BI",
            relWebDev: "Développement Web",
            relProcessMining: "Process Mining",
            relAutomation: "Automatisation & IA",
            relStrategy: "Stratégie d'Entreprise",
            ctaTitle: "Prêt à Commencer?",
            ctaSubtitle: "Réservez une consultation gratuite pour discuter de la façon dont ce service s'applique à votre entreprise.",
            ctaButton: "Auditer Ma Stack de Données →"
        },

        // Blog page chrome
        blog: {
            newsletterTitle: "Intelligence opérationnelle, chaque semaine.",
            newsletterSubtitle: "Pas de tendances superficielles. Pas de remplissage. Juste une analyse claire sur l'IA, les systèmes de données et les décisions qui s'accumulent — livrée directement aux opérateurs qui veulent penser clairement.",
            subscribeButton: "S'abonner"
        }
    },

    nl: {
        // Navigation
        nav: {
            home: "Home",
            about: "Over Ons",
            services: "Diensten",
            pricing: "Prijzen",
            blog: "Blog",
            contact: "Contact"
        },

        // Home Page
        home: {
            // Hero Section
            heroTitle: "Verander Uw Data in Uw Grootste Concurrentievoordeel",
            heroSubtitle: "Stop met verdrinken in spreadsheets. Begin met het nemen van zelfverzekerde, datagedreven beslissingen die uw bedrijf laten groeien.",
            heroCTA: "Begin Vandaag",
            heroSecondary: "Ontdek Onze Diensten",

            // Services Section
            servicesTitle: "Hoe Wij U Helpen Floreren",
            servicesSubtitle: "Uitgebreide analytics-oplossingen ontworpen voor solo-ondernemers en eigenaren van kleine bedrijven",

            // Service Cards
            service1Title: "Data-analyse & Business Intelligence",
            service1Desc: "Verbind uw gegevensbronnen en zet ze om in dashboards, KPI's en inzichtrapportages die echte beslissingen sturen.",

            service2Title: "Webontwikkeling & Onderhoud",
            service2Desc: "Snelle, conversie-geoptimaliseerde websites, gebouwd en geïntegreerd met uw analytische stack vanaf dag één.",

            service3Title: "Process Mining & Analytics",
            service3Desc: "Breng in kaart hoe uw bedrijf echt opereert en identificeer precies waar tijd, geld en moeite verloren gaan.",

            service4Title: "Automatisering & AI-agenten",
            service4Desc: "Vervang repetitieve handmatige workflows door intelligente automatisering — van eenvoudige triggers tot multi-stap AI-agenten.",

            service5Title: "Bedrijfsstrategie & Management",
            service5Desc: "Datagestuurde strategische planning, OKR-kaders, financiële modellering en managementrapportage.",

            service6Title: "Data Engineering & Integratie",
            service6Desc: "Bouw betrouwbare pipelines, schone datawarehouses en verbonden systemen voor altijd nauwkeurige analyses.",

            learnMore: "Meer Informatie →",

            // Trusted By
            trustedTitle: "Vertrouwd door Toonaangevende Organisaties",

            // Success Stories
            storiesTitle: "Echte Resultaten, Echte Impact",
            storiesSubtitle: "Zie hoe we bedrijven zoals de uwe hebben geholpen betere beslissingen te nemen met data",

            story1Metric: "47%",
            story1Label: "Omzetstijging",
            story1Desc: "\"MetricWave hielp ons onze meest winstgevende klantsegmenten te identificeren. We hebben onze marketinguitgaven aangepast en zagen de omzet met 47% stijgen in 6 maanden.\"",
            story1Author: "Sarah Chen",
            story1Company: "Oprichter, Boetiek E-commerce",

            story2Metric: "12 uur/week",
            story2Label: "Tijd Bespaard",
            story2Desc: "\"De geautomatiseerde dashboards elimineerden uren handmatige rapportage. Nu besteed ik mijn tijd aan het laten groeien van het bedrijf in plaats van verdrinken in spreadsheets.\"",
            story2Author: "Marcus Rodriguez",
            story2Company: "Eigenaar, Digital Marketing Bureau",

            story3Metric: "€85K",
            story3Label: "Jaarlijkse Besparingen",
            story3Desc: "\"Procesoptimalisatie onthulde inefficiënties die ons maandelijks duizenden kostten. De verbeteringen betaalden zichzelf terug in het eerste kwartaal.\"",
            story3Author: "Jennifer Park",
            story3Company: "CEO, Adviesbureau",

            // CTA Section
            ctaTitle: "Klaar om Uw Data in Groei te Veranderen?",
            ctaSubtitle: "Laten we bespreken hoe MetricWave u kan helpen slimmere, snellere zakelijke beslissingen te nemen.",
            ctaButton: "Plan een Consultatie"
        },

        // Footer
        footer: {
            description: "Kleine bedrijven voorzien van data-gedreven inzichten en analytics expertise.",
            quickLinks: "Snelle Links",
            services: "Diensten",
            contact: "Contact",
            email: "E-mail",
            phone: "Telefoon",
            location: "Locatie",
            locationValue: "Brussel, België",
            connectTitle: "Verbind met Ons",
            copyright: "© 2026 MetricWave - Thrive Performance Coaching. Alle rechten voorbehouden."
        }
    },

    ka: {
        // Navigation
        nav: {
            home: "მთავარი",
            about: "ჩვენ შესახებ",
            services: "სერვისები",
            pricing: "ფასები",
            blog: "ბლოგი",
            contact: "კონტაქტი"
        },

        // Home Page
        home: {
            // Hero Section
            heroTitle: "გადაქმენით თქვენი მონაცემები თქვენს უდიდეს კონკურენტულ უპირატესობად",
            heroSubtitle: "შეწყვიტეთ გადატვირთვა ელცხრილებით. დაიწყეთ თავდაჯერებული, მონაცემებზე დაფუძნებული გადაწყვეტილებების მიღება, რომლებიც ზრდის თქვენს ბიზნესს.",
            heroCTA: "დაწყება დღეს",
            heroSecondary: "გაეცანით ჩვენს სერვისებს",

            // Services Section
            servicesTitle: "როგორ დაგეხმარებით წარმატების მიღწევაში",
            servicesSubtitle: "ყოვლისმომცველი ანალიტიკური გადაწყვეტილებები, შექმნილი სოლო მეწარმეებისა და მცირე ბიზნესის მფლობელებისთვის",

            // Service Cards
            service1Title: "მონაცემთა ანალიტიკა & ბიზნეს ინტელექტი",
            service1Desc: "დაუკავშირეთ თქვენი მონაცემთა წყაროები და გარდაქმენით ისინი დაფებად, KPI-ებად და ანალიტიკურ ანგარიშებად.",

            service2Title: "ვებ დეველოპმენტი & მოვლა",
            service2Desc: "სწრაფი, კონვერსიაზე ოპტიმიზებული ვებ-საიტები, ინტეგრირებული თქვენი ანალიტიკური სტეკთან პირველი დღიდანვე.",

            service3Title: "პროცესების მაინინგი & ანალიტიკა",
            service3Desc: "დაარუქეთ თქვენი ბიზნესის რეალური ოპერაციები და გამოავლინეთ, სად იკარგება დრო, ფული და ძალისხმევა.",

            service4Title: "ავტომატიზაცია & AI აგენტები",
            service4Desc: "შეცვალეთ განმეორებადი სამუშაო პროცესები ინტელექტური ავტომატიზაციით — მარტივი ტრიგერებიდან AI აგენტებამდე.",

            service5Title: "ბიზნეს სტრატეგია & მენეჯმენტი",
            service5Desc: "მონაცემებზე დაფუძნებული სტრატეგიული დაგეგმვა, OKR ჩარჩოები, ფინანსური მოდელირება და მენეჯმენტის ანგარიშგება.",

            service6Title: "მონაცემთა ინჟინერია & ინტეგრაცია",
            service6Desc: "ააშენეთ საიმედო მილსადენები, სუფთა საცავები და დაკავშირებული სისტემები ზუსტი ანალიტიკისთვის.",

            learnMore: "გაიგეთ მეტი →",

            // Trusted By
            trustedTitle: "ჩვენ გვენდობიან წამყვანი ორგანიზაციები",

            // Success Stories
            storiesTitle: "რეალური შედეგები, რეალური გავლენა",
            storiesSubtitle: "ნახეთ, როგორ დავეხმარეთ თქვენსავით ბიზნესებს უკეთესი გადაწყვეტილებების მიღებაში მონაცემების საშუალებით",

            story1Metric: "47%",
            story1Label: "შემოსავლის ზრდა",
            story1Desc: "\"MetricWave-მ დაგვეხმარა ჩვენი ყველაზე მომგებიანი მომხმარებელთა სეგმენტების იდენტიფიცირებაში. გადავანაწილეთ მარკეტინგული ხარჯები და შემოსავალი 47%-ით გაიზარდა 6 თვეში.\"",
            story1Author: "სარა ჩენი",
            story1Company: "დამფუძნებელი, ბუტიკ ელექტრონული კომერცია",

            story2Metric: "12 სთ/კვირა",
            story2Label: "დაზოგილი დრო",
            story2Desc: "\"ავტომატიზებულმა დაფებმა აღმოფხვრა რამდენიმე საათი ხელით რეპორტინგი. ახლა დროს ვხარჯავ ბიზნესის ზრდაზე ელცხრილებში დახრჩობის ნაცვლად.\"",
            story2Author: "მარკუს როდრიგესი",
            story2Company: "მფლობელი, ციფრული მარკეტინგის სააგენტო",

            story3Metric: "$85K",
            story3Label: "წლიური დანაზოგი",
            story3Desc: "\"პროცესების ოპტიმიზაციამ გამოავლინა არაეფექტურობები, რომლებიც თვიურად ათასობით გვიჯდებოდა. გაუმჯობესებები თავს დაიფარა პირველივე კვარტალში.\"",
            story3Author: "ჯენიფერ პარკი",
            story3Company: "CEO, საკონსულტაციო ფირმა",

            // CTA Section
            ctaTitle: "მზად ხართ, რომ გარდაქმნათ თქვენი მონაცემები ზრდად?",
            ctaSubtitle: "განვიხილოთ, როგორ შეუძლია MetricWave-ს დაგეხმაროთ უფრო ჭკვიანი, უფრო სწრაფი ბიზნეს გადაწყვეტილებების მიღებაში.",
            ctaButton: "დაგეგმეთ კონსულტაცია"
        },

        // Footer
        footer: {
            description: "მცირე ბიზნესების გაძლიერება მონაცემებზე დაფუძნებული ინფორმაციითა და ანალიტიკური ექსპერტიზით.",
            quickLinks: "სწრაფი ბმულები",
            services: "სერვისები",
            contact: "კონტაქტი",
            email: "ელ-ფოსტა",
            phone: "ტელეფონი",
            location: "მდებარეობა",
            locationValue: "ბრიუსელი, ბელგია",
            connectTitle: "დაუკავშირდით ჩვენ",
            copyright: "© 2026 MetricWave - Thrive Performance Coaching. ყველა უფლება დაცულია."
        }
    },

    ru: {
        // Navigation
        nav: {
            home: "Главная",
            about: "О нас",
            services: "Услуги",
            pricing: "Цены",
            blog: "Блог",
            contact: "Контакты"
        },

        // Home Page
        home: {
            // Hero Section
            heroTitle: "Превратите Ваши Данные в Ваше Величайшее Конкурентное Преимущество",
            heroSubtitle: "Перестаньте тонуть в таблицах. Начните принимать уверенные, основанные на данных решения, которые развивают ваш бизнес.",
            heroCTA: "Начать Сегодня",
            heroSecondary: "Изучить Наши Услуги",

            // Services Section
            servicesTitle: "Как Мы Помогаем Вам Процветать",
            servicesSubtitle: "Комплексные аналитические решения, разработанные для индивидуальных предпринимателей и владельцев малого бизнеса",

            // Service Cards
            service1Title: "Аналитика данных & Бизнес-интеллект",
            service1Desc: "Соедините ваши источники данных и преобразуйте их в дашборды, KPI и аналитические отчёты для принятия решений.",

            service2Title: "Веб-разработка & Техподдержка",
            service2Desc: "Быстрые, оптимизированные для конверсии сайты, интегрированные с вашим аналитическим стеком с первого дня.",

            service3Title: "Процессный майнинг & Аналитика",
            service3Desc: "Составьте карту реальной работы вашего бизнеса и определите, где теряются время, деньги и усилия.",

            service4Title: "Автоматизация & AI-агенты",
            service4Desc: "Замените повторяющиеся ручные процессы интеллектуальной автоматизацией — от простых триггеров до AI-агентов.",

            service5Title: "Бизнес-стратегия & Управление",
            service5Desc: "Стратегическое планирование на основе данных, OKR-фреймворки, финансовое моделирование и управленческая отчётность.",

            service6Title: "Инжиниринг данных & Интеграция",
            service6Desc: "Создайте надёжные пайплайны, чистые хранилища и связанные системы для точной аналитики.",

            learnMore: "Узнать больше →",

            // Trusted By
            trustedTitle: "Нам Доверяют Ведущие Организации",

            // Success Stories
            storiesTitle: "Реальные Результаты, Реальное Влияние",
            storiesSubtitle: "Узнайте, как мы помогли таким бизнесам, как ваш, принимать лучшие решения с помощью данных",

            story1Metric: "47%",
            story1Label: "Рост Дохода",
            story1Desc: "\"MetricWave помог нам определить наши самые прибыльные сегменты клиентов. Мы перенаправили маркетинговые расходы и увидели рост дохода на 47% всего за 6 месяцев.\"",
            story1Author: "Сара Чен",
            story1Company: "Основатель, Бутик Электронная Коммерция",

            story2Metric: "12 ч/неделю",
            story2Label: "Экономия Времени",
            story2Desc: "\"Автоматизированные дашборды устранили часы ручной отчетности. Теперь я провожу время, развивая бизнес, вместо того чтобы тонуть в таблицах.\"",
            story2Author: "Маркус Родригес",
            story2Company: "Владелец, Агентство Цифрового Маркетинга",

            story3Metric: "$85K",
            story3Label: "Годовая Экономия",
            story3Desc: "\"Оптимизация процессов выявила неэффективности, стоившие нам тысячи ежемесячно. Улучшения окупились в первом же квартале.\"",
            story3Author: "Дженнифер Парк",
            story3Company: "CEO, Консалтинговая Фирма",

            // CTA Section
            ctaTitle: "Готовы Превратить Ваши Данные в Рост?",
            ctaSubtitle: "Давайте обсудим, как MetricWave может помочь вам принимать более умные и быстрые бизнес-решения.",
            ctaButton: "Запланировать Консультацию"
        },

        // Footer
        footer: {
            description: "Даем малым предприятиям возможность получать инсайты на основе данных и аналитическую экспертизу.",
            quickLinks: "Быстрые Ссылки",
            services: "Услуги",
            contact: "Контакты",
            email: "Эл. почта",
            phone: "Телефон",
            location: "Местоположение",
            locationValue: "Брюссель, Бельгия",
            connectTitle: "Свяжитесь с Нами",
            copyright: "© 2026 MetricWave - Thrive Performance Coaching. Все права защищены."
        }
    }
};
