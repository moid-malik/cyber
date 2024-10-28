const banners = {
  mainBanner: [
    {
      title: `IPhone14 Pro`,
      description: "Created to change everything for the better For everyone.",
      image: "/iphoneimage.png",
      slogan: "pro.beyond.",
    },
  ],
  miniBanners: {
    leftBannerOne: [
      {
        image: "/Products/playstation.png",
        title: "PlayStation 5",
        description:
          "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
      },
    ],
    leftBannerTwo: [
      {
        image: "/Products/airpodsmax.png",
        title: "Apple Airpods MAX",
        description: "Computational audio. Listen, its powerful",
      },
    ],
    leftBannerThree: [
      {
        image: "/Products/visionpro.png",
        title: "Apple Vision Pro",
        description: "An immersive way to experience entertainment",
      },
    ],
    rightBanner: [
      {
        image: "/Products/macbook.png",
        title: "Macbook Air",
        description:
          "The new 15‑inch MacBookAir makes room for more of what you love with a spacious Liquid Retina display.",
        buttonLabel: "Shop now",
      },
    ],
    verticalBanners: {
      verticalBannerOne: [
        {
          bgcolor: "#F9F9F9",
          imagesource: "/Products/ipadpro.png",
          title: "I Pad Pro",
          description:
            "iPad Pro combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        },
      ],
      verticalBannerTwo: [
        {
          bgcolor: "#EAEAEA",
          imagesource: "/Products/samsunggalaxy.png",
          title: "Samsung Galaxy",
          description:
            "Galaxy Fold 5 combines a stunning foldable display, impressive performance, multitasking features, and premium design.",
        },
      ],
      verticalBannerThree: [
        {
          bgcolor: "#2C2C2C",
          imagesource: "/Products/macbookpro.png",
          title: "Macbook Pro",
          description:
            "MacBook Pro combines a brilliant Retina display, powerful performance, advanced graphics, and long-lasting battery life.",
        },
      ],
    },
  },
};

const products = {
  newArrival: [
    {
      liked: true,
      imagesource: "/Products/Iphone14pro.png",
      producttitle: "Apple iPhone 14 Pro Max",
      subtitle: "128GB Deep Purple",
      price: 900,
    },
    {
      liked: true,
      imagesource: "/Products/airpodsmax.png",
      producttitle: "Apple AirPods Max",
      subtitle: "Wireless Over-Ear Headphones",
      price: 549,
    },
    {
      liked: false,
      imagesource: "/Products/AppleIPad.png",
      producttitle: "Apple iPad 9th Generation",
      subtitle: "64GB - Space Gray",
      price: 329,
    },
    {
      liked: false,
      imagesource: "/Products/BlackMagicCamera.png",
      producttitle: "Blackmagic Pocket Cinema Camera 6K",
      subtitle: "Super 35 HDR Sensor",
      price: 1995,
    },
    {
      liked: true,
      imagesource: "/Products/GalaxyBuds.png",
      producttitle: "Samsung Galaxy Buds FE",
      subtitle: "True Wireless Earbuds - Graphite",
      price: 99,
    },
    {
      liked: false,
      imagesource: "/Products/GalaxyWatch.png",
      producttitle: "Samsung Galaxy Watch 6",
      subtitle: "44mm Bluetooth Smartwatch - Silver",
      price: 299,
    },
    {
      liked: false,
      imagesource: "/Products/ZFold.png",
      producttitle: "Samsung Galaxy Z Fold 5",
      subtitle: "512GB Phantom Black",
      price: 1799,
    },
  ],
  bestSeller: [
    {
      liked: true,
      imagesource: "/Products/GalaxyWatch.png",
      producttitle: "Samsung Galaxy Watch 6",
      subtitle: "64GB - Deep Green",
      price: 900,
    },
    {
      liked: false,
      imagesource: "/Products/applewatch9.png",
      producttitle: "Apple Watch 9",
      subtitle: "A Smart Watch by Apple inc.",
      price: 549,
    },
    {
      liked: true,
      imagesource: "/Products/airpodsmax.png",
      producttitle: "Airpods Max",
      subtitle: "Space Gray",
      price: 329,
    },
    {
      liked: false,
      imagesource: "/Products/goldeniphone.png",
      producttitle: "IPhone 14 Pro",
      subtitle: "Golden",
      price: 1995,
    },
    {
      liked: true,
      imagesource: "/Products/AppleIPad.png",
      producttitle: "IPad - A tablet by Apple inc.",
      subtitle: "Make Your kids an addict.",
      price: 99,
    },
  ],
  featuredProducts: [
    {
      liked: false,
      imagesource: "/Products/BlackMagicCamera.png",
      producttitle: "Black Magic Camera",
      subtitle: "Dark Black",
      price: 900,
    },
    {
      liked: true,
      imagesource: "/Products/Iphone14pro.png",
      producttitle: "I Phone 14 Pro",
      subtitle: "Deep Purple",
      price: 549,
    },
    {
      liked: true,
      imagesource: "/Products/GalaxyBuds.png",
      producttitle: "Galaxy Buds",
      subtitle: "Ocean Blue",
      price: 329,
    },
    {
      liked: true,
      imagesource: "/Products/ZFold.png",
      producttitle: "Galazy Z Fold 5",
      subtitle: "Zinc Space",
      price: 1995,
    },
    {
      liked: false,
      imagesource: "/Products/spacegrayiphone.png",
      producttitle: "IPhone 14 Pro",
      subtitle: "Space Gray",
      price: 99,
    },
  ],
  discountedProducts: [
    {
      liked: true,
      imagesource: "/Products/goldeniphone.png",
      producttitle: "Apple iPhone 14 Pro Max",
      subtitle: "128GB Golden",
      price: 900,
    },
    {
      liked: true,
      imagesource: "/Products/airpodsmax.png",
      producttitle: "Apple AirPods Max",
      subtitle: "Wireless Over-Ear Headphones",
      price: 549,
    },
    {
      liked: false,
      imagesource: "/Products/AppleIPad.png",
      producttitle: "Apple iPad 9th Generation",
      subtitle: "64GB - Space Gray",
      price: 329,
    },
    {
      liked: false,
      imagesource: "/Products/BlackMagicCamera.png",
      producttitle: "Blackmagic Pocket Cinema Camera 6K",
      subtitle: "Super 35 HDR Sensor",
      price: 1995,
    },
    {
      liked: false,
      imagesource: "/Products/spacegrayiphone.png",
      producttitle: "I Phone 14 Pro",
      subtitle: "128GB Titanium",
      price: 549,
    },
  ],
  allProducts: [] as {
    liked: boolean;
    imagesource: string;
    producttitle: string;
    subtitle: string;
    price: number;
  }[],
};

const allProductTitles = new Set();

Object.values(products).forEach((category) => {
  category.forEach((product) => {
    if (!allProductTitles.has(product.producttitle)) {
      allProductTitles.add(product.producttitle);
      products.allProducts.push(product);
    }
  });
});



export { banners, products };
