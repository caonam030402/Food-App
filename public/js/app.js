const addToCart = document.querySelectorAll('.add-to-cart'),
cartCounter = document.querySelector('.cart__header__quanlity'),
cartDelete = document.querySelector('.delete__cart'),
btnHighestPrice = document.querySelector('.lowest')



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


function sort() {
    
}
