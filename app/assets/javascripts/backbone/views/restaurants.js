Gourmet.Views.RestaurantsView = Backbone.View.extend({
  template: HoganTemplates['backbone/templates/restaurant'],
  initialize: function() {
    _.bindAll(this);
    this.render(this.collection);
  },
  render: function() {
    this.$el.empty();
    for (var i = 0; i < this.collection.models.length; i++) {
      this.$el.append(this.template.render(restaurant.toJSON()));
    };
  }
});
