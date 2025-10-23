// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('section-active');
        section.classList.add('section-hidden');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('section-hidden');
        targetSection.classList.add('section-active');
    }
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('bg-lightblue', 'text-primary');
        link.classList.add('text-gray-700');
    });
    
    // Find and update the clicked nav link
    const activeLink = Array.from(navLinks).find(link => 
        link.textContent.trim().toLowerCase() === getSectionName(sectionId).toLowerCase()
    );
    
    if (activeLink) {
        activeLink.classList.remove('text-gray-700');
        activeLink.classList.add('bg-lightblue', 'text-primary');
    }
}

function getSectionName(sectionId) {
    const sectionNames = {
        'home': 'Início',
        'sobre': 'Sobre',
        'causas': 'Causas',
        'acoes': 'Ações',
        'apoio': 'Apoie',
        'contato': 'Contato'
    };
    return sectionNames[sectionId] || sectionId;
}

// Form handling
document.getElementById('petitionForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por assinar nossa petição! Sua voz faz a diferença.');
    this.reset();
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Initialize first section as active
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});