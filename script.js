var convert = function(text) {
  var lines = text.split(/\r?\n/);
  var RE = /\[([0-9]{2}:[0-9]{2}\.[0-9]{2})\]/g;
  for (var i = 0; i < lines.length; i++) {
    var matches = lines[i].match(RE);
    if (matches && matches.length > 1) {
      lines[i] = matches[0] + lines[i].replace(RE, '<$1>');
    }
  }
  return lines.join('\n');
};
var textarea = $('#text');
$('#ok').click(function() {
  textarea.val(convert(textarea.val()));
});
