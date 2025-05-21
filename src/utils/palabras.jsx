export default function LimitarPalabras(texto, cantidad){
    if(!texto) return ''
    var palabras = texto.split(' ')
    if(cantidad < palabras.length){
        return palabras.slice(0, cantidad).join(' ') + '...';
    }
    return texto
}

var producto_test = {
    "id": 38,
    "title": "Vibrant Runners: Bold Orange & Blue Sneakers",
    "slug": "vibrant-runners-bold-orange-blue-sneakers",
    "price": 27,
    "description": "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-20T17:49:35.000Z",
      "updatedAt": "2025-05-20T17:49:35.000Z"
    },
    "images": [
      "https://i.imgur.com/hKcMNJs.jpeg",
      "https://i.imgur.com/NYToymX.jpeg",
      "https://i.imgur.com/HiiapCt.jpeg"
    ],
    "creationAt": "2025-05-20T17:49:35.000Z",
    "updatedAt": "2025-05-20T17:49:35.000Z"
  }