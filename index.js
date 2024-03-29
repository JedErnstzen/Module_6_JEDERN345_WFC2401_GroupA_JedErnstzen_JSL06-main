// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menuData = {
    starters: [
      { name: "Garlic Bread", price: 30 },
      { name: "Bruschetta", price: 50 }
    ],
    mainCourses: [
      { name: "Margherita Pizza", price: 85 },
      { name: "Spaghetti Carbonara", price: 110 }
    ],
    desserts: [
      { name: "Tiramisu", price: 45 },
      { name: "Cheesecake", price: 70 }
    ]
};

// Function to render the menu items
function renderMenu(menu) {
    const menuElement = document.getElementById('menu');
  
    // Loop through each category in the menu
    for (const category in menu) {
        // Create a header element for the category
        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category;
        menuElement.appendChild(categoryHeader);
  
        // Create an unordered list for the items in the category
        const itemList = document.createElement('ul');
        menuElement.appendChild(itemList);
  
        // Loop through each item in the category
        for (const item of menu[category]) {
            // Create a list item element for the item
            const itemElement = document.createElement('li');
            // Set the text content of the item element to display the item name and price
            itemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;
            // Add a click event listener to the item to add it to the order
            itemElement.addEventListener('click', () => addToOrder(item));
            // Append the item element to the list of items in the category
            itemList.appendChild(itemElement);
        }
    }
}

// Function to add an item to the order
function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
  
    // Create a new list item for the order
    const orderItem = document.createElement('li');
    // Set the text content of the order item to display the item name and price
    orderItem.textContent = `${item.name} - R${item.price.toFixed(2)}`;
    // Add a click event listener to the order item to remove it when clicked
    orderItem.addEventListener('click', () => {
        // Remove the clicked order item from the order list
        orderItemsList.removeChild(orderItem);
  
        // Calculate the new total price by subtracting the price of the removed item
        const currentTotal = parseFloat(orderTotal.textContent.slice(1)) || 0;
        const newTotal = currentTotal - item.price;
  
        // Update the order total element with the new total price
        orderTotal.textContent = `R${newTotal.toFixed(2)}`;
    });
  
    // Append the order item to the order items list
    orderItemsList.appendChild(orderItem);
  
    // Calculate the new total price by adding the price of the added item
    const currentTotal = parseFloat(orderTotal.textContent.slice(1)) || 0;
    const newTotal = currentTotal + item.price;
  
    // Update the order total element with the new total price
    orderTotal.textContent = `R${newTotal.toFixed(2)}`;
}

// Function to initialize the menu system
function initializeMenu(menu) {
    // Render the menu using the provided menu data
    renderMenu(menu);
}

// Initialize the menu system with the menu data
initializeMenu(menuData);
