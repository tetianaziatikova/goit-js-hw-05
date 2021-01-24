const shop = {
  items: ["apple", "cherry", "bananas", "strawberry"],
  displayItems: function () {
    for (let i = 0; i < this.items.length; i++) {
    console.log(this.items[i]);
    }
  },

  addItem: function(product) {
    this.items.push(product);
    console.log(this.items);
  },

  removeItem: function(oneProduct) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (oneProduct === this.items[i]) {
        this.items.splice(i, 1);
      }
    }
  },

  upDate: function() {
    this.items[0] = "apple-golden";
    console.log(this.items);
  }
}

shop.displayItems();
shop.addItem("pear");
shop.removeItem("cherry");
console.log(shop.displayItems());
shop.upDate();

