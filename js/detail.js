/* =========================
   CURSOR (PC ONLY)
========================= */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const cursor = document.querySelector('.cursor-dot')

  if (cursor) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    })

    const targets =
      'a, button, .swatch, .side-menu-link, .menu-btn, .close-btn, input, select'

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(targets)) cursor.classList.add('cursor-active')
    })

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(targets)) cursor.classList.remove('cursor-active')
    })
  }
} else {
  const cursor = document.querySelector('.cursor-dot')
  if (cursor) cursor.remove()
}

/* =========================
   SIDE MENU
========================= */
const menuBtn = document.querySelector('.menu-btn')
const sideMenu = document.getElementById('sideMenu')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('closeBtn')

function openMenu() {
  sideMenu.classList.add('active')
  overlay.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  sideMenu.classList.remove('active')
  overlay.classList.remove('active')
  document.body.style.overflow = ''
}

if (menuBtn) menuBtn.addEventListener('click', openMenu)
if (closeBtn) closeBtn.addEventListener('click', closeMenu)
if (overlay) overlay.addEventListener('click', closeMenu)

// SHOP 서브메뉴 토글
const shopMenu = document.getElementById('shopMenu')
const sideSubmenu = document.getElementById('sideSubmenu')
const arrow = document.getElementById('arrow')

if (shopMenu) {
  shopMenu.addEventListener('click', (e) => {
    e.preventDefault()
    sideSubmenu.classList.toggle('open')
    arrow.classList.toggle('rotated')
  })
}

/* =========================
   갤러리 썸네일 클릭
========================= */
const thumbs = document.querySelectorAll('.thumb')
const mainImage = document.getElementById('mainImage')

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach((t) => t.classList.remove('active'))
    thumb.classList.add('active')

    if (mainImage) {
      const thumbImg = thumb.querySelector('img')
      mainImage.style.opacity = '0'
      setTimeout(() => {
        mainImage.src = thumbImg.src   // ← 썸네일 img의 src를 그대로 사용
        mainImage.style.opacity = '1'
      }, 200)
    }
  })
})

/* =========================
   색상 스와치 선택
========================= */
document.querySelectorAll('.colour-swatches').forEach((group) => {
  const swatches = group.querySelectorAll('.swatch')
  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      swatches.forEach((s) => s.classList.remove('active'))
      swatch.classList.add('active')
    })
  })
})

/* =========================
   수량 컨트롤 (상단 + 사이드바)
========================= */
const UNIT_PRICE = 820000

let qty = 1

// 요소들 한 번에 가져오기
const qtyDisplays = [
  document.getElementById('qtyValue'),
  document.getElementById('sideQtyValue')
]

const totalDisplays = [
  document.getElementById('totalPrice'),
  document.getElementById('sideTotalPrice')
]

// 버튼들
const minusBtns = [
  document.getElementById('qtyMinus'),
  document.getElementById('sideQtyMinus')
]

const plusBtns = [
  document.getElementById('qtyPlus'),
  document.getElementById('sideQtyPlus')
]

// 화면 업데이트 함수
function updateUI() {
  qtyDisplays.forEach(el => {
    if (el) el.textContent = qty
  })

  totalDisplays.forEach(el => {
    if (el) {
      el.textContent =
        (UNIT_PRICE * qty).toLocaleString('ko-KR') + '원'
    }
  })
}

// 이벤트 연결
minusBtns.forEach(btn => {
  if (!btn) return
  btn.addEventListener('click', () => {
    if (qty > 1) {
      qty--
      updateUI()
    }
  })
})

plusBtns.forEach(btn => {
  if (!btn) return
  btn.addEventListener('click', () => {
    qty++
    updateUI()
  })
})

// 초기 실행
updateUI()



/* =========================
   동영상 
========================= */
const playBtn = document.getElementById('playBtn')
const productVideo = document.getElementById('productVideo')
const videoThumb = document.querySelector('.video-thumb')

if (playBtn && productVideo && videoThumb) {
  playBtn.addEventListener('click', () => {
    videoThumb.style.display = 'none'
    playBtn.style.display = 'none'
    productVideo.style.display = 'block'
    productVideo.play()
  })
}
