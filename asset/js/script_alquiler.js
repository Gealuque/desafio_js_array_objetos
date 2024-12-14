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
    },{
        nombre: 'Casa lujosa a la orilla del lago con maravillosa vista',
        src: './asset/img/casa_lago.jpg',
        descripcion: 'Esta casa tiene 20 habitaciones y 10 baños lo que permitirá invitar a toda la familia para pasar fiestas de año nuevo o hacer celebraciones',
        ubicacion: 'Lake Michigan Beach, MI, CA 34678',
        habitaciones: 20,
        banios: 10,
        costo: 6000,
        smoke:false,
        pets:true 
    }
]


const casa_alquiler = document.querySelector('#alquiler');
let pintarhtml = ''
let msj = ''
let msj2 = ''

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


for (const alquiler of p_alquiler){
    pintarhtml += `
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
casa_alquiler.innerHTML = pintarhtml;

