const data_obj = [
  {
  "id": 4,
  "title": "newTitle",
  "price": 205,
  "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  "image_url": "https://matchstickapparel.com/cdn/shop/products/khip_088922a9-c783-4d49-a662-621686ae2816.jpg?v=1666373007"
  },
  {
  "id": 7,
  "title": "Ergonomic Wooden Tuna",
  "price": 743,
  "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  "image_url": "https://deeds.pk/cdn/shop/files/02_bc8e2177-dc3f-4222-8ff2-fc851031d816.jpg?v=1699290304&width=900"
  },
  {
  "id": 9,
  "title": "Electronic Bronze Chips",
  "price": 808,
  "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
  "image_url": "https://www.swag-kicks.com/cdn/shop/products/IMG_2413_20copy_ac7a9df7-168e-46ec-903f-97f729e9cb17.jpg?v=1701497802&width=533"
  },
  {
  "id": 11,
  "title": "Awesome Bronze Car",
  "price": 382,
  "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
  "image_url": "https://bandana.pk/cdn/shop/products/1_1200x1200.jpg?v=1618317137"
  },
  {
  "id": 12,
  "title": "Recycled Rubber Cheese",
  "price": 30,
  "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
  "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFDRLNdRmVq3rPu-pKDrv7AiCo5t_6ERploy-4j1vaQ&s"
  }
  ]

const card_details = document.getElementById('card_details');
for (let i = 0; i < data_obj.length; i++){
  const item = data_obj[i];
  card_details.innerHTML += `<div class="col-4"><div class="card" style="width: 18rem;">
<img src="${item.image_url}" class="card-img-top">

<div class="card-body">
  <h5 class="card-title">${item.title}</h5>
  <p class="card-text">Age: ${item.description}</p>
  <h6>Rs. ${item.price}</h6>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> </div>`;
}