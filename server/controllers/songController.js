const fileReader = require("../fileReader/fileReader");
const User = require("../models/User");
const mongoose = require("mongoose");


module.exports = {
  async findLyrics(req, res) {
    try {
      let arrayOfAllWords = [];
      let counts = {};
      let searchQuery = `${req.params.songname}`.toLowerCase();
      let fileArray = fileReader.findFile(searchQuery);
      let finalResult = [];

      //breaking all sentences into words
      await fileArray.map(eachSentence => {
        arrayOfAllWords.push(eachSentence.split(" "));
      });
      //putting all words from nested state into one
      arrayOfAllWords = await [].concat.apply([], arrayOfAllWords);

      //calculating how many times each word has been repeated
      await arrayOfAllWords.forEach(word => {
        counts[word] = (counts[word] || 0) + 1;
      });

      finalResult = await Object.assign(
        //creating an object and assigning counted words, now its like an
        //array "key1, value1, key2, value2"
        ...Object.entries(counts)
          //destructing arrays and displaying from high to low
          .sort(({ 1: a }, { 1: b }) => b - a)
          // get the results we need
          .slice(0, 10)
          //creating an object with keys and values
          .map(([key, value]) => ({
            [key]: value
          }))
      );

      res.status(200).send({
        title: req.params.songname,
        repeatedWords: finalResult
      });
    } catch (e) {
      res
        .status(404)
        .send("An error occured while processing lyrics search request ");
    }
  },

  async addSong(req, res){
    try{
      let {song, token} = req.body;

      const isUser = await User.findByToken(token);

      if(!isUser){
        return res.send("somethng is wrong");
      }
      const hasBeenAdded = await isUser.addSong(song);

      if(!hasBeenAdded){
        return res.send("Song already exists in the database")
      }

      
      res.send(song.title)
    }catch(e){
      console.log(e)
      res.status(400).send(e)
    }
  },

  async viewSongs(req, res){
    try{
      let {token} = req.params;

      const isUser = await User.findByToken(token);

      
      res.send(isUser.songs);

    }catch(e){
      res.status(400).send("Could not fetch your songs")
    }
  }
};
