/**
 *
 * Created by uur on 12/10/14.
 */

var Crypto = require("crypto");

var CharSet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
var Length = 32;

exports.generateNumericId = function (length) {
    length = length || 4;
    var randomId = "";
    for (var i = 0; i < length; i++) {
        randomId = randomId + _randomInt(1, 9);
    }
    return randomId;
};

exports.generateToken = function (callback) {

    Crypto.randomBytes(Length, function (err, buf) {
        if (err) {
            callback(err);
        }

        var result = new Array(Length);
        var cursor = 0;
        for (var i = 0; i < Length; i++) {
            cursor += buf[i];
            result[i] = CharSet[cursor % CharSet.length];
        }
        callback(null, result.join(""));
    });
};

function _randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low).toString();
}