const request = require("supertest");
const expect = require("expect");

var app = require("../index").app;

it("Should return lyrics of a song", done => {
  var song = "bestsong";
  request(app)
    .post(`/searchSong/${song}`)
    .expect(200)
    .expect(res => {
      var arr = [
        "word",
        "word",
        "test",
        "welcome",
        "stas",
        "stas",
        "usa",
        "usa",
        "usa",
        "eu",
        "mob",
        "mob",
        "mob",
        "mob",
        "hey",
        "how",
        "how",
        "how",
        "how",
        "how",
        "how",
        "how",
        "dont",
        "dont",
        "dont",
        "dont",
        "dont",
        "as",
        "as",
        "as",
        "no",
        "yes",
        "yes",
        "yes",
        "yes"
      ];
      var counts = {};

      arr.forEach(element => {
        counts[element] = (counts[element] || 0) + 1;
      });

      var result = Object.assign(
        //creating an object and assigning counted words, now its like an
        //array "key1, value1, key2, value2"
        ...Object.entries(counts)
          //destructing array
          .sort(({ 1: a }, { 1: b }) => b - a)
          // get the results we need
          .slice(0, 4)
          //creating an object with keys and values
          .map(([key, value]) => ({ [key]: value }))
      );

      //doing comparision check with recieved results and results computed
      //here

      if (res.body.title != song)
        throw Error("Test displays incorrect song title");
      if (JSON.stringify(res.body.repeatedWords) != JSON.stringify(result))
        throw Error("Repeated words results are incorrect");
    })
    .end(done);
});
