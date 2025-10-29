// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu__link');

// Open mobile menu
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close mobile menu
if (menuClose) {
    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Close menu when clicking on link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = 80;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.character-card, .gallery-item, .product-card, .stat-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== FORM HANDLING =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send data to a server
        console.log('Form Data:', formData);

        // Show success message
        alert('お問い合わせありがとうございます。\n確認次第、ご連絡させていただきます。');

        // Reset form
        contactForm.reset();
    });
}

// ===== GALLERY LIGHTBOX EFFECT =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Here you could implement a lightbox/modal for image viewing
        console.log('Gallery item clicked');
    });
});

// ===== PRODUCT CARD INTERACTIONS =====
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== LAZY LOADING FOR IMAGES =====
// This will be useful when you add actual images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== STATS COUNTER ANIMATION =====
const statsNumbers = document.querySelectorAll('.stat-item__number');

const animateCounter = (element, target) => {
    if (target === '∞' || target === '100%') return;

    const numericTarget = parseInt(target);
    if (isNaN(numericTarget)) return;

    let current = 0;
    const increment = numericTarget / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
            element.textContent = String(numericTarget).padStart(2, '0');
            clearInterval(timer);
        } else {
            element.textContent = String(Math.floor(current)).padStart(2, '0');
        }
    }, 30);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target.textContent.trim();
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== CONSOLE MESSAGE =====
console.log('%cKUKU OFFICIAL', 'font-size: 24px; font-weight: 900; color: #252525;');
console.log('%cWorld\'s Only One Character', 'font-size: 14px; color: #FFB800;');
console.log('%c© 2025 KUKU OFFICIAL', 'font-size: 12px; color: #666666;');

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScroll = debounce(() => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== SLIDESHOW FUNCTIONALITY =====
let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slideshow__image');
    const dots = document.querySelectorAll('.slideshow__dot');

    if (!slides.length) return;

    // Wrap around
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlideIndex) {
            slide.classList.add('active');
        }
    });

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlideIndex) {
            dot.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
    showSlide(index);
}

// Auto-play slideshow (every 5 seconds)
let slideshowInterval = setInterval(() => {
    changeSlide(1);
}, 5000);

// Pause auto-play on hover
const slideshowContainer = document.querySelector('.slideshow');
if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', () => {
        clearInterval(slideshowInterval);
    });

    slideshowContainer.addEventListener('mouseleave', () => {
        slideshowInterval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    });
}

// ===== CHARACTER MODAL FUNCTIONALITY =====
const characterData = {
    hinoki: {
        name: 'ヒノキ',
        role: '守護の戦士 / The Sentinel',
        image: 'public/assets/characters/ヒノキ.JPG',
        description: '森の境界を守る勇敢な戦士。檜の木の強さと香りを持ち、揺るぎない忠誠心でKUKUを支える。冷静沈着で戦略的思考に長け、危機の際には最前線に立つ。剣術と防御魔法を得意とし、仲間を守ることを何よりも誇りに思っている。',
        details: {
            personality: '責任感が強く、仲間思い。常に冷静で、どんな状況でも的確な判断を下す。',
            abilities: '剣術、防御魔法、戦略立案',
            background: '古き時代から森を守護してきた一族の末裔。幼い頃から戦士としての訓練を受けてきた。'
        }
    },
    sakura: {
        name: 'サクラ',
        role: '癒しの詩人 / The Healer Poet',
        image: 'public/assets/characters/サクラ.JPG',
        description: '優しさと美しさを兼ね備えた癒しの存在。桜のように儚く美しい外見とは裏腹に、強い意志と深い知恵を持つ。詩と音楽を通じて仲間の心を癒し、希望を与える。治癒魔法に長け、傷ついた者たちを救う。',
        details: {
            personality: '温和で優しく、誰に対しても思いやりを持つ。芸術を愛し、美しいものに心を動かされる。',
            abilities: '治癒魔法、詩歌、音楽',
            background: '芸術家の家系に生まれ、幼い頃から詩と音楽に親しんできた。その才能は癒しの力と結びついている。'
        }
    },
    mizuki: {
        name: 'ミズキ',
        role: '水の賢者 / The Water Sage',
        image: 'public/assets/characters/ミズキ.jpg',
        description: '水のように流れる思考と深い洞察力を持つ賢者。冷静で知的、常に物事の本質を見抜く力を持つ。水魔法の使い手であり、その力は攻撃にも防御にも変幻自在。瞑想を好み、静かな場所で思索に耽ることが多い。',
        details: {
            personality: '知的で落ち着いており、物事を深く考える。感情を表に出すことは少ないが、内に強い情熱を秘めている。',
            abilities: '水魔法、予知、瞑想',
            background: '水鏡の泉で修行を積んだ賢者。水の精霊との対話を通じて、深い知恵を得た。'
        }
    },
    fuji: {
        name: 'フジ',
        role: '夢の織り手 / The Dream Weaver',
        image: 'public/assets/characters/フジ.JPG',
        description: '夢と現実の境界を行き来する神秘的な存在。藤の花のように優美で、その能力は他者の夢に干渉し、希望や勇気を与えることができる。想像力豊かで創造的、時に現実離れした発想で周囲を驚かせる。',
        details: {
            personality: '夢見がちで想像力豊か。ロマンチストで、美しい物語を紡ぐことを愛する。',
            abilities: '夢魔法、幻術、創造',
            background: '夢の世界と深い繋がりを持つ一族の出身。幼い頃から夢を操る力を持っていた。'
        }
    },
    rino: {
        name: 'リノ',
        role: '風の使者 / The Wind Messenger',
        image: 'public/assets/characters/リノ.jpg',
        description: '風のように自由で素早い行動派。好奇心旺盛で冒険を愛し、常に新しいことに挑戦する。風魔法を駆使して空を飛び、情報を集めることを得意とする。明るく社交的な性格で、グループのムードメーカー的存在。',
        details: {
            personality: '明るく元気で、常にポジティブ。自由を愛し、束縛を嫌う。友達思いで社交的。',
            abilities: '風魔法、飛行、偵察',
            background: '風見の塔で育ち、幼い頃から風と共に生きてきた。空を飛ぶことが何よりも好き。'
        }
    },
    sazanka: {
        name: 'サザンカ',
        role: '炎の守り手 / The Flame Guardian',
        image: 'public/assets/characters/サザンカ.JPG',
        description: '情熱と強い意志を持つ炎の使い手。山茶花のように冬でも鮮やかに咲く強さを持ち、どんな困難にも立ち向かう。炎魔法の達人であり、その力は破壊的だが、同時に暖かさと光をもたらす。正義感が強く、曲がったことが大嫌い。',
        details: {
            personality: '情熱的で正義感が強い。曲がったことが嫌いで、常に正直でいることを信条とする。',
            abilities: '炎魔法、戦闘、リーダーシップ',
            background: '炎の暖炉を守る一族の出身。代々受け継がれる永遠の炎を守り続けている。'
        }
    }
};

function openCharacterModal(characterId) {
    const modal = document.getElementById('characterModal');
    const modalInner = document.getElementById('characterModalInner');
    const char = characterData[characterId];

    if (!char) return;

    const content = `
        <div class="character-modal__header">
            <div class="character-modal__image">
                <img src="${char.image}" alt="${char.name}" id="characterImage">
                <a href="${char.image}" download="${char.name}.jpg" class="character-modal__download-btn">
                    📥 画像をダウンロード
                </a>
            </div>
            <div class="character-modal__info">
                <h2>${char.name}</h2>
                <p class="character-modal__role">${char.role}</p>
                <p class="character-modal__description">${char.description}</p>
            </div>
        </div>
        <div class="character-modal__cta">
            <a href="character.html" class="btn btn--primary">全キャラクター詳細を見る</a>
        </div>
    `;

    modalInner.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCharacterModal() {
    const modal = document.getElementById('characterModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
const characterModal = document.getElementById('characterModal');
if (characterModal) {
    characterModal.addEventListener('click', (e) => {
        if (e.target === characterModal) {
            closeCharacterModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCharacterModal();
    }
});
