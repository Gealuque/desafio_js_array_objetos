

// Arreglo de Datos en Venta

const p_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banios: 4,
        costo: 5000,
        smoke:false,
        pets:false 
    },{
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banios: 1,
        costo: 1200,
        smoke:true,
        pets:true 
    },{
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 4500,
        smoke:false,
        pets:true 
    }
]

//Arreglo de Datos en Alquiler
const p_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2000,
        smoke:false,
        pets:true 
    },{
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 2500,
        smoke:true,
        pets:true 
    },{
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2200,
        smoke:false,
        pets:false 
    }
]

const casa_venta = document.querySelector('#ventaindex');
const casa_alquiler = document.querySelector('#alquilerindex');
const boton_1 = document.querySelector('#boton_1')
const boton_2 = document.querySelector('#boton_2')

let msj = ''
let msj2 = ''
let pintarhtml =''
let pintarhtml2 =''

const textoFumar = (fumar) =>{
    if(fumar === true){
        msj = `<p class = 'permite'><i class="fas fa-smoking"></i> Permitido fumar </p>`
    }else{
        msj = `<p class = 'no_permite'><i class="fas fa-smoking-ban"></i> No se permite fumar </p>`
    }
    return msj
}

const textMascota = (mascota) =>{
    if(mascota === true){
        msj2 = `<p class = 'permite'><i class="fas fa-paw"></i> Mascotas permitidas </p>`;
    }else{
        msj2 = `<p class = 'no_permite'><i class="fa-solid fa-ban"></i> No se permiten mascotas`
    }
    return msj2
}

for (const venta of p_venta){
    pintarhtml += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src = '${venta.src}' class="card-img-top" alt="Casa en Venta"/>
                    <div class="card-body">
                    <h5 class="card-title">${venta.nombre}</h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${venta.habitaciones} habitaciones |<i class="fas fa-bath"></i> ${venta.banios} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                    ${textoFumar(venta.smoke)}
                    ${textMascota(venta.pets)}
                </div>
            </div>
        </div>`
}
casa_venta.innerHTML = pintarhtml;
boton_1.innerHTML = `<a href='./propiedades_venta.html'><button class='boton'>Ver más Propiedades</button>`


// Casas En Alquiler

for (const alquiler of p_alquiler){
    pintarhtml2 += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src = '${alquiler.src}' class="card-img-top" alt="Casa en Alquiler"/>
                    <div class="card-body">
                    <h5 class="card-title">${alquiler.nombre}</h5>
                    <p class="card-text">${alquiler.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} habitaciones |<i class="fas fa-bath"></i> ${alquiler.banios} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i>${alquiler.costo}</p>
                    ${textoFumar(alquiler.smoke)}
                    ${textMascota(alquiler.pets)}
                </div>
            </div>
        </div>`
}
casa_alquiler.innerHTML = pintarhtml2;
boton_2.innerHTML = `<a href='./propiedades_alquiler.html'><button class='boton'>Ver más Propiedades</button>`


