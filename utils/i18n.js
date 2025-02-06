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
        "technologies": "Technologies: Vue, Angular, React, Next, Nuxt, Node, Express!",
        "summary": "Summary",
        "bio_description": "John is a Web Developer who enjoys developing various types of solutions and systems for any companies or clients, aiming to solve real-life problems through code. He currently lives in Brazil and loves making new connections to feel part of the community.",
        "my_projects": "My Projects",
        "bio": "Bio",
        "current": "Now ",
        "job_current": "Mid-Level Frontend Developer at WeMind",
        "job_2024": "Mid-Level Frontend Developer at AgMind",
        "job_2023": "Full Stack Developer at Grupo São Roque",
        "education_university": "Started a degree in Software Development at UNIFAN",
        "education_senai": "Completed a technical Software Development course at SENAI",
        "education_technical": "Started a technical course in Software Development at SENAI",
        "hobbies": "Anime, Music, Games, Piano, Manga, and Cats",
        "my_networks": "My Networks",

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
        "technologies": "Tecnologias: Vue, Angular, React, Next, Nuxt, Node, Express!",
        "summary": "Resumo",
        "bio_description": "John é um Desenvolvedor Web que gosta de desenvolver vários tipos de soluções e sistemas para quaisquer empresas ou clientes no intuito de solucionar problemas da vida real em forma de código. Atualmente ele vive no Brasil e adora fazer novas conexões para se sentir dentro da comunidade.",
        "my_projects": "Meus Projetos",
        "bio": "Bio",
        "current": "Atual",
        "job_current": "Desenvolvedor Front-End Pleno na WeMind",
        "job_2024": "Desenvolvedor Front-End Pleno na AgMind",
        "job_2023": "Desenvolvedor Full Stack no Grupo São Roque",
        "education_university": "Ingressou no curso de ADS na UNIFAN",
        "education_senai": "Concluiu o curso de Desenvolvimento de Sistemas no SENAI",
        "education_technical": "Ingressou no curso técnico de Desenvolvimento de Sistemas no SENAI",
        "hobbies": "Anime, Música, Jogos, Piano, Mangá e Gatos",
        "my_networks": "Minhas Redes",

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