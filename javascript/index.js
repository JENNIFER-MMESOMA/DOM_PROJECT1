document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Loop through each cart item to add event listeners
    cartItems.forEach(item => {
        const addButton = item.querySelector('.add-btn');
        const likeButton = item.querySelector('.like-btn');
        const itemPrice = parseFloat(item.dataset.price);

        // Add event listener to the add button to increase total price
        addButton.addEventListener('click', () => {
            totalPrice += itemPrice;
            updateTotalPrice();
        });

        // Add event listener to the like button to toggle the liked state
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });

    // Function to update the total price displayed
    function updateTotalPrice() {
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Initial call to set the total price to 0
    updateTotalPrice();
});
