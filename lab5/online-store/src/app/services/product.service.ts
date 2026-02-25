import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private readonly products: Product[] = [
    // ===== Smartphones (categoryId: 1) =====
    {
      id: 101,
      categoryId: 1,
      name: 'Apple iPhone 15 Pro 256Gb (черный)',
      description: 'Титановый корпус, A17 Pro, отличная камера.',
      price: 877777,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/86302548557854.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h33/86319885680670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/h70/86319885713438.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h54/h9a/86319885746206.jpg?format=gallery-medium',
      ],
      likes: 0,
    },
    {
      id: 102,
      categoryId: 1,
      name: 'Samsung Galaxy S24 Ultra 12/512 (черный)',
      description: 'Snapdragon 8 Gen 3, камера 200 МП, S Pen.',
      price: 750000,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h49/84963524771870.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h6d/84963582541854.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h87/84963582574622.png?format=gallery-medium'
      ],
      likes: 0,
    },
    {
      id: 103,
      categoryId: 1,
      name: 'Xiaomi 13T 12/256 (черный)',
      description: 'AMOLED, 5G, камеры Leica, батарея 5000 мА·ч.',
      price: 249990,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/xiaomi-13t-12-gb-256-gb-chernyi-113419417/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h79/h3c/87134127030302.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/hff/87134127063070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6c/hb8/87134127128606.jpg?format=gallery-medium',
      ],
      likes: 0,
    },
    {
      id: 104,
      categoryId: 1,
      name: 'Google Pixel 8 8/128 (черный)',
      description: 'OLED 120 Гц, Google Tensor G3, классная камера.',
      price: 313950,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/google-pixel-8-8-gb-128-gb-chernyi-113692654/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/he9/84136091254814.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p89/64507271.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p8a/64507272.png?format=gallery-large',
      ],
      likes: 0,
    },
    {
      id: 105,
      categoryId: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 839501,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-large',
      ],
      likes: 0,
    },

    // ===== Laptops (categoryId: 2) =====
    {
      id: 201,
      categoryId: 2,
      name: 'Apple MacBook Air 13 (2022) M2 8/256',
      description: 'Легкий, тихий, отличный для учебы и работы.',
      price: 399990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-large',
      ],
      likes: 0,
    },
    {
      id: 202,
      categoryId: 2,
      name: 'Apple MacBook Air 15 (2023) 8/256',
      description: 'Большой экран 15.3", хороший звук и автономность.',
      price: 746997,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-15-3-8-gb-ssd-256-gb-macos-mqkp3ru-a-111217765/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h65/81547557503006.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/h79/81547557568542.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/haf/81547557634078.jpg?format=gallery-large',
      ],
      likes: 0,
    },
    {
      id: 203,
      categoryId: 2,
      name: 'Lenovo IdeaPad 5 15.6" 8/128',
      description: 'Универсальный ноутбук для учебы/работы.',
      price: 219990,
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-5-15-6-8-gb-ssd-128-gb-dos-15itl05-82fg00nrrk-101598794/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h5b/64329037709342.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8e/haf/64329040756766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/h30/64329043148830.jpg?format=gallery-medium',
      ],
      likes: 0,
    },
    {
      id: 204,
      categoryId: 2,
      name: 'HP Pavilion 15 15.6" 16/512',
      description: 'Быстрый SSD, 16 ГБ RAM — комфортно для задач.',
      price: 439999,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3022ci-15-6-16-gb-ssd-512-gb-dos-7p442ea-uuq-111967653/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h56/82089387917342.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h7a/82089388638238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8e/h11/82089389162526.jpg?format=gallery-medium',
      ],
      likes: 0,
    },
    {
      id: 205,
      categoryId: 2,
      name: 'ASUS Vivobook 15 15.6" 8/512 Win11',
      description: 'Хороший вариант для учебы, офисных задач.',
      price: 288937,
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-8-gb-ssd-512-gb-win-11-home-x1504za-90nb1021-m01aj0-116346443/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h93/85063435616286.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h54/hf9/85063435681822.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/hda/85063435747358.jpg?format=gallery-large',
      ],
      likes: 0,
    },

    // ===== Headphones (categoryId: 3) =====
    {
      id: 301,
      categoryId: 3,
      name: 'Sony WH-1000XM5 (черный)',
      description: 'Топовое шумоподавление и комфорт.',
      price: 134998,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
      ],
      likes: 0,
    },
    {
      id: 302,
      categoryId: 3,
      name: 'Apple AirPods Pro 2 (MagSafe)',
      description: 'ANC, отличный звук, удобная посадка.',
      price: 102551,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
      ],
      likes: 0,
    },
    {
      id: 303,
      categoryId: 3,
      name: 'Samsung Galaxy Buds2 Pro (белый)',
      description: '24-bit Hi-Fi, шумоподавление.',
      price: 79990,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7c/64496882024478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h52/64496884776990.jpg?format=gallery-medium',
      ],
      likes: 0,
    },
    {
      id: 304,
      categoryId: 3,
      name: 'JBL Tune 510BT (черный)',
      description: 'JBL Pure Bass, до 40 часов работы.',
      price: 10305,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-large',
      ],
      likes: 0,
    },
    {
      id: 305,
      categoryId: 3,
      name: 'Sony WH-1000XM5 (серебристый)',
      description: 'Та же легенда XM5, другой цвет.',
      price: 134722,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/pa4/10606242.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/pa4/10606243.jpg?format=gallery-medium',
      ],
      likes: 0,
    },

    // ===== Tablets (categoryId: 4) =====
    {
      id: 401,
      categoryId: 4,
      name: 'Apple iPad 10.9 (2022) Wi-Fi 4/64 (синий)',
      description: 'A14 Bionic, отличный экран для учебы/видео.',
      price: 239985,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-sinii-107266637/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/he7/64867890528286.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p23/78318406.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p23/78318407.png?format=gallery-large',
      ],
      likes: 0,
    },
    {
      id: 402,
      categoryId: 4,
      name: 'Apple iPad Air 11 (2024) Wi-Fi 8/128',
      description: 'M2, легкий, быстрый — почти как ноутбук.',
      price: 309500,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-128-gb-svetlo-bezhevyi-119778076/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h33/86106953678878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h9c/86106953711646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h77/86107143634974.jpg?format=gallery-large',
      ],
      likes: 0,
    },
    {
      id: 403,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S9 11" 8/128 (графит)',
      description: 'AMOLED, мощный, подойдет для учебы и творчества.',
      price: 302709,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h78/82770436423710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-medium',
      ],
      likes: 0,
    },
    {
      id: 404,
      categoryId: 4,
      name: 'Lenovo Tab P11 Plus 11" 6/128 (серый)',
      description: 'Хороший планшет для видео и конспектов.',
      price: 159990,
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-plus-tb-j616f-11-djuim-6-gb-128-gb-seryi-108040096/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h98/66889972613150.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h59/h32/66889973137438.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hab/hd2/66889973661726.jpg?format=gallery-medium',
      ],
      likes: 0,
    },
    {
      id: 405,
      categoryId: 4,
      name: 'Lenovo Tab P11 (2nd Gen) 11.5" 4/128 (серый)',
      description: 'Большой экран, комфорт для учебы и чтения.',
      price: 169990,
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-2nd-gen-zabf0065ru-11-5-djuim-4-gb-128-gb-seryi-113734499/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hdd/84153262080030.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h40/h4e/84153262145566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/h3d/84153262211102.jpg?format=gallery-large',
      ],
      likes: 0,
    },
  ];

 
  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex((p) => p.id === productId);
    if (index !== -1) this.products.splice(index, 1);
  }
}