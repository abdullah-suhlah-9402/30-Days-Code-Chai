function itemcollection() {
  // item collection array
  let items = [];
  // add new items
  function additems(name) {
    //  chec if items exists or not
    if (items.includes(name)) {
      console.log(`${name} already exists`);
    } else {
      items.push(name);
    }
  }

  // remove items from the list

  function remove(name) {
    let itemindex = items.indexOf(name);
    if (itemindex == -1) {
      console.log(`cant remove items ${name} does npot exist`);
    } else {
      items.splice(itemindex, 1);
    }
  }

  // list of items
  function listitems() {
    items.map((i, index) => console.log(i));
  }
  return { additems, remove, listitems };
}

export { itemcollection };
