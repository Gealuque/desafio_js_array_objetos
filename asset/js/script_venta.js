
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
    },{
        nombre: 'Acojedora Casa de 2 Pisos',
        src: './asset/img/casa_bosque.jpg',
        descripcion: 'Esta hermosa casa está rodeada por un bosque a 10km de la ciudad, dando la sensasión de tranquildad y comodidad',
        ubicacion: 'Fanshawe Pioneer Village, City Ville, CA 67890',
        habitaciones: 4,
        costo: 4300,
        smoke:false,
        pets:true 
    }
]

// Inicio de pintado y condiciones

const casa_venta = document.querySelector('#venta');


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

let pintarhtml = ''


//Casas en Venta

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



