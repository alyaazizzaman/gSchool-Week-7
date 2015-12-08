function Scramble(string) {
  //split string into array of words
  var words = string.split(" ");
  var insidesArray = [];
  //create array of words with firstChar + insides + last character
  //join scrambledArray into a string
  // var finalString = scrambledArray.join();
  var scrambledArray = [];
  //isolate first character of each word
  for (var i = 0; i < words.length; i++) {
    var firstChar = words[i].substr(0, 1);
    //isolate last character of each word
    var lastChar = words[i].substr(-1, 1);
    //isolate insides of words
    var insides = words[i].slice(1, -1);
    insidesArray.push(insides);
  }
  console.log(insidesArray);
  insidesScramble = function() {
    var n = insidesArray.length;
    for (var k = n - 1; k > 0; k--) {
      var x = Math.floor(Math.random() * (k + 1));
      var tmp = insidesArray[k];
      insideaArray[k] = insidesArray[l];
      insidesArray[l] = tmp;
    }
    console.log(insidesArray.join(""));
    // for (var j = 0; j < insidesArray.length; j++) {


      //
      //     var insidesScrambled =
      //
      //
      //   // }
      //
      //   // }
      //   // return finalString
      // }
    };
  }
  Scramble("elephant happiness");
