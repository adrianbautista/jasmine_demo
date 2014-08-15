Gourmet.Models.Restaurant = Backbone.Model.extend({
  defaults: {
    name: null,
    postcode: null,
    rating: null
  },
  validate: {
    name: {
      required: true
    },
    postcode: {
      required: true
    },
    rating: {
      required: true,
      type: 'number',
      min: 1,
      max: 5
    }
  }
});
