const { expect } = require("chai");
const request = require("request");

let url = "http://localhost:3000/api/cat";

let cat = { name: "test cat" };

describe('Cat API Endpoint', function() {
  it('should return an array of cats', function(done) {
    request(url, function (a, b, c) {
      console.log(arguments);

      let responseObj = JSON.parse(c);

      expect(responseObj).to.be.an("object");

      done();
    });
  });
});

describe('Create Cat API Endpoint', function() {
  it('should create a new cat and return an object of cats', function(done) {
    request.post({ url: url, form: cat }, function (a, b, c) {
      let responseObj = JSON.parse(c);
      expect(responseObj).to.be.an("object");
      console.log(arguments);
      console.log(1);

      done();
    });
  });
});
