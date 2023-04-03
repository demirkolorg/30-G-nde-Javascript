let basket = JSON.parse(localStorage.getItem('basket')) || []
const products = [
    {
        id: 1,
        title: 'Pc',
        price: 100
    },
    {
        id: 2,
        title: 'Phone',
        price: 200
    },
    {
        id: 3,
        title: 'Tv',
        price: 300
    },
]



function addBasket(productId) {
    const basketIndex = basket.findIndex(p => p.productId === productId)

    if (basketIndex > -1) {
        basket[basketIndex] = {
            ...basket[basketIndex],
            amount: basket[basketIndex].amount + 1
        }
    } else {
        basket.push({
            productId,
            amount: 1
        })

    }
    saveToStorage()
}

function removeBasket(productId) {
    const item = basket.find(p => p.productId === productId)

    if (!item) return

    if (item.amount === 1) {
        basket = basket.filter(p => p.productId !== productId)
    } else {
        basket = basket.map(i => {
            if (i.productId === productId) {
                i.amount -= 1
            }
            return i
        })
    }
    saveToStorage()
}

function totalPrice() {
    return basket.reduce((total, basket) => {
        const product = products.find(p => p.id === basket.productId)
        return total += (product.price * basket.amount)
    }, 0)
}

function saveToStorage() {
    localStorage.setItem('basket', JSON.stringify(basket))
    localStorage.setItem('basketTotalPrice', totalPrice())
}

function clearStorage() {
    localStorage.clear()
}

function addToStorage() {
    addBasket(1)
    addBasket(2)
    addBasket(2)
    addBasket(3)
    addBasket(3)
    addBasket(3)
}

// clearStorage()
// addToStorage()
// removeBasket(1)
