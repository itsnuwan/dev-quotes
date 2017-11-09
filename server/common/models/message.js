module.exports = function(Message) {
  Message.quote = function(msg, cb) {
    process.nextTick(function() {
      msg = msg || 'hello';
      cb(null, "sssss","ss");
    });
  };
};
