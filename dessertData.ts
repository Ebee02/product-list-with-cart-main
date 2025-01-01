//import all the waffles images
import waffleMobileImg from "./src/assets/images/image-waffle-mobile.jpg";
import waffleThumbnailImg from "./src/assets/images/image-waffle-thumbnail.jpg";
import waffleTabletImg from "./src/assets/images/image-waffle-tablet.jpg";
import waffleDesktopImg from "./src/assets/images/image-waffle-desktop.jpg";

// import all the creme brulee images
import cremeBruleeMobileImg from "./src/assets/images/image-creme-brulee-mobile.jpg";
import cremeBruleeThumbnailImg from "./src/assets/images/image-creme-brulee-thumbnail.jpg";
import cremeBruleeTabletImg from "./src/assets/images/image-creme-brulee-tablet.jpg";
import cremeBruleeDesktopImg from "./src/assets/images/image-creme-brulee-desktop.jpg";

// import all the macaron images
import macaronMobileImg from "./src/assets/images/image-macaron-mobile.jpg";
import macaronThumbnailImg from "./src/assets/images/image-macaron-thumbnail.jpg";
import macaronTabletImg from "./src/assets/images/image-macaron-tablet.jpg";
import macaronDesktopImg from "./src/assets/images/image-macaron-desktop.jpg";

// import all the macaron images
import tiramisuMobileImg from "./src/assets/images/image-tiramisu-mobile.jpg";
import tiramisuThumbnailImg from "./src/assets/images/image-tiramisu-thumbnail.jpg";
import tiramisuTabletImg from "./src/assets/images/image-tiramisu-tablet.jpg";
import tiramisuDesktopImg from "./src/assets/images/image-tiramisu-desktop.jpg";

// import all the baklava images
import baklavaMobileImg from "./src/assets/images/image-baklava-mobile.jpg";
import baklavaThumbnailImg from "./src/assets/images/image-baklava-thumbnail.jpg";
import baklavaTabletImg from "./src/assets/images/image-baklava-tablet.jpg";
import baklavaDesktopImg from "./src/assets/images/image-baklava-desktop.jpg";

// import all the meringue  images
import meringueMobileImg from "./src/assets/images/image-meringue-mobile.jpg";
import meringueThumbnailImg from "./src/assets/images/image-meringue-thumbnail.jpg";
import meringueTabletImg from "./src/assets/images/image-meringue-tablet.jpg";
import meringueDesktopImg from "./src/assets/images/image-meringue-desktop.jpg";

// import all the cake images
import cakeMobileImg from "./src/assets/images/image-cake-mobile.jpg";
import cakeThumbnailImg from "./src/assets/images/image-cake-thumbnail.jpg";
import cakeTabletImg from "./src/assets/images/image-cake-tablet.jpg";
import cakeDesktopImg from "./src/assets/images/image-cake-desktop.jpg";

// import all the brownies images
import brownieMobileImg from "./src/assets/images/image-brownie-mobile.jpg";
import brownieThumbnailImg from "./src/assets/images/image-brownie-thumbnail.jpg";
import brownieTabletImg from "./src/assets/images/image-brownie-tablet.jpg";
import brownieDesktopImg from "./src/assets/images/image-brownie-desktop.jpg";

// import all the panna-cotta images
import pannaCottaMobileImg from "./src/assets/images/image-panna-cotta-mobile.jpg";
import pannaCottaThumbnailImg from "./src/assets/images/image-panna-cotta-thumbnail.jpg";
import pannaCottaTabletImg from "./src/assets/images/image-panna-cotta-tablet.jpg";
import pannaCottaDesktopImg from "./src/assets/images/image-panna-cotta-desktop.jpg";

type dessertDataType = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };

  name: string;
  category: string;
  price: number;
};

const dessertData: dessertDataType[] = [
  {
    image: {
      thumbnail: waffleThumbnailImg,
      mobile: waffleMobileImg,
      tablet: waffleTabletImg,
      desktop: waffleDesktopImg,
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: cremeBruleeThumbnailImg,
      mobile: cremeBruleeMobileImg,
      tablet: cremeBruleeTabletImg,
      desktop: cremeBruleeDesktopImg,
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: macaronThumbnailImg,
      mobile: macaronMobileImg,
      tablet: macaronTabletImg,
      desktop: macaronDesktopImg,
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: tiramisuThumbnailImg,
      mobile: tiramisuMobileImg,
      tablet: tiramisuTabletImg,
      desktop: tiramisuDesktopImg,
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: baklavaThumbnailImg,
      mobile: baklavaMobileImg,
      tablet: baklavaTabletImg,
      desktop: baklavaDesktopImg,
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: meringueThumbnailImg,
      mobile: meringueMobileImg,
      tablet: meringueTabletImg,
      desktop: meringueDesktopImg,
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: cakeThumbnailImg,
      mobile: cakeMobileImg,
      tablet: cakeTabletImg,
      desktop: cakeDesktopImg,
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: brownieThumbnailImg,
      mobile: brownieMobileImg,
      tablet: brownieTabletImg,
      desktop: brownieDesktopImg,
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: pannaCottaThumbnailImg,
      mobile: pannaCottaMobileImg,
      tablet: pannaCottaTabletImg,
      desktop: pannaCottaDesktopImg,
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

export default dessertData;
