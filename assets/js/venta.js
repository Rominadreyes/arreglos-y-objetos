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
    
    const template = document.querySelector('#venta');

    let html = ''

    for(propiedades_ventas of propiedades_venta){
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

    template.innerHTML = html;

    