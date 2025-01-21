// Skills Data
const skills = [
    { name: 'Unreal Engine', years: 2, level: 90 },
    { name: 'HTML/CSS', years: 3, level: 90 },
    { name: 'JavaScript', years: 2, level: 75 },
    { name: 'C++/C#', years: 1, level: 65 },
    { name: 'Python', years: 1, level: 25 },
    { name: 'Machine Learning', years: 0, level: 0 },
    { name: 'Deep Learning', years: 0, level: 0 },
    { name: 'Computer Vision', years: 0, level: 0 },
    { name: 'Python para IA', years: 0, level: 0 }
];

// Projects Data
const projects = [
    {
        title: 'Aventura em Unreal Engine 5',
        description: 'Jogo de aventura 3D com IA para NPCs usando ML-Agents.',
        tech: ['Unreal Engine 5', 'Blueprint'],
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/'
    },
    {
        title: 'SideScroller',
        description: 'Jogo de deslocamento lateral ',
        tech: ['Unreal Engine 5', 'Blueprint'],
        image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=800&q=80',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/'
    },
    {
        title: 'TriviaGame',
        description: 'Jogo de perguntas e respostas com variedade de temas',
        tech: ['Unreal Engine 5', 'Blueprint'],
        image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=800&q=80',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/'
    },
    {
        title: 'Sistema de Recomendação AI (Em Desenvolvimento) ',
        description: 'Sistema de recomendação baseado em deep learning para e-commerce.',
        tech: ['Python', 'TensorFlow', 'FastAPI'],
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
        type: 'Project',
        link: 'https://github.com/erickotico'
    },
   
    {
        title: 'Computer Vision em Tempo Real (Em Desenvolvimento) ',
        description: 'Sistema de detecção de objetos em tempo real usando YOLOv5.',
        tech: ['Python', 'PyTorch', 'OpenCV'],
        image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=800&q=80',
        type: 'Project',
        link: 'https://github.com/erickotico'
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
        
        // Define the link text based on project type
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