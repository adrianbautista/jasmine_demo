describe("Player", function() {

  beforeEach(function() {
    this.player = new Player();
    this.song = new Song();
  });

  describe("plays a song", function() {
    beforeEach(function() {
      this.player.play(this.song);
    });

    it("sets the currently song", function() {
      expect(this.player.currentlyPlayingSong).toEqual(this.song);
    });

    it("knows it's playing", function() {
     expect(this.player.isPlaying).toBe(true);
    });

    it("knows it's playing the current song", function() {

      expect(this.player).isPlayingASong(this.song);
    });

    describe("when it pauses the song", function() {

      beforeEach(function(){
        this.player.pause();
      });

      it("indicates that the song is currently paused", function() {
         expect(this.player.isPlaying).not.toBe(true);
      });


      it("can resume the song", function() {
        this.player.resume();
        expect(this.player.isPlaying).toEqual(true);
      });
    });

    describe("when it tries to resume a playing song", function() {
      it("throws an exception", function() {
        expect(function() {
          this.player.resume();
        }).toThrow();
      });
    });

    describe("when it makes the playing song a favorite", function() {
      it("tells the current song if the user has made it a favorite", function() {
        spyOn(this.song, 'persistFavoriteStatus');
        this.player.makeFavorite();
        expect(this.song.persistFavoriteStatus).toHaveBeenCalled();
        // hint: use a spy
      });
    });
  });

  // describe("when it gets Spotify details through an API", function() {
  //   it("executes the callback on success", function() {
  //     spyOn(jQuery,'ajax').andCallFake(function(options) {
  //       options.success();
  //     });
  //     var callback = jasmine.createSpy();
  //     this.player.getSpotifyDetails('Hallelujah', callback)
  //     expect(callback).toHaveBeenCalled();
  //   });
  // });
});
