/**
 * SPCK SHOWCASE HUB - MINDX WEB BASIC
 * Bộ Điều Khiển Tương Tác, Tìm Kiếm, Lọc Đề Tài & Bộ Giả Lập Device Simulator
 */

// DỮ LIỆU ĐẦY ĐỦ 10 DỰ ÁN MẪU SPCK
const SPCK_PROJECTS = [
  {
    id: 1,
    folder: '01-coffee-shop',
    title: 'Cà Phê Mộc | Artisan Roastery',
    subtitle: 'Quán cà phê rang mộc Tây Nguyên & Đặt hàng online',
    category: 'fnb',
    categoryLabel: 'Ẩm thực & Quán cafe',
    difficulty: 'Nâng cao (Multi-page)',
    badgeClass: 'badge-fnb',
    icon: '☕',
    accentColor: '#c88a48',
    gradient: 'linear-gradient(135deg, #1a0f0b 0%, #543322 50%, #c88a48 100%)',
    desc: 'Website thương hiệu cà phê rang mộc nguyên chất từ Đắk Lắk & Cầu Đất. Thiết kế phong cách Artisan ấm cúng, sang trọng với 3 trang hoàn chỉnh: Trang chủ, Thực đơn và Đặt món online.',
    highlights: [
      'Cấu trúc đa trang hoàn chỉnh (index.html, menu.html, order.html)',
      'Tương tác chọn Size, lượng Đường/Đá, voucher bằng CSS :checked',
      'Hộp thoại (Modal) xác nhận đơn hàng 100% bằng Pure CSS'
    ],
    tags: ['HTML5 Semantic', 'Multi-Page', 'CSS Variables', 'Pure CSS Modal', 'Form Order'],
    files: ['index.html', 'menu.html', 'order.html', 'styles.css'],
    previewUrl: '01-coffee-shop/index.html'
  },
  {
    id: 2,
    folder: '02-travel-landing-page',
    title: 'Explore Vietnam | Du Lịch Kỳ Thú',
    subtitle: 'Landing page quảng bá danh lam thắng cảnh Việt Nam',
    category: 'travel',
    categoryLabel: 'Du lịch & Khám phá',
    difficulty: 'Cơ bản+',
    badgeClass: 'badge-travel',
    icon: '✈️',
    accentColor: '#007791',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #007791 60%, #06b6d4 100%)',
    desc: 'Landing page du lịch hiện đại giới thiệu 6 thắng cảnh trứ danh từ Bắc vào Nam (Vịnh Hạ Long, Phố cổ Hội An, Đảo ngọc Phú Quốc, Sa Pa, Ninh Bình, Động Phong Nha) kèm form tư vấn tour.',
    highlights: [
      'Bố cục Landing Page chuẩn tỷ lệ vàng với Hero video/hình nền ấn tượng',
      'CSS Grid hiển thị danh sách thẻ điểm đến với nhãn di sản UNESCO',
      'Biểu mẫu tư vấn tour du lịch có chọn điểm đến tự động'
    ],
    tags: ['Landing Page', 'CSS Grid', 'Travel Card', 'Hero Banner', 'Responsive Nav'],
    files: ['index.html', 'styles.css'],
    previewUrl: '02-travel-landing-page/index.html'
  },
  {
    id: 3,
    folder: '03-tech-shop',
    title: 'TechZone | Siêu Thị Đồ Công Nghệ',
    subtitle: 'Cửa hàng thiết bị số, laptop AI & phụ kiện thông minh',
    category: 'ecommerce',
    categoryLabel: 'Thương mại điện tử',
    difficulty: 'Trung cấp',
    badgeClass: 'badge-ecommerce',
    icon: '💻',
    accentColor: '#2563eb',
    gradient: 'linear-gradient(135deg, #090d16 0%, #1e3a8a 50%, #2563eb 100%)',
    desc: 'Showroom công nghệ hiện đại với bảng danh mục sản phẩm mũi nhọn: Laptop AI thế hệ mới, Smartphone Flagship, Tai nghe chống ồn chủ động, Smartwatch đo nhịp tim cùng chính sách bảo hành 1 đổi 1.',
    highlights: [
      'Giao diện Showroom sản phẩm điện tử công nghệ cao cấp',
      'Thông số cấu hình tóm tắt trực quan (Chipset, RAM, Dung lượng pin)',
      'Huy hiệu giảm giá khuyến mãi (Discount Badges) và đánh giá sao'
    ],
    tags: ['E-Commerce', 'Tech Specs', 'CSS Flexbox', 'Product Grid', 'Mega Footer'],
    files: ['index.html', 'styles.css'],
    previewUrl: '03-tech-shop/index.html'
  },
  {
    id: 4,
    folder: '04-sneaker-store',
    title: 'Sneaker Store | Giày & Streetwear',
    subtitle: 'Thế giới sneaker thể thao và phong cách thời trang đường phố',
    category: 'ecommerce',
    categoryLabel: 'Thương mại điện tử',
    difficulty: 'Trung cấp',
    badgeClass: 'badge-ecommerce',
    icon: '👟',
    accentColor: '#ea580c',
    gradient: 'linear-gradient(135deg, #09090b 0%, #1c1917 50%, #ea580c 100%)',
    desc: 'Cửa hàng thời trang sneaker trẻ trung mang phong cách đường phố. Trưng bày những mẫu giày hot trend đình đám (Jordan, Yeezy, Air Max), tính năng chọn size giày tương tác và banner đếm ngược giảm giá.',
    highlights: [
      'Tone màu Dark Mode cá tính kết hợp điểm nhấn màu cam Neon thể thao',
      'Bộ chọn Size giày trực quan bằng kỹ thuật CSS Radio Buttons',
      'Hiệu ứng hình ảnh sản phẩm phóng to mượt mà khi di chuột (Zoom Hover)'
    ],
    tags: ['Dark Theme', 'Fashion & Shoes', 'Size Selector', 'CSS Hover FX', 'Streetwear'],
    files: ['index.html', 'styles.css'],
    previewUrl: '04-sneaker-store/index.html'
  },
  {
    id: 5,
    folder: '05-restaurant',
    title: 'Bếp Quê | Ẩm Thực Cơm Nhà Việt',
    subtitle: 'Nhà hàng món ngon 3 miền & Dịch vụ đặt bàn ăn trực tuyến',
    category: 'fnb',
    categoryLabel: 'Ẩm thực & Quán cafe',
    difficulty: 'Cơ bản+',
    badgeClass: 'badge-fnb',
    icon: '🍲',
    accentColor: '#991b1b',
    gradient: 'linear-gradient(135deg, #1f120e 0%, #7f1d1d 60%, #b45309 100%)',
    desc: 'Website nhà hàng truyền thống tôn vinh hương vị cơm nhà đất Việt. Bảng thực đơn đặc sản (Phở bò Hà Nội, Cơm tấm Sài Gòn, Bún bò Huế, Chả cá Lã Vọng) cùng form đặt bàn trước tiện lợi.',
    highlights: [
      'Màu sắc mộc mạc hoài niệm, tạo cảm giác ấm áp và đậm nét văn hóa Việt',
      'Bảng thực đơn phân loại kèm hình ảnh món ăn đặc sắc và giá cả minh bạch',
      'Form đăng ký giữ chỗ đặt bàn trực tuyến theo ngày giờ và số lượng khách'
    ],
    tags: ['F&B Restaurant', 'Traditional Food', 'Booking Form', 'Menu Grid', 'Culture'],
    files: ['index.html', 'styles.css'],
    previewUrl: '05-restaurant/index.html'
  },
  {
    id: 6,
    folder: '06-gaming-website',
    title: 'Cyber Quest 2099 | Game RPG',
    subtitle: 'Trang giới thiệu siêu phẩm game hành động viễn tưởng tương lai',
    category: 'gaming',
    categoryLabel: 'Gaming & Âm nhạc',
    difficulty: 'Nâng cao',
    badgeClass: 'badge-gaming',
    icon: '🎮',
    accentColor: '#00f0ff',
    gradient: 'linear-gradient(135deg, #050510 0%, #170d2f 50%, #00f0ff 100%)',
    desc: 'Trang chủ quảng bá tựa game RPG thế giới mở bối cảnh viễn tưởng năm 2099. Đậm chất Cyberpunk với hiệu ứng ánh sáng Neon Glow, thẻ phe phái nhân vật chiến đấu, trailer và bảng cấu hình máy tính.',
    highlights: [
      'Giao diện Cyberpunk Glassmorphism viễn tưởng cực kỳ độc đáo và bắt mắt',
      'Hiệu ứng viền phát sáng Neon Glow & chữ hiệu ứng gradient sắc nét',
      'Bảng thông số đối chiếu cấu hình tối thiểu vs đề nghị (System Requirements)'
    ],
    tags: ['Cyberpunk UI', 'Neon Glow', 'Gaming Landing', 'System Specs', 'Sci-Fi'],
    files: ['index.html', 'styles.css'],
    previewUrl: '06-gaming-website/index.html'
  },
  {
    id: 7,
    folder: '07-book-store',
    title: 'Tri Thức Bookstore | Hiệu Sách Online',
    subtitle: 'Không gian văn hóa đọc, tác phẩm văn học & sách kỹ năng sống',
    category: 'ecommerce',
    categoryLabel: 'Thương mại điện tử',
    difficulty: 'Trung cấp',
    badgeClass: 'badge-ecommerce',
    icon: '📚',
    accentColor: '#154734',
    gradient: 'linear-gradient(135deg, #061e14 0%, #154734 60%, #34d399 100%)',
    desc: 'Hiệu sách trực tuyến tôn vinh tri thức nhân loại. Giới thiệu các đầu sách kinh điển, sách phát triển bản thân, công nghệ và phân loại theo thể loại, kèm trích dẫn văn học bất hủ.',
    highlights: [
      'Phong cách cổ điển trang nhã với tone màu xanh rừng sâu và nền ngà',
      'Thẻ sách đổ bóng 3D mô phỏng bìa sách thực tế chân thực',
      'Khu vực trích dẫn danh ngôn (Quote Section) và form gia nhập CLB đọc sách'
    ],
    tags: ['Bookstore', 'Classic Editorial', 'Card 3D Shadow', 'Quote Typography', 'Culture'],
    files: ['index.html', 'styles.css'],
    previewUrl: '07-book-store/index.html'
  },
  {
    id: 8,
    folder: '08-music-fanpage',
    title: 'Acoustic Soul | Ban Nhạc & Âm Nhạc',
    subtitle: 'Fanpage chính thức của ban nhạc, danh sách ca khúc & tour lưu diễn',
    category: 'gaming',
    categoryLabel: 'Gaming & Âm nhạc',
    difficulty: 'Trung cấp',
    badgeClass: 'badge-gaming',
    icon: '🎵',
    accentColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #180d24 0%, #4c1d95 60%, #8b5cf6 100%)',
    desc: 'Trang thông tin và fanpage chính thức dành cho ban nhạc và cộng đồng người hâm mộ. Bao gồm thanh nghe nhạc mô phỏng, danh sách các ca khúc (Tracklist) có thời lượng và lịch trình diễn concert.',
    highlights: [
      'Giao diện Dark Night huyền ảo với điểm nhấn tím Neon nghệ sĩ',
      'Thanh điều khiển nghe nhạc trực quan (Mock Audio Player Controller)',
      'Lịch trình biểu diễn Live Tour kèm nút đặt vé tham gia trực tuyến'
    ],
    tags: ['Music Artist', 'Audio Player UI', 'Tracklist Table', 'Tour Schedule', 'Dark Mode'],
    files: ['index.html', 'styles.css'],
    previewUrl: '08-music-fanpage/index.html'
  },
  {
    id: 9,
    folder: '09-school-club',
    title: 'MindX Coding Club | CLB Học Đường',
    subtitle: 'Cộng đồng học sinh - sinh viên đam mê lập trình & sáng tạo công nghệ',
    category: 'club',
    categoryLabel: 'Câu lạc bộ & Học đường',
    difficulty: 'Cơ bản+',
    badgeClass: 'badge-club',
    icon: '🚀',
    accentColor: '#2563eb',
    gradient: 'linear-gradient(135deg, #09132c 0%, #1e40af 60%, #06b6d4 100%)',
    desc: 'Website hoạt động của câu lạc bộ lập trình công nghệ học đường. Giới thiệu các hoạt động đào tạo, sự kiện Hackathon định kỳ, dự án học viên tiêu biểu và form tuyển thành viên thế hệ mới.',
    highlights: [
      'Bố cục chuyên nghiệp, trẻ trung và năng động cho mô hình câu lạc bộ',
      'Timeline lộ trình workshop và các kỹ năng công nghệ sinh viên được học',
      'Biểu mẫu đăng ký ứng tuyển thành viên câu lạc bộ chi tiết'
    ],
    tags: ['School Club', 'Education', 'Activity Timeline', 'Registration Form', 'EdTech'],
    files: ['index.html', 'styles.css'],
    previewUrl: '09-school-club/index.html'
  },
  {
    id: 10,
    folder: '10-mini-marketplace',
    title: 'Mini Market | Siêu Thị Nông Sản Tiện Lợi',
    subtitle: 'Chợ thực phẩm sạch hữu cơ, rau củ quả tươi & đồ dùng gia đình',
    category: 'ecommerce',
    categoryLabel: 'Thương mại điện tử',
    difficulty: 'Trung cấp',
    badgeClass: 'badge-ecommerce',
    icon: '🥦',
    accentColor: '#ea580c',
    gradient: 'linear-gradient(135deg, #1c140c 0%, #c2410c 50%, #16a34a 100%)',
    desc: 'Siêu thị mini trực tuyến chuyên cung cấp rau củ quả tươi sạch chuẩn VietGAP, trái cây nhiệt đới, bánh mì dinh dưỡng và nhu yếu phẩm hàng ngày. Cam kết giao hàng siêu tốc trong 30 phút.',
    highlights: [
      'Giao diện tươi sáng, kích thích mua sắm với tông màu cam đất & xanh lá tươi',
      'Thẻ sản phẩm có đơn vị tính theo khối lượng (kg, hộp, túi) và nút thêm giỏ hàng',
      'Cam kết chất lượng 4 tiêu chí vàng (Tươi sạch, Không chất bảo quản, Giao nhanh)'
    ],
    tags: ['Mini Market', 'Organic Groceries', 'Fast Delivery', 'Product Cards', 'E-Commerce'],
    files: ['index.html', 'styles.css'],
    previewUrl: '10-mini-marketplace/index.html'
  }
];

// TRẠNG THÁI HIỆN TẠI CỦA ỨNG DỤNG
let currentFilter = 'all';
let currentSearch = '';
let currentViewMode = 'grid'; // 'grid' | 'list'
let activeProjectForModal = null;

// KHỞI CHẠY ỨNG DỤNG KHI DOM SẴN SÀNG
function initApp() {
  initTheme();
  renderProjectCards();
  initFilterTabs();
  initSearch();
  initDeviceSimulator();
  initViewModeToggle();
  initBackToTop();
  initRandomButton();
  initKeyboardShortcuts();
  populateModalDropdown();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// --- 1. RENDER DANH SÁCH 10 DỰ ÁN MẪU ---
function renderProjectCards() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  // Lọc theo danh mục và tìm kiếm
  const filtered = SPCK_PROJECTS.filter(project => {
    const matchesFilter = currentFilter === 'all' || project.category === currentFilter;
    const searchLower = currentSearch.toLowerCase().trim();
    const matchesSearch = !searchLower || (
      project.title.toLowerCase().includes(searchLower) ||
      project.subtitle.toLowerCase().includes(searchLower) ||
      project.desc.toLowerCase().includes(searchLower) ||
      project.folder.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
    return matchesFilter && matchesSearch;
  });

  // Cập nhật số lượng hiển thị
  const countLabel = document.getElementById('result-count');
  if (countLabel) {
    countLabel.textContent = `Hiển thị ${filtered.length} / ${SPCK_PROJECTS.length} dự án`;
  }

  // Trường hợp không tìm thấy
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">Không tìm thấy đề tài phù hợp</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">
          Hãy thử đổi từ khóa tìm kiếm hoặc chọn danh mục "Tất Cả".
        </p>
        <button class="filter-tab active" onclick="resetFilters()">Xem Tất Cả 10 Đề Tài</button>
      </div>
    `;
    return;
  }

  // Render các thẻ dự án
  container.innerHTML = filtered.map(project => {
    return `
      <article class="project-card" data-id="${project.id}" data-category="${project.category}">
        <!-- Mockup Window Header -->
        <div class="card-mockup">
          <div class="mockup-header">
            <div class="mockup-dots">
              <span class="mockup-dot dot-red"></span>
              <span class="mockup-dot dot-yellow"></span>
              <span class="mockup-dot dot-green"></span>
            </div>
            <div class="mockup-url">📁 ${project.folder}/index.html</div>
          </div>
          <div class="mockup-banner" style="background: ${project.gradient};">
            <span class="mockup-badge-top">${project.difficulty}</span>
            <div class="mockup-banner-content">
              <div class="mockup-icon">${project.icon}</div>
              <div class="mockup-title-preview">${project.title.split('|')[0].trim()}</div>
              <div class="mockup-subtitle-preview">${project.subtitle}</div>
            </div>
          </div>
        </div>

        <!-- Card Body Content -->
        <div class="card-body">
          <div class="card-meta-row">
            <span class="card-num">#${String(project.id).padStart(2, '0')}</span>
            <span class="card-category-badge ${project.badgeClass}">${project.categoryLabel}</span>
          </div>

          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.desc}</p>

          <!-- Điểm nổi bật học tập -->
          <div class="card-highlights">
            <div class="card-highlights-title">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Kiến thức & Kỹ năng nổi bật
            </div>
            <ul class="card-highlights-list">
              ${project.highlights.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <!-- Tags -->
          <div class="card-tags">
            ${project.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
          </div>

          <!-- Action Buttons -->
          <div class="card-actions">
            <button class="btn-card btn-card-preview" onclick="openPreviewModal(${project.id})" title="Xem thử trực tiếp trên màn hình Laptop, Tablet, Mobile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              Live Preview
            </button>
            <a href="${project.previewUrl}" target="_blank" class="btn-card btn-card-open" title="Mở trang web trong tab mới">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Mở Tab Mới
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// --- 2. XỬ LÝ BỘ LỌC DANH MỤC (CATEGORY TABS) ---
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter') || 'all';
      renderProjectCards();
    });
  });
}

function resetFilters() {
  currentFilter = 'all';
  currentSearch = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(t => {
    if (t.getAttribute('data-filter') === 'all') t.classList.add('active');
    else t.classList.remove('active');
  });
  renderProjectCards();
}

// --- 3. XỬ LÝ THANH TÌM KIẾM TRỰC TIẾP (LIVE SEARCH) ---
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');
  const shortcutHint = document.getElementById('search-shortcut');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    if (clearBtn && shortcutHint) {
      if (currentSearch.length > 0) {
        clearBtn.style.display = 'flex';
        shortcutHint.style.display = 'none';
      } else {
        clearBtn.style.display = 'none';
        shortcutHint.style.display = 'inline-flex';
      }
    }
    renderProjectCards();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      clearBtn.style.display = 'none';
      if (shortcutHint) shortcutHint.style.display = 'inline-flex';
      searchInput.focus();
      renderProjectCards();
    });
  }
}

// --- 4. BỘ GIẢ LẬP DEVICE SIMULATOR & IFRAME PREVIEW MODAL ---
function initDeviceSimulator() {
  const modal = document.getElementById('preview-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const deviceBtns = document.querySelectorAll('.btn-device');
  const iframeContainer = document.getElementById('iframe-container');
  const reloadBtn = document.getElementById('modal-reload-btn');
  const externalBtn = document.getElementById('modal-external-btn');

  // Đóng Modal khi bấm X hoặc click nền đen bên ngoài
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closePreviewModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePreviewModal();
    });
  }

  // Chuyển đổi kích thước thiết bị: Desktop / Tablet / Mobile
  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const device = btn.getAttribute('data-device');
      if (iframeContainer) {
        iframeContainer.className = `iframe-container device-${device}`;
      }
    });
  });

  // Nút Tải Lại iframe
  if (reloadBtn) {
    reloadBtn.addEventListener('click', () => {
      const iframe = document.getElementById('preview-iframe');
      if (iframe) {
        showIframeLoader();
        iframe.src = iframe.src;
      }
    });
  }

  // Nút Mở trang web ngoài tab mới từ Modal
  if (externalBtn) {
    externalBtn.addEventListener('click', () => {
      if (activeProjectForModal) {
        window.open(activeProjectForModal.previewUrl, '_blank');
      }
    });
  }
}

function populateModalDropdown() {
  const select = document.getElementById('modal-project-select');
  if (!select) return;

  select.innerHTML = SPCK_PROJECTS.map(p => `
    <option value="${p.id}">#${String(p.id).padStart(2, '0')} - ${p.title.split('|')[0].trim()}</option>
  `).join('');

  select.addEventListener('change', (e) => {
    const selectedId = parseInt(e.target.value, 10);
    openPreviewModal(selectedId);
  });
}

function openPreviewModal(projectId) {
  const project = SPCK_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  activeProjectForModal = project;

  const modal = document.getElementById('preview-modal');
  const iframe = document.getElementById('preview-iframe');
  const select = document.getElementById('modal-project-select');
  const urlBadge = document.getElementById('modal-url-badge');

  if (select) select.value = project.id;
  if (urlBadge) urlBadge.textContent = `${project.folder}/index.html`;

  showIframeLoader();

  if (iframe) {
    iframe.src = project.previewUrl;
    iframe.onload = () => {
      hideIframeLoader();
    };
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Khóa cuộn trang chính khi mở modal
  }
}

function closePreviewModal() {
  const modal = document.getElementById('preview-modal');
  const iframe = document.getElementById('preview-iframe');

  if (modal) modal.classList.remove('active');
  if (iframe) iframe.src = 'about:blank'; // Giải phóng bộ nhớ iframe
  document.body.style.overflow = '';
  activeProjectForModal = null;
}

function showIframeLoader() {
  const loader = document.getElementById('iframe-loader');
  if (loader) loader.style.display = 'flex';
}

function hideIframeLoader() {
  const loader = document.getElementById('iframe-loader');
  if (loader) loader.style.display = 'none';
}

// --- 5. CHUYỂN ĐỔI CHẾ ĐỘ HIỂN THỊ (GRID VS LIST) ---
function initViewModeToggle() {
  const btnGrid = document.getElementById('view-grid');
  const btnList = document.getElementById('view-list');
  const container = document.getElementById('projects-container');

  if (btnGrid && btnList && container) {
    btnGrid.addEventListener('click', () => {
      btnGrid.classList.add('active');
      btnList.classList.remove('active');
      container.classList.remove('view-list');
    });

    btnList.addEventListener('click', () => {
      btnList.classList.add('active');
      btnGrid.classList.remove('active');
      container.classList.add('view-list');
    });
  }
}

// --- 6. XEM NGẪU NHIÊN 1 DỰ ÁN (SURPRISE ME) ---
function initRandomButton() {
  const btn = document.getElementById('btn-random');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * SPCK_PROJECTS.length);
    const chosen = SPCK_PROJECTS[randomIndex];
    openPreviewModal(chosen.id);
    showToast(`Đang mở ngẫu nhiên: ${chosen.title.split('|')[0].trim()}!`);
  });
}

// --- 7. CHUYỂN ĐỔI GIAO DIỆN SÁNG / TỐI (DARK MODE) ---
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('spck_hub_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else if (systemPrefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('spck_hub_theme', next);
      updateThemeIcon(next);
      showToast(`Đã chuyển sang giao diện ${next === 'dark' ? 'Tối (Dark)' : 'Sáng (Light)'}`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-toggle-icon');
  if (!icon) return;
  icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// --- 8. PHÍM TẮT TIỆN ÍCH (KEYBOARD SHORTCUTS) ---
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Nhấn '/' hoặc Ctrl+K để focus vào ô tìm kiếm
    if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.focus();
        showToast('Phím tắt: Tìm kiếm đề tài');
      }
    }

    // Nhấn Escape để đóng Modal
    if (e.key === 'Escape') {
      const modal = document.getElementById('preview-modal');
      if (modal && modal.classList.contains('active')) {
        closePreviewModal();
      }
    }
  });
}

// --- 9. NÚT CUỘN LÊN ĐẦU TRANG (BACK TO TOP) ---
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- 10. THÔNG BÁO TOAST (USER FEEDBACK NOTIFICATION) ---
function showToast(message) {
  let toast = document.getElementById('hub-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'hub-toast';
    toast.className = 'hub-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
