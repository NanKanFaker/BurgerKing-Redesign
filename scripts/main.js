/*=============== SHOW ORDER INFO ===============*/
function showOrderInfo() {
    const buttons = document.querySelectorAll('.order__form button'),
        form = document.getElementById('delivery-form'),
        orderInfo = document.getElementById('order-info');

    buttons.forEach((btn) => {
        btn.addEventListener('submit', (e) => {
            e.preventDefault();

            orderInfoContent = getInfo();
            console.log(orderInfoContent);
            form.reset();

            orderInfo.classList.add('show-info');
            orderInfo.querySelector('span').textContent = `  
           預定資訊: ${orderInfoContent.orderDate}  ${orderInfoContent.orderTime}   ${orderInfoContent.orderCity}${orderInfoContent.orderDist}${orderInfoContent.orderAddress}
            `
        })
    });
}

function getInfo() {
    const form = document.getElementById('delivery-form');
    let orderDate = form.querySelector('#order-date').value,
        orderTime = form.querySelector('#order-time').value,
        orderCity = form.querySelector('#order-city').value,
        orderDist = form.querySelector('#order-dist').value,
        orderAddress = form.querySelector('#order-address').value;

    let orderInfo = { orderDate, orderTime, orderCity, orderDist, orderAddress };
    return orderInfo;
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

showDialog();


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
const homeSwiper = new Swiper('.home__swiper', {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,

    pagination: {
        el: '.home__pagination',
        clickable: true,
        grabCursor: true
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

const popularSwiper = new Swiper('.popular__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 32,

    pagination: {
        el: '.popular__pagination',
        clickable: true,
    }
});

