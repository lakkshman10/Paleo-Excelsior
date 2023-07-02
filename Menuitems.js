// products array object

const menuItems = [
    // Classic Coffee Selection
    {
      name: 'Espresso',
      price: 150,
      image: 'D://VScodeprogfiles//html_css//cart_items//Classic_Coffee_Selection//Expresso.jpg',
      category: 'donut combos'
    },
    {
      name: 'Americano',
      price: 180,
      image: 'D://VScodeprogfiles//html_css//cart_items//Classic_Coffee_Selection//Americano.jpg',
      category: 'donut combos'
    },
    {
      name: 'Macchiato',
      price: 210,
      image: 'D://VScodeprogfiles//html_css//cart_items//Classic_Coffee_Selection//Macchiato.jpg',
      category: 'donut combos'
    },
    {
      name: 'Cappuccino',
      price: 240,
      image: 'D://VScodeprogfiles//html_css//cart_items//Classic_Coffee_Selection//Cappuccino.jpg',
      category: 'donut combos'
    },
    {
      name: 'Latte',
      price: 270,
      image: 'D://VScodeprogfiles//html_css//cart_items//Classic_Coffee_Selection//Latte.jpg',
      category: 'donut combos'
    },
    {
      name: 'Mocha',
      price: 300,
      image: 'D://VScodeprogfiles//html_css//cart_items//Classic_Coffee_Selection//Mocha.png',
      category: 'donut combos'
    },
    {
      name: 'Flat White',
      price: 270,
      image: 'D://VScodeprogfiles//html_css//cart_items//Classic_Coffee_Selection//Flat White.jpg',
      category: 'donut combos'
    },
    // ICED COFFEE CREATIONS
    {
      name: 'Iced Latte',
      price: 270,
      image: 'D://VScodeprogfiles//html_css//cart_items//Iced Coffee Creations//Iced Latte.jpg',
      category: 'sandwiches and bakery'
    },
    {
      name: 'Iced Mocha',
      price: 330,
      image: 'D://VScodeprogfiles//html_css//cart_items//Iced Coffee Creations//Iced Mocha.jpg',
      category: 'sandwiches and bakery'
    },
    {
      name: 'Cold Brew',
      price: 240,
      image: 'D://VScodeprogfiles//html_css//cart_items//Iced Coffee Creations//Cold Brew.jpg',
      category: 'sandwiches and bakery'
    },
    {
      name: 'Nitro Cold Brew',
      price: 330,
      image: 'D://VScodeprogfiles//html_css//cart_items//Iced Coffee Creations//Nitro Cold Brew.jpg',
      category: 'sandwiches and bakery'
    },
    {
      name: 'Caramel Frappuccino',
      price: 340,
      image: 'D://VScodeprogfiles//html_css//cart_items//Iced Coffee Creations//Caramel Frappuccino.jpg',
      category: 'sandwiches and bakery'
    },
    {
      name: 'Mocha Frappuccino',
      price: 340,
      image: 'D://VScodeprogfiles//html_css//cart_items//Iced Coffee Creations//Mocha Frappuccino.jpg',
      category: 'sandwiches and bakery'
    },
    {
      name: 'White Chocolate Mocha Frappuccino',
      price: 340,
      image: 'D://VScodeprogfiles//html_css//cart_items//Iced Coffee Creations//White Chocolate Mocha Frappuccino.jpg',
      category: 'sandwiches and bakery'
    },
    {
      name: 'Affogato (vanilla ice cream with expresso)',
      price: 380,
      image: 'D://VScodeprogfiles//html_css//cart_items//Iced Coffee Creations//Affogato (vanilla ice cream topped with espresso).jpg',
      category: 'sandwiches and bakery'
    },
    // tea selection
    {
      name: 'English Breakfast',
      price: 180,
      image: 'D://VScodeprogfiles//html_css//cart_items//Tea Selection//English Breakfast Tea.jpg',
      category: 'donuts'
    },
    {
      name: 'Earl Grey',
      price: 180,
      image: 'D://VScodeprogfiles//html_css//cart_items//Tea Selection//English Breakfast Tea.jpg',
      category: 'donuts'
    }, {
      name: 'Green Tea',
      price: 180,
      image: 'D://VScodeprogfiles//html_css//cart_items//Tea Selection//Green Tea.jpg',
      category: 'donuts'
    },
    {
      name: 'Chamomile',
      price: 180,
      image: 'D://VScodeprogfiles//html_css//cart_items//Tea Selection//Chamomile.jpg',
      category: 'donuts'
    },
    {
      name: 'Peppermint',
      price: 180,
      image: 'D://VScodeprogfiles//html_css//cart_items//Tea Selection//Peppermint tea.jpg',
      category: 'donuts'
    },
    {
      name: 'Rooibos',
      price: 180,
      image: 'D://VScodeprogfiles//html_css//cart_items//Tea Selection//Rooibos.jpg',
      category: 'donuts'
    },
    {
      name: 'Herbal Blends',
      price: 180,
      image: 'D://VScodeprogfiles//html_css//cart_items//Tea Selection//Herbal Blends.jpg',
      category: 'donuts'
    },
    // Hot beverages
    {
      name: 'Croissants (plain, chocolate, almond)',
      price: 150,
      image: 'D://VScodeprogfiles//html_css//cart_items//Pastries and Snacks//Croissants.jpg',
      category: 'hot beverages'
    },
    {
      name: 'Muffins (blueberry, chocolate chip, bran)',
      price: 150,
      image: 'D://VScodeprogfiles//html_css//cart_items//Pastries and Snacks//Muffins.jpg',
      category: 'hot beverages'
    },
    {
      name: 'Cookies (chocolate chip, oatmeal raisin)',
      price: 90,
      image: 'D://VScodeprogfiles//html_css//cart_items//Pastries and Snacks//Cookies.jpg',
      category: 'hot beverages'
    },
    {
      name: 'Scones (plain, cranberry, lemon-poppyseed)',
      price: 150,
      image: 'D://VScodeprogfiles//html_css//cart_items//Pastries and Snacks//Scones.jpg',
      category: 'hot beverages'
    },
    {
      name: 'Bagels with cream cheese or butter',
      price: 150,
      image: 'D://VScodeprogfiles//html_css//cart_items//Pastries and Snacks//Bagels.jpg',
      category: 'hot beverages'
    },
    {
      name: 'Granola Bars',
      price: 90,
      image: 'D://VScodeprogfiles//html_css//cart_items//Pastries and Snacks//Granola Bars.jpg',
      category: 'hot beverages'
    },
    {
      name: 'Assorted Nuts and Trail Mix',
      price: 120,
      image: 'D://VScodeprogfiles//html_css//cart_items//Pastries and Snacks//Assorted Nuts and Trail Mix.jpg',
      category: 'hot beverages'
    },
   
    // Gourmet Add-ons
    {
    name: 'Flavored Syrups',
    price: 30,
    image: 'D://VScodeprogfiles//html_css//cart_items//Gourmet Add-ons//Flavored Syrups.jpg',
    category: 'cold beverages'
    },
    {
    name: 'Whipped Cream',
    price: 30,
    image: 'D://VScodeprogfiles//html_css//cart_items//Gourmet Add-ons//Whipped Cream.jpg',
    category: 'cold beverages'
    },
    {
    name: 'Chocolate Shavings',
    price: 30,
    image: 'D://VScodeprogfiles//html_css//cart_items//Gourmet Add-ons//Chocolate Shavings.jpg',
    category: 'cold beverages'
    },
    {
    name: 'Cinnamon Sprinkle',
    price: 15,
    image: 'D://VScodeprogfiles//html_css//cart_items//Gourmet Add-ons//Cinnamon Sprinkle.jpg',
    category: 'cold beverages'
    },
    {
    name: 'Marshmallows',
    price: 45,
    image: 'D://VScodeprogfiles//html_css//cart_items//Gourmet Add-ons//Marshmallows.jpg',
    category: 'cold beverages'
    },
    {
    name: 'Coconut Milk',
    price: 100,
    image: 'D://VScodeprogfiles//html_css//cart_items//Gourmet Add-ons//Coconut Milk.jpg',
    category: 'cold beverages'
    },
    ]
    
    // end of items array 