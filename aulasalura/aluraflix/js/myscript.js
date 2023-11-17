var listMovie = [
    'https://play-lh.googleusercontent.com/lWyd5ayBZmqYNLi2UJdHRJbp4t3ouTVscICwh1bNEpNFj7yp45L3qJ4oGriIpepL2Ak',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/0/08/Thor_Love_and_Thunder_poster.jpg/250px-Thor_Love_and_Thunder_poster.jpg',
    'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg',
    'https://img.elo7.com.br/product/zoom/1DC8235/big-poster-avengers-infinity-war-tamanho-90x-0-cm-lo001-avengers.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ22jEcSyByOZOaCHGakJEfSsGQviVGVtBsnV9CSukvUTsMTSi',
    'https://cdn.europosters.eu/image/350/posters/doctor-strange-in-the-universe-of-madness-i127943.jpg',
    'URL_DO_SEXTO_FILME',
    'URL_DO_SÉTIMO_FILME',
    'URL_DO_OITAVO_FILME',
    'URL_DO_NONO_FILME',
    'URL_DO_DÉCIMO_FILME',
    'URL_DO_DÉCIMO_PRIMEIRO_FILME',
    'URL_DO_DÉCIMO_SEGUNDO_FILME',
    'URL_DO_DÉCIMO_TERCEIRO_FILME',
    'URL_DO_DÉCIMO_QUARTO_FILME',
    'URL_DO_DÉCIMO_QUINTO_FILME',
    'URL_DO_DÉCIMO_SEXTO_FILME',
    'URL_DO_DÉCIMO_SÉTIMO_FILME',
    'URL_DO_DÉCIMO_OITAVO_FILME',
    'URL_DO_DÉCIMO_NONO_FILME',
    'URL_DO_VIGÉSIMO_FILME'
];

var listName = [
    'Pantera Negra',
    'Thor: Love and Thunder',
    'Homem Aranha: multiverso',
    'Avengers: Guerra infinita',
    'Homem Aranha: De volta ao lar',
    'Doutor Estranho no multiverso da loucura',
    'NOME_DO_SEXTO_FILME',
    'NOME_DO_SÉTIMO_FILME',
    'NOME_DO_OITAVO_FILME',
    'NOME_DO_NONO_FILME',
    'NOME_DO_DÉCIMO_FILME',
    'NOME_DO_DÉCIMO_PRIMEIRO_FILME',
    'NOME_DO_DÉCIMO_SEGUNDO_FILME',
    'NOME_DO_DÉCIMO_TERCEIRO_FILME',
    'NOME_DO_DÉCIMO_QUARTO_FILME',
    'NOME_DO_DÉCIMO_QUINTO_FILME',
    'NOME_DO_DÉCIMO_SEXTO_FILME',
    'NOME_DO_DÉCIMO_SÉTIMO_FILME',
    'NOME_DO_DÉCIMO_OITAVO_FILME',
    'NOME_DO_DÉCIMO_NONO_FILME',
    'NOME_DO_VIGÉSIMO_FILME'
];

function updateMovies() {
    var moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = '';
    for (var i = 0; i < listMovie.length; i++) {
        var movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = '<a href="' + listMovie[i] + '"><img src="' + listMovie[i] + '"></a>' +
                                 '<p>' + listName[i] + '</p>';
        moviesContainer.appendChild(movieElement);
    }
}

function scrollMovies(direction) {
    var moviesContainer = document.getElementById('moviesContainer');
    var scrollAmount = direction === 'prev' ? -400 : 400;
    moviesContainer.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}

updateMovies();
