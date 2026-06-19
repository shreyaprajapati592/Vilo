window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-section");
  if (window.scrollY > 300) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

let accordions = document.querySelectorAll(
  ".team-img-card, .we-do-btm-content"
);

accordions.forEach((item) => {
  // Try to find either `.team-list` or `.we-do-details` inside each card
  let details =
    item.querySelector(".team-list") || item.querySelector(".we-do-details");

  item.addEventListener("click", () => {
    // Collapse all others
    accordions.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        let iDetails =
          i.querySelector(".team-list") || i.querySelector(".we-do-details");
        if (iDetails) iDetails.style.height = "0px";
      }
    });

    // Toggle this one
    item.classList.toggle("active");
    if (details) {
      details.style.height = item.classList.contains("active")
        ? details.scrollHeight + "px"
        : "0px";
    }
  });
});

// ✅ our-solution section
// Swiper
document.addEventListener("DOMContentLoaded", function () {
  // CREATE DROPDOWN
  const dropdown = document.createElement("select");
  dropdown.className = "solution-dropdown";

  // GET ALL TABS
  const tabs = document.querySelectorAll(".our-solution-left li");

  // ADD OPTIONS FROM LI
  tabs.forEach((li, index) => {
    const opt = document.createElement("option");
    opt.value = index;
    opt.textContent = li.innerText.trim();
    dropdown.appendChild(opt);
  });

  // INSERT DROPDOWN ABOVE UL
  const tabList = document.querySelector(".our-solution-left");
  tabList.parentNode.insertBefore(dropdown, tabList);

  // INIT SWIPER (AFTER dropdown created)
  let solution = new Swiper(".our-solution-right", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".next-arrow",
      prevEl: ".pre-arrow",
    },
    on: {
      slideChange: function () {
        let i = this.realIndex;

        // UPDATE ACTIVE TAB
        tabs.forEach((li, idx) => li.classList.toggle("active", idx === i));

        // UPDATE DROPDOWN
        dropdown.value = i;
      },
    },
  });

  // TAB CLICK HANDLER
  tabs.forEach((li, index) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      solution.slideToLoop(index);
    });
  });

  // DROPDOWN CHANGE HANDLER
  dropdown.addEventListener("change", function () {
    solution.slideToLoop(parseInt(this.value));
  });
});

/*our-client */
let logoSwiper = new Swiper(".our-client-swiper", {
  slidesPerView: 4,
  centeredSlides: true,
  slideToClickedSlide: true,
  speed: 500,
  navigation: {
    nextEl: ".client-next-arrow",
    prevEl: ".client-pre-arrow",
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3.5,
    },
    900: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2.5,
    },
    479: {
      slidesPerView: 2,
    },
    374: {
      slidesPerView: 1,
    },
  },
});

let contentSwiper = new Swiper(".our-client-btm-right", {
  slidesPerView: 1,
  allowTouchMove: false,
});

let logos = document.querySelectorAll(".our-client-logo");
let clientItems = document.querySelectorAll(".our-client-btm-right-item");

function updateContent(index) {
  clientItems.forEach((i) => i.classList.remove("active"));
  if (clientItems[index]) clientItems[index].classList.add("active");

  logos.forEach((l) => l.classList.remove("active"));
  if (logos[index]) logos[index].classList.add("active");

  contentSwiper.slideTo(index);
}

logos.forEach((logo, index) => {
  logo.addEventListener("click", () => {
    logoSwiper.slideTo(index, 500);
    updateContent(index);
  });
});

logoSwiper.on("slideChange", function () {
  updateContent(logoSwiper.activeIndex);
});

updateContent(0);

// swiper-follow
let swiper = new Swiper(".follow-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 44,
  loop: true,
  navigation: {
    nextEl: " .follow-next-arrow",
    prevEl: " .follow-pre-arrow",
  },
  breakpoints: {
    1440: {
      slidesPerView: 2.5,
      spaceBetween: 44,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
    767: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    479: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    374: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// Humburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});
