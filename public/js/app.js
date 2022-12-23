const addToCart = document.querySelectorAll('.add-to-cart'),
cartCounter = document.querySelector('.cart__header__quanlity'),
alertMsg = document.querySelector('#order__alert')



function updateCart(pizza) {
    axios.post('/update-cart', pizza).then((res) => {
        cartCounter.innerText = res.data.totalQty
        toast({
            title: "Item added to cart",
            message: "Check cart to see products ^^",
            type: "success",
            duration: 3000
          })
    }).catch((err) => {
        toast({
            title: "Item not added to cart",
            message: "Please try again later :((",
            type: "error",
            duration: 3000 
        })
    })
}



// Add cart
addToCart.forEach( (btn)=> {
    btn.addEventListener('click', () => {
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})


if(alertMsg) {
    setTimeout(() => {
        alertMsg.remove()
    }, 5000)
}


// Change order status
let statuses = document.querySelectorAll('.status__item')
let circle = document.querySelector('.status__circle')
console.log(statuses);
let hiddenInput = document.querySelector('#hiddenInput')
let infoStatus = document.querySelector('.info__status')
let statusText = document.querySelector('.status__text')
let statusTime = document.querySelector('.status__time')
let order = hiddenInput ? hiddenInput.value : null
order = JSON.parse(order)
let time = document.createElement('small')

console.log(order);

function updateStatus(order) {
    let stepComplete = true;
    
    statuses.forEach((status) => {
        let dataProp = status.dataset.status

        if(stepComplete) {
           status.classList.add('step-completed')
        }

        if(dataProp === order.status) {
            stepComplete = false;

            if(order.status === 'completed') {
                statusText.style.color = '#008000'
            } else {
                statusText.style.color = '#FD6D22'
            }

            statusText.innerText = order.status.toUpperCase()
            statusTime.innerText = moment(order.updatedAt).format('LLL')
            infoStatus.appendChild(time)
            if(status.nextElementSibling) {
                status.nextElementSibling.classList.add('current')
            }
        }
    })
}

updateStatus(order)