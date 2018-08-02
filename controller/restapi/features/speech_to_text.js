var extend = require('extend');
var watson = require('watson-developer-cloud');
var vcapServices = require('vcap_services');
var config = require('../../env.json');

exports.token = function(req, res) {
    var sttConfig = extend(config.speech_to_text, vcapServices.getCredentials('speech_to_text'));
    var sttAuthService = watson.authorization(sttConfig);

    sttAuthService.getToken({
        url: sttConfig.url
    }, function(err, token) {
        if (err) {
            console.log('Error retrieving token: ', err);
            res.status(500).send('Error retrieving token'+ReferenceError);
            return;
        }
        res.send(token);
    });
}
