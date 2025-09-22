     class SolarLanding {
            constructor() {
                this.init();
            }

            init() {
                this.handleScroll();
                this.handleFormSubmission();
                this.animateOnScroll();
                this.smoothScrolling();
            }

            handleScroll() {
                const header = document.getElementById('header');
                
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 100) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                });
            }

            handleFormSubmission() {
                const form = document.getElementById('contactForm');
                
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    const submitBtn = form.querySelector('button[type="submit"]');
                    const originalText = submitBtn.textContent;
                    
                    // Simulate form submission
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        alert('Thank you! We\'ll contact you within 24 hours with your free solar quote.');
                        form.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                });
            }

            animateOnScroll() {
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, observerOptions);

                document.querySelectorAll('.fade-in').forEach(el => {
                    observer.observe(el);
                });
            }

            smoothScrolling() {
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    });
                });
            }
        }

        // Initialize the landing page
        document.addEventListener('DOMContentLoaded', () => {
            new SolarLanding();
        });

        // Add some interactive elements
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Animate statistics on scroll
        function animateStats() {
            const stats = document.querySelectorAll('.stat-number');
            
            stats.forEach(stat => {
                const finalValue = stat.textContent;
                const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
                const suffix = finalValue.replace(/[\d,]/g, '');
                
                let currentValue = 0;
                const increment = numericValue / 50;
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        currentValue = numericValue;
                        clearInterval(timer);
                    }
                    
                    stat.textContent = Math.floor(currentValue).toLocaleString() + suffix;
                }, 50);
            });
        }

        // Trigger stats animation when hero section is visible
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateStats, 1000);
                    heroObserver.unobserve(entry.target);
                }
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroObserver.observe(heroSection);
            }
        });
    


(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98321a43a688ef17',t:'MTc1ODU0NzI1Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
