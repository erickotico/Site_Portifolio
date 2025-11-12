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
        link: 'https://erickotico-dev.itch.io/trivia-game'
    },
    {
        title: 'Jogo da cobrinha{Alfa}',
        description: 'Jogo da cobrinha classico',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/LogoSnakeClassicGame.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/jogo-da-cobrinha'
    },
    {
        title: 'Lendas da resistencia {Alfa}',
        description: 'Um Jogo Jrpg de aventura e ação onde você enfrenta inimigos e explora um mundo cheio de mistérios',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/ThumbLendasdaResistencia.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/lendas-da-resistencia'
    },
    {
        title: 'Swat Combat {Descontinuado}',
        description: 'Um Shooter Game em terceira pessoa, onde seu objetivo é matar os inimigos que aparecerá',
        tech: ['Unreal Engine 4.26', 'Blueprint'],
        image: './Img/GameSwatCombat.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/'
    },
    {
        title: 'SideScroller {Descontinuado}',
        description: 'Jogo de deslocamento lateral onde o terá desafios onde terrá que passar',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/GameSideScroller.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/'
    }, 
    {
        title: 'Zero Hero {Descontinuado}',
        description: 'Jogo FPS tatico em equipes onde o desafio é eliminar os inimigos no determinado limite de tempo ',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/LogoZeroHourM.jpeg',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/'
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
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Define o texto e o link com base no tipo de projeto
        const linkText = project.type === 'Project' ? 'Ver no GitHub' : 'Ver na Itch.io';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
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
            </div>
        `;
        projectsGrid.appendChild(projectCard);
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
});