var padClick = 0;
var tamponClick = 0;
var cupClick = 0;
var painClick = 0;
var bagClick = 0;
var lastClick = 0;

Vue.component("item", {
  template: "#product-box",
  props: ["item_data", "buyitems"],
  methods: {
    addItem: function(item_data) {
      if (item_data.id == "pads") {
        padClick += 1;
        if (padClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "pads");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
          console.log(i);
        }
      } else if (item_data.id == "tampons") {
        tamponClick += 1;
        if (tamponClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "tampons");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total =this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "menstrualCups") {
        cupClick += 1;
        if (cupClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "menstrualCups");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "painKillers") {
        painClick += 1;
        if (painClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "painKillers");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "disposableBags") {
        bagClick += 1;
        if (bagClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "disposableBags");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "paper-bag") {
        lastClick += 1;
        if (lastClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "paper-bag");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
        }
      }
      console.log(padClick, tamponClick, cupClick, painClick, bagClick, lastClick);
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
      if (buy_data.id == "pads") {
        padClick = 0;
      } else if (buy_data.id == "tampons") {
        tamponClick = 0;
      } else if (buy_data.id == "menstrualCups") {
        cupClick = 0;
      } else if (buy_data.id == "painKillers") {
        painClick = 0;
      } else if (buy_data.id == "disposableBags") {
        bagClick = 0;
      } else if (buy_data.id == "paper-bag") {
        lastClick = 0;
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
    },
    checkout: function(){
      console.log('working');
    },
    check: function() {
      console.log('working');
    } 
  }
});

Vue.component("btn",{
  template: "#checkoutbtn",
  methods: {
    check: function(){
      console.log('working');
    }
  }
})

var app = new Vue({
  el: "#app",
  data: {
    items: [
      {
        img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/06/27/588060-sanitary-napkins.jpg",
        title: "Sanitary Napkins",
        price: "80",
        id: "pads"
      },
      {
        img: "https://s.abcnews.com/images/GMA/tampon-gty-02-jpo-181212_hpMain_4x3_992.jpg",
        title: "Tampons",
        price: "100",
        id: "tampons"
      },
      {
        img: "https://img.medscape.com/thumbnail_library/dt_190715_menstrual_cup_800x450.jpg",
        title: "Menstrual Cups",
        price: "150",
        id: "menstrualCups"
      },
      {
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/period-painkillers-best-ones-1569517596.jpg?crop=0.667xw:1.00xh;0.307xw,0&resize=480:*",
        title: "Painkillers",
        price: "35",
        id: "painKillers"
      },
      {
        img: "https://images-na.ssl-images-amazon.com/images/I/61dkejlLrnL.__AC_SY300_QL70_ML2_.jpg",
        title: "Disposable Bags",
        price: "50",
        id: "disposableBags"
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
    },
    // checkout: function(){
    //   console.log("works3");
    //   var total = this.total();
    //   if(total<=0){
    //     //this.$alert("working");
    //     console.log("works");
    //   }else{
    //     //this.$alert("working");
    //     console.log("works 2");
    //   }
    // }
  }
});



