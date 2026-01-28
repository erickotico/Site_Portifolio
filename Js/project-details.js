// Project details data with video demonstrations
const projectsData = [
    {
        title: 'TriviaGame',
        description: 'Jogo de perguntas e respostas com variedade de temas. Um projeto desenvolvido em Unreal Engine com Blueprint que oferece uma experiência de trivia envolvente com diferentes categorias de perguntas.',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/LogoTriviaGame.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/trivia-game',
        videoId: 'dQw4w9WgXcQ' // Substitua com o ID real do vídeo do YouTube
    },
    {
        title: 'Jogo da cobrinha{Alfa}',
        description: 'Jogo da cobrinha clássico desenvolvido em Unreal Engine 5.2. Este projeto recria o clássico jogo de cobra com gráficos modernos e mecânicas suaves, oferecendo uma jogabilidade nostálgica com tecnologia atual.',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/LogoSnakeClassicGame.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/jogo-da-cobrinha',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        title: 'Lendas da resistencia {Alfa}',
        description: 'Um Jogo JRPG de aventura e ação onde você enfrenta inimigos e explora um mundo cheio de mistérios. O jogo combina elementos de RPG clássico com mecânicas de ação em tempo real, oferecendo uma experiência imersiva e desafiadora.',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/ThumbLendasdaResistencia.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/lendas-da-resistencia',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        title: 'Swat Combat {Descontinuado}',
        description: 'Um Shooter Game em terceira pessoa, onde seu objetivo é matar os inimigos que aparecerá. Este projeto foi descontinuado mas representa uma exploração interessante de mecânicas de combate e IA em Unreal Engine 4.26.',
        tech: ['Unreal Engine 4.26', 'Blueprint'],
        image: './Img/GameSwatCombat.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        title: 'SideScroller {Descontinuado}',
        description: 'Jogo de deslocamento lateral onde você terá desafios onde terá que passar. Este projeto explorou mecânicas de plataforma e progressão de dificuldade, desenvolvido em Unreal Engine 5.2.',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/GameSideScroller.png',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        title: 'Zero Hero {Descontinuado}',
        description: 'Jogo FPS tático em equipes onde o desafio é eliminar os inimigos no determinado limite de tempo. Este projeto descontinuado representou um ambicioso esforço em criar um jogo competitivo com mecânicas multiplayer.',
        tech: ['Unreal Engine 5.2', 'Blueprint'],
        image: './Img/LogoZeroHourM.jpeg',
        type: 'Game',
        link: 'https://erickotico-dev.itch.io/',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        title: 'Empire Of Rebirth and Ruins',
        description: 'Este é um site para um jogo em desenvolvimento chamado "Empire Of Rebirth and Ruins". O site apresenta informações sobre o jogo, incluindo sua história, personagens, mecânicas de jogo e atualizações de desenvolvimento. Desenvolvido com tecnologias web modernas para proporcionar uma experiência informativa e envolvente aos visitantes interessados no jogo. BLALBALBALBALBL',
        tech: ['HTML5','CSS3','JavaScript'],
        image: './Img/LogoRPG.jpg',
        type: 'Projeto',
        link: 'https://github.com/erickotico/EmpireofRebithandRuins',
        videoId: 'dQw4w9WgXcQ'
    }
];

// Load project details from URL parameter
function loadProjectDetails() {
    const params = new URLSearchParams(window.location.search);
    const projectId = parseInt(params.get('id'));

    // Valida se o projeto existe
    if (isNaN(projectId) || projectId < 0 || projectId >= projects.length) {
        document.body.innerHTML = '<div style="padding: 100px; text-align: center;"><h1>Projeto não encontrado</h1><p><a href="index.html#projects">Voltar aos Projetos</a></p></div>';
        return;
    }

    const project = projects[projectId];

    // Update page content
    document.title = `${project.title} - Erick Monteiro`;
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectType').textContent = project.type;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectImage').src = project.image;
    document.getElementById('projectLink').href = project.link;
    
    const linkText = project.type === 'Project' ? 'Ver no GitHub' : 'Ver na Itch.io';
    document.getElementById('linkText').textContent = linkText;

    // Populate technologies
    const techList = document.getElementById('techList');
    techList.innerHTML = '';
    project.tech.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag-detail';
        techTag.textContent = tech;
        techList.appendChild(techTag);
    });

    // Load video (YouTube embed)
    const videoContainer = document.getElementById('demoVideo');
    if (project.videoId) {
        videoContainer.src = `https://www.youtube.com/embed/${project.videoId}`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProjectDetails);
