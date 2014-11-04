/**
 *
 * Created by uur on 12/10/14.
 */

var Crypto = require("crypto");
var UUID = require("uuid");

var CharSet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
var Length = 32;

/**
 * @param length
 * @returns {string}
 */
exports.generateNumericId = function (length) {
    length = length || 4;
    var randomId = "";
    for (var i = 0; i < length; i++) {
        randomId = randomId + _randomInt(1, 9);
    }
    return randomId;
};

/**
 * @callback generateTokenCallback
 * @param {error} error
 * @param {string} token
 */

/**
 * @param {generateTokenCallback} callback
 */
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

/**
 * @returns {string}
 */
exports.generateUUID = function () {
    return UUID.v4();
};

function _randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low).toString();
}