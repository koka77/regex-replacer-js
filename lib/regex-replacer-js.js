module.exports = {
  activate: function(){
    atom.commands.add('atom-workspace', {
      'regex-replacer-js:convert': this.convert
    });
  },

  convert: function () {
    // var editor = atom.workspace.getActivePaneItem();
    // var content = editor.getText();
    //var selection = editor.getSelectedText();
    // editor.insertText(content + 'xxxxxxx');
    //editor.insertText("/r/n" + content + 'xxxxxxx');

    // var re = "/^<p><.*>(.*)</.*></p>$/g";
    // var re2 = "/[as]+/g";
    // editor.scan(/^<p><.*>(.*)<\/.*><\/p>$/g, 0, event =>   event.replace('<p>$1</p>'));
    const editor = atom.workspace.getActiveTextEditor();
    const range = editor.getBuffer().getRange();
    const checkpoint = editor.createCheckpoint();
    const regex = new RegExp(/<p><.*>(.*)<\/.*><\/p>/g, 'gmi');

    editor.backwardsScanInBufferRange(regex, range, (iterator) => {
        iterator.replace(iterator.match[1]);
    });

    // editor.groupChangesSinceCheckpoint(checkpoint);

  }
};
