const lawnSizeSelect = document.getElementById('lawnSize');
const daySelect = document.getElementById('day');
const addressInput = document.getElementById('address');
const phoneInput = document.getElementById('phone');
const calculateButton = document.getElementById('calculateButton');
const totalPriceSpan = document.getElementById('totalPrice');

const confirmationSection = document.getElementById('confirmationSection');
const confirmedLawnSizeSpan = document.getElementById('confirmedLawnSize');
const confirmedDaySpan = document.getElementById('confirmedDay');
const confirmedAddressSpan = document.getElementById('confirmedAddress');
const confirmedPhoneSpan = document.getElementById('confirmedPhone');
const confirmedTotalPriceSpan = document.getElementById('confirmedTotalPrice');
const confirmOrderButton = document.getElementById('confirmOrderButton');

let calculatedPrice = null;

lawnSizeSelect.addEventListener('change', updatePrice);
daySelect.addEventListener('change', updatePrice);

calculateButton.addEventListener('click', () => {
    calculatedPrice = calculatePrice();
    const selectedDay = daySelect.value;
    

    confirmationSection.style.display = 'block';
    confirmedLawnSizeSpan.textContent = lawnSizeSelect.value;
    confirmedDaySpan.textContent = selectedDay;
    
    confirmedTotalPriceSpan.textContent = calculatedPrice.toFixed(2);
});



function calculatePrice() {
    const selectedSize = lawnSizeSelect.value;
    let price = 0;

    switch (selectedSize) {
        case 'small':
            price = 30;
            break;
        case 'medium':
            price = 40;
            break;
        case 'large':
            price = 60;
            break;
        case 'extra-large':
            price = 75;
            break;
    }

    return price;
}

function updatePrice() {
    if (calculatedPrice !== null) {
        totalPriceSpan.textContent = calculatedPrice.toFixed(2);
        totalPriceSpan.style.display = 'block';
    } else {
        totalPriceSpan.style.display = 'none';
    }
}

// ... (remaining functions)
