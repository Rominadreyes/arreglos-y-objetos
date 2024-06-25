const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baño:2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baño:3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baño:2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://cdn.bioguia.com/embed/c331f4e5d779a9c8b7946d2891718378504/Aguas-termales-de-Bath.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baño:2,
        costo: 2200,
        smoke: false,
        pets: false
    }
]
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane,Prestige Suburb, CA 45678',
        habitaciones: 4,
        baño:4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de unamontaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baño:1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baño:3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://cdn.bioguia.com/embed/2cddc444e5dd824ebaabcfe819e9e537e5b4dd11718378599/Aguas-termales-de-Bath-investigaciones.jpg?imagick=1&size=1100',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 3,
      baño:3,
      costo: 4500,
      smoke: false,
      pets: true
  }
]

/* creo un template para capturar el ID */
const template_venta = document.querySelector('#venta')
/* creo una variable vacia para que despues el for agregue las cartas */
let html= ''


/*  se realiza un for para recorrer todo el arreglo y se va agregando a la variable vacia html 
todas las cartas.
*/
for(let i = 0 ; i < 3;++i){
    const propiedades_ventas = propiedades_venta[i]
    html+=
    `<div class="col-md-4 mb-4">
       <div class="card">
         <img
           src= ${propiedades_ventas.src}
           class="card-img-top"
           alt="Imagen del departamento"
         />
         <div class="card-body">
           <h5 class="card-title">
               ${propiedades_ventas.nombre}
           </h5>
           <p class="card-text">
               ${propiedades_ventas.descripcion}
           </p>
           <p>
             <i class="fas fa-map-marker-alt"></i> 
             ${propiedades_ventas.ubicacion}
           </p>
           <p>
             <i class="fas fa-bed"></i> ${propiedades_ventas.habitaciones} Habitaciones |
             <i class="fas fa-bath"></i> ${propiedades_ventas.baño} Baños
           </p>
           <p><i class="fas fa-dollar-sign"></i>${propiedades_ventas.costo}</p>
           ${propiedades_ventas.smoke ? 
               `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : 
               `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
           ${propiedades_ventas.pets ? 
               `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : 
               `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
           </div>
           </div>
           </div>`
}
/* ya con la variable completa con las cartas agregadas por el for se agrega al HTML con innerHTML */
template_venta.innerHTML = html;

const template_alquiler = document.querySelector('#alquiler')
let html2= ''

for( let i = 0; i<3;++i){
    const alquiler = propiedades_alquiler[i]
    html2+=          
    `<div class="col-md-4 mb-4">
    <div class="card">
      <img
        src= ${alquiler.src}
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
            ${alquiler.nombre}
        </h5>
        <p class="card-text">
            ${alquiler.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> 
          ${alquiler.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${alquiler.baño} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i>${alquiler.costo}</p>
        ${alquiler.smoke ? 
            `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : 
            `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
        ${alquiler.pets ? 
            `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : 
            `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
        </div>
        </div>
    </div>`
}
template_alquiler.innerHTML = html2;