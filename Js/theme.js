// Theme Management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.htmlElement = document.documentElement;
        this.bodyElement = document.body;
        this.storageKey = 'preferred-theme';
        
        this.init();
    }

    init() {
        // Load saved theme preference or use dark-theme as default
        const savedTheme = localStorage.getItem(this.storageKey) || 'dark-theme';
        this.setTheme(savedTheme);
        
        // Add event listener to toggle button
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    setTheme(theme) {
        // Remove all theme classes
        this.bodyElement.classList.remove('dark-theme', 'light-theme');
        
        // Add the new theme class
        if (theme === 'light-theme') {
            this.bodyElement.classList.add('light-theme');
        } else {
            this.bodyElement.classList.add('dark-theme');
        }
        
        // Save preference
        localStorage.setItem(this.storageKey, theme);
        
        // Update button accessibility
        if (this.themeToggle) {
            const iconLabel = theme === 'dark-theme' ? 'Mudar para tema claro' : 'Mudar para tema escuro';
            this.themeToggle.setAttribute('aria-label', iconLabel);
        }
    }

    toggleTheme() {
        const currentTheme = this.bodyElement.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        this.setTheme(newTheme);
    }
}

// Initialize theme manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
