// Generated by CoffeeScript 1.8.0
(function() {
  var Program, root,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  Program = (require('./program')).Program;

  root.Linear = (function(_super) {
    __extends(Linear, _super);

    function Linear(fitness_test, a, b, fitness) {
      this.fitness_test = fitness_test;
      this.a = a;
      this.b = b;
      Linear.__super__.constructor.call(this, fitness);
      this.run = function(x) {
        return this.a * x + this.b;
      };
    }

    return Linear;

  })(Program);

}).call(this);
