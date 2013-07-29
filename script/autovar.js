(function() {
  var AutoVar,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  AutoVar = (function() {
    AutoVar.prototype.url = "";

    AutoVar.prototype.paused = null;

    AutoVar.prototype.val = null;

    AutoVar.prototype.bind = [];

    AutoVar.prototype.lastUpdated = null;

    AutoVar.prototype.handle = null;

    function AutoVar(url, val, bind) {
      this.url = url;
      this.val = val;
      this.url = this.nocache();
      if (!((bind == null) || (bind.length == null))) {
        this.bind = bind;
      }
      this.run();
    }

    AutoVar.prototype.nocache = function() {
      if (__indexOf.call(this.url, "?") >= 0) {
        return this.url + "&" + Math.random();
      }
      return this.url + "?" + Math.random();
    };

    AutoVar.prototype.bind = function(sel) {
      return bind.push(sel);
    };

    AutoVar.prototype.unbind = function() {
      return this.bind = [];
    };

    AutoVar.prototype.get = function() {
      return this.val;
    };

    AutoVar.prototype.updateBindings = function() {
      var binding, _i, _len, _ref, _results;

      _ref = this.bind;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        binding = _ref[_i];
        _results.push($(binding).html(this.val));
      }
      return _results;
    };

    AutoVar.prototype.update = function() {
      return $.ajax({
        url: this.url,
        success: (function(self) {
          return function(res) {
            var lastUpdated;

            lastUpdated = new Date();
            self.val = res;
            return self.updateBindings.call(self);
          };
        })(this)
      });
    };

    AutoVar.prototype.pause = function() {
      return this.paused = true;
    };

    AutoVar.prototype.unpause = function() {
      this.paused = false;
      return run();
    };

    AutoVar.prototype.run = function() {
      if (!this.paused) {
        this.handle = setInterval((function(self) {
          return function() {
            if (!self.paused) {
              return self.update.call(self);
            }
          };
        })(this), 1000);
      }
    };

    return AutoVar;

  })();

  this.AutoVar = AutoVar;

}).call(this);
