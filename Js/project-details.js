// Extrai um ID de vídeo do YouTube a partir de um ID ou URL
function extractYouTubeId(input) {
    if (!input) return null;
    const idRegex = /^[a-zA-Z0-9_-]{11}$/;
    if (idRegex.test(input)) return input;

    // Tenta extrair de URLs comuns
    try {
        const url = new URL(input);
        // Param v= (watch)
        const v = url.searchParams.get('v');
        if (v && idRegex.test(v)) return v;
        // path /embed/ID or /watch/ID or short youtu.be/ID
        const paths = url.pathname.split('/').filter(Boolean);
        const possible = paths.pop();
        if (possible && idRegex.test(possible)) return possible;
    } catch (e) {
    }

    // Tentar encontrar um ID dentro da string
    const anyId = input.match(/[a-zA-Z0-9_-]{11}/);
    return anyId ? anyId[0] : null;
}

// carrega os detalhes do projeto a partir do parâmetro da URL
function loadProjectDetails() {
    const params = new URLSearchParams(window.location.search);
    const projectId = parseInt(params.get('id'));

    // Valida se o projeto existe e se os dados centralizados estão disponíveis
    if (typeof projects === 'undefined' || isNaN(projectId) || projectId < 0 || projectId >= projects.length) {
        document.body.innerHTML = '<div style="padding: 100px; text-align: center;"><h1>Projeto não encontrado</h1><p><a href="index.html#projects">Voltar aos Projetos</a></p></div>';
        return;
    }

    const project = projects[projectId];

    // Atualiza o conteúdo da página com os detalhes do projeto
    document.title = `${project.title} - Erick Monteiro`;
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectType').textContent = project.type;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectImage').src = project.image;
    document.getElementById('projectLink').href = project.link;
    
    const linkText = project.type === 'github' ? 'Ver no GitHub' : 'Ver na Itch.io';
    document.getElementById('linkText').textContent = linkText;

    // Populate technologies
    const techList = document.getElementById('techList');
    techList.innerHTML = '';
    (project.tech || []).forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag-detail';
        techTag.textContent = tech;
        techList.appendChild(techTag);
    });

    // Load video (YouTube embed) — usa videoUrl direto do projeto
    const videoContainer = document.getElementById('demoVideo');
    if (videoContainer && project.videoUrl) {
        videoContainer.src = project.videoUrl;
        videoContainer.style.display = '';
    } else if (videoContainer) {
        videoContainer.style.display = 'none';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProjectDetails);
