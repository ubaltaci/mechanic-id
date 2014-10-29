/**
 *
 * Created by uur on 12/10/14.
 */

exports.generateNumericId = function (length) {
    length = length || 4;
    var randomId = "";
    for (var i = 0; i < length; i++) {
        randomId = randomId + _randomInt(1,9);
    }
    return randomId;
};

function _randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low).toString();
}