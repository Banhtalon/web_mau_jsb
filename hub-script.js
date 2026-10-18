/**
 * MINDX WEB BASIC - SHOWCASE HUB CONTROLLER
 * Quản lý dữ liệu 10 Đề tài SPCK chuẩn 3 trang, hình ảnh thực tế, bộ lọc, tìm kiếm và Live Preview
 */

const SPCK_PROJECTS = [
  {
    id: "01",
    folder: "01-coffee-shop",
    category: "fnb",
    categoryLabel: "Ẩm thực & Quán Cafe",
    title: "Cà Phê Mộc | Artisan Roastery",
    desc: "Cà phê rang mộc nguyên chất Tây Nguyên, menu đa dạng và đặt món online.",
    thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
    subPages: [
      { name: "Trang chủ", file: "index.html" },
      { name: "Thực đơn", file: "menu.html" },
      { name: "Đặt món", file: "order.html" }
    ]
  },
  {
    id: "02",
    folder: "02-travel-landing-page",
    category: "service",
    categoryLabel: "Du lịch & Khám phá",
    title: "Explore Vietnam | Du Lịch Kỳ Thú",
    desc: "Khám phá 6 thắng cảnh di sản Việt Nam kèm lịch trình 3N2Đ và đặt tour.",
    thumbnail: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    subPages: [
      { name: "Trang chủ", file: "index.html" },
      { name: "Điểm đến", file: "destinations.html" },
      { name: "Đặt tour", file: "booking.html" }
    ]
  },
  {
    id: "03",
    folder: "03-tech-shop",
    category: "ecommerce",
    categoryLabel: "Thương mại điện tử",
    title: "TechZone | Siêu Thị Đồ Công Nghệ",
    desc: "Showroom thiết bị số, laptop AI thế hệ mới, so sánh thông số và giỏ hàng.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    subPages: [
      { name: "Showroom", file: "index.html" },
      { name: "Cấu hình", file: "catalog.html" },
      { name: "Giỏ hàng", file: "cart.html" }
    ]
  },
  {
    id: "04",
    folder: "04-sneaker-store",
    category: "ecommerce",
    categoryLabel: "Thời trang & Giày",
    title: "Sneaker Store | Giày & Streetwear",
    desc: "Thời trang sneaker đường phố, bộ chọn size giày tương tác và thanh toán.",
    thumbnail: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    subPages: [
      { name: "Trang chủ", file: "index.html" },
      { name: "Cửa hàng", file: "shop.html" },
      { name: "Thanh toán", file: "checkout.html" }
    ]
  },
  {
    id: "05",
    folder: "05-restaurant",
    category: "fnb",
    categoryLabel: "Ẩm thực & Nhà hàng",
    title: "Bếp Quê | Ẩm Thực Cơm Nhà Việt",
    desc: "Hương vị ẩm thực cơm quê 3 miền, thực đơn phong phú và đặt bàn ăn online.",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    subPages: [
      { name: "Trang chủ", file: "index.html" },
      { name: "Thực đơn", file: "menu.html" },
      { name: "Đặt bàn", file: "reservation.html" }
    ]
  },
  {
    id: "06",
    folder: "06-gaming-website",
    category: "community",
    categoryLabel: "Game & Công nghệ",
    title: "Cyber Quest 2099 | Game Sci-Fi",
    desc: "Bối cảnh game viễn tưởng tương lai, hồ sơ nhân vật và bảng cấu hình PC.",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    subPages: [
      { name: "Trang chủ", file: "index.html" },
      { name: "Nhân vật", file: "characters.html" },
      { name: "Tải game", file: "download.html" }
    ]
  },
  {
    id: "07",
    folder: "07-book-store",
    category: "community",
    categoryLabel: "Sách & Tri thức",
    title: "Tri Thức | Hiệu Sách & Văn Hóa Đọc",
    desc: "Tủ sách tinh hoa theo chuyên mục, trích dẫn truyền cảm hứng và đọc thử.",
    thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    subPages: [
      { name: "Trang chủ", file: "index.html" },
      { name: "Tủ sách", file: "catalog.html" },
      { name: "Đọc thử", file: "detail.html" }
    ]
  },
  {
    id: "08",
    folder: "08-music-fanpage",
    category: "community",
    categoryLabel: "Âm nhạc & Nghệ thuật",
    title: "Acoustic Soul | Ban Nhạc & Fanpage",
    desc: "Ban nhạc Indie Acoustic, máy phát đĩa than Vinyl 360° và vé đêm nhạc phòng trà nến ấm.",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    subPages: [
      { name: "Không gian mộc", file: "index.html" },
      { name: "Đĩa than & Nhạc", file: "music.html" },
      { name: "Đêm nhạc & Vé", file: "contact.html" }
    ]
  },
  {
    id: "09",
    folder: "09-school-club",
    category: "community",
    categoryLabel: "CLB & Học đường",
    title: "MindX Coding Club | CLB Lập Trình",
    desc: "Hoạt động câu lạc bộ công nghệ, triển lãm đồ án và đơn ứng tuyển thành viên.",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    subPages: [
      { name: "Trang chủ", file: "index.html" },
      { name: "Dự án", file: "projects.html" },
      { name: "Ứng tuyển", file: "register.html" }
    ]
  },
  {
    id: "10",
    folder: "10-mini-marketplace",
    category: "ecommerce",
    categoryLabel: "Nông sản & Tiện lợi",
    title: "Mini Market | Nông Sản Tiện Lợi",
    desc: "Thực phẩm tươi sạch chuẩn VietGAP, mua theo kg và giao hàng siêu tốc 30p.",
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    subPages: [
      { name: "Trang chủ", file: "index.html" },
      { name: "Nông sản", file: "products.html" },
      { name: "Giao hàng", file: "checkout.html" }
    ]
  },
  {
    id: "11",
    folder: "11-game-store",
    category: "ecommerce",
    categoryLabel: "Cửa Hàng Game",
    title: "Nexus Games | Cửa Hàng Game Số",
    desc: "Cửa hàng game kỹ thuật số, poster AI box art, bộ lọc thể loại & giỏ hàng.",
    thumbnail: "11-game-store/images/cold-orbit.png",
    subPages: [
      { name: "Trang chủ", file: "index.html" },
      { name: "Thư viện game", file: "products.html" }
    ]
  }
];

// Trạng thái ứng dụng
let currentCategory = "all";
let currentSearch = "";
let currentActiveProject = null;
let currentDeviceMode = "desktop"; // desktop | tablet | mobile

// DOM Elements
const projectsContainer = document.getElementById("projectsContainer");
const resultsCountEl = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClear");
const filterTabs = document.querySelectorAll(".filter-tab");
const btnRandom = document.getElementById("btnRandom");

// Modal Elements
const previewModal = document.getElementById("previewModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalProjectTitle = document.getElementById("modalProjectTitle");
const modalSubPagesTabs = document.getElementById("modalSubPagesTabs");
const modalExternalBtn = document.getElementById("modalExternalBtn");
const previewIframe = document.getElementById("previewIframe");
const modalViewport = document.getElementById("modalViewport");
const deviceBtns = document.querySelectorAll(".btn-device");

/**
 * 1. Render danh sách 10 thẻ dự án tinh gọn với ảnh minh họa thực tế 16:10
 */
function renderProjects() {
  const filtered = SPCK_PROJECTS.filter(project => {
    const matchCat = currentCategory === "all" || project.category === currentCategory;
    const query = currentSearch.toLowerCase().trim();
    const matchSearch = !query || (
      project.title.toLowerCase().includes(query) ||
      project.desc.toLowerCase().includes(query) ||
      project.folder.toLowerCase().includes(query) ||
      project.subPages.some(sp => sp.name.toLowerCase().includes(query) || sp.file.toLowerCase().includes(query))
    );
    return matchCat && matchSearch;
  });

  if (resultsCountEl) {
    resultsCountEl.textContent = `Hiển thị ${filtered.length} / ${SPCK_PROJECTS.length} đề tài`;
  }

  if (filtered.length === 0) {
    projectsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 6px;">Không tìm thấy đề tài phù hợp</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Vui lòng thử từ khóa khác hoặc chọn danh mục "Tất Cả".</p>
      </div>
    `;
    return;
  }

  projectsContainer.innerHTML = filtered.map(project => {
    const defaultUrl = `${project.folder}/${project.subPages[0].file}`;

    const subPagesHtml = project.subPages.map((page, idx) => `
      <button class="page-pill" 
              data-project-id="${project.id}" 
              data-page-index="${idx}"
              title="Xem trang ${page.file}">
        ${page.name}
      </button>
    `).join("");

    return `
      <article class="project-card">
        <!-- Browser Bar (Clean 3 Dots) -->
        <div class="card-browser-bar">
          <div class="browser-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
        </div>

        <!-- 16:10 Visual Preview với ảnh thật của trang -->
        <div class="card-visual" data-project-id="${project.id}" data-page-index="0" title="Nhấn để xem trước">
          <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
        </div>

        <!-- Body -->
        <div class="card-body">
          <div class="card-eyebrow">
            <span class="card-num">#${project.id}</span>
            <span>•</span>
            <span>${project.categoryLabel}</span>
          </div>

          <h2 class="card-title">${project.title}</h2>
          <p class="card-desc" title="${project.desc}">${project.desc}</p>

          <!-- Sub-page Pills (Không nhãn thừa) -->
          <div class="card-pages">
            ${subPagesHtml}
          </div>

          <!-- Action Buttons -->
          <div class="card-actions">
            <button class="btn-preview" data-project-id="${project.id}" data-page-index="0">
              Live Preview
            </button>
            <a href="${defaultUrl}" target="_blank" rel="noopener" class="btn-newtab" title="Mở trang trong tab mới">
              Mở ↗
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * 2. Mở Modal Live Preview và chuyển đổi trang con
 */
function openModal(projectId, pageIndex = 0) {
  const project = SPCK_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  currentActiveProject = project;
  modalProjectTitle.textContent = `${project.id}. ${project.title}`;

  // Render các tab trang con trên thanh công cụ Modal
  renderModalTabs(pageIndex);

  previewModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function renderModalTabs(activeIdx = 0) {
  if (!currentActiveProject) return;

  modalSubPagesTabs.innerHTML = currentActiveProject.subPages.map((page, idx) => `
    <button class="modal-tab-btn ${idx === activeIdx ? 'active' : ''}" 
            data-page-index="${idx}">
      ${page.name} (${page.file})
    </button>
  `).join("");

  const targetFile = currentActiveProject.subPages[activeIdx].file;
  const fullPath = `${currentActiveProject.folder}/${targetFile}`;

  previewIframe.src = fullPath;
  modalExternalBtn.href = fullPath;
}

function closeModal() {
  previewModal.classList.remove("is-open");
  previewIframe.src = "about:blank";
  document.body.style.overflow = "";
}

/**
 * 3. Chuyển đổi kích thước thiết bị giả lập (Device Switcher)
 */
function setDeviceMode(mode) {
  currentDeviceMode = mode;
  modalViewport.className = `modal-viewport device-${mode}`;
  deviceBtns.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-device") === mode);
  });
}

/**
 * 4. Mở ngẫu nhiên một dự án
 */
function openRandomProject() {
  const randomProject = SPCK_PROJECTS[Math.floor(Math.random() * SPCK_PROJECTS.length)];
  if (randomProject) {
    openModal(randomProject.id, 0);
  }
}

/**
 * 5. Lắng nghe sự kiện
 */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  // Tìm kiếm
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    searchClearBtn.style.display = currentSearch ? "block" : "none";
    renderProjects();
  });

  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    searchClearBtn.style.display = "none";
    renderProjects();
    searchInput.focus();
  });

  // Nút Random
  if (btnRandom) {
    btnRandom.addEventListener("click", openRandomProject);
  }

  // Lọc danh mục
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-filter");
      renderProjects();
    });
  });

  // Device Switcher
  deviceBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-device");
      setDeviceMode(mode);
    });
  });

  // Event delegation cho click thẻ card & pill
  document.addEventListener("click", (e) => {
    // Mở modal từ nút hoặc pill
    const trigger = e.target.closest("[data-project-id]");
    if (trigger) {
      const projId = trigger.getAttribute("data-project-id");
      const pageIdx = parseInt(trigger.getAttribute("data-page-index") || "0", 10);
      openModal(projId, pageIdx);
      return;
    }

    // Chuyển tab trong modal
    const tabBtn = e.target.closest(".modal-tab-btn");
    if (tabBtn) {
      const pageIdx = parseInt(tabBtn.getAttribute("data-page-index"), 10);
      renderModalTabs(pageIdx);
      return;
    }

    // Đóng modal
    if (e.target === modalOverlay || e.target.closest("#modalCloseBtn")) {
      closeModal();
    }
  });

  // Phím tắt ESC để đóng modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && previewModal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
