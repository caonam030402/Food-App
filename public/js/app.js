const addToCart = document.querySelectorAll('.add-to-cart'),
cartCounter = document.querySelector('.cart__header__quanlity')

function updateCart(pizza) {
    axios.post('/update-cart', pizza).then((res) => {
        cartCounter.innerText = res.data.totalQty
        toast({
            title: "Item added to cart",
            message: "Check cart to see products ^^",
            type: "success",
            duration: 5000
          })
    }).catch((err) => {
        toast({
            title: "Item not added to cart",
            message: "Please try again later :((",
            type: "error",
            duration: 5000 
        })
    })
}

// 
addToCart.forEach( (btn)=> {
    btn.addEventListener('click', () => {
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
        
    })
})

