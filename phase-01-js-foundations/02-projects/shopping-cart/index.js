let cart = [];

function addItem(item) {
  return cart.push(item);
}

function removeItems() {
  return cart.pop();
}

function addItemInBeginning(item) {
  return cart.unshift(item);
}

function showItems() {
  console.log("Shopping Cart");

  for (let i = 0; i < cart.length; i++) {
    console.log(`${i + 1}. ${cart[i]}`);
  }

  console.log(`Total items: ${cart.length}`);
}

addItem("rice");
addItem("Milk");
addItem("Eggs");

showItems();

removeItems();
showItems();

addItemInBeginning("Bread");
showItems();
