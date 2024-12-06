const products = [
  {
    id: 1,
    name: 'Cappuccino',
    price: 4.21,
    image: require('../media/cappuccino.png'),
    description: 'With Steamed Milk',
    rating: 4.53,
    category:['Cappuccino','Drink'],
    note: 'Cappuccino is one of the most beloved coffee drinks, known for its perfect balance of espresso, steamed milk, and frothy milk foam. The velvety texture of the foam combined with the bold flavor of espresso creates a rich and creamy coffee experience that is loved by many. Whether enjoyed in the morning or as an afternoon pick-me-up, cappuccino offers a satisfying and indulgent coffee treat. It is often served with a sprinkle of cocoa powder or cinnamon for an added touch of sweetness.'
  },
  {
    id: 2,
    name: 'Espresso',
    price: 3.5,
    image: require('../media/espresso.png'),
    description: 'Strong and bold coffee',
    rating: 4.72,
    category:['Espresso','Drink'],
    note: 'Espresso is the foundation of many coffee drinks and is cherished for its intense and robust flavor. Made by forcing hot water through finely ground coffee beans, espresso is concentrated and full-bodied, offering a quick, powerful coffee experience in a small amount. It can be enjoyed on its own or as the base for lattes, cappuccinos, macchiatos, and many more. For coffee lovers seeking a pure, unadulterated coffee flavor, espresso is the go-to choice, delivering boldness in every sip.'
  },
  {
    id: 3,
    name: 'Latte',
    price: 4.22,
    image: require('../media/latte.png'),
    description: 'With creamy milk',
    rating: 4.33,
    category:['Americano','Drink'],
    note: 'A latte is a comforting blend of espresso and steamed milk, making it smoother and less intense than traditional espresso drinks. Known for its creamy texture and mild coffee flavor, the latte is perfect for those who prefer a softer, more indulgent coffee experience. The layer of microfoam on top adds a silky finish, often enhanced with artistic designs known as latte art. With its versatile nature, lattes can be flavored with syrups such as vanilla, caramel, or hazelnut, making it a popular choice for coffee drinkers worldwide.'
  },
  {
    id: 4,
    name: 'Mocha',
    price: 4.8,
    image: require('../media/image_sp.png'),
    description: 'With chocolate flavor',
    rating: 4.61,
    category:['Macchiato','Drink'],
    note: 'Mocha is the perfect fusion of coffee and chocolate, making it a favorite for those who crave something sweet yet rich. This coffee drink is made by blending espresso with steamed milk and cocoa, creating a luxurious treat with layers of flavor. Topped with whipped cream or a dusting of cocoa powder, mocha is indulgent and satisfying, combining the best of both worlds for coffee and chocolate lovers. It’s a great choice for an afternoon indulgence or a dessert-like coffee experience.'
  },
  {
    id: 5,
    name: 'Cashew',
    price: 5.05,
    image: require('../media/cashew.png'),
    description: 'Roasted salted cashew nuts',
    rating: 4.75,
    category:['Seed'],
    note: 'Cashews are not only delicious but also a powerhouse of nutrition. These roasted and salted nuts provide a satisfying crunch along with essential nutrients such as healthy fats, vitamins, and minerals. Cashews are a versatile snack that can be enjoyed on their own or used in various dishes such as salads, stir-fries, and desserts. The rich, buttery flavor of cashews makes them a popular choice for those seeking a wholesome, flavorful snack that’s packed with energy and nutrients.'
  },
  {
    id: 6,
    name: 'Almond',
    price: 6.55,
    image: require('../media/almod.png'),
    description: 'Raw almonds',
    rating: 4.85,
    category:['Seed'],
    note: 'Almonds are among the most popular nuts worldwide, known for their incredible nutritional value and versatility. Raw almonds offer a satisfying crunch and a slightly sweet flavor, making them an excellent choice for snacking, baking, or adding to your favorite dishes. Rich in protein, fiber, and healthy fats, almonds contribute to heart health, weight management, and overall wellness. They are often enjoyed as a healthy snack option that’s both filling and nutritious, perfect for an energy boost throughout the day.'
  },
  {
    id: 7,
    name: 'Macadamia',
    price: 7.05,
    image: require('../media/macadamia.png'),
    description: 'Rich, buttery macadamia nuts',
    rating: 4.9,
    category:['Seed'],
    note: 'Macadamia nuts are considered a luxury nut due to their rich, buttery flavor and smooth texture. Native to Australia, macadamias are enjoyed worldwide for their unique taste and nutritional benefits. These nuts are high in monounsaturated fats, making them heart-healthy and a great addition to a balanced diet. Macadamias can be eaten on their own, added to baked goods like cookies, or used in savory dishes for a touch of decadence. Their creamy, delicate flavor elevates any meal or snack.'
  },
  {
    id: 8,
    name: 'Pistachio',
    price: 6.25,
    image: require('../media/pistachio.png'),
    description: 'Roasted pistachios with sea salt',
    rating: 4.8,
    category:['Seed'],
    note: 'Pistachios are small but mighty when it comes to nutrition and flavor. Roasted and lightly salted, these nuts offer a satisfying crunch and a unique, earthy flavor. Pistachios are rich in protein, fiber, and antioxidants, making them a healthy choice for snacking. They are often enjoyed on their own, in salads, or as part of desserts like ice cream and baklava. Their vibrant green color and delicious taste make pistachios a favorite among nut lovers, offering both flavor and health benefits.'
  },
];

export default products;