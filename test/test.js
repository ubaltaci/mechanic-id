/**
 *
 * Created by uur on 12/10/14.
 */

var MechanicId = require("..");
var expect = require("chai").expect;


describe("Mechanic Id", function () {

    it(" -> generate random id for sms", function(done) {
        var randomId = MechanicId.generateNumericId(4);
        expect(randomId).to.exist;
        expect(randomId).to.have.length(4);
        done();
    });

    it(" -> generate random id for sms", function(done) {
        var randomId = MechanicId.generateNumericId(5);
        expect(randomId).to.exist;
        expect(randomId).to.have.length(5);
        done();
    });

    it(" -> generate random id for sms", function(done) {
        var randomId = MechanicId.generateNumericId(6);
        expect(randomId).to.exist;
        expect(randomId).to.have.length(6);
        done();
    });

});