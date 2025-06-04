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
        "technologies": "Technologies: Vue, Angular, React, Next, Nuxt, Node, Express!",
        "summary": "Summary",
        "bio_description": "John is a Software Developer who enjoys developing various types of solutions and systems for any companies or clients, aiming to solve real-life problems through code. He currently lives in Brazil and loves making new connections to feel part of the community.",
        "my_projects": "My Projects",
        "bio": "Timeline",
        "current": "Now ",
        "job_current": "Front-end Developer at WeMind",
        "job_2025": "Front-End Developer at Rekomendo",
        "job_2024": "Front-end Developer at AgMind",
        "job_2023": "Full Stack Developer at Grupo São Roque",
        "education_university": "Started a degree in Systems Analysis and Development at UNIFAN",
        "education_senai": "Completed a technical Software Development course at SENAI",
        "education_technical": "Started a technical course in Software Development at SENAI",
        "hobbies": "Anime, Music, Games, Piano, Manga, and Cats",
        "my_networks": "My Networks",

        "job_capgemini_title": "Full Stack Angular Java Developer",
        "job_capgemini_company": "Capgemini",
        "job_capgemini_period": "Apr 2025 - Present",
        "job_capgemini_location": "São Paulo, Brazil · Remote",
        "job_capgemini_description": "At Capgemini, I started my first international experience as a Full Stack Angular Java Developer. I work on projects that demand a high level of code quality, scalability, and modern architecture using best practices like Domain-Driven Design (DDD) and cloud technologies.",
        "job_capgemini_skills": "Angular, Java, DDD, TypeScript, Apache Kafka, MongoDB, Sonarqube",
        "job_capgemini": "Full Stack Angular Java Developer at Capgemini",


        // 404

        "not_found_title": "404 - Not Found",
        "not_found_message": "The page you are looking for was not found.",
        "return_home": "Return to Home",

        // Projects

        "projects_title": "Projects",
        "projects_jobs": "Jobs",
        "projects_personal": "Personal",
        "projects_collaborations": "Collaborations",
        "projects_rekomendo_desc": "App to help find service providers in your region.",
        "projects_tecer_desc": "Management system and app for Tecer Consulting company.",
        "projects_acougue_desc": "Price display system for butcher shops at São Roque branches.",
        "projects_doopets_desc": "A pet shop management system developed as a final project for the SENAI Software Development course.",
        "projects_prosel_desc": "A system to facilitate and optimize the work of stretcher bearers responsible for transporting patients in a hospital.",
        "projects_buzzu_desc": "Public Transport App.",

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

        // Work Experience

        "work_experience": "Work Experience",
        "job_wemind_title": "Front-end Developer",
        "job_wemind_company": "WeMind",
        "job_wemind_period": "Nov 2023 - Present",
        "job_wemind_location": "São Paulo, Brazil · Remote",
        "job_wemind_description": "I play a key role in creating and maintaining components for AgMind and Influlens projects. I am responsible for keeping the Front-end version up to date in production and integrating with the API.",
        "job_wemind_skills": "Angular, Ionic, TypeScript, REST API",

        "job_rekomendo_title": "Front-End Developer",
        "job_rekomendo_company": "Rekomendo",
        "job_rekomendo_period": "Jul 2024 - Mar 2025 · 9 months",
        "job_rekomendo_location": "Feira de Santana, Bahia, Brazil · Remote",
        "job_rekomendo_description":
          "At Rekomendo, I led front-end updates, ensuring an intuitive user experience. I worked on coding, prototyping, and documentation while implementing continuous UI improvements.\n\n" +
          "The app connects clients with service providers, enabling professional searches and quick service requests. I used Ionic, Angular, and Firebase to build a modern, optimized interface.\n\n" +
          "I collaborated with the back-end team, ensuring seamless integration with Node.js, Express, and Firebase. This experience strengthened my skills in UX/UI and scalable application development.",
        "job_rekomendo_skills": "Ionic, Angular, Firebase, TypeScript, Node.js, Express",

        "job_sao_roque_title": "Full Stack Developer",
        "job_sao_roque_company": "Grupo São Roque",
        "job_sao_roque_period": "Sep 2023 - Nov 2023 · 3 months",
        "job_sao_roque_location": "Feira de Santana, Bahia, Brazil · On-site",
        "job_sao_roque_description": "I played a key role in developing solutions for the company, including creating a price display screen for butcher shops in São Roque branches. Additionally, I led the development of a meal management system for São Roque agencies, which involved generating QR Code cards and developing QR Code readers for transaction validation. These solutions allowed the HR department to have better control over meal-related operations, ensuring efficient and transparent management.",
        "job_sao_roque_skills": "Vue.js, Node.js, MySQL, Oracle SQL Developer, TypeScript, GitHub, Figma",

        "unifan_location": "Feira de Santana, Bahia, Brazil · Remote",

        // Education

        "education": "Education",
        "education_unifan_title": "Bachelor’s in Systems Analysis and Development",
        "education_unifan_institution": "UNIFAN - Centro Universitário Nobre",
        "education_unifan_period": "Jul 2023 - Dec 2025",
        "education_unifan_description": "The Software Development course trains professionals capable of developing, analyzing, designing, implementing, and updating information systems for various industries. By the end of the course, graduates will be qualified to create IT systems, with expertise in multiple programming languages and operational frameworks.",
        "education_unifan_skills": "Software Engineering, DevOps, Databases, Algorithms, Cloud Computing",

        "education_senai_title": "Technical Degree in Software Development",
        "education_senai_institution": "SENAI - Serviço Nacional de Aprendizagem Industrial",
        "education_senai_period": "Feb 2022 - Jun 2023",
        "education_senai_description": "The course trains technical professionals in Software Development, meeting the market demand for skilled programmers and software developers with the necessary technical and technological knowledge to keep up with industry evolution.",
        "education_senai_skills": "Team Leadership, CSS, Software Design Patterns, Python, GitHub, Figma (Software), JavaScript, SQL, REST API",

        "education_opera_title": "English",
        "education_opera_institution": "Opera Idiomas",
        "education_opera_period": "Jan 2021 - Dec 2023",
        "education_opera_description": "Developed the ability to communicate fluently in English, discuss almost any topic, and understand spoken language easily. Gained the skill to watch movies and series in English without subtitles and follow conversations with ease.",
        "education_opera_skills": "B2 English Level"


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
        "technologies": "Tecnologias: Vue, Angular, React, Next, Nuxt, Node, Express!",
        "summary": "Resumo",
        "bio_description": "John é um Desenvolvedor de Software que gosta de desenvolver vários tipos de soluções e sistemas para quaisquer empresas ou clientes no intuito de solucionar problemas da vida real em forma de código. Atualmente ele vive no Brasil e adora fazer novas conexões para se sentir dentro da comunidade.",
        "my_projects": "Meus Projetos",
        "bio": "Linha do Tempo",
        "current": "Atual",
        "job_current": "Desenvolvedor Front-End na WeMind",
        "job_2025": "Desenvolvedor Front-End na Rekomendo",
        "job_2024": "Desenvolvedor Front-End na AgMind",
        "job_2023": "Desenvolvedor Full Stack no Grupo São Roque",
        "education_university": "Ingressei no curso de Análise e Desenvolvimento de Sistemas na UNIFAN",
        "education_senai": "Conclui o curso técnico de Desenvolvimento de Sistemas no SENAI",
        "education_technical": "Ingressei no curso técnico de Desenvolvimento de Sistemas no SENAI",
        "hobbies": "Anime, Música, Jogos, Piano, Mangá e Gatos",
        "my_networks": "Minhas Redes",

        "job_capgemini_title": "Desenvolvedor Full Stack Angular Java",
        "job_capgemini_company": "Capgemini",
        "job_capgemini_period": "Abr de 2025 - o momento",
        "job_capgemini_location": "São Paulo, Brasil · Remoto",
        "job_capgemini_description": "Na Capgemini, iniciei minha primeira experiência multinacional atuando como Desenvolvedor Full Stack Angular Java. Participo de projetos que exigem alta qualidade de código, escalabilidade e arquitetura moderna, utilizando boas práticas como DDD e tecnologias em nuvem.",
        "job_capgemini_skills": "Angular, Java, DDD, TypeScript, Apache Kafka, MongoDB, Sonarqube",
        "job_capgemini": "Desenvolvedor Full Stack Angular Java na Capgemini",


        // 404

        "not_found_title": "404 - Não Encontrado",
        "not_found_message": "A página que você está procurando não foi encontrada.",
        "return_home": "Retornar para a Home",

        // Projetos

        "projects_title": "Projetos",
        "projects_jobs": "Jobs",
        "projects_personal": "Pessoais",
        "projects_collaborations": "Colaborações",
        "projects_rekomendo_desc": "Aplicativo para facilitar o encontro de prestadores de serviços na sua região.",
        "projects_tecer_desc": "Sistema de gestão e aplicativo para a empresa Tecer Consultoria.",
        "projects_acougue_desc": "Tela de exibição de valores das carnes destinada aos açougues das filiais da São Roque.",
        "projects_doopets_desc": "Um sistema de gerenciamento de petshop desenvolvido como TCC para o curso de Desenvolvimento de Sistemas do SENAI.",
        "projects_prosel_desc": "Um sistema para facilitar e otimizar as atividades dos maqueiros, responsáveis pelo transporte dos pacientes em um hospital.",
        "projects_buzzu_desc": "Aplicativo de Transporte Público.",

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

        // Work Experience

        "work_experience": "Experiência Profissional",
        "job_wemind_title": "Desenvolvedor Front-End",
        "job_wemind_company": "WeMind",
        "job_wemind_period": "Nov de 2023 - o momento",
        "job_wemind_location": "São Paulo, Brasil · Remoto",
        "job_wemind_description": "Desempenho um papel fundamental na criação e manutenção de componentes dos projetos AgMind e Influlens, sou responsável por manter a versão Front-End atualizada em produção e também atuo na integração com a API.",
        "job_wemind_skills": "Angular, Ionic, TypeScript, API REST",

        "job_rekomendo_title": "Desenvolvedor Front-End",
        "job_rekomendo_company": "Rekomendo",
        "job_rekomendo_period": "Jul de 2024 - Mar de 2025 · 9 meses",
        "job_rekomendo_location": "Feira de Santana, Bahia, Brasil · Remoto",
        "job_rekomendo_description":
          "Na Rekomendo, liderei atualizações do front-end, garantindo uma experiência intuitiva para os usuários. Atuei na codificação, prototipação e documentação, além de implementar melhorias contínuas na interface.\n\n" +
          "O app conecta clientes a prestadores de serviços, permitindo buscas por profissionais e solicitações rápidas. Utilizei Ionic, Angular e Firebase para criar uma interface moderna e otimizada.\n\n" +
          "Colaborei com a equipe de back-end, garantindo integração eficiente com Node.js, Express e Firebase. Essa experiência fortaleceu minhas habilidades em UX/UI e desenvolvimento de aplicações escaláveis.",
        "job_rekomendo_skills": "Ionic, Angular, Firebase, TypeScript, Node.js, Express",

        "job_sao_roque_title": "Desenvolvedor Full Stack",
        "job_sao_roque_company": "Grupo São Roque",
        "job_sao_roque_period": "Set de 2023 - Nov de 2023 · 3 meses",
        "job_sao_roque_location": "Feira de Santana, Bahia, Brasil · Presencial",
        "job_sao_roque_description": "Desenvolvi soluções para a empresa, incluindo uma tela para exibição de valores das carnes nos açougues das filiais e um sistema de gerenciamento de refeições com QR Code.",
        "job_sao_roque_skills": "Vue.js, Node.js, MySQL, Oracle SQL Developer, TypeScript, GitHub, Figma",

        "unifan_location": "Feira de Santana, Bahia, Brasil · Remoto",

        // Education

        "education": "Formação Acadêmica",
        "education_unifan_title": "Graduação em Análise e Desenvolvimento de Sistemas",
        "education_unifan_institution": "UNIFAN - Centro Universitário Nobre",
        "education_unifan_period": "Jul de 2023 - Dez de 2025",
        "education_unifan_description": "O curso forma profissionais para desenvolver e atualizar sistemas de informação, abrangendo diversas linguagens de programação.",
        "education_unifan_skills": "Engenharia de Software, DevOps, Banco de Dados, Algoritmos, Computação em Nuvem",

        "education_senai_title": "Ensino Técnico em Desenvolvimento de Sistemas",
        "education_senai_institution": "SENAI - Serviço Nacional de Aprendizagem Industrial",
        "education_senai_period": "Fev de 2022 - Jun de 2023",
        "education_senai_description": "O curso prepara profissionais para atuar no desenvolvimento de software e programação.",
        "education_senai_skills": "Liderança, CSS, Padrões de Projeto, Python, GitHub, Figma, JavaScript, SQL, API REST",

        "education_opera_title": "Inglês",
        "education_opera_institution": "Opera Idiomas",
        "education_opera_period": "Jan de 2021 - Dez de 2023",
        "education_opera_description": "Curso focado na fluência e compreensão total da língua inglesa.",
        "education_opera_skills": "Inglês Nível B2"

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