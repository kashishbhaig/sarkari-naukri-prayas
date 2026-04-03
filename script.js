// ===================================
// SARKARI NAUKRI PRAYAS - MAIN SCRIPT
// Professional TCS Exam Portal
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);

    // Initialize all components
    initStickyHeader();
    initMobileMenu();
    initSearchModal();
    initAnimatedCounters();
    populateExamsTable();
    populateNotifications();
    initFilters();
    initContactForm();
    initBackToTop();
    initSmoothScroll();
});

// ===================================
// STICKY HEADER
// ===================================
function initStickyHeader() {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            backToTop.classList.add('show');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('show');
        }
    });
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        }
    });
}

// ===================================
// SEARCH MODAL
// ===================================
function openSearch() {
    const searchModal = document.getElementById('search-modal');
    searchModal.classList.add('active');
    document.getElementById('search-input').focus();

    // Close on escape key
    document.addEventListener('keydown', closeSearchOnEscape);
}

function closeSearch() {
    const searchModal = document.getElementById('search-modal');
    searchModal.classList.remove('active');
    document.removeEventListener('keydown', closeSearchOnEscape);
}

function closeSearchOnEscape(e) {
    if (e.key === 'Escape') {
        closeSearch();
    }
}

// Close modal when clicking outside
document.getElementById('search-modal').addEventListener('click', (e) => {
    if (e.target.id === 'search-modal') {
        closeSearch();
    }
});

// ===================================
// ANIMATED COUNTERS
// ===================================
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
                if (counter.getAttribute('data-count') === '85') {
                    counter.textContent = '85+';
                } else if (counter.getAttribute('data-count') === '24') {
                    counter.textContent = '24/7';
                }
            }
        };

        updateCounter();
    };

    // Intersection Observer for counter animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ===================================
// EXAMS DATA & TABLE
// ===================================
const examsData = [
    { name: 'SSC CGL', category: 'ssc', fee: '₹100', eligibility: 'Graduate', pattern: 'Tier 1, 2, 3, 4', vacancies: 7000+ },
    { name: 'SSC CHSL', category: 'ssc', fee: '₹100', eligibility: '12th Pass', pattern: 'Tier 1, 2', vacancies: 5000+ },
    { name: 'SSC JE', category: 'ssc', fee: '₹100', eligibility: 'Diploma/Degree', pattern: 'Paper 1, 2', vacancies: 2000+ },
    { name: 'IBPS PO', category: 'banking', fee: '₹600', eligibility: 'Graduate', pattern: 'Prelim, Mains, Interview', vacancies: 4000+ },
    { name: 'SBI PO', category: 'banking', fee: '₹750', eligibility: 'Graduate', pattern: 'Prelim, Mains, Interview', vacancies: 2000+ },
    { name: 'IBPS Clerk', category: 'banking', fee: '₹600', eligibility: 'Graduate', pattern: 'Prelim, Mains', vacancies: 8000+ },
    { name: 'RRB NTPC', category: 'railways', fee: '₹100', eligibility: '10th/12th/Graduate', pattern: 'CBT 1, 2', vacancies: 35000+ },
    { name: 'RRB Group D', category: 'railways', fee: '₹100', eligibility: '10th Pass', pattern: 'CBT, Physical Test', vacancies: 100000+ },
    { name: 'UPSC IAS', category: 'upsc', fee: '₹200', eligibility: 'Graduate', pattern: 'Prelims, Mains, Interview', vacancies: 1000+ },
    { name: 'UPSC IPS', category: 'upsc', fee: '₹200', eligibility: 'Graduate', pattern: 'Prelims, Mains, Interview', vacancies: 200+ },
    { name: 'CTET', category: 'teaching', fee: '₹1000', eligibility: '12th/Graduate + B.Ed', pattern: 'Paper 1 & 2', vacancies: 40000+ },
    { name: 'NDA', category: 'defence', fee: '₹100', eligibility: '12th Pass', pattern: 'Written, SSB', vacancies: 400+ },
    { name: 'CDS', category: 'defence', fee: '₹200', eligibility: 'Graduate', pattern: 'Written, SSB', vacancies: 500+ },
    { name: 'AFCAT', category: 'defence', fee: '₹650', eligibility: 'Graduate', pattern: 'Online Test, EKT', vacancies: 400+ },
    { name: 'BPSC', category: 'state-psc', fee: '₹750', eligibility: 'Graduate', pattern: 'Prelims, Mains', vacancies: 2000+ },
    { name: 'MPSC', category: 'state-psc', fee: '₹500', eligibility: 'Graduate', pattern: 'Prelims, Mains', vacancies: 2000+ },
    { name: 'UPPSC', category: 'state-psc', fee: '₹200', eligibility: 'Graduate', pattern: 'Prelims, Mains, Interview', vacancies: 1000+ },
    { name: 'RPSC', category: 'state-psc', fee: '₹500', eligibility: 'Graduate', pattern: 'Prelims, Mains', vacancies: 1000+ },
    { name: 'TNPSC', category: 'state-psc', fee: '₹200', eligibility: 'Graduate', pattern: 'Prelims, Mains', vacancies: 5000+ },
    { name: 'APPSC', category: 'state-psc', fee: '₹300', eligibility: 'Graduate', pattern: 'Prelims, Mains', vacancies: 2000+ },
    { name: 'KVS', category: 'teaching', fee: '₹1500', eligibility: 'Post Graduate + B.Ed', pattern: 'Written, Interview', vacancies: 13000+ },
    { name: 'NVS', category: 'teaching', fee: '₹500', eligibility: 'Post Graduate + B.Ed', pattern: 'Written, Interview', vacancies: 4000+ },
    // TCS Exams
    { name: 'TCS NQT', category: 'tcs', fee: 'Free', eligibility: 'Graduate (Any Stream)', pattern: 'Online Test - 90 mins', vacancies: 'Unlimited' },
    { name: 'TCS Digital', category: 'tcs', fee: 'Free', eligibility: 'Graduate - CS/IT', pattern: 'Coding Test + Interview', vacancies: 'As per requirement' },
    { name: 'TCS Fresher Hiring', category: 'tcs', fee: 'Free', eligibility: 'BE/B.Tech/ME/M.Tech', pattern: 'Written + Technical + HR', vacancies: 50000+ },
    { name: 'TCS Experienced Hiring', category: 'tcs', fee: 'Free', eligibility: 'Experience: 0-10 years', pattern: 'Technical Interview', vacancies: 'Multiple' },
];

function populateExamsTable(filter = 'all') {
    const tbody = document.getElementById('exams-table-body');
    const filteredExams = filter === 'all'
        ? examsData
        : examsData.filter(exam => exam.category === filter);

    tbody.innerHTML = filteredExams.map(exam => `
        <tr>
            <td><strong>${exam.name}</strong><br><small class="text-light">${exam.vacancies} Vacancies</small></td>
            <td><span class="category-badge">${exam.category.toUpperCase()}</span></td>
            <td>${exam.fee}</td>
            <td>${exam.eligibility}</td>
            <td>${exam.pattern}</td>
            <td>
                <button class="table-action-btn" onclick="showToast('Details for ${exam.name} are being loaded...', 'info')">
                    View Details
                </button>
            </td>
        </tr>
    `).join('');
}

// ===================================
// EXAM FILTERS
// ===================================
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Filter table
            const filter = btn.getAttribute('data-filter');
            populateExamsTable(filter);
        });
    });
}

// ===================================
// NOTIFICATIONS DATA
// ===================================
const notificationsData = [
    {
        date: 'April 3, 2026',
        category: 'SSC',
        title: 'SSC CGL 2026 Notification Released',
        desc: 'Staff Selection Commission has released the notification for Combined Graduate Level Examination 2026. Applications open till April 30.',
        link: '#'
    },
    {
        date: 'April 2, 2026',
        category: 'Banking',
        title: 'IBPS PO Exam Date 2026 Announced',
        desc: 'Institute of Banking Personnel Selection has announced exam dates for Probationary Officers. Prelims in October-November 2026.',
        link: '#'
    },
    {
        date: 'April 1, 2026',
        category: 'Railways',
        title: 'RRB NTPC 2026 Application Started',
        desc: 'Railway Recruitment Board has started online applications for Non-Technical Popular Categories. Last date: April 25.',
        link: '#'
    },
    {
        date: 'March 31, 2026',
        category: 'UPSC',
        title: 'UPSC IAS 2026 Prelims Admit Card Released',
        desc: 'Union Public Service Commission has released admit cards for Civil Services Preliminary Examination 2026.',
        link: '#'
    },
    {
        date: 'March 30, 2026',
        category: 'Defence',
        title: 'NDA 2 2026 Notification Out',
        desc: 'National Defence Academy and Naval Academy Examination (II) 2026 notification released. 400+ vacancies.',
        link: '#'
    },
    {
        date: 'March 29, 2026',
        category: 'Teaching',
        title: 'CTET December 2026 Registration Begins',
        desc: 'Central Teacher Eligibility Test December 2026 online registration has started. Apply before May 15.',
        link: '#'
    }
];

function populateNotifications() {
    const notificationsGrid = document.getElementById('notifications-grid');

    notificationsGrid.innerHTML = notificationsData.map(notification => `
        <div class="notification-card">
            <div class="notification-header">
                <span class="notification-date">
                    <i class="far fa-calendar-alt"></i>
                    ${notification.date}
                </span>
                <span class="notification-category">${notification.category}</span>
            </div>
            <h3 class="notification-title">${notification.title}</h3>
            <p class="notification-desc">${notification.desc}</p>
            <a href="${notification.link}" class="notification-link">
                Read More <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `).join('');
}

// ===================================
// CONTACT FORM
// ===================================
function initContactForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showToast('Please fill all required fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission
        showToast('Thank you! Your message has been sent. We will get back to you soon.', 'success');
        form.reset();
    });
}

// ===================================
// BACK TO TOP
// ===================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// SMOOTH SCROLLING
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// TOAST NOTIFICATION
// ===================================
function showToast(message, type = 'info') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Hide and remove toast after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button visibility
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// ===================================
// ACTIVE NAV LINK ON SCROLL
// ===================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
});

// ===================================
// LAZY LOADING (if needed for future)
// ===================================
// Intersection Observer for lazy loading images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Print current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2026', year);
    }
});

console.log('Sarkari Naukri Prayas - Website Loaded Successfully!');
