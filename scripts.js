const navbar = document.getElementById('navbar');
const colorId = document.getElementById('color')
const a = document.getElementById('nav-link')

let carrito = [] //variable global donde vamos a guardar los productos
const tbody = document.querySelector('.tbody')



window.addEventListener('scroll', () => {
    if (window.scrollY > 80 || document.documentElement.scrollTop > 40) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


//funcionalidades 
const clickbutton = document.querySelectorAll('.button') //funcion para detectar que se a tocando en los botones de la clase btn

clickbutton.forEach(btn => {

    btn.addEventListener('click', addToCarritoItem)

})


function addToCarritoItem(e) {

    const button = e.target
    const item = button.closest('.card') //me guardo toda la informacion del card

    const itemTitle = item.querySelector('.card-title').textContent;
    //console.log(itemTitle);

    const itemPrice = item.querySelector('.precio').textContent;
    //console.log(itemPrice)
    const itemImg = item.querySelector('.card-img-top').src;
    //console.log(itemImg)

    const newItem = {  //creamos un objeto para guardar la informacion del carrito
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem) //funcion para añadir al carrito los items 


}

function addItemCarrito(newItem) {


    carrito.push(newItem)

    renderCarrito()

}


function renderCarrito() {


    carrito.map(item => {

        const tr = document.createElement('tr')
        tr.classList.add("itemCarrito")

        const content = ` <th scope="row">1</th>
       <td class="table__productos">
           <img src= ${item.img}alt="">
           <h6 class="title">${item.title}</h6>
       </td>
       <td class="table__price">
           <p>${item.precio}</p>
       </td>
       <td class="table__cantidad">
           <input type="number" min="1" value=${item.cantidad}>
           <button class="delete btn btn-danger">x</button>
       </td>`

        tr.innerHTML = content
        tbody.appendChild(tr)
    })

}





