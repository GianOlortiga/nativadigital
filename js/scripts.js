
const consumerKey = 'ck_2ecb03b80100a4c040d3a25472217ec4bc49746a'
const consumerSecret = 'cs_e54190a8d9b3d5fbde696945d2476999e527942e'
const content = document.querySelector('#content')
const preload = document.querySelector('#preload')

const url = 'https://kaizetload.com.pe/wp-json/wc/v1/products?consumer_key='+consumerKey+'&consumer_secret='+consumerSecret

fetch(url)
.then(response => response.json())
.then(data => viewData(data))
.catch(err => viewError(err))

const viewData = data => {
    console.log(data)
    let body = '';
    for(let i=0; i < data.length; i++){
        body += `
            <div class="col-md-4 mt-5 mb-2">
                <div class="card">
                    <img src="${data[i].images[0].src}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${data[i].name}</h5>
                    <p class="card-text"><b>SKU</b>: ${data[i].sku} </p>
                    <p class="card-text"><b>Categoría</b>: ${data[i].categories[0].name} </p>
                    <p class="card-text" style="font-size:23px">S/.${data[i].price}</p>
                    <a href="${data[i].permalink}" target="_blank" class="btn btn-primary">Ver producto</a>
                    <small>ID: ${data[i].id}</small>
                    </div>
                </div>
            </div>
        `
    }
    content.innerHTML = body;
    preload.style.display = 'none'
}

const viewError = err => {
    content.innerHTML = `
        <div class="col-md-12">
            <div class="alert alert-danger mt-5">
                Hubo un problema al cargar los datos de la API. Verifique los parametros de petición
            </div>
        </div>
    `
}

