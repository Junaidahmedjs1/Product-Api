const div = document.querySelector(`.container`)

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                
                res.map((item)=>{
                    div.innerHTML+= `<div id="cards" class="card border border-white p-5 rounded text-body " >
            <img width = "100%" src="${item.image}"
             alt="${item.image}" class="card-image" />
                    <h1 class=" text-center fs-3 fw-bold mt-2 ">${item.title}</h1>
                    <h3 class="text-center mt-2 fs-4 fw-bold"> ${item.category}</h3>
                    <p class= "fs-5 mt-2 text-center">${item.description.slice(0,32)}....</p>
                    <h3 class=" text-center text-success" > ${item.price}$</h3>
                     <button type="button" class="btn btn-danger" onclick="show(${item.id})">Show More....</button>
    
                </div>`
                })

            }).catch((err)=>{
                console.log(err);
                
            })


            function show(id) {
                var data = JSON.stringify(id)
                localStorage.setItem("card",id);
                console.log(data);
                
            
                window.location = "showCard.html"
                
            }
