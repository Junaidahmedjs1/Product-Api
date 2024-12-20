const div = document.querySelector(".container")
let result = JSON.parse(localStorage.getItem('card'));
if (!result) {
    console.error('No product ID found in localStorage');
}


fetch(`https://fakestoreapi.com/products/${result}`)
    .then(res => res.json())
    .then(item => {
        const rating = Math.round(item.rating.rate); 
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<span class="text-warning">&#9733;</span>'; 
            } else {
                stars += '<span class="text-secondary">&#9733;</span>'; 
            }
        }
        div.innerHTML = `
            <div id="cards" class="card border border-white p-5 rounded w-75 text-body">
                <img width="100%" src="${item.image}" alt="${item.title}" class="card-image" />
                <h1 class="text-center fs-3 fw-bold mt-2">${item.title}</h1>
                <h3 class="text-center mt-2 fs-4 fw-bold">${item.category}</h3>
                <p class="fs-5 mt-2 text-center">${item.description}...</p>
                <h3 class="text-center text-success">${item.price}$</h3>
                <h1 class="text-center fw-bold">${stars}</h1>
            </div>
        `;
    })
    .catch(err => {
        console.log(err);
    });

