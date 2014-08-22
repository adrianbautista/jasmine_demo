beforeEach(function () {
  jasmine.addMatchers({
    isPlayingASong: function () {
      return {
        compare: function(actual, expected) {
          var result = {
            pass: actual.currentlyPlayingSong === expected && actual.isPlaying
          };

          if (result.pass) {
            result.message = 'nice work';
          } else {
            result.message = 'failure';
          }
          return result;
        }
      };
    }
  });
});
