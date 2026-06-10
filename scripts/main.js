/*=============== SHOW ORDER INFO ===============*/
function showOrderInfo() {
    const buttons = document.querySelectorAll('.order__form button');
    orderInfo = document.getElementById('order-info');

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            orderInfo.classList.add('show-info');
        })
    });
}

showOrderInfo();

/*=============== DIALOG ===============*/
function showDialog() {
    const dialog = document.getElementById('dialog'),
        openButtons = document.querySelectorAll('.order__form button'),
        closeBtn = document.getElementById('close-btn');

    openButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            dialog.showModal();
        })
    })

    closeBtn.addEventListener('click', () => {
        dialog.close();
    });
}

showDialog()


/*=============== MODIFY ORDER INFO ===============*/
function modifyOrderInfo() {
    const modifyBtn = document.getElementById('modify-button'),
        orderInfo = document.getElementById('order-info'),
        order = document.getElementById('order');

    modifyBtn.addEventListener('click', () => {
        orderInfo.classList.remove('show-info');

        order.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}

modifyOrderInfo();

/*=============== SWITCH FORM ===============*/
function switchButton() {
    const orderButtons = document.querySelectorAll('.order__button');
    orderButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            orderButtons.forEach((b) => {
                b.classList.remove('order__button--active')
            })
            btn.classList.add('order__button--active');
        })
    })
}

switchButton();

function showForm() {
    const deliveryBtn = document.getElementById('delivery-switch'),
        pickupBtn = document.getElementById('pickup-switch'),
        deliveryForm = document.getElementById('delivery-form'),
        pickupForm = document.getElementById('pickup-form');

    deliveryBtn.addEventListener('click', () => {
        if (deliveryBtn.classList.contains('order__button--active')) {
            deliveryForm.classList.add('show-form');
            pickupForm.classList.remove('show-form');
        }
    });

    pickupBtn.addEventListener('click', () => {
        if (pickupBtn.classList.contains('order__button--active')) {
            pickupForm.classList.add('show-form');
            deliveryForm.classList.remove('show-form');
        }
    });
}

showForm();


/*=============== SWIPER ===============*/
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 32,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
