document.addEventListener('DOMContentLoaded', function() {
    var categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            categoryButtons.forEach(function(btn) {
                btn.classList.remove('btn-outline-success');
                btn.classList.remove('button');
            });
            this.classList.add('btn-outline-success');
            this.classList.add('button');
            var category = this.getAttribute('data-category');
            if (category === 'all') {
                var cards = document.querySelectorAll('#card-grid .col');
                cards.forEach(function(card) {
                    card.style.display = 'block';
                });
            } else {
                var cards = document.querySelectorAll('#card-grid .filter');
                cards.forEach(function(card) {
                    var cardCategory = card.getAttribute('data-category');
                    if (cardCategory === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
});