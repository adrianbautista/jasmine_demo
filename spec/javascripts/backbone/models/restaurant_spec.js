describe("Restaurant Model", function() {
  it("is defined", function() {
    expect(Gourmet.Models.Restaurant).toBeDefined();
  });

  describe("Attributes", function() {

    it("has default attributes", function() {
      var myRestaurant = new Gourmet.Models.Restaurant();
      expect(myRestaurant.attributes.name).toBeDefined();
    });
  });

  describe("Validations", function() {
    it("validates the presence of name", function() {
      pending();
    });

    it("validates the presence of postcode", function() {
      pending();
    });

    it("validates the presence of rating", function() {
      pending();
    });

    it("validates the numericality of rating", function() {
      pending();
    });

    it("does not accept a rating < 1", function() {
      pending();
    });

    it("does not accept a rating > 5", function() {
      pending();
    });
  });
});
