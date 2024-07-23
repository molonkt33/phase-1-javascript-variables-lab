// Load necessary modules
require('./helpers.js'); // Assuming helpers.js is required

const fs = require('fs');
const path = require('path');

// Read index.js file
const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

// Set up Mocha tests
describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/);
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let mostProfitableNeighborhood/);
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let companyCeo/);
    });
  });
});
