var beerClick = 0;
var ecoClick = 0;
var paperClick = 0;

Vue.component("item", {
  template: "#product-box",
  props: ["item_data", "buyitems"],
  methods: {
    addItem: function(item_data) {
      if (item_data.id == "beer") {
        beerClick += 1;
        if (beerClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "beer");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
          console.log(i);
        }
      } else if (item_data.id == "eco-bag") {
        ecoClick += 1;
        if (ecoClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "eco-bag");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total =this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
        }
      } else {
        paperClick += 1;
        if (paperClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "paper-bag");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
        }
      }
      console.log(beerClick, ecoClick, paperClick);
    },
    pushData: function() {
      this.$parent.buyitems.push({
        img: this.item_data.img,
        title: this.item_data.title,
        price: this.item_data.price,
        qty: 1,
        total: this.item_data.price,
        id: this.item_data.id
      });
    },
    findIndex: function(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    },
  }
});
Vue.component("buyitem", {
  template: "#buy-box",
  props: ["buy_data", "buyitems"],
  methods: {
    removeItem: function(buy_data) {
      var index = this.$parent.buyitems.indexOf(buy_data);
      this.$parent.buyitems.splice(index, 1);
      if (buy_data.id == "beer") {
        beerClick = 0;
      } else if (buy_data.id == "eco-bag") {
        ecoClick = 0;
      } else {
        paperClick = 0;
      }
    },
    plusQty: function(buy_data){
      buy_data.qty += 1;
      buy_data.total = buy_data.qty*buy_data.price;
    },
    minusQty: function(buy_data){
      buy_data.qty -= 1;
      if (buy_data.qty < 0){
        buy_data.qty = 0;
      }
      buy_data.total = buy_data.qty*buy_data.price;
    }
    
  }
});

var app = new Vue({
  el: "#app",
  data: {
    items: [
      {
        img: "https://chenyiya.com/codepen/product-1.jpg",
        title: "Beer Bottle",
        price: "25",
        id: "beer"
      },
      {
        img: "https://chenyiya.com/codepen/product-2.jpg",
        title: "Eco Bag",
        price: "73",
        id: "eco-bag"
      },
      {
        img: "https://chenyiya.com/codepen/product-3.jpg",
        title: "Paper Bag",
        price: "35",
        id: "paper-bag"
      },
      {
        img: "https://chenyiya.com/codepen/product-3.jpg",
        title: "Paper Bag",
        price: "35",
        id: "paper-bag"
      },
      {
        img: "https://chenyiya.com/codepen/product-3.jpg",
        title: "Paper Bag",
        price: "35",
        id: "paper-bag"
      },
      {
        img: "https://chenyiya.com/codepen/product-3.jpg",
        title: "Paper Bag",
        price: "35",
        id: "paper-bag"
      }
    ],
    buyitems: []
  },
  methods: {
    total: function(){
      var sum = 0;
      this.buyitems.forEach(function(buyitem){
            sum += parseInt(buyitem.total);
      });
      return sum;
    }
  }
});


