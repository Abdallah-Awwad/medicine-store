document.addEventListener('DOMContentLoaded', function() {
    let categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            categoryButtons.forEach(function(btn) {
                btn.classList.remove('btn-outline-success');
                btn.classList.remove('button');
                btn.classList.remove('active-category');
            });
            this.classList.add('btn-outline-success');
            this.classList.add('button');
            this.classList.add('active-category');
            let category = this.getAttribute('data-category');
            if (category === 'all') {
                let cards = document.querySelectorAll('#card-grid .col');
                cards.forEach(function(card) {
                    card.style.display = 'block';
                });
            } else {
                let cards = document.querySelectorAll('#card-grid .filter');
                cards.forEach(function(card) {
                    let cardCategory = card.getAttribute('data-category');
                    if (cardCategory === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
    let addToCartButtons = document.querySelectorAll('.add-to-cart');
    let items = {};
    if (window.localStorage.getItem("items") != null) {
        items = JSON.parse(window.localStorage.getItem("items"));
    }
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let itemID = button.parentNode.parentNode.querySelector(".product-details").getAttribute("data-id");
            if (! items[itemID]) {
                items[itemID] = {
                    name : button.parentNode.parentNode.querySelector(".product-name").innerHTML,
                    price : button.parentNode.parentNode.querySelector(".product-price span").innerHTML,
                    quantity: 1
                }
            } else {
                items[itemID]["quantity"] = items[itemID]["quantity"] + 1
            }
            window.localStorage.setItem("items", JSON.stringify(items));

            // adding success Alert
            let successAlert = document.createElement("div");
            successAlert.className = "item-added-alert container alert alert-success fixed-top text-center w-75 mt-1 py-2";
            successAlert.setAttribute("role", "alert");
            successAlert.innerHTML = '<i class="fa-regular fa-circle-check"></i> Item added successfully';
            document.body.appendChild(successAlert);
            
            setTimeout(function() {
                successAlert.classList.add("show");
            }, 0);
              
            setTimeout(function() {
                successAlert.classList.remove("show");
                setTimeout(function() {
                    successAlert.remove();
                }, 6000);
            }, 3000);              
        });
    });
});

$(function () {
    $(document).scroll(function () {
        let $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});