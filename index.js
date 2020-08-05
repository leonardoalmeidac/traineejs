var vehiculos = [{
        marca: 'Peugeot',
        modelo: '206',
        puertas: 4,
        precio: 200000.00
    },
    {
        marca: 'Honda',
        modelo: 'Titan',
        cilindraje: '125c',
        precio: 60000.00
    },
    {
        marca: 'Peugeot',
        modelo: '208',
        puertas: 5,
        precio: 250000.00
    },
    {
        marca: 'Yamaha',
        modelo: 'YBR',
        cilindraje: '160c',
        precio: 80500.50
    }
]
console.log(vehiculos)
var price = []
var nombre = []
for (i = 0; i <= vehiculos.length - 1; i++) {
    price.push(vehiculos[i].precio)
    nombre.push(vehiculos[i].modelo)
}
numMayor = price[0]
numMenor = price[0]
pos = 0
posi = 0
letra = ''
posicion = 0
for (j = 0; j <= price.length - 1; j++) {
    if (price[j] > numMayor) {
        numMayor = price[j]
        pos = j
    }
    if (price[j] < numMenor) {
        numMenor = price[j]
        posi = j
    }
}

for (k = 0; k <= nombre.length - 1; k++) {
    letra = nombre[k]
    if (letra.indexOf('Y') != -1) {
        //console.log(k)
        posicion = k
    }
}
console.log('El vehiculo mas caro es ' + vehiculos[pos].marca + ' ' + vehiculos[pos].modelo)
console.log('El vehiculo mas barato es ' + vehiculos[posi].marca + ' ' + vehiculos[posi].modelo)
console.log('El vehiculo que contiene en el modelo la letra Y es ' + vehiculos[posicion].marca + ' ' + vehiculos[posicion].modelo + ' ' + vehiculos[posicion].precio)
console.log(price.sort((a, b) => a - b).reverse())