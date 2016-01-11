var calculator = {

  add: function() {
    var output = 0;
    for (var n = 0; n < arguments.length; n++) {
      output += arguments[n];
    }
    return output;
  },
  multiply: function() {
    var output = 1;
    for (var n = 0; n < arguments.length; n++) {
      output *= arguments[n];
    }
    return output;
  },
  subtract: function() {
    var output = arguments[0];
    for (var n = 1; n < arguments.length; n++) {
      output -= arguments[n];
    }
    return output;
  },
  divide: function() {
    var output = arguments[0];
    for (var n = 1; n < arguments.length; n++) {
      output /= arguments[n];
    }
    return output;
  }

};
