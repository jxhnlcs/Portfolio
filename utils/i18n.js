import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {

        // Nav

        "about": "About",
        "projects": "Projects",
        "code": "Code",
        "my_networks": "My Networks",
        "theme_toggle": "Change Theme",

        // Home

        "job_title": "Software Developer",
        "download_cv": "Download CV",
        "expand_photo": "Click to expand the photo",
        "back_to_top": "Back to top",
        "sections": "Sections",
        "technologies": "Technologies: Vue, Angular, React, Next, Nuxt, Node, Express!",
        "summary": "Summary",
        "bio_description":
          "I am a Full Stack Software Developer with over 3 years of experience building web applications, enterprise systems, and digital products. I currently work at Capgemini on a project for Bradesco, mainly with Java, Spring Boot, Angular, microservices, and micro frontends, contributing to a strategic customer service platform.\n\n" +
          "Throughout my career I have worked in different contexts, from enterprise systems and banking applications to digital products and custom software, using technologies such as Java, Spring Boot, Angular, TypeScript, Node.js, Vue.js, and PHP/Symfony. I also have experience with DDD, Hexagonal Architecture, Clean Architecture, CI/CD, REST APIs, messaging, and event-driven development.\n\n" +
          "Beyond development, I have acted as a technical lead for Front-End teams, organizing code, defining technical approaches, reviewing implementations, and solving complex problems. I am also Co-Founder of Lamp, where I take part in the entire development cycle of custom solutions for companies, from requirements gathering and architecture to development, infrastructure, and delivery.\n\n" +
          "My goal is to keep evolving as a software engineer, deepening my knowledge in architecture, distributed systems, cloud, and artificial intelligence, building scalable, sustainable, and high-impact solutions.",
        "my_projects": "My Projects",
        "bio": "Timeline",
        "current": "Now ",
        "job_current": "Front-End Team Lead & Full Stack Developer at WeMind",
        "job_2025": "Front-End Developer at Rekomendo",
        "job_2024": "Front-End Developer at WeMind",
        "job_2023": "Full Stack Developer at Grupo São Roque",
        "education_university": "Started a degree in Systems Analysis and Development at UNIFAN",
        "education_senai": "Completed a technical Software Development course at SENAI",
        "education_technical": "Started a technical course in Software Development at SENAI",
        "hobbies": "Anime, Music, Games, Piano, Manga, and Cats",
        "my_networks": "My Networks",

        "job_capgemini_title": "Full Stack Java/Angular Developer",
        "job_capgemini_company": "Capgemini",
        "job_capgemini_period": "Apr 2025 - Present",
        "job_capgemini_location": "São Paulo, Brazil · Remote",
        "job_capgemini_project": "Project: Bradesco",
        "job_capgemini_description":
          "At Capgemini, I work as a Full Stack Java/Angular Developer on a project for Bradesco, contributing to a strategic customer service platform focused on interaction history, scalability, performance, and security.\n\n" +
          "I build systems and features from scratch, following corporate standards and predefined templates, and integrate services within an architecture based on microservices and micro frontends. I also take part in technical decisions and contribute to applying software engineering best practices.\n\n" +
          "On the development side, I work with Java and Spring Boot on the backend and Angular on the frontend, using Native Federation to implement the micro frontend architecture. I also apply Domain-Driven Design (DDD), Hexagonal Architecture, and unit testing to ensure quality, organization, and reliability.\n\n" +
          "I have a leading role in maintaining and evolving my squad's micro frontend, being mainly responsible for updating dependencies and versions, aligning with the application shell, evolving the architecture, implementing new features, and keeping the micro frontend scalable.\n\n" +
          "I have also become a technical reference within the squad for micro frontend topics, solving problems and incidents and helping the team keep its versions and new features up to date with the other squads.\n\n" +
          "The project uses Apache Kafka for asynchronous messaging, MongoDB as the main database, APIM and Axway for API management, and MSAL/Azure Active Directory for authentication and authorization. I also work with Git, CI/CD pipelines, and agile methodologies such as Scrum, using Jira to organize deliveries.",
        "job_capgemini_skills": "Java, Spring Boot, Angular, TypeScript, Native Federation, Microservices, Micro Frontends, DDD, Hexagonal Architecture, Apache Kafka, MongoDB, REST APIs, APIM, Axway, MSAL, Azure AD, Git, CI/CD, Jira, Scrum",
        "job_capgemini": "Full Stack Java/Angular Developer at Capgemini",


        // 404

        "not_found_title": "404 - Not Found",
        "not_found_message": "The page you are looking for was not found.",
        "return_home": "Return to Home",

        // Projects

        "projects_title": "Projects",
        "projects_jobs": "Jobs",
        "projects_personal": "Personal",
        "projects_collaborations": "Collaborations",
        "projects_planejar_desc": "System that automates tenant billing with boleto generation and WhatsApp delivery via Meta Business.",
        "projects_rekomendo_desc": "App to help find service providers in your region.",
        "projects_tecer_desc": "Management system and app for Tecer Consulting company.",
        "projects_acougue_desc": "Price display system for butcher shops at São Roque branches.",
        "projects_doopets_desc": "A pet shop management system developed as a final project for the SENAI Software Development course.",
        "projects_prosel_desc": "A system to facilitate and optimize the work of stretcher bearers responsible for transporting patients in a hospital.",
        "projects_buzzu_desc": "Public Transport App.",
        "projects_jloads_desc": "Open-source desktop app for downloading media through a local browser-based interface.",
        "projects_jlvendas_desc": "Sales, cash, goals, and bonus management system running in production at retail clothing stores.",

        // Work

        "projects": "Projects",

        // Footer

        "footer_rights": "All Rights Reserved.",

        // Açougue

        "work_acougue_title": "Açougue São Roque",
        "work_acougue_description": "During my short time at Grupo São Roque, I played a key role in developing the price display system for butcher shops at São Roque branches.",
        "platforms": "Platforms",
        "stacks": "Stacks",

        // Tecer

        "work_tecer_title": "Tecer Management and App",
        "work_tecer_description": "This project was my first freelance work developed for the company Tecer, where I built a management system for employees and customers, as well as a document consultation app for clients.",
        "work_tecer_web_code": "Web Code",
        "work_tecer_mobile_code": "Mobile Code",
        "platforms": "Platforms",
        "stacks": "Stacks",

        // Buzzu

        "work_buzzu_title": "Buzzu",
        "work_buzzu_description": "Buzzu is an idea that was created for the Smart Cities Hackathon in Feira de Santana, organized by SEBRAE. Buzzu is a Public Transport App designed to help city residents locate buses and bus stops, reach their destinations, and track their journeys.",
        "platforms": "Platforms",
        "stacks": "Stacks",
        "prototype": "Prototype",
        "code": "Code",

        // Doo Pets

        "work_doopets_title": "Doo Pets",
        "work_doopets_description": "Doo Pets is a complete and intuitive pet shop management system developed as a final project for the SENAI Software Development course. The system allows scheduling of baths, grooming, and other services for clients' pets, as well as a dynamic checkout that accepts multiple payment methods. Additionally, it includes full CRUD management for customers, employees, pets, inventory, suppliers, services, and products.",
        "website": "Website",
        "work_doopets_online_system": "Online System",
        "code": "Code",
        "video": "Video",
        "platforms": "Platforms",
        "stacks": "Stacks",

        // Prosel

        "work_prosel_title": "Prosel",
        "work_prosel_description": "The Clériston Andrade General Hospital recognizes the importance of improving patient transportation within the institution to provide a more efficient and safer service. To meet this need, a system is needed to facilitate and optimize the work of stretcher bearers responsible for patient transport.",
        "platforms": "Platforms",
        "stacks": "Stacks",
        "work_prosel_offline_system": "System (Offline)",
        "code": "Code",

        // Rekomendo

        "work_rekomendo_title": "Rekomendo",
        "work_rekomendo_description": "Rekomendo is an app designed to facilitate the connection between clients and service providers in their area. Users can easily find qualified professionals for a variety of services, such as maintenance, personal care, renovations, and more. The app allows users to filter providers by location, view ratings, and request services directly through the platform, offering a practical and quick solution for everyday needs.",
        "platforms": "Platforms",
        "stacks": "Stacks",
        "work_rekomendo_online_system": "Online System",

        // Planejar Patrimonial

        "work_planejar_title": "Planejar Patrimonial",
        "work_planejar_description": "Job project focused on rental collection management. The system generates tenant charges with automated boleto issuance and sends them through WhatsApp using Meta Business.",
        "work_planejar_online_system": "Online System",
        "work_planejar_client_only": "Website available only to the client.",

        // JLoads

        "work_jloads_title": "JLoads",
        "work_jloads_description":
          "JLoads is an open-source desktop application for downloading media through a local browser-based interface, built as a practical exploration of Java 21, Spring Boot, Angular, and real-time communication.\n\n" +
          "The application has a download queue that supports multiple simultaneous links, with cancellation, thumbnails, titles, and real-time progress tracking for each item.\n\n" +
          "I implemented WebSocket communication to stream download progress, speed, and remaining time to the frontend, keeping the interface always in sync with what is happening in the backend.\n\n" +
          "Everything is packaged as a self-contained .jar that combines backend and frontend, so running the application is as simple as opening a single file locally.",

        // JL Vendas

        "work_jlvendas_title": "JL Vendas",
        "work_jlvendas_description":
          "JL Vendas is a system built to measure for my parents' clothing stores. Before it, sales control was done on paper and spreadsheets: writing down what each employee sold, adding it up by hand to know the revenue, checking the cash register at the end of the day, and calculating goals and bonuses manually.\n\n" +
          "The system replaced that routine: each sale is registered in seconds with employee, amount, and payment method; the daily total and the employee ranking update instantly; goals and bonuses are calculated automatically; and the cash register for in-cash sales always stays balanced.\n\n" +
          "It is a multi-store and multi-company system, and the owner follows every store from the phone through an installable PWA, with a consolidated overview and the ability to filter a single store.\n\n" +
          "Each store has screens for sales, employees, calendar, dashboard, history, audit trail, calculator, price tag printing, and settings. The audit trail records everything that changed: created, voided, and deleted sales, cash adjustments, and configuration changes, with author and date.\n\n" +
          "Business rules are built into the system: automatic goal calculation per employee per day, a manual bonus per sale, and the distinction between voiding a sale (which stays in the history with a reason) and deleting it, always correcting the cash register in both cases.\n\n" +
          "On the technical side, it runs on React 19 with Vite and Tailwind, uses Firebase Firestore and Auth with no server of its own, and relies on pre-calculated monthly summaries plus a local IndexedDB cache to cut read costs and work offline. Isolation between companies is enforced by Firestore Rules.\n\n" +
          "It runs in production today at the family stores with real sales data every day, and the next step is turning it into a product sold to other retail stores, with self-service onboarding, per-employee login, server-side validation through Cloud Functions, and subscription management.",
        "work_jlvendas_online_system": "Online System",
        "work_jlvendas_client_only": "System in production, available only to the stores.",

        // Work Experience

        "work_experience": "Work Experience",
        "job_wemind_lead_title": "Front-End Team Lead & Full Stack Developer",
        "job_wemind_lead_company": "WeMind",
        "job_wemind_lead_period": "Jul 2024 - Mar 2026 · 1 year and 9 months",
        "job_wemind_lead_location": "São Paulo, Brazil · Remote",
        "job_wemind_lead_project": "Projects: Influlens and Metahuman",
        "job_wemind_lead_description":
          "I initially worked on the Influlens project as a Front-End Developer, developing and maintaining features with Angular and Ionic. I also took on leadership responsibilities for the Front-End team, taking part in task planning, technical guidance, and code organization.\n\n" +
          "As Front-End Team Lead, I was responsible for coordinating frontend activities, reviewing implementations, helping define technical approaches, and working closely with backend developers to deliver scalable and maintainable solutions.\n\n" +
          "I also worked on evolving the Angular system architecture, mainly through componentization and code organization, making the application more performant, reusable, and easier to maintain.\n\n" +
          "Later I moved to the Metahuman project as a Full Stack Developer, working mainly with PHP, Symfony, and Twig, along with backend integrations and the development and maintenance of application features.\n\n" +
          "Across both projects I worked in an agile environment, using Notion for management and documentation, as well as AI-assisted development tools such as GitHub Copilot, Cursor, and Claude to increase productivity and code quality.",
        "job_wemind_lead_skills": "Angular, Ionic, TypeScript, PHP, Symfony, Twig, REST APIs, Git, Notion, GitHub Copilot, Cursor, Claude AI",

        "job_wemind_title": "Front-End Developer",
        "job_wemind_company": "WeMind",
        "job_wemind_period": "Nov 2023 - Jul 2024 · 9 months",
        "job_wemind_location": "São Paulo, Brazil · Remote",
        "job_wemind_project": "Project: AgMind",
        "job_wemind_description":
          "I worked mainly on the AgMind project as a Front-End Developer, responsible for developing new features and maintaining existing applications using Angular and Ionic.\n\n" +
          "My responsibilities included building reusable UI components, implementing new features, integrating with REST APIs, and ensuring application stability in development and production environments.\n\n" +
          "I was also responsible for managing the development and production branches, coordinating deployments, and keeping the application versions consistent.\n\n" +
          "I had an important role in implementing geolocation-related features, working in an agile development flow using Trello for task management and Miro for planning, collaboration, and technical discussions.",
        "job_wemind_skills": "Angular, Ionic, TypeScript, REST APIs, Git, Trello, Miro",

        "job_rekomendo_title": "Front-End Developer",
        "job_rekomendo_company": "Rekomendo",
        "job_rekomendo_period": "Jul 2024 - Mar 2025 · 9 months",
        "job_rekomendo_location": "Feira de Santana, Bahia, Brazil · Remote",
        "job_rekomendo_project": "Freelance",
        "job_rekomendo_description":
          "At Rekomendo, I worked as a Front-End Developer, responsible for leading the frontend updates of the application and contributing to a smoother and more intuitive experience for users.\n\n" +
          "The platform was built to connect clients with qualified service providers, allowing users to search for professionals, filter results by location, and request services quickly and easily.\n\n" +
          "I worked directly on development, prototyping, documentation, and the continuous evolution of the interface, implementing improvements and new features.\n\n" +
          "I used Angular, Ionic, and Firebase, building reusable, responsive, and performance-optimized components. I also worked closely with the Back-End team, which used Node.js, Express, and Firebase, ensuring efficient integration between the frontend and the APIs.\n\n" +
          "This experience strengthened my work in digital product development, user experience improvement, componentization, and building scalable applications.",
        "job_rekomendo_skills": "Angular, Ionic, TypeScript, Firebase, Node.js, Express, REST APIs, Git, Figma",

        "job_sao_roque_title": "Full Stack Developer",
        "job_sao_roque_company": "Grupo São Roque",
        "job_sao_roque_period": "Sep 2023 - Nov 2023 · 3 months",
        "job_sao_roque_location": "Feira de Santana, Bahia, Brazil · On-site",
        "job_sao_roque_project": "Internship",
        "job_sao_roque_description":
          "As a Software Development Intern, I had the opportunity to work on real enterprise solutions and take part in building and delivering production-ready applications.\n\n" +
          "I played an important role in developing internal systems for the company, including a digital system to display meat prices at the São Roque supermarket branches.\n\n" +
          "I also took part in creating a meal management system, involving the generation of employee cards with QR Code and the implementation of readers to validate transactions.\n\n" +
          "The solutions developed helped the HR department monitor and manage meal-related operations across different branches more efficiently, improving operational control, transparency, and process efficiency.\n\n" +
          "I worked on Front-End and Back-End development and database integration, using Vue.js, Node.js, Oracle Database, and MySQL.\n\n" +
          "This experience marked the beginning of my professional career in software development, giving me contact with production applications, collaboration with experienced developers, and the full software development cycle.",
        "job_sao_roque_skills": "Vue.js, Node.js, Oracle Database, MySQL",

        "unifan_location": "Feira de Santana, Bahia, Brazil · Remote",

        // Education

        "education": "Education",
        "education_unifan_title": "Bachelor’s in Systems Analysis and Development",
        "education_unifan_institution": "UNIFAN - Centro Universitário Nobre",
        "education_unifan_period": "Jul 2023 - Dec 2025",
        "education_unifan_description":
          "The Systems Analysis and Development course trains professionals capable of developing, analyzing, designing, implementing, and updating information systems for various industries, with expertise in multiple programming languages and operational frameworks.\n\n" +
          "UNIFAN was also where I built much of my professional network. I was very active in the academic community, serving as class representative and taking part in scientific initiatives and research activities throughout the course.\n\n" +
          "I also gave talks about the tech industry, including a talk at the Reprograma-se event, during the alumni panel, where I shared what a developer's career really looks like in practice, from the first steps to working on corporate projects.\n\n" +
          "These experiences strengthened my communication skills, public speaking, and the ability to share technical knowledge with different audiences.",
        "education_unifan_skills": "Software Engineering, DevOps, Databases, Algorithms, Cloud Computing, Public Speaking, Leadership, Networking, Scientific Initiation",

        "education_senai_title": "Technical Degree in Software Development",
        "education_senai_institution": "SENAI - Serviço Nacional de Aprendizagem Industrial",
        "education_senai_period": "Feb 2022 - Jun 2023",
        "education_senai_description":
          "The course trains technical professionals in Software Development, meeting the market demand for skilled programmers and developers with the technical and technological knowledge needed to keep up with the industry.\n\n" +
          "At SENAI I was very active in the school community, taking part in many events, technical activities, and initiatives alongside students and instructors.\n\n" +
          "I also came back as a speaker at DevTalks, an event held at the institution, where I shared my career experience and talked about the day-to-day work of a software developer with students who were just starting out.\n\n" +
          "This period was essential to build my technical foundation and also to develop collaboration, communication, and knowledge-sharing skills.",
        "education_senai_skills": "Team Leadership, CSS, Software Design Patterns, Python, GitHub, Figma (Software), JavaScript, SQL, REST API, Public Speaking",

        "education_opera_title": "English",
        "education_opera_institution": "Opera Idiomas",
        "education_opera_period": "Jan 2021 - Dec 2023",
        "education_opera_description":
          "Course where I developed the ability to communicate fluently in English, discuss almost any topic, and easily understand spoken language, including movies and series without subtitles.\n\n" +
          "It was also where I learned a lot about using English in a work environment: meetings, technical conversations, presentations, emails, and everyday communication with international teams.\n\n" +
          "This foundation is what allows me today to work comfortably in projects and contexts that require English on a daily basis.",
        "education_opera_skills": "B2 English Level, Business English, Technical Communication"


      }
    },
    pt: {
      translation: {

        // Nav

        "about": "Sobre",
        "projects": "Projetos",
        "code": "Código",
        "my_networks": "Minhas Redes",
        "theme_toggle": "Mudar Tema",

        // Home

        "job_title": "Desenvolvedor de Software",
        "download_cv": "Baixar CV",
        "expand_photo": "Clique para expandir a foto",
        "back_to_top": "Voltar ao topo",
        "sections": "Seções",
        "technologies": "Tecnologias: Vue, Angular, React, Next, Nuxt, Node, Express!",
        "summary": "Resumo",
        "bio_description":
          "Sou Desenvolvedor de Software Full Stack com mais de 3 anos de experiência no desenvolvimento de aplicações web, sistemas corporativos e produtos digitais. Atualmente atuo na Capgemini, em um projeto para o Bradesco, trabalhando principalmente com Java, Spring Boot, Angular, microsserviços e micro frontends, contribuindo para uma plataforma estratégica de atendimento ao cliente.\n\n" +
          "Ao longo da minha carreira, trabalhei em diferentes contextos, desde sistemas empresariais e aplicações bancárias até produtos digitais e softwares personalizados, utilizando tecnologias como Java, Spring Boot, Angular, TypeScript, Node.js, Vue.js e PHP/Symfony. Também tenho experiência com DDD, Arquitetura Hexagonal, Clean Architecture, CI/CD, APIs REST, mensageria e desenvolvimento orientado a eventos.\n\n" +
          "Além do desenvolvimento, já atuei com liderança técnica de equipes de Front-End, organização de código, definição de abordagens técnicas, revisão de implementações e resolução de problemas complexos. Atualmente, também sou Co-Founder da Lamp, onde participo de todo o ciclo de desenvolvimento de soluções personalizadas para empresas, desde o levantamento de requisitos e arquitetura até desenvolvimento, infraestrutura e entrega.\n\n" +
          "Tenho como objetivo continuar evoluindo como engenheiro de software, aprofundando meus conhecimentos em arquitetura, sistemas distribuídos, cloud e inteligência artificial, buscando construir soluções escaláveis, sustentáveis e de alto impacto.",
        "my_projects": "Meus Projetos",
        "bio": "Linha do Tempo",
        "current": "Atual",
        "job_current": "Líder Técnico Front-End e Desenvolvedor Full Stack na WeMind",
        "job_2025": "Desenvolvedor Front-End na Rekomendo",
        "job_2024": "Desenvolvedor Front-End na WeMind",
        "job_2023": "Desenvolvedor Full Stack no Grupo São Roque",
        "education_university": "Ingressei no curso de Análise e Desenvolvimento de Sistemas na UNIFAN",
        "education_senai": "Conclui o curso técnico de Desenvolvimento de Sistemas no SENAI",
        "education_technical": "Ingressei no curso técnico de Desenvolvimento de Sistemas no SENAI",
        "hobbies": "Anime, Música, Jogos, Piano, Mangá e Gatos",
        "my_networks": "Minhas Redes",

        "job_capgemini_title": "Desenvolvedor Full Stack Java/Angular",
        "job_capgemini_company": "Capgemini",
        "job_capgemini_period": "Abr de 2025 - o momento",
        "job_capgemini_location": "São Paulo, Brasil · Remoto",
        "job_capgemini_project": "Projeto: Bradesco",
        "job_capgemini_description":
          "Na Capgemini, atuo como Desenvolvedor Full Stack Java/Angular em um projeto para o Bradesco, contribuindo para o desenvolvimento de uma plataforma estratégica de atendimento ao cliente, com foco no histórico de interações, escalabilidade, performance e segurança.\n\n" +
          "Atuo na construção de sistemas e funcionalidades do zero, seguindo padrões corporativos e templates predefinidos, além da integração de serviços dentro de uma arquitetura baseada em microsserviços e micro frontends. Também participo de decisões técnicas e contribuo para a aplicação de boas práticas de engenharia de software.\n\n" +
          "No desenvolvimento, trabalho com Java e Spring Boot no backend e Angular no frontend, utilizando Native Federation para a implementação da arquitetura de micro frontends. Também aplico conceitos de Domain-Driven Design (DDD), Arquitetura Hexagonal e testes unitários para garantir qualidade, organização e confiabilidade das aplicações.\n\n" +
          "Tenho uma atuação de destaque na manutenção e evolução do micro frontend da minha squad, sendo responsável principalmente pela atualização de dependências e versões, alinhamento com o shell da aplicação, evolução da arquitetura, implementação de novas funcionalidades e manutenção da escalabilidade do micro frontend.\n\n" +
          "Também me tornei uma referência técnica dentro da squad para questões relacionadas a micro frontends, atuando na resolução de problemas e incidentes e contribuindo para que a equipe mantenha suas versões e novas funcionalidades atualizadas em relação às demais squads.\n\n" +
          "O projeto utiliza Apache Kafka para mensageria assíncrona, MongoDB como banco de dados principal, APIM e Axway para gerenciamento de APIs e MSAL/Azure Active Directory para autenticação e autorização. Também atuo com Git, pipelines de CI/CD e metodologias ágeis como Scrum, utilizando Jira para organização das entregas.",
        "job_capgemini_skills": "Java, Spring Boot, Angular, TypeScript, Native Federation, Microsserviços, Micro Frontends, DDD, Arquitetura Hexagonal, Apache Kafka, MongoDB, APIs REST, APIM, Axway, MSAL, Azure AD, Git, CI/CD, Jira, Scrum",
        "job_capgemini": "Desenvolvedor Full Stack Java/Angular na Capgemini",


        // 404

        "not_found_title": "404 - Não Encontrado",
        "not_found_message": "A página que você está procurando não foi encontrada.",
        "return_home": "Retornar para a Home",

        // Projetos

        "projects_title": "Projetos",
        "projects_jobs": "Jobs",
        "projects_personal": "Pessoais",
        "projects_collaborations": "Colaborações",
        "projects_planejar_desc": "Sistema que automatiza cobranças de inquilinos com geração de boleto e envio por WhatsApp via Meta Business.",
        "projects_rekomendo_desc": "Aplicativo para facilitar o encontro de prestadores de serviços na sua região.",
        "projects_tecer_desc": "Sistema de gestão e aplicativo para a empresa Tecer Consultoria.",
        "projects_acougue_desc": "Tela de exibição de valores das carnes destinada aos açougues das filiais da São Roque.",
        "projects_doopets_desc": "Um sistema de gerenciamento de petshop desenvolvido como TCC para o curso de Desenvolvimento de Sistemas do SENAI.",
        "projects_prosel_desc": "Um sistema para facilitar e otimizar as atividades dos maqueiros, responsáveis pelo transporte dos pacientes em um hospital.",
        "projects_buzzu_desc": "Aplicativo de Transporte Público.",
        "projects_jloads_desc": "Aplicação desktop open source para download de mídias por uma interface web local.",
        "projects_jlvendas_desc": "Sistema de gestão de vendas, caixa, metas e bônus rodando em produção em lojas de varejo.",

        // Work

        "projects": "Projetos",

        // Footer

        "footer_rights": "Todos os Direitos Reservados.",

        // Açougue

        "work_acougue_title": "Açougue São Roque",
        "work_acougue_description": "Na minha curta passagem pelo Grupo São Roque desempenhei um papel fundamental no desenvolvimento da solução da tela de exibição de valores das carnes destinada aos açougues das filiais da São Roque.",
        "platforms": "Plataformas",
        "stacks": "Stacks",

        // Tecer

        "work_tecer_title": "Tecer Gestão e Aplicativo",
        "work_tecer_description": "Esse projeto foi fruto do meu primeiro freelancer desenvolvido para a empresa Tecer, no qual desenvolvi um sistema de gestão de funcionários e clientes e também um aplicativo de consulta de documentos para os clientes.",
        "work_tecer_web_code": "Código Web",
        "work_tecer_mobile_code": "Código Mobile",
        "platforms": "Plataformas",
        "stacks": "Stacks",

        // Buzzu

        "work_buzzu_title": "Buzzu",
        "work_buzzu_description": "O Buzzu é uma ideia que foi pensada para o Hackathon Cidades Inteligentes Feira de Santana realizado pelo SEBRAE. O Buzzu é um Aplicativo de Transporte Público que tem como objetivo ajudar os cidadãos da cidade a localizar os ônibus e pontos de ônibus para chegar aos seus destinos e acompanhar as viagens.",
        "platforms": "Plataformas",
        "stacks": "Stacks",
        "prototype": "Prótotipo",
        "code": "Código",

        // Doo Pets

        "work_doopets_title": "Doo Pets",
        "work_doopets_description": "O Doo Pets é um sistema de gerenciamento completo e intuitivo de petshop desenvolvido como trabalho de conclusão de curso para o curso de Desenvolvimento de Sistemas do SENAI. No sistema é possível fazer agendamentos de banhos, tosas ou outros serviços destinados aos pets dos clientes, além de um frente de caixa dinâmico que aceita várias formas de pagamento. Para finalizar o sistema tem CRUDS para gerenciamento completo de clientes, funcionários, pets, estoque, fornecedores, serviços e produtos.",
        "website": "Website",
        "work_doopets_online_system": "Sistema (Online)",
        "code": "Código",
        "video": "Vídeo",
        "platforms": "Plataformas",
        "stacks": "Stacks",

        // Prosel

        "work_prosel_title": "Prosel",
        "work_prosel_description": "O Hospital Geral Clériston Andrade reconhece a importância de aprimorar o transporte de pacientes dentro da instituição, visando oferecer um serviço mais eficiente e seguro aos usuários. Para atender a essa necessidade, surge a demanda por um sistema que possa facilitar e otimizar as atividades dos maqueiros, responsáveis pelo transporte dos pacientes.",
        "platforms": "Plataformas",
        "stacks": "Stacks",
        "work_prosel_offline_system": "Sistema (Offline)",
        "code": "Código",

        // Rekomendo

        "work_rekomendo_title": "Rekomendo",
        "work_rekomendo_description": "O Rekomendo é um aplicativo voltado para facilitar a conexão entre clientes e prestadores de serviços em sua região. Com ele, o usuário pode encontrar facilmente profissionais qualificados para resolver diversos tipos de problemas, como serviços de manutenção, cuidados pessoais, reformas e outros. O app permite filtrar prestadores por localização, visualizar avaliações e solicitar serviços diretamente pela plataforma, oferecendo uma solução prática e rápida para as necessidades cotidianas.",
        "platforms": "Plataformas",
        "stacks": "Stacks",
        "work_rekomendo_online_system": "Sistema (Online)",

        // Planejar Patrimonial

        "work_planejar_title": "Planejar Patrimonial",
        "work_planejar_description": "Job focado em gestão de cobranças de aluguel. O sistema gera cobranças para inquilinos com automação de emissão de boleto e envio por WhatsApp via Meta Business.",
        "work_planejar_online_system": "Sistema (Online)",
        "work_planejar_client_only": "Site disponível apenas para o cliente.",

        // JLoads

        "work_jloads_title": "JLoads",
        "work_jloads_description":
          "O JLoads é uma aplicação desktop open source para download de mídias através de uma interface web local, construída como uma exploração prática de Java 21, Spring Boot, Angular e comunicação em tempo real.\n\n" +
          "A aplicação conta com uma fila de downloads com suporte a múltiplos links simultâneos, cancelamento, miniaturas, títulos e acompanhamento do progresso em tempo real de cada item.\n\n" +
          "Implementei a comunicação via WebSocket para transmitir progresso, velocidade e tempo restante do download para o frontend, mantendo a interface sempre sincronizada com o que acontece no backend.\n\n" +
          "Tudo é empacotado em um .jar autônomo que combina backend e frontend, tornando a execução da aplicação tão simples quanto abrir um único arquivo localmente.",

        // JL Vendas

        "work_jlvendas_title": "JL Vendas",
        "work_jlvendas_description":
          "O JL Vendas nasceu como um sistema feito sob medida para as lojas de roupa dos meus pais. Antes dele, o controle de vendas era feito em caderno e planilha: anotar o que cada funcionária vendeu, somar à mão para saber o faturamento, conferir o caixa no fim do expediente e calcular na ponta do lápis a meta e o bônus de cada uma.\n\n" +
          "O sistema resolveu exatamente essa rotina: cada venda é registrada em segundos, com funcionária, valor e forma de pagamento; o total do dia e o ranking das funcionárias atualizam na hora; a meta e o bônus são calculados sozinhos; e o caixa das vendas à vista se mantém sempre batendo.\n\n" +
          "É um sistema multi-loja e multi-empresa, e o dono acompanha todas as lojas pelo celular através de um PWA instalável, com visão geral consolidada e possibilidade de filtrar uma loja específica.\n\n" +
          "Cada loja conta com telas de vendas, funcionárias, calendário, dashboard, histórico, auditoria, calculadora, impressão de etiquetas de preço e configurações. A trilha de auditoria registra tudo o que foi alterado: vendas criadas, anuladas e excluídas, ajustes de caixa e mudanças de configuração, com autor e data.\n\n" +
          "As regras de negócio estão embutidas no sistema: cálculo automático da meta por funcionária por dia, bônus manual por venda e a diferença entre anular uma venda (que continua no histórico com o motivo) e excluí-la, sempre corrigindo o caixa nos dois casos.\n\n" +
          "Na parte técnica, roda em React 19 com Vite e Tailwind, utiliza Firebase Firestore e Auth sem servidor próprio, e se apoia em resumos mensais pré-calculados e cache local em IndexedDB para reduzir o custo de leituras e funcionar offline. O isolamento entre empresas é garantido pelas Firestore Rules.\n\n" +
          "Hoje ele roda em produção nas lojas da família com dados reais de vendas todos os dias, e o próximo passo é transformá-lo em um produto vendido para outras lojas de varejo, com onboarding self-service, login por funcionária, validações no servidor via Cloud Functions e controle de assinatura.",
        "work_jlvendas_online_system": "Sistema (Online)",
        "work_jlvendas_client_only": "Sistema em produção, disponível apenas para as lojas.",

        // Work Experience

        "work_experience": "Experiência Profissional",
        "job_wemind_lead_title": "Líder Técnico Front-End e Desenvolvedor Full Stack",
        "job_wemind_lead_company": "WeMind",
        "job_wemind_lead_period": "Jul de 2024 - Mar de 2026 · 1 ano e 9 meses",
        "job_wemind_lead_location": "São Paulo, Brasil · Remoto",
        "job_wemind_lead_project": "Projetos: Influlens e Metahuman",
        "job_wemind_lead_description":
          "Inicialmente, atuei no projeto Influlens como Desenvolvedor Front-End, trabalhando no desenvolvimento e manutenção de funcionalidades utilizando Angular e Ionic. Também assumi responsabilidades de liderança da equipe de Front-End, participando do planejamento das tarefas, orientação técnica e organização do código.\n\n" +
          "Como Líder de Equipe Front-End, fui responsável por coordenar as atividades de frontend, realizar revisões de implementações, auxiliar na definição de abordagens técnicas e trabalhar em conjunto com os desenvolvedores backend para entregar soluções escaláveis e de fácil manutenção.\n\n" +
          "Também trabalhei na evolução da arquitetura do sistema Angular, principalmente por meio da componentização e organização do código, buscando tornar a aplicação mais performática, reutilizável e fácil de manter.\n\n" +
          "Posteriormente, passei a atuar no projeto Metahuman como Desenvolvedor Full Stack, trabalhando principalmente com PHP, Symfony e Twig, além de integrações backend e desenvolvimento e manutenção de funcionalidades da aplicação.\n\n" +
          "Ao longo dos dois projetos, trabalhei em um ambiente ágil, utilizando Notion para gerenciamento e documentação, além de ferramentas de desenvolvimento assistidas por IA, como GitHub Copilot, Cursor e Claude, para aumentar a produtividade e a qualidade do código.",
        "job_wemind_lead_skills": "Angular, Ionic, TypeScript, PHP, Symfony, Twig, APIs REST, Git, Notion, GitHub Copilot, Cursor, Claude AI",

        "job_wemind_title": "Desenvolvedor Front-End",
        "job_wemind_company": "WeMind",
        "job_wemind_period": "Nov de 2023 - Jul de 2024 · 9 meses",
        "job_wemind_location": "São Paulo, Brasil · Remoto",
        "job_wemind_project": "Projeto: AgMind",
        "job_wemind_description":
          "Atuei principalmente no projeto AgMind como Desenvolvedor Front-End, sendo responsável pelo desenvolvimento de novas funcionalidades e manutenção de aplicações existentes utilizando Angular e Ionic.\n\n" +
          "Minhas responsabilidades incluíam o desenvolvimento de componentes de UI reutilizáveis, implementação de novas funcionalidades, integração com APIs REST e garantia da estabilidade da aplicação nos ambientes de desenvolvimento e produção.\n\n" +
          "Também fui responsável pelo gerenciamento das branches de desenvolvimento e produção, coordenação de deploys e manutenção da consistência das versões da aplicação.\n\n" +
          "Tive participação importante na implementação de funcionalidades relacionadas à geolocalização, além de atuar em um fluxo de desenvolvimento ágil utilizando Trello para gerenciamento das tarefas e Miro para planejamento, colaboração e discussões técnicas.",
        "job_wemind_skills": "Angular, Ionic, TypeScript, APIs REST, Git, Trello, Miro",

        "job_rekomendo_title": "Desenvolvedor Front-End",
        "job_rekomendo_company": "Rekomendo",
        "job_rekomendo_period": "Jul de 2024 - Mar de 2025 · 9 meses",
        "job_rekomendo_location": "Feira de Santana, Bahia, Brasil · Remoto",
        "job_rekomendo_project": "Freelance",
        "job_rekomendo_description":
          "Na Rekomendo, atuei como Desenvolvedor Front-End, sendo responsável por liderar as atualizações do frontend da aplicação e contribuir para a construção de uma experiência mais fluida e intuitiva para os usuários.\n\n" +
          "A plataforma foi desenvolvida para conectar clientes a prestadores de serviços qualificados, permitindo que usuários pesquisassem profissionais, filtrassem resultados por localização e solicitassem serviços de maneira rápida e prática.\n\n" +
          "Atuei diretamente no desenvolvimento, prototipação, documentação e evolução contínua da interface, implementando melhorias e novas funcionalidades.\n\n" +
          "Utilizei Angular, Ionic e Firebase, desenvolvendo componentes reutilizáveis, responsivos e otimizados para performance. Também trabalhei em colaboração direta com a equipe de Back-End, que utilizava Node.js, Express e Firebase, garantindo uma integração eficiente entre o frontend e as APIs.\n\n" +
          "Essa experiência fortaleceu minha atuação em desenvolvimento de produtos digitais, melhoria da experiência do usuário, componentização e construção de aplicações escaláveis.",
        "job_rekomendo_skills": "Angular, Ionic, TypeScript, Firebase, Node.js, Express, APIs REST, Git, Figma",

        "job_sao_roque_title": "Desenvolvedor Full Stack",
        "job_sao_roque_company": "Grupo São Roque",
        "job_sao_roque_period": "Set de 2023 - Nov de 2023 · 3 meses",
        "job_sao_roque_location": "Feira de Santana, Bahia, Brasil · Presencial",
        "job_sao_roque_project": "Estágio",
        "job_sao_roque_description":
          "Como Estagiário de Desenvolvimento de Software, tive a oportunidade de trabalhar no desenvolvimento de soluções empresariais reais e participar da criação e entrega de aplicações prontas para produção.\n\n" +
          "Tive um papel importante no desenvolvimento de sistemas internos para a empresa, incluindo um sistema digital para exibição de preços de carnes nas filiais do supermercado São Roque.\n\n" +
          "Também participei da criação de um sistema de gerenciamento de refeições, envolvendo a geração de cartões de funcionários com QR Code e a implementação de leitores para validação das transações.\n\n" +
          "As soluções desenvolvidas ajudaram o departamento de Recursos Humanos a monitorar e gerenciar de forma mais eficiente as operações relacionadas às refeições em diferentes filiais, proporcionando melhorias no controle operacional, transparência e eficiência dos processos.\n\n" +
          "Também trabalhei no desenvolvimento Front-End, Back-End e integração com bancos de dados, utilizando Vue.js, Node.js, Oracle Database e MySQL.\n\n" +
          "Essa experiência marcou o início da minha carreira profissional em desenvolvimento de software e me proporcionou contato com aplicações em produção, colaboração com desenvolvedores experientes e o ciclo completo de desenvolvimento de software.",
        "job_sao_roque_skills": "Vue.js, Node.js, Oracle Database, MySQL",

        "unifan_location": "Feira de Santana, Bahia, Brasil · Remoto",

        // Education

        "education": "Formação Acadêmica",
        "education_unifan_title": "Graduação em Análise e Desenvolvimento de Sistemas",
        "education_unifan_institution": "UNIFAN - Centro Universitário Nobre",
        "education_unifan_period": "Jul de 2023 - Dez de 2025",
        "education_unifan_description":
          "O curso de Análise e Desenvolvimento de Sistemas forma profissionais capazes de analisar, projetar, desenvolver e atualizar sistemas de informação para diferentes segmentos, abrangendo diversas linguagens de programação e tecnologias.\n\n" +
          "A UNIFAN também foi onde construí grande parte do meu networking profissional. Fui bastante participativo na vida acadêmica, atuando como líder de turma e participando de iniciativas científicas e atividades de pesquisa ao longo do curso.\n\n" +
          "Também realizei palestras sobre o mercado de tecnologia, entre elas uma palestra no evento Reprograma-se, na palestra de egressos da faculdade, onde compartilhei como é a carreira de desenvolvedor na prática, desde os primeiros passos até a atuação em projetos corporativos.\n\n" +
          "Essas experiências fortaleceram minha comunicação, oratória e a capacidade de compartilhar conhecimento técnico com diferentes públicos.",
        "education_unifan_skills": "Engenharia de Software, DevOps, Banco de Dados, Algoritmos, Computação em Nuvem, Oratória, Liderança, Networking, Iniciação Científica",

        "education_senai_title": "Ensino Técnico em Desenvolvimento de Sistemas",
        "education_senai_institution": "SENAI - Serviço Nacional de Aprendizagem Industrial",
        "education_senai_period": "Fev de 2022 - Jun de 2023",
        "education_senai_description":
          "O curso prepara profissionais técnicos para atuar no desenvolvimento de software e programação, atendendo à demanda do mercado por desenvolvedores com a base técnica e tecnológica necessária para acompanhar a evolução da área.\n\n" +
          "No SENAI fui muito participativo na comunidade da instituição, participando de diversos eventos, atividades técnicas e iniciativas junto a alunos e instrutores.\n\n" +
          "Também retornei como palestrante no DevTalks, evento realizado na instituição, onde compartilhei a experiência da minha carreira e falei sobre o dia a dia de um desenvolvedor de software com alunos que estavam começando.\n\n" +
          "Esse período foi essencial para construir minha base técnica e também para desenvolver habilidades de colaboração, comunicação e compartilhamento de conhecimento.",
        "education_senai_skills": "Liderança, CSS, Padrões de Projeto, Python, GitHub, Figma, JavaScript, SQL, API REST, Oratória",

        "education_opera_title": "Inglês",
        "education_opera_institution": "Opera Idiomas",
        "education_opera_period": "Jan de 2021 - Dez de 2023",
        "education_opera_description":
          "Curso onde desenvolvi a capacidade de me comunicar com fluência em inglês, conversar sobre praticamente qualquer assunto e compreender facilmente a língua falada, incluindo filmes e séries sem legenda.\n\n" +
          "Foi também onde aprendi bastante sobre como utilizar o inglês no ambiente de trabalho: reuniões, conversas técnicas, apresentações, e-mails e comunicação no dia a dia com times internacionais.\n\n" +
          "Essa base é o que me permite hoje atuar com naturalidade em projetos e contextos que exigem o inglês no dia a dia.",
        "education_opera_skills": "Inglês Nível B2, Inglês para Negócios, Comunicação Técnica"

      }
    }
  },
  lng: "en", // Idioma padrão
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;