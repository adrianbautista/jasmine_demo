describe("Restaurants view", function() {
  var restaurants_data = [
    {
      id: 0,
      name: 'Ritz',
      postcode: 'N112TP',
      rating: 5
    },
    {
      id: 1,
      name: 'Astoria',
      postcode: 'EC1E4R',
      rating: 3
    },
    {
      id: 2,
      name: 'Waldorf',
      postcode: 'WE43F2',
      rating: 4
    }
  ];

  // hint: try loading an HTML fixture and selecting a table using jQuery
  // hint2: use 'this' to persist objects throughout the specs

  // var htmlFixture = loadFixtures('index.html');
  var htmlFixture = $('<table>');

  beforeEach(function() {
    this.restaurants = new Gourmet.Collections.Restaurants(restaurants_data)
    this.restaurantsView = new Gourmet.Views.RestaurantsView({
      collection: this.restaurants,
      el: htmlFixture
    });
  });

  it("is defined", function() {
    pending();
  });

  it("assigns the right element", function() {
    var table = $('<table>');
    expect(this.restaurantsView.el).toEqual(table);
  });

  it("assigns the right collection", function() {
    pending();
  });

  it("renders the the view when initialized", function() {
    pending();
    // hint: you'll be comparing against a number
  });
});