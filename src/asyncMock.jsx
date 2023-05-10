const products = [
    {
        id: 1,
        name: "Cemento",
        precio: 900,
        category: "obraGruesa",
        img: "./images/1-cemento.jpg",
        stock: 10000,
        description: "Cemento Holcim, bolsa x 50 kgs"        
    },
    {
        id: 2,
        name: "Hierro Ø6",
        precio: 900,
        category: "obraGruesa",
        img: "./images/1-hierro-Ø6.jpg",
        stock: 10000,
        description: "Hierro de construccion Ø6, nervado, barra x 12mts"        
    },
    {
        id: 3,
        name: "Vigueta 1mts",
        precio: 900,
        category: "obraGruesa",
        img: "./images/1-vigueta1.jpg",
        stock: 10000,
        description: "Vigueta Pretensada x 1mts"        
    },
    {
        id: 4,
        name: "Bacha",
        precio: 900,
        category: "terminaciones",
        img: "./images/2-bacha.jpg",
        stock: 10000,
        description: "Bacha de Baño Ferrum"        
    },
    {
        id: 5,
        name: "Juego de baño",
        precio: 900,
        category: "terminaciones",
        img: "./images/2-baño.jpg",
        stock: 10000,
        description: "Juego de baño compuesto por Inodoro y Bidet Ferrum"        
    },
    {
        id: 6,
        name: "Griferia",
        precio: 900,
        category: "terminaciones",
        img: "./images/2-griferia.jpg",
        stock: 10000,
        description: "Juego de griferia de baño Pairano"        
    },
    {
        id: 7,
        name: "Amoladora",
        precio: 900,
        category: "herramientas",
        img: "./images/3-amoladora.jpg",
        stock: 10000,
        description: "Amoladora de mano Philco"        
    },
    {
        id: 8,
        name: "Taladro",
        precio: 900,
        category: "herramientas",
        img: "./images/3-taladro.jpg",
        stock: 10000,
        description: "Taladro de mano Philco"        
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 2000)
    })
}

export const getProductsByCategory = (productsCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productsCategory))
        }, 2000)
    })
}