// ========================================
// PÁGINA DE DETALHES DO PROJETO
// ========================================
// Estrutura de um projeto:
// {
//     title: string
//     description: string
//     tech: array
//     image: string
//     type: 'Game' ou 'Projeto'
//     link: string
//     videoId: string (ID do YouTube)
// }

// Load project details from URL parameter
function loadProjectDetails() {
    // Obtém o ID da URL (projeto-detalhes.html?id=0)
    const params = new URLSearchParams(window.location.search);
    const projectId = parseInt(params.get('id'));

    // Valida se o projeto existe
    if (isNaN(projectId) || projectId < 0 || projectId >= projects.length) {
        document.body.innerHTML = '<div style="padding: 100px; text-align: center;"><h1>Projeto não encontrado</h1><p><a href="index.html#projects">Voltar aos Projetos</a></p></div>';
        return;
    }

    const project = projects[projectId];

    // Atualiza o conteúdo da página com os dados do projeto
    document.title = `${project.title} - Erick Monteiro`;
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectType').textContent = project.type;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectImage').src = project.image;
    document.getElementById('projectLink').href = project.link;
    
    // Define o texto do botão de acordo com o tipo
    const linkText = project.type === 'Projeto' ? 'Ver no GitHub' : 'Ver na Itch.io';
    document.getElementById('linkText').textContent = linkText;

    // Renderiza as tecnologias
    const techList = document.getElementById('techList');
    techList.innerHTML = '';
    project.tech.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag-detail';
        techTag.textContent = tech;
        techList.appendChild(techTag);
    });

    // Carrega o vídeo do YouTube
    const videoContainer = document.getElementById('demoVideo');
    if (project.videoId) {
        videoContainer.src = `https://www.youtube.com/embed/${project.videoId}`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProjectDetails);
