// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Detectar tema do sistema
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
}

// Carregar tema salvo ou usar tema do sistema
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || getSystemTheme();
    body.className = theme;
}

// Salvar tema e aplicar
function saveTheme(theme) {
    body.className = theme;
    localStorage.setItem('theme', theme);
}

// Toggle entre temas
function toggleTheme() {
    const currentTheme = body.className;
    const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    saveTheme(newTheme);
}

// Event listener para o botão
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Monitorar mudanças no tema do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark-theme' : 'light-theme';
        body.className = newTheme;
    }
});

// Carregar tema ao iniciar
loadTheme();
