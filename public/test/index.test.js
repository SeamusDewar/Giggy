//index.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;

describe('Testing posting comments', function () {
this.timeout(100000);

it('Tests if the db can save comments successfully', async () => 
{
const result = await chai.request('https://us-central1-ct216giggy.cloudfunctions.net').post('/postcomments')
.set('content-type', 'application/json')
.send({handle: 'TestGiggy', comment:'Test comment from christina'});
    
  //console.log(result.text);
  expect(result.statusCode).to.equal(200);
  expect(result.text).to.equal("Saved in the database");

 
});
});


describe('Tests Get Comments', function () {
this.timeout(100000);
it('Tests if there are comments', async () => {
const result = await chai.request('https://us-central1-ct216giggy.cloudfunctions.net').get('/getcomments');
  
expect(result.statusCode).to.equal(200);
expect(result.body).to.be.an('Array');
expect(result.body[0]).haveOwnProperty('comment');
expect(result.body[0]).haveOwnProperty('handle');
    
  
  
});
});
