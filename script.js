const Products = [
  {
    productName: "Corsair HS80 RGB",
    price: 120,
    srcImg:
      "https://www.corsair.com/eu/en/medias/sys_master/images/images/hc4/he9/9839645687838/CA-9011235-EU/Gallery/HS80_RGB_WIRELESS_BLACK_01/-CA-9011235-EU-Gallery-HS80-RGB-WIRELESS-BLACK-01.png_515Wx515H",
  },
  {
    productName: "VIRTUOSO RGB WIRELESS",
    price: 209,
    srcImg:
      "https://www.corsair.com/eu/en/medias/sys_master/images/images/h0b/hc5/9597790748702/CA-9011185-EU/Gallery/VIRTUOSO_CARBON_01/-CA-9011185-EU-Gallery-VIRTUOSO-CARBON-01.png_515Wx515H",
  },
  {
    productName: "VOID RGB ELITE Wireless",
    price: 120,
    srcImg:
      "https://www.corsair.com/medias/sys_master/images/images/he3/h98/9325735542814/-CA-9011201-EU-Gallery-VOID-RGB-ELITE-WIRELESS-CARBON-01.png",
  },
  {
    productName: "HS55 STEREO Wired",
    price: 70,
    srcImg:
      "https://www.corsair.com/eu/en/medias/sys_master/images/images/h0b/h57/10123755225118/CA-9011260-EU/Gallery/CA-9011260-EU_01/-CA-9011260-EU-Gallery-CA-9011260-EU-01.png_515Wx515H",
  },
  {
    productName: "HS70 PRO WIRELESS",
    price: 119,
    srcImg:
      "https://www.corsair.com/medias/sys_master/images/images/he9/h5d/9325656965150/-CA-9011211-EU-Gallery-HS70-PRO-CARBON-01.png",
  },
  {
    productName: "HS35 Stereo Gaming Headset",
    price: 55,
    srcImg:
      "https://www.corsair.com/medias/sys_master/images/images/h70/h0a/9254226427934/-CA-9011195-EU-Gallery-HS35-BLACK-01.png",
  },
  {
    productName: "HS75 XB WIRELESS",
    price: 64.99,
    srcImg:
      "https://www.corsair.com/eu/en/medias/sys_master/images/images/h7b/h05/9606158712862/base-hs75-xb-wireless-config/Gallery/HS75_XB_01/-base-hs75-xb-wireless-config-Gallery-HS75-XB-01.png_515Wx515H",
  },
  {
    productName: "ST100RGB Headset Stand",
    price: 69.99,
    srcImg:
      "https://www.corsair.com/medias/sys_master/images/images/h57/h6c/9423330541598/-CA-9011167-EU-Gallery-ST100RGB-01.png",
  },
  {
    productName: "Logitech G305",
    price: 59.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g305/g305-gallery-1.png?v=1",
  },
  {
    productName: "LOGITECH G303",
    price: 99.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/shroud-g303/shroud-g303-gallery-1.png?v=1",
  },
  {
    productName: "Logitech G203",
    price: 29.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/refreshed-g203/g203-white-gallery-1.png?v=1",
  },
  {
    productName: "Logitech G604",
    price: 99.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g604/g604-gallery-1.png?v=1",
  },
  {
    productName: "Logitech G403",
    price: 39.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/g403/g403-wired-gallery-1-nb.png?v=1",
  },
  {
    productName: "Logitech G703",
    price: 99.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g703/g703-gallery-1.png?v=1",
  },
  {
    productName: "Logitech G502",
    price: 149.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1",
  },
  {
    productName: "Logitech G600",
    price: 34.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/antivenom-g600/g600-gallery-1-nb.png?v=1",
  },
  {
    productName: "Logitech Keyboard G915",
    price: 249.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g915/g915-gallery/us-g915-wireless-gallery-topdown.png?v=1",
  },
  {
    productName: "Logitech Keyboard PRO X",
    price: 149.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png?v=1",
  },
  {
    productName: "Logitech Keyboard PRO X",
    price: 129.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard-kda/pro-keyboard-kda-gallery-01.png?v=1",
  },
  {
    productName: "Logitech Keyboard G413",
    price: 89.99,
    srcImg:
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/g413-firebird/g413-gallery-1-nb.png?v=1",
  },
];
const itemsCounter = [];
const Shop = document.querySelector(".Shop");

for (let i = 0; i < Products.length; i++) {
  const item = `<div class="item">
    <img src="${Products[i].srcImg}" />
    <h3>${Products[i].productName}</h3>
    <div class="itemButtons">
      <div class="itemCounter">
        <a>-</a>
        <p>0</p>
        <a>+</a>
      </div>
      <h3>Price: ${Products[i].price}$</h3>
      <a>Buy</a>
    </div>
  </div>`;
  Shop.innerHTML += item;
  itemsCounter.push(0);
}
const items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  const minMaxButtons = items[i].querySelector(".itemCounter");
  const BuyButton = items[i]
    .querySelector(".itemButtons")
    .querySelectorAll("a");
  minMaxButtons.querySelectorAll("a")[0].addEventListener("click", () => {
    if (itemsCounter[i] - 1 < 0) {
      return;
    }
    itemsCounter[i] -= 1;
    minMaxButtons.querySelector("p").innerText = itemsCounter[i];
  });
  minMaxButtons.querySelectorAll("a")[1].addEventListener("click", () => {
    itemsCounter[i] += 1;
    minMaxButtons.querySelector("p").innerText = itemsCounter[i];
  });
  BuyButton[2].addEventListener("click", () => {
    counter();
  });
}

function counter() {
  let total = 0;
  const list = document.querySelector("ul");
  const totalUi = document.querySelector(".cartSum").querySelector("h1");
  list.innerText = "";
  for (let i = 0; i < itemsCounter.length; i++) {
    total += itemsCounter[i] * Products[i].price;
    if (itemsCounter[i] > 0) {
      list.innerHTML += `<li>x${itemsCounter[i]} - ${
        Products[i].productName
      } - ${(
        Math.round(itemsCounter[i] * Products[i].price * 100) / 100
      ).toFixed(2)}$</li>`;
    }
    totalUi.innerHTML =
      "Total: " + (Math.round(total * 100) / 100).toFixed(2) + " $";
  }
}
