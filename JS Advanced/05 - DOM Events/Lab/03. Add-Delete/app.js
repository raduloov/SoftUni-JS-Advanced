function addItem() {
  const items = document.getElementById('items');
  const input = document.getElementById('newItemText');
  const newItem = document.createElement('li');
  newItem.appendChild(document.createTextNode(input.value));
  const remove = document.createElement('a');
  remove.appendChild(document.createTextNode('[Delete]'));
  remove.href = '#';
  remove.addEventListener('click', deleteItem);
  newItem.appendChild(remove);
  items.appendChild(newItem);
  input.value = '';

  function deleteItem() {
    newItem.remove();
  }
}
