// Simulate human delay
function humanDelay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * (3000 - 1000) + 1000));
}

// Filter products on the Amazon search page
async function filterAmazonProducts() {
    // Simulate human delay before starting
    await humanDelay();

    // Get all product items on the page
    let products = document.querySelectorAll('.s-main-slot .s-result-item');

    let hiddenCount = 0;

    products.forEach(async (product) => {
        await humanDelay();

        try {
            // Look for the 'Ships to Argentina' message in the product
            let shipsToMessage = product.querySelector('span.a-size-small.a-color-base');

            // If no shipping info is found or it doesn't ship to Argentina, hide the product
            if (!shipsToMessage || !shipsToMessage.innerText.includes("Ships to Argentina")) {
                product.style.display = 'none';
                hiddenCount++;
            }
        } catch (error) {
            console.log(`Error processing product: ${error}`);
        }
    });

    console.log(`Total products hidden: ${hiddenCount}`);
}

// Run the filter when the page loads
window.addEventListener('load', filterAmazonProducts);
