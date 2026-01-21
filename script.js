// DOM ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Elements
    const communicationBtn = document.getElementById('communicationBtn');
    const githubBtn = document.getElementById('githubBtn');
    
    // Communication button click event
    if (communicationBtn) {
        communicationBtn.addEventListener('click', function() {
            console.log('Communication button clicked!');
            window.open('https://www.facebook.com/', '_blank');
        });
    }
    
    // GitHub button click event
    if (githubBtn) {
        githubBtn.addEventListener('click', function() {
            console.log('GitHub button clicked!');
            window.open('https://github.com/Nipun2008520', '_blank');
        });
    }
    
    // Console message
    console.log('Website loaded successfully! 🎉');
});

// Page load event
window.addEventListener('load', function() {
    console.log('All resources loaded!');
});