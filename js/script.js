window.addEventListener("DOMContentLoaded", () => {
  // menu
  const openMenuBtn = document.querySelector(".open__menu-btn");
  const closeMenuBtn = document.querySelector(".menu__close-btn");
  const menu = document.querySelector(".menu");
  const menuOverlay = document.querySelector(".menu__overlay");

  function toggleMenuClass(eventClass) {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      if (contactForm.classList.contains("active")) {
        contactForm.classList.remove("active");
      }
    }
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
  }

  openMenuBtn.addEventListener("click", toggleMenuClass);
  closeMenuBtn.addEventListener("click", toggleMenuClass);
  menuOverlay.addEventListener("click", toggleMenuClass);

  // contact-fom
  const openContactFormBtn = document.querySelectorAll(
    "[data-contact-form-btn]"
  );
  const closeContactFormBtn = document.querySelector(".close__contact-btn");
  const contactForm = document.querySelector(".leave__request");

  function showContactForm() {
    contactForm.classList.add("active");
    if (contactForm.classList.contains("active")) {
      menu.classList.remove("active");
      menuOverlay.classList.remove("active");
      document.body.classList.remove("overflow-hidden");
    }
  }
  function hideleContactForm() {
    contactForm.classList.remove("active");
  }

  openContactFormBtn.forEach((btn) =>
    btn.addEventListener("click", showContactForm)
  );
  closeContactFormBtn.addEventListener("click", hideleContactForm);

  // fixed box
  // const apartmentBox = document.querySelector(".premium__aparment-box");

  // 9135
  // fixed box
  const apartmentBox = document.querySelector(".premium__aparment-box");

  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight; // Oyna balandligi
    const scrollHeight = document.body.scrollHeight; // Dokument balandligi
    const scrollPosition = window.scrollY || window.pageYOffset; // Scroll hajmi
    const threshold = 9135; // Ogohlantiruv qiymati

    // Agar scroll o'rnatilgan hajmi threshold ga teng yoki katta bo'lsa
    // if (scrollPosition >= threshold) {
    //   apartmentBox.style.position = "absolute";
    // } else {
    //   apartmentBox.style.position = "fixed"; // Agar qaytadan scroll pastga o'tkazilgan bo'lsa, positionni olib tashlash
    // }
  });

  // numbers__swiper
  var numbersSwiper = new Swiper(".numbers__swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed: 500,
    navigation: {
      nextEl: ".swiper-next-btn",
      prevEl: ".swiper-prev-btn",
    },
  });

  // numbers__swiper-two
  var numbersSwiper = new Swiper(".numbers__swiper-two", {
    slidesPerView: 2,
    spaceBetween: 70,
    loop: true,
    speed: 500,
    navigation: {
      nextEl: ".swiper-next-btn",
      prevEl: ".swiper-prev-btn",
    },
  });

  // location__swiper
  var numbersSwiper = new Swiper(".location__swiper", {
    slidesPerView: 1.3,
    spaceBetween: 40,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    speed: 900,
    navigation: {
      nextEl: ".swiper-next-btn-two",
      prevEl: ".swiper-prev-btn-two",
    },
  });

  // architecture__swiper
  var architectureSwiper = new Swiper(".architecture__swiper", {
    slidesPerView: 1.2,
    spaceBetween: 140,
    loop: true,
    simulateTouch: false,
    touchMouse: false,
    speed: 700,
    navigation: {
      nextEl: ".swiper-next-btn-3",
      prevEl: ".swiper-prev-btn-3",
    },
  });

  var architectureSwiperTwo = new Swiper(".architecture__swiper-two", {
    slidesPerView: 1.2,
    spaceBetween: 140,
    loop: true,
    simulateTouch: false,
    touchMouse: false,
    speed: 700,
    navigation: {
      nextEl: ".swiper-next-btn-3",
      prevEl: ".swiper-prev-btn-3",
    },
  });

  const swiperPaginationBtns = document.querySelectorAll(
    ".swiper__pagination-btns button"
  );

  swiperPaginationBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      let t = true;
      let type = btn.getAttribute("data-type");
      getSwiperSlides().forEach((slide, index) => {
        if (t && slide.getAttribute("data-type") == type) {
          t = false;
          architectureSwiperTwo.slideTo(index);
        }
      });

      swiperPaginationBtns.forEach((el) => {
        if (el == btn) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    });
  });

  architectureSwiperTwo.on("slideChange", function (e) {
    let type =
      getSwiperSlides()[architectureSwiperTwo.activeIndex].getAttribute(
        "data-type"
      );
    swiperPaginationBtns.forEach((btn) => {
      if (btn.getAttribute("data-type") == type) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  });

  function getSwiperSlides() {
    return document.querySelectorAll(".architecture__swiper-two .swiper-slide");
  }

  const corpus = document.querySelectorAll(".korpus");

  corpus.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-type");

      const planTabContent = document.querySelectorAll(".plan__tab-content");
      planTabContent.forEach((content) => {
        content.classList.remove("active");
      });

      corpus.forEach((btn) => {
        btn.classList.remove("selected");
      });

      const selectedContent = document.querySelector(
        `.plan__tab-content[data-type="${type}"]`
      );
      const selectedCorpus = document.querySelector(
        `.korpus[data-type="${type}"]`
      );
      if (selectedContent && selectedCorpus) {
        selectedContent.classList.add("active");
        selectedCorpus.classList.add("selected");
      }
    });
  });

  // light gallery
  lightGallery(document.getElementById("lightgallery-one"), {
    thumbnail: true,
    download: false,
    // // animateThumb: false,
    // // zoomFromOrigin: false,
    // // allowMediaOverlap: true,
    // // toggleThumb: true,
    // showZoomInOutIcons: true,
    // actualSize: false,
    // controls: true,
    // loop: true,
    // speed: 600,
    // counter: false,
    // pager: true,
  });
  lightGallery(document.getElementById("lightgallery-two"), {
    thumbnail: true,
    download: false,
  });
  lightGallery(document.getElementById("lightgallery-three"), {
    thumbnail: true,
    download: false,
  });
  lightGallery(document.getElementById("lightgallery-four"), {
    thumbnail: true,
    download: false,
  });
  lightGallery(document.getElementById("lightgallery-five"), {
    thumbnail: true,
    download: false,
  });
});
