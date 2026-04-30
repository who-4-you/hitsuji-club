// ==========================================
// hitsuji.js
// 1. データの定義
// ==========================================

// ギャラリー画像データ
const galleryImages = [
    { src: 'images/food1.jpg', alt: '厳選された羊肉' },
    { src: 'images/food2.jpg', alt: 'レバー' },
    { src: 'images/food3.jpg', alt: 'ラムチョップ' },
    { src: 'images/food4.jpg', alt: '生ラム上ラム' },
    { src: 'images/interior1.jpg', alt: 'お酒' },
    { src: 'images/interior2.jpg', alt: 'テーブル席' },
    { src: 'images/interior3.jpg', alt: '外装' }
];

// ご予約・SNSリンクデータ
const snsLinks = [
    { name: '食べログ', url: 'https://tabelog.com/kanagawa/A1407/A140701/14101861/', class: 'btn-tabelog', icon: '' },
    { name: 'HOT PEPPER', url: 'https://www.hotpepper.jp/strJ004536456/', class: 'btn-hotpepper', icon: '' },
    { name: 'Instagram', url: 'https://www.instagram.com/hitsujiclub_1129/', class: 'btn-instagram', icon: 'fa-brands fa-instagram' }
];

// ==========================================
// 2. 画面の生成処理
// ==========================================

function initApp() {
    // ギャラリーのHTML生成
    const galleryContainer = document.getElementById('js-gallery-container');
    if (galleryContainer) {
        galleryContainer.innerHTML = galleryImages.map(img => `
            <div class="swiper-slide">
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `).join('');
    }

    // リンクボタンのHTML生成
    const linkGroup = document.getElementById('js-link-group');
    if (linkGroup) {
        linkGroup.innerHTML = snsLinks.map(link => `
            <a href="${link.url}" class="btn ${link.class}" target="_blank" rel="noopener">
                ${link.icon ? `<i class="${link.icon}"></i> ` : ''}${link.name}
            </a>
        `).join('');
    }

    // 要素を生成した後に各種機能を起動する
    initSwiper();
    initModal();
}

// ==========================================
// 3. 各種機能の初期化処理
// ==========================================

// Swiper（スライダー）の初期化
function initSwiper() {
    new Swiper('.mySwiper', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1.2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 30 }
        }
    });
}

// PDFポップアップメニューの初期化
function initModal() {
            const modal = document.getElementById("pdf-modal");
            const openBtn = document.getElementById("open-menu-btn");
            const closeBtn = document.querySelector(".close-btn");

            if(modal && openBtn && closeBtn) {
                openBtn.addEventListener("click", () => modal.style.display = "block");
                closeBtn.addEventListener("click", () => modal.style.display = "none");
                // モーダルの外側をクリックしたら閉じる
                window.addEventListener("click", (event) => {
                    if (event.target === modal) modal.style.display = "none";
                });
            }
}

// ページ読み込み完了時に処理を開始
document.addEventListener('DOMContentLoaded', initApp);