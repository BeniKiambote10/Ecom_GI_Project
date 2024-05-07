const products = [
  {
      "id": 1,
      "name": "Stretch Leg Cargo jean",
      "price": 27.99,
      "product_description": "Green Cargo Jeans",
      "image": "https://www.fashionnova.com/cdn/shop/files/05-10-23Studio2_KJ_RL_15-28-54_37_JTP02TW_Olive_12110_MP.jpg?v=1684358555"
  },
  {
      "id": 2,
      "name": "Command Stretch Cargo jean",
      "price": 31.99,
      "product_description": "High Rise Stretch Jeans",
      "image": "https://www.fashionnova.com/cdn/shop/products/10-24-22Studio3_RM_RN_14-50-00_21_FN22P63623_LightWash_31985_ES.jpg?v=1666720345"
  },
  {
      "id": 3,
      "name": "Straight Leg Jeans",
      "price": 23.99,
      "product_description": "Seeking Thrills Straight Leg Jeans",
      "image": "https://www.fashionnova.com/cdn/shop/products/06-06-22Studio4_ME_RL_15-32-17_31_AB18361RSMD_MediumWash_17080_JB.jpg?v=1654632573"
  },
  {
      "id": 4,
      "name": "Wide Leg Jean",
      "price": 27.99,
      "product_description": "Whatever You Say Ripped Wide Leg Jean",
      "image": "https://www.fashionnova.com/cdn/shop/products/02-06-23Studio2_KJ_RL_15-31-14_14_DT132_Black_6155_JB.jpg?v=1675978303"
  },
  {
      "id": 5,
      "name": "Girl Crush 90's Dad Jeans",
      "price": 31.99,
      "product_description": "Girl Crush 90's Dad Jeans- Medium wash",
      "image": "https://www.fashionnova.com/cdn/shop/products/07-29-22Studio3_RM_RL_15-54-25_43_WV18137RSMD_MediumWash_24947_PB.jpg?v=1659475938"
  },
  {
      "id": 6,
      "name": "Straight Leg Jeans - Light",
      "price": 23.99,
      "product_description": "Leg Jeans - Light Wash",
      "image": "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio2_RA_RL_12-28-06_25_AB18361RSMD_LightWash_19771_SG.jpg?v=1695156670"
  },
  {
      "id": 7,
      "name": "Do Us Part Graphic Tee - Sand",
      "price": 7.98,
      "product_description": "Graphic Tee shirts",
      "image": "https://www.fashionnova.com/cdn/shop/files/08-11-23Studio1_CB_SS_11-25-26_11_SPDN2920W_Sand_14659_SG.jpg?v=1692382020"
  },
  {
      "id": 8,
      "name": "Mi Amor Graphic Tshirt",
      "price": 13.99,
      "product_description": "Amour Graphic Tee shirt",
      "image": "https://www.fashionnova.com/cdn/shop/files/07-07-23Studio1_KT_IM_13-03-29_28_SPDN2830W_Taupe_2661_PXF.jpg?v=1689280993"
  },
  {
      "id": 9,
      "name": "Zip It Wide Leg Pant - Sage",
      "price": 31.99,
      "product_description": "Wide Leg Pant sage",
      "image": "https://www.fashionnova.com/cdn/shop/files/04-26-24_S2_3_P16184C_Sage_KJ_RL_11-47-33_35890_PXF.jpg?v=1714424215"
  },
  {
      "id": 10,
      "name": "Wide Leg Cargo Pant - Red",
      "price": 31.99,
      "product_description": "Wide Leg Cargo pants",
      "image": "https://www.fashionnova.com/cdn/shop/files/03-11-24_S2_23_P2690C_Red_KJ_RL_15-24-55_33298_SG.jpg?v=1710539420"
  },
  {
      "id": 11,
      "name": "Denim Jumpsuit - Dark Wash",
      "price": 54.99,
      "product_description": "Dark Wash Jumpsuit",
      "image": "https://www.fashionnova.com/cdn/shop/files/03-27-24_S3_53_JP16604C_DarkWash_HY_SS_15-27-28_14072_PXF.jpg?v=1711754449"
  },
  {
      "id": 12,
      "name": "Camo Cargo Pant - Olive",
      "price": 31.99,
      "product_description": "Cameo Cargo Pants",
      "image": "https://www.fashionnova.com/cdn/shop/files/07-13-23Studio2_TK_RL_15-00-45_18_ZDRBFN002_Olivecombo_15486_CM.jpg?v=1689715455"
  },
  {
      "id": 13,
      "name": "All Day Graphic Tee - Olive",
      "price": 13.99,
      "product_description": "Graphic Tee",
      "image": "https://www.fashionnova.com/cdn/shop/files/06-23-23Studio1_TK_IM_14-06-48_28_SPDN2147W_Olive_P_19012_MP.jpg?v=1687908833"
  },
  {
      "id": 14,
      "name": "Smiley Long Sleeve Tee",
      "price": 11.99,
      "product_description": "Long Sleeve Tee",
      "image": "https://www.fashionnova.com/cdn/shop/products/10-07-22Studio2_KJ_MR_10-33-42_7_SPDN733W_Black_3139_SG.jpg?v=1665173431"
  },
  {
      "id": 15,
      "name": "Love Long Sleeve Tee",
      "price": 9.00,
      "product_description": "Tan Long Sleeve Tee",
      "image": "https://www.fashionnova.com/cdn/shop/files/10-03-23Studio1_KF_PC_14-08-01_30_N20468_NaturalCombo_0521_PXF.jpg?v=1696626378"
  }
];

// Function to create HTML markup for a product for what will be displayed on our screen so that we can see 
function createProductElement(product, index) {
  const productElement = document.createElement('div');
  productElement.classList.add('product-item' + (index + 1));
  
  productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name} <i onclick="heartFill()" id="hearty" class="fa-regular fa-heart"></i> </h3>
      <p>${product.product_description}</p>
      <p>$${product.price.toFixed(2)}</p>
      <button class="addCart" id="cart2" onClick="addToCart()">Add to Cart</button>
  `;
  
  return productElement;
}

// Function to render products on the page
function renderProducts() {
  const productList = document.getElementById('product-list');
  
  products.forEach((product, index) => {
      const productElement = createProductElement(product, index);
      productList.appendChild(productElement);
  });
}



// Call the function to render products when the page loads//
window.addEventListener('load', renderProducts);


//function for adding items to the cart when the add to cart button is pushed//

function addToCart(){
    prompt("What is your size? X-Large, Large, Small, Medium"); {
    
    alert ("Added To Your Cart!")
        return;      
    }
};




//function to showside bar when the icon is clicked//
function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
};





//this function is for showing the search box when the search icon is pushed and making it dissapear again//

function showSearchBox() {
    const searchBox = document.querySelector(".searchBoxCon");
    const searchIcon = document.querySelector(".nav_search");

    // Toggle the display of the search box
    if (searchBox.style.display === "flex") {
        searchBox.style.display = "none";
        searchIcon.style.display = "flex"; // Show the search icon when hiding the search box
    } else {
        searchBox.style.display = "flex";
        searchIcon.style.display = "none"; // Hide the search icon when showing the search box
    }
}






