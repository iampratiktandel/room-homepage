/** initial count for slides */
let count = 0;

/** prev btn */
const prevBtn = document.querySelector("#slider-btn-prev");
/** next btn */
const nextBtn = document.querySelector("#slider-btn-next");

/** set inital styles for prev btn */
prevBtn.style.cursor = "no-drop";
prevBtn.style.backgroundColor = "hsl(0, 0%, 27%)";

/**
 * on slider prev-next btn click
 * @param direction direction of the btn (prev or next)
 */
const onSlideChange = (direction) => {
  /** hero section title */
  const title = document.querySelector(".hero__content-title");
  /** hero section description */
  const description = document.querySelector(".hero__content-description");
  /** hero section image */
  const image = document.querySelector(".hero__img-wrapper");
  /** window width */
  const width = window.screen.width;

  /** manage count based on direction */
  if (count > 0 && direction === "prev") {
    count--;
  } else if (count < 2 && direction === "next") {
    count++;
  }

  /** update content as per count */
  title.textContent = slides[count]?.title;
  description.textContent = slides[count]?.description;
  image.style.backgroundImage =
    width > 375 ? slides[count]?.imageDesktop : slides[count]?.imageMobile;

  /** manage prev btn styles based on count  */
  if (count === 0) {
    prevBtn.style.backgroundColor = "hsl(0, 0%, 27%)";
    prevBtn.style.cursor = "no-drop";
  } else {
    prevBtn.style.backgroundColor = "hsl(0, 0%, 0%)";
    prevBtn.style.cursor = "pointer";
  }

  /** manage next btn styles based on count  */
  if (count === 2) {
    nextBtn.style.backgroundColor = "hsl(0, 0%, 27%)";
    nextBtn.style.cursor = "no-drop";
  } else {
    nextBtn.style.backgroundColor = "hsl(0, 0%, 0%)";
    nextBtn.style.cursor = "pointer";
  }
};

/** manage style for mobile navigation on close icon click */
const onMenuClose = () => {
  const mobileNav = document.querySelector(".mobile-navbar__wrapper");
  const logo = document.querySelector(".logo-wrapper");
  const overlay = document.querySelector(".overlay");
  mobileNav.style.display = "none";
  logo.style.display = "block";
  overlay.style.display = "none";
};

/** manage style for mobile navigation on menu icon click */
const onMenuOpen = () => {
  const mobileNav = document.querySelector(".mobile-navbar__wrapper");
  const logo = document.querySelector(".logo-wrapper");
  const overlay = document.querySelector(".overlay");
  logo.style.display = "none";
  mobileNav.style.display = "flex";
  overlay.style.display = "block";
};

/** slides content data */
const slides = [
  {
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imageDesktop: "url(/images/desktop-image-hero-1.jpg)",
    imageMobile: "url(/images/mobile-image-hero-1.jpg)",
  },
  {
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imageDesktop: "url(/images/desktop-image-hero-2.jpg)",
    imageMobile: "url(/images/mobile-image-hero-2.jpg)",
  },
  {
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imageDesktop: "url(/images/desktop-image-hero-3.jpg)",
    imageMobile: "url(/images/mobile-image-hero-3.jpg)",
  },
];
