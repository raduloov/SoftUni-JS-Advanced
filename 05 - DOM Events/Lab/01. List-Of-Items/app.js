function addItem() {
  const items = document.getElementById('items');
  const input = document.getElementById('newItemText');
  const newItem = document.createElement('li');
  newItem.appendChild(document.createTextNode(input.value));
  items.appendChild(newItem);
  input.value = '';
}
