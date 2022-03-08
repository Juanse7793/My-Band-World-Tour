const band = [
  {
    name: 'Daniel Torres Muñoz',
    position: 'Vocalist, Rhythm guitar, Co-founder',
    img: 'images/daniel.png',
    description: 'Daniel was born in Guayaquil, he is the vocalist of the band since 2010',
  },
  {
    name: 'Juan Sebastian Sotomayor',
    position: 'Drummer, Co-founder',
    img: 'images/juan.png',
    description: 'Juan was born in Quito, he is the drummer of the band since 2012',
  },
  {
    name: 'David Proaño',
    position: 'Bass Guitarist',
    img: 'images/david.png',
    description: 'David was born in Tena, he is the Bass Guitarist of the band since 2013',
  },
  {
    name: 'Esteban García C',
    position: 'Lead Guitar',
    img: 'images/esteban.png',
    description: 'Esteban AKA ("El Chamo") was born in Quito, he is the Lead Guitar of the band since 2012',
  },
  {
    name: 'Marco Vallejo A',
    position: 'Vocalist',
    img: 'images/marco.png',
    description: 'Marco was born in Chachimbiro, he is the vocalist of the band since 2009',
  },
  {
    name: 'Steve Muñoz L',
    position: 'Manager',
    img: 'images/steve.png',
    description: 'Steve was born in Ambuquí, he is the Manager of the band since day one back in 2008',
  },
];

const container = document.getElementById('members');

for (let i = 0; i < band.length; i += 1) {
  const read = `
    <div class="members2">
        <div>
            <img class="img-band" src="${band[i].img}" alt="...">
        </div>
        <div class="data-band">
            <h2 class="name">${band[i].name}</h2>
            <p class="band-position">${band[i].position}</p>
            <p class="gray-bar">___</p>
            <p class="member-description">${band[i].description}</p>
        </div>
    </div>`;

  container.innerHTML += read;
}