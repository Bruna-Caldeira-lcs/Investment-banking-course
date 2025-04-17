// Main JavaScript file for Investment Banking Course website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !mobileMenuBtn.contains(event.target)) {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Module navigation accordion
    const moduleNavItems = document.querySelectorAll('.module-nav-item');
    
    if (moduleNavItems.length > 0) {
        moduleNavItems.forEach(item => {
            const link = item.querySelector('.module-nav-link');
            const subTopics = item.querySelector('.sub-topics');
            
            if (link && subTopics) {
                link.addEventListener('click', function(e) {
                    if (this.classList.contains('has-submenu')) {
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                });
            }
        });
    }
    
    // Quiz functionality
    initializeQuiz();
    
    // Progress tracking
    updateProgressBars();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Quiz functionality
function initializeQuiz() {
    const quizContainer = document.querySelector('.quiz-container');
    
    if (!quizContainer) return;
    
    const questions = document.querySelectorAll('.question-container');
    const progressBar = document.querySelector('.progress-bar');
    const prevBtn = document.querySelector('.quiz-prev');
    const nextBtn = document.querySelector('.quiz-next');
    const submitBtn = document.querySelector('.quiz-submit');
    const resultContainer = document.querySelector('.quiz-result');
    
    let currentQuestion = 0;
    
    // Hide all questions except the first one
    if (questions.length > 0) {
        questions.forEach((question, index) => {
            if (index !== 0) {
                question.style.display = 'none';
            }
        });
        
        // Update progress bar
        if (progressBar) {
            progressBar.style.width = `${(1 / questions.length) * 100}%`;
        }
    }
    
    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentQuestion > 0) {
                questions[currentQuestion].style.display = 'none';
                currentQuestion--;
                questions[currentQuestion].style.display = 'block';
                
                // Update progress bar
                if (progressBar) {
                    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
                }
                
                // Show/hide buttons based on question position
                if (currentQuestion === 0) {
                    prevBtn.style.display = 'none';
                }
                nextBtn.style.display = 'block';
                submitBtn.style.display = 'none';
            }
        });
    }
    
    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentQuestion < questions.length - 1) {
                questions[currentQuestion].style.display = 'none';
                currentQuestion++;
                questions[currentQuestion].style.display = 'block';
                
                // Update progress bar
                if (progressBar) {
                    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
                }
                
                // Show/hide buttons based on question position
                prevBtn.style.display = 'block';
                
                if (currentQuestion === questions.length - 1) {
                    nextBtn.style.display = 'none';
                    submitBtn.style.display = 'block';
                }
            }
        });
    }
    
    // Submit button click
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            // Calculate score
            let score = 0;
            const totalQuestions = questions.length;
            
            questions.forEach(question => {
                const selectedOption = question.querySelector('.option-label.selected');
                if (selectedOption && selectedOption.dataset.correct === 'true') {
                    score++;
                }
            });
            
            // Hide questions and show result
            questions.forEach(question => {
                question.style.display = 'none';
            });
            
            if (prevBtn) prevBtn.style.display = 'none';
            if (submitBtn) submitBtn.style.display = 'none';
            
            if (resultContainer) {
                resultContainer.style.display = 'block';
                const scoreElement = resultContainer.querySelector('.result-score');
                const messageElement = resultContainer.querySelector('.result-message');
                
                if (scoreElement) {
                    scoreElement.textContent = `${score}/${totalQuestions}`;
                }
                
                if (messageElement) {
                    const percentage = (score / totalQuestions) * 100;
                    
                    if (percentage >= 80) {
                        messageElement.textContent = 'Excellent! You have a strong understanding of the material.';
                    } else if (percentage >= 60) {
                        messageElement.textContent = 'Good job! You have a solid grasp of the concepts.';
                    } else {
                        messageElement.textContent = 'Keep studying! Review the material and try again.';
                    }
                }
            }
            
            // Save result to local storage for progress tracking
            saveQuizResult(quizContainer.dataset.moduleId, score, totalQuestions);
        });
    }
    
    // Option selection
    const optionLabels = document.querySelectorAll('.option-label');
    
    if (optionLabels.length > 0) {
        optionLabels.forEach(label => {
            label.addEventListener('click', function() {
                // Deselect all options in the same question
                const questionContainer = this.closest('.question-container');
                const options = questionContainer.querySelectorAll('.option-label');
                
                options.forEach(option => {
                    option.classList.remove('selected');
                });
                
                // Select clicked option
                this.classList.add('selected');
            });
        });
    }
}

// Save quiz result to local storage
function saveQuizResult(moduleId, score, total) {
    if (!moduleId) return;
    
    let progress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    
    if (!progress[moduleId]) {
        progress[moduleId] = {
            completed: false,
            quizScore: 0,
            lastAccessed: new Date().toISOString()
        };
    }
    
    progress[moduleId].quizScore = score / total;
    progress[moduleId].lastAccessed = new Date().toISOString();
    
    // Mark as completed if score is 60% or higher
    if ((score / total) >= 0.6) {
        progress[moduleId].completed = true;
    }
    
    localStorage.setItem('courseProgress', JSON.stringify(progress));
    
    // Update progress display if on profile page
    updateProgressBars();
}

// Update progress bars on profile page
function updateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar-container .progress-bar');
    
    if (progressBars.length === 0) return;
    
    const progress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    
    progressBars.forEach(bar => {
        const moduleId = bar.dataset.moduleId;
        
        if (moduleId && progress[moduleId]) {
            const percentage = progress[moduleId].completed ? 100 : Math.round(progress[moduleId].quizScore * 100);
            bar.style.width = `${percentage}%`;
            
            // Update percentage text
            const percentageElement = bar.closest('.progress-card').querySelector('.progress-percentage span');
            if (percentageElement) {
                percentageElement.textContent = `${percentage}%`;
            }
        }
    });
    
    // Update overall progress
    const overallProgressBar = document.querySelector('.overall-progress .progress-bar');
    if (overallProgressBar) {
        const modules = Object.keys(progress).length;
        const completedModules = Object.values(progress).filter(module => module.completed).length;
        
        const overallPercentage = modules > 0 ? Math.round((completedModules / modules) * 100) : 0;
        overallProgressBar.style.width = `${overallPercentage}%`;
        
        const overallPercentageElement = document.querySelector('.overall-progress .progress-percentage span');
        if (overallPercentageElement) {
            overallPercentageElement.textContent = `${overallPercentage}%`;
        }
    }
}

// Track module views
function trackModuleView(moduleId) {
    if (!moduleId) return;
    
    let progress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    
    if (!progress[moduleId]) {
        progress[moduleId] = {
            completed: false,
            quizScore: 0,
            lastAccessed: new Date().toISOString()
        };
    } else {
        progress[moduleId].lastAccessed = new Date().toISOString();
    }
    
    localStorage.setItem('courseProgress', JSON.stringify(progress));
}

// Download tracking
function trackDownload(resourceId) {
    if (!resourceId) return;
    
    let downloads = JSON.parse(localStorage.getItem('resourceDownloads')) || {};
    
    if (!downloads[resourceId]) {
        downloads[resourceId] = 0;
    }
    
    downloads[resourceId]++;
    
    localStorage.setItem('resourceDownloads', JSON.stringify(downloads));
}

// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // For demo purposes, prevent actual form submission
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';
            
            // Simulate form processing
            setTimeout(() => {
                // Show success message
                const formContainer = form.parentElement;
                form.style.display = 'none';
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <h3>Submission Successful!</h3>
                    <p>Thank you for your submission. We'll get back to you shortly.</p>
                    <button class="btn btn-secondary">Back to Form</button>
                `;
                
                formContainer.appendChild(successMessage);
                
                // Add event listener to back button
                const backBtn = successMessage.querySelector('button');
                backBtn.addEventListener('click', function() {
                    successMessage.remove();
                    form.style.display = 'block';
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                });
            }, 1500);
        });
    });
});
