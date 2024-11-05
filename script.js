
      //fetch data
        async function getProduct() {
            let res = await fetch("https://fakestoreapi.com/products");
            let data = await res.json();
            displayProducts(data);
        }

       //diplay he product details
        function displayProducts(products) {
            products.forEach(product => {
                document.querySelector(".product-container").innerHTML +=
                    `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                        <div class="product-info">
                            <h2 class="product-title">${product.title}</h2>
                            <p class="product-description">${product.description}</p>
                            <p class="product-category">${product.category}</p>
                            <p class="product-price">$${product.price}</p>
                            <div class="product-rating">
                                <span class="stars">★</span><span class="stars">★</span><span class="stars">★</span><span class="stars">★</span><span class="stars">☆</span>
                                <span class="review-count">(${product.rating.count} reviews)</span>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        getProduct();
