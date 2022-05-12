const players = [
    'Novak Djokovic',
    'Damiil Medvedev',
    'Alexandcer Zverev',
    'Rafael Nadal',
    'Stefanos Tsitsipas',
    'Carlos Alcaraz',
    'Andrey Rublev',
    'Matteo Berrettini',
    'Felix Auger-Aliassime',
    'Casper Ruud'
]; 
const cities = [
    'Roterdam OPEN',
    'Rio de Janeiro OPEN',
    'Acapulco OPEN',
    'Buenos Aires OPEN',
    'Miami OPEN',
    'Montecarlo Masters',
    'Roma Masters',
];
const ATPpoints = [
    '250 puntos ATP',
    '500 puntos ATP',
    '1000 puntos ATP'
];
const result = [
    'Gano', 
    'Perdio'
];



var playGame = () => {
    var randomPlayer = players[Math.floor(Math.random()*players.length)];
    var randomCities = cities[Math.floor(Math.random()*cities.length)];
    var randomPoints = ATPpoints[Math.floor(Math.random()*ATPpoints.length)];
    var randomResult = result[Math.floor(Math.random()*result.length)];
    
    if (randomResult === 'Gano') {
        console.log(`${randomPlayer} jugo el ${randomCities} y ${randomResult}, por lo que se llevo para su casa ${randomPoints}`); 
    }else {console.log(`${randomPlayer} jugo el ${randomCities} y ${randomResult}`)};
}

playGame()
