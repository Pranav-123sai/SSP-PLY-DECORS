/* ===========================
   PRODUCTS PAGE - products.js
   =========================== */

// ---- All Product Data ----
const allProducts = [
  // Plywood & Boards
  {
    id: 1, cat: 'plywood', name: 'Commercial MR 303 Grade Plywood ',
    sub: 'Premium Plywood', price: '₹1,250', unit: 'Sheet',
    badge: 'Bestseller', badgeType: '',
    img: 'images/Commercial MR 303 Grade Plywood.jpg'
  },
  {
    id: 2, cat: 'plywood', name: 'Commercial ISI MR 303 Grade Plywood',
    sub: 'BWr Grade 710 Waterproof', price: '₹2,100', unit: 'Sheet',
    badge: 'Premium', badgeType: 'premium',
    img: 'images/Commercial ISI MR 303 Grade Plywood.jpg'
  },
  {
    id: 3, cat: 'plywood', name: 'BWP 710 Grade Plywood',
    sub: 'Solid Core, 19mm Thickness', price: '₹1,450', unit: 'Sheet',
    badge: '', badgeType: '',
    img: 'images/BWP 710 Grade Plywood.jpg'
  },
  {
    id: 4, cat: 'plywood', name: 'Marine',
    sub: 'Medium Density Fibreboard, 18mm', price: '₹980', unit: 'Sheet',
    badge: 'New', badgeType: 'new',
    img: 'images/Marine.jpg'
  },
  {
    id: 5, cat: 'plywood', name: 'Block Boards',
    sub: 'E1 Grade, 16mm', price: '₹720', unit: 'Sheet',
    badge: '', badgeType: '',
    img: 'images/Block Boards.jpg'
  },
  {
    id: 6, cat: 'plywood', name: 'HDHMR Boards',
    sub: 'Premium Plywood', price: '₹1,250', unit: 'Sheet',
    badge: 'Bestseller', badgeType: '',
    img: 'images/HDHMR Boards.jpg'
  },
  {
    id: 7, cat: 'plywood', name: 'MDF Boards',
    sub: 'BWr Grade 710 Waterproof', price: '₹2,100', unit: 'Sheet',
    badge: 'Premium', badgeType: 'premium',
    img: 'images/MDF Boards.jpg'
  },
  {
    id: 8, cat: 'plywood', name: 'Prelam MDF',
    sub: 'Solid Core, 19mm Thickness', price: '₹1,450', unit: 'Sheet',
    badge: '', badgeType: '',
    img: 'images/Prelam MDF.jpg'
  },
  {
    id: 9, cat: 'plywood', name: 'Particle Boards',
    sub: 'Medium Density Fibreboard, 18mm', price: '₹980', unit: 'Sheet',
    badge: 'New', badgeType: 'new',
    img: 'images/Particle Boards.jpg'
  },
  {
    id: 10, cat: 'plywood', name: 'NFC Boards',
    sub: 'E1 Grade, 16mm', price: '₹720', unit: 'Sheet',
    badge: '', badgeType: '',
    img: 'images/NFC Boards.jpg'
  },
  {
    id: 11, cat: 'plywood', name: 'WPC Board',
    sub: 'Medium Density Fibreboard, 18mm', price: '₹980', unit: 'Sheet',
    badge: 'New', badgeType: 'new',
    img: 'images/WPC Board.jpg'
  },
    {
    id: 12, cat: 'plywood', name: 'BWR 303',
    sub: 'Medium Density Fibreboard, 18mm', price: '₹980', unit: 'Sheet',
    badge: 'New', badgeType: 'new',
    img: 'images/BWR 303.jpg'
  },

  // Laminates
  {
    id: 13, cat: 'laminates', name: 'Premium Texture Laminates',
    sub: '1mm Thickness, 200+ Designs', price: '₹320', unit: 'Sheet',
    badge: 'New', badgeType: 'new',
    img: 'images/Premium Texture Laminates.jpg'
  },
  {
    id: 14, cat: 'laminates', name: 'High Gloss Laminates',
    sub: 'Soft Touch, Anti-Fingerprint', price: '₹290', unit: 'Sheet',
    badge: 'Popular', badgeType: '',
    img: 'images/High Gloss Laminates.jpg'
  },
  {
    id: 15, cat: 'laminates', name: 'Matte Finish Laminates',
    sub: 'Natural Texture, 1.5mm', price: '₹360', unit: 'Sheet',
    badge: '', badgeType: '',
    img: 'images/Matte Finish Laminates.jpg'
  },
  {
    id: 16, cat: 'laminates', name: 'Satin Finish Laminates',
    sub: 'Brushed Finish, Premium Grade', price: '₹480', unit: 'Sheet',
    badge: 'Premium', badgeType: 'premium',
    img: 'images/Satin Finish Laminates.jpg'
  },
   {
    id: 17, cat: 'laminates', name: 'Acrylic Sheets',
    sub: 'Brushed Finish, Premium Grade', price: '₹480', unit: 'Sheet',
    badge: 'Premium', badgeType: 'premium',
    img: 'images/Acrylic Sheets.jpg'
  },
   {
    id: 18, cat: 'laminates', name: 'Charcoal Panels',
    sub: 'Brushed Finish, Premium Grade', price: '₹480', unit: 'Sheet',
    badge: 'Premium', badgeType: 'premium',
    img: 'images/Charcoal Panels.jpg'
  },
   {
    id: 19, cat: 'laminates', name: 'Louvers & Decorative Panels',
    sub: 'Brushed Finish, Premium Grade', price: '₹480', unit: 'Sheet',
    badge: 'Premium', badgeType: 'premium',
    img: 'images/Louvers & Decorative Panels.jpg'
  },
   {
    id: 20, cat: 'laminates', name: 'Veneers',
    sub: 'Brushed Finish, Premium Grade', price: '₹480', unit: 'Sheet',
    badge: 'Premium', badgeType: 'premium',
    img: 'images/Veneers.jpg'
  },

  // Doors & Frames
  {
    id: 21, cat: 'doors', name: 'WPC Doors',
    sub: '7ft × 3ft Standard', price: '₹4,800', unit: 'Door',
    badge: '', badgeType: '',
    img: 'images/WPC Doors.jpg'
  },
  {
    id: 22, cat: 'doors', name: 'WPC Doors frames',
    sub: '4 Panel Design, Teak Finish', price: '₹6,200', unit: 'Door',
    badge: 'Popular', badgeType: '',
    img: 'images/WPC Doors frames.jpg'
  },
  {
    id: 23, cat: 'doors', name: 'Membrane Doors',
    sub: 'Pre-finished, 3×2 inch', price: '₹1,100', unit: 'Frame',
    badge: '', badgeType: '',
    img: 'images/Membrane Doors.jpg'
  },
  {
    id: 24, cat: 'doors', name: 'Flush Doors',
    sub: 'Pre-finished, 3×2 inch', price: '₹1,100', unit: 'Frame',
    badge: '', badgeType: '',
    img: 'images/Flush Doors.jpg'
  },
  {
    id: 25, cat: 'doors', name: 'Designer Doors',
    sub: 'Pre-finished, 3×2 inch', price: '₹1,100', unit: 'Frame',
    badge: '', badgeType: '',
    img: 'images/Designer Doors.jpg'
  },
  {
    id: 26, cat: 'doors', name: 'PVC Doors',
    sub: 'Pre-finished, 3×2 inch', price: '₹1,100', unit: 'Frame',
    badge: '', badgeType: '',
    img: 'images/PVC Doors.jpg'
  },

  // Hardware & Fittings
  {
    id: 27, cat: 'hardware', name: 'Handles & Knobs',
    sub: 'Soft Close, Pack of 10', price: '₹450', unit: 'Pack',
    badge: '', badgeType: '',
    img: 'images/Handles & Knobs.jpg'
  },
  {
    id: 28, cat: 'hardware', name: 'Hinges',
    sub: 'Full Extension, 18 inch', price: '₹380', unit: 'Pair',
    badge: '', badgeType: '',
    img: 'images/Hinges.jpg'
  },
  {
    id: 29, cat: 'hardware', name: 'Telescopic Channels',
    sub: 'Stainless Steel, Pack of 6', price: '₹290', unit: 'Pack',
    badge: 'New', badgeType: 'new',
    img: 'images/telescopic channels.jpg'
  },
  {
    id: 30, cat: 'hardware', name: 'Drawer Systems',
    sub: 'Stainless Steel, Pack of 6', price: '₹290', unit: 'Pack',
    badge: 'New', badgeType: 'new',
    img: 'images/Drawer Systems.jpg'
  },
  {
    id: 31, cat: 'hardware', name: 'Locks & Digital Lock',
    sub: 'Stainless Steel, Pack of 6', price: '₹290', unit: 'Pack',
    badge: 'New', badgeType: 'new',
    img: 'images/Locks & Digital Lock.jpg'
  },
  {
    id: 32, cat: 'hardware', name: 'Glass Fittings',
    sub: 'Stainless Steel, Pack of 6', price: '₹290', unit: 'Pack',
    badge: 'New', badgeType: 'new',
    img: 'images/Glass Fittings.jpg'
  },
  {
    id: 33, cat: 'hardware', name: 'Wicker baskets',
    sub: 'Stainless Steel, Pack of 6', price: '₹290', unit: 'Pack',
    badge: 'New', badgeType: 'new',
    img: 'images/Wicker baskets.jpg'
  },
{
    id: 34, cat: 'hardware', name: 'Tall unit',
    sub: 'Stainless Steel, Pack of 6', price: '₹290', unit: 'Pack',
    badge: 'New', badgeType: 'new',
    img: 'images/Tall unit.jpg'
  },
{
    id: 35, cat: 'hardware', name: 'Kitchen Rolling Shutter',
    sub: 'Stainless Steel, Pack of 6', price: '₹290', unit: 'Pack',
    badge: 'New', badgeType: 'new',
    img: 'images/Kitchen Rolling Shutter.jpg'
  },


  // Exterior & Cladding
  {
    id: 36, cat: 'exterior', name: 'Exterior Cladding Panels',
    sub: 'WPC Exterior Grade, 65mm', price: '₹605', unit: 'Per Sheet',
    badge: 'Popular', badgeType: '',
    img: 'images/Exterior Cladding Panels.jpg'
  },
  {
    id: 37, cat: 'exterior', name: 'HPL Exterior Sheets',
    sub: 'WPC Exterior Grade, 45mm', price: '₹385', unit: 'Per Sheet',
    badge: '', badgeType: '',
    img: 'images/HPL Exterior Sheets.jpg'
  },

  // Modular & Interior
  {
    id: 38, cat: 'modular', name: 'Modular Kitchen Materials',
    sub: 'Base Cabinet, 600mm Width', price: '₹8,500', unit: 'Unit',
    badge: 'Premium', badgeType: 'premium',
    img: 'images/Modular Kitchen Materials.jpg'
  },
  {
    id: 39, cat: 'modular', name: 'Wardrobe Accessories',
    sub: 'Sliding, Mirror Finish', price: '₹3,200', unit: 'Pair',
    badge: '', badgeType: '',
    img: 'images/Wardrobe Accessories.jpg'
  },
  {
    id: 40, cat: 'modular', name: 'TV Unit Materials',
    sub: 'Wall Mounted, 6ft Width', price: '₹5,800', unit: 'Unit',
    badge: 'New', badgeType: 'new',
    img: 'images/TV Unit Materials.jpg'
  },
  {
    id: 41, cat: 'modular', name: 'Office Interior Materials',
    sub: 'Wall Mounted, 6ft Width', price: '₹5,800', unit: 'Unit',
    badge: 'New', badgeType: 'new',
    img: 'images/Office Interior Materials.jpg'
  },
  {
    id: 42, cat: 'modular', name: 'False Ceiling Material',
    sub: 'Wall Mounted, 6ft Width', price: '₹5,800', unit: 'Unit',
    badge: 'New', badgeType: 'new',
    img: 'images/False Ceiling Material.jpg'
  },
  {
    id: 43, cat: 'modular', name: 'Decorative Wall Panels',
    sub: 'Wall Mounted, 6ft Width', price: '₹5,800', unit: 'Unit',
    badge: 'New', badgeType: 'new',
    img: 'images/Decorative Wall Panels.jpg'
  },
  {
    id: 44, cat: 'modular', name: 'UPVC Window',
    sub: 'Wall Mounted, 6ft Width', price: '₹5,800', unit: 'Unit',
    badge: 'New', badgeType: 'new',
    img: 'images/UPVC Window.jpg'
  },
  {
    id: 45, cat: 'modular', name: 'Pooja Unit',
    sub: 'Wall Mounted, 6ft Width', price: '₹5,800', unit: 'Unit',
    badge: 'New', badgeType: 'new',
    img: 'images/Pooja Unit.jpg'
  },
  // Adhesives & Others
  {
    id: 46, cat: 'adhesives', name: 'Fevicol & Adhesives',
    sub: 'Synthetic Resin, 1kg Pack', price: '', unit: '',
    badge: 'Bestseller', badgeType: '',
    img: 'images/Fevicol & Adhesives.jpg'
  },
  {
    id: 47, cat: 'adhesives', name: 'Edge Band Tapes',
    sub: 'Waterproofing Compound, 5kg', price: '', unit: '',
    badge: '', badgeType: '',
    img: 'images/Edge Band Tapes.jpg'
  },
  {
    id: 48, cat: 'adhesives', name: 'Silicone & Sealants',
    sub: 'Silicone Based, White, 280ml', price: '', unit: '',
    badge: '', badgeType: '',
    img: 'images/Silicone & Sealants.jpg'
  },
  {
    id: 49, cat: 'adhesives', name: 'Cubicle',
    sub: 'Self Tapping, Stainless Steel, 100 Pcs', price: '', unit: '',
    badge: '', badgeType: '',
    img: 'images/Cubicle.jpg'
  },
  {
    id: 50, cat: 'adhesives', name: 'Screws & Fasteners',
    sub: '22mm Width, 50m Roll, Wood Finish', price: '', unit: '',
    badge: 'New', badgeType: 'new',
    img: 'images/Screws & Fasteners.jpg'
  }
];

// ---- State ----
let activeCatId = null;
let activeSubLabel = null;
let viewMode = 'grid';

// ---- Render Products ----
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  let filtered = allProducts;

  if (activeCatId) {
    filtered = allProducts.filter(p => p.cat === activeCatId);
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-products">No products found in this category.</div>';
    updateCount(0, allProducts.length);
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-cat="${p.cat}">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.classList.add('img-placeholder');">
        ${p.badge ? `<span class="product-badge ${p.badgeType}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="product-sub">${p.sub}</p>

      </div>
    </div>
  `).join('');

  updateCount(filtered.length, allProducts.length);
}

// ---- Update Count ----
function updateCount(visible, total) {
  const el = document.getElementById('resultsCount');
  if (visible === undefined) {
    visible = document.querySelectorAll('.product-card').length;
    total = visible;
  }
  if (visible === total && !activeCatId) {
    el.textContent = 'Showing all ' + total + ' products';
  } else {
    el.textContent = 'Showing ' + visible + ' products';
  }
}

// ---- Category Toggle ----
function toggleCat(el) {
  const catId = el.getAttribute('data-cat');
  const subcats = el.nextElementSibling;
  const isOpen = subcats.classList.contains('open');

  // Close all
  document.querySelectorAll('.cat-item').forEach(i => i.classList.remove('open', 'active'));
  document.querySelectorAll('.subcats').forEach(s => s.classList.remove('open'));
  document.querySelectorAll('.subcat-link').forEach(l => l.classList.remove('active'));

  if (!isOpen) {
    el.classList.add('open', 'active');
    subcats.classList.add('open');
    activeCatId = catId;
    activeSubLabel = el.querySelector('.cat-label').textContent.trim();
  } else {
    activeCatId = null;
    activeSubLabel = null;
  }

  renderProducts();
  updateActiveFilters();
}

// ---- Subcat Click ----
document.addEventListener('click', function(e) {
  const link = e.target.closest('.subcat-link');
  if (!link) return;
  e.preventDefault();

  document.querySelectorAll('.subcat-link').forEach(l => l.classList.remove('active'));
  link.classList.add('active');

  const parentCatItem = link.closest('.subcats').previousElementSibling;
  activeCatId = parentCatItem.getAttribute('data-cat');
  activeSubLabel = link.textContent.trim();

  renderProducts();
  updateActiveFilters();
});

// ---- Active Filter Tags ----
function updateActiveFilters() {
  const container = document.getElementById('activeFilters');
  container.innerHTML = '';

  if (activeSubLabel) {
    addTag(container, activeSubLabel, () => {
      document.querySelectorAll('.subcat-link').forEach(l => l.classList.remove('active'));
      // keep category open, just clear sub filter
      const activeCatItem = document.querySelector('.cat-item.active');
      if (activeCatItem) {
        activeCatId = activeCatItem.getAttribute('data-cat');
        activeSubLabel = activeCatItem.querySelector('.cat-label').textContent.trim();
      } else {
        activeCatId = null;
        activeSubLabel = null;
      }
      renderProducts();
      updateActiveFilters();
    });
  } else if (activeSubLabel === null && activeCatId) {
    const catLabel = document.querySelector('.cat-item.active .cat-label');
    if (catLabel) {
      addTag(container, catLabel.textContent.trim(), () => clearAll());
    }
  }
}

function addTag(container, label, onRemove) {
  const tag = document.createElement('span');
  tag.className = 'filter-tag';
  tag.innerHTML = label + ' <span class="tag-x">&times;</span>';
  tag.querySelector('.tag-x').addEventListener('click', e => {
    e.stopPropagation();
    onRemove();
  });
  container.appendChild(tag);
}

// ---- Clear All ----
function clearAll() {
  document.querySelectorAll('.cat-item').forEach(i => i.classList.remove('open', 'active'));
  document.querySelectorAll('.subcats').forEach(s => s.classList.remove('open'));
  document.querySelectorAll('.subcat-link').forEach(l => l.classList.remove('active'));

  activeCatId = null;
  activeSubLabel = null;
  renderProducts();
  updateActiveFilters();
}

// ---- View Toggle ----
function setView(mode) {
  viewMode = mode;
  const grid = document.getElementById('productsGrid');
  const gridBtn = document.getElementById('gridBtn');
  const listBtn = document.getElementById('listBtn');
  if (mode === 'list') {
    grid.classList.add('list-view');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
  } else {
    grid.classList.remove('list-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
  }
}

// ---- Init ----
renderProducts();


const cards = document.querySelectorAll(".product-card img");
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImage");
const closeBtn = document.querySelector(".close-popup");

cards.forEach(img=>{

    img.addEventListener("click",()=>{

        popup.classList.add("active");

        popupImg.src = img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    popup.classList.remove("active");

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("active");

    }

});

/* ===========================
   MOBILE MENU
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger && mobileMenu) {

        hamburger.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");

        });

        document.addEventListener("click", function (e) {

            if (
                !mobileMenu.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                mobileMenu.classList.remove("active");
            }

        });

    }

});
}

