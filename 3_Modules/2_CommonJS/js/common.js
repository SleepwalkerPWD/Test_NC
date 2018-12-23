function myModule() {
  this.hello = function() {
    return 'HeWo!';
  }

  this.goodbye = function() {
    return 'goodbye!';
  }
}

module.exports = myModule;