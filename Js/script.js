// Skills Data
const skills = [
    { name: 'Unreal Engine', years: 2, level: 90 },
    { name: 'HTML/CSS', years: 3, level: 90 },
    { name: 'JavaScript', years: 2, level: 75 },
    { name: 'C#', years: 1, level: 25 },
    { name: 'C++', years: 1, level: 25 },
    { name: 'Python', years: 1, level: 10 }
];

// Projects Data
const projects = [
    {
        title: 'TriviaGame',
        description: 'Jogo de perguntas e respostas com variedade de temas',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/LogoTriviaGame.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/trivia-game',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        title: 'Jogo da cobrinha{Alfa}',
        description: 'Jogo da cobrinha classico',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/LogoSnakeClassicGame.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/jogo-da-cobrinha',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        title: 'Lendas da resistencia {Alfa}',
        description: 'Um Jogo Jrpg de aventura e ação onde você enfrenta inimigos e explora um mundo cheio de mistérios',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/ThumbLendasdaResistencia.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/lendas-da-resistencia',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        title: 'Swat Combat {Descontinuado}',
        description: 'Um Shooter Game em terceira pessoa, onde seu objetivo é matar os inimigos que aparecerá',
        tech: ['Unreal Engine 4.26', 'Blueprint'],
        image: './Img/GameSwatCombat.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        title: 'SideScroller {Descontinuado}',
        description: 'Jogo de deslocamento lateral onde o terá desafios onde terrá que passar',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/GameSideScroller.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/',
        videoId: 'dQw4w9WgXcQ'
    }, 
    {
        title: 'Zero Hero {Descontinuado}',
        description: 'Jogo FPS tatico em equipes onde o desafio é eliminar os inimigos no determinado limite de tempo ',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/LogoZeroHourM.jpeg',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/',
        videoId: 'dQw4w9WgXcQ'
    }, 
    {
        title: 'Empire Of Rebirth and Ruins',
        description: 'Este é um site para um jogo em desenvolvimento chamado "Empire Of Rebirth and Ruins". O site apresenta informações sobre o jogo, incluindo sua história, personagens, mecânicas de jogo e atualizações de desenvolvimento. Desenvolvido com tecnologias web modernas para proporcionar uma experiência informativa e envolvente aos visitantes interessados no jogo.',
        tech: ['HTML5','CSS3','JavaScript'],
        image: './Img/LogoRPG.jpg',
        type: 'Projetc',
        link: 'https://github.com/erickotico/EmpireofRebithandRuins',
        videoId: 'dQw4w9WgXcQ'
    }, 
    {
        title: 'Calculadora Simples',
        description: 'Este projeto é uma calculadora simples desenvolvida usando HTML, CSS e JavaScript. Ela permite aos usuários realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão, por meio de uma interface amigável e fácil de usar.',
        tech: ['HTML5','CSS3','JavaScript'],
        image: './Img/LogoRPG.jpg',
        type: 'Projetc',
        link: 'https://github.com/erickotico/EmpireofRebithandRuins',
        videoId: 'dQw4w9WgXcQ'
    }
];

// Populate Skills
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-info">${skill.years} anos de experiência</p>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Projetos Populares
function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Define o texto e o link com base no tipo de projeto
        const linkText = project.type === 'Projetc' ? 'Ver no GitHub' : 'Ver na Itch.io';
        
        // Cria um elemento de imagem com validação
        const imgElement = document.createElement('img');
        imgElement.src = project.image;
        imgElement.alt = project.title;
        imgElement.className = 'project-image clickable-image';
        imgElement.setAttribute('data-project-id', index);
        
        // Validação de imagem com fallback
        imgElement.onerror = function() {
            console.warn(`⚠️ Imagem não encontrada para "${project.title}": ${project.image}`);
            // Mostra imagem padrão ou placeholder
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect fill="%23ddd" width="300" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23666" text-anchor="middle" dominant-baseline="middle"%3EImagem não encontrada%3C/text%3E%3C/svg%3E';
            this.style.opacity = '0.6';
        };
        
        // Sucesso ao carregar a imagem
        imgElement.onload = function() {
            console.log(`✅ Imagem carregada com sucesso: "${project.title}"`);
        };
        
        projectCard.appendChild(imgElement);
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'project-content';
        contentDiv.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                ${linkText}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
            </a>
        `;
        projectCard.appendChild(contentDiv);
        projectsGrid.appendChild(projectCard);
    });

    // Add click event listeners to project images
    document.querySelectorAll('.clickable-image').forEach(image => {
        image.style.cursor = 'pointer';
        image.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            window.location.href = `projeto-detalhes.html?id=${projectId}`;
        });
    });
}
// Tratando os Formulario
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    e.target.reset();
    alert('Mensagem enviada com sucesso!');
}

// Inicializando
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateProjects();
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
    
    // Mensagem de ajuda no console
    console.log('%c🎨 PORTFÓLIO CARREGADO COM SUCESSO!', 'color: #4CAF50; font-size: 16px; font-weight: bold');
    console.log('%cDica: Para adicionar projetos, edite Js/script.js', 'color: #2196F3; font-size: 12px');
    console.log('%cGuia completo: Veja GUIA_ADICIONAR_PROJETOS.md', 'color: #FF9800; font-size: 12px');
    console.log('%c📱 Abra o Console (F12) para ver erros de imagem', 'color: #9C27B0; font-size: 12px');
});