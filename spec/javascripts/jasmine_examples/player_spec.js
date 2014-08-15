describe("Player", function() {

  describe("plays a song", function() {
    it("sets the currently song", function() {
      pending();
    });

    it("knows it's playing", function() {
      pending();
    });

    it("knows it's playing the current song", function() {
      pending();
      // hint: use a custom matcher
    });

    describe("when it pauses the song", function() {

      it("indicates that the song is currently paused", function() {
       pending();
       // hint: try negating a matcher
      });


      it("can resume the song", function() {
        pending();
      });
    });

    describe("when it tries to resume a playing song", function() {
      it("throws an exception", function() {
        pending();
      });
    });

    describe("when it makes the playing song a favorite", function() {
      it("tells the current song if the user has made it a favorite", function() {
        pending();
        // hint: use a spy
      });
    });
  });

  describe("when it gets Spotify details through an API", function() {
    it("executes the callback on success", function() {
      pending();
      // hint: spies can delegate to a fake function when called
    });
  });
});
