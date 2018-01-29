var eol = require('eol');
var _ = require('lodash');

module.exports={
    getMail: function (text) {
        var allLines = eol.split(text);
        var currentMail = [];
        _.each(allLines, function(obj){
            var flag = obj.startsWith(">");
            if(!flag){
                currentMail.push(obj.trim());
            }
        });
        var newMail = _.join(currentMail, '\n');
        return newMail;
    }
}





