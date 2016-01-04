var pkgempty = require('../pkgempty');
var expect = require('chai').expect;

describe('pkgempty', function(){
	it('is a function', function(){
		expect(pkgempty).to.be.a('function');
	});
	it('returns an object', function(){
		expect(pkgempty()).to.be.an('object');
	});
	it('accepts a string or array of strings as parameter', function(){
		expect(pkgempty('test')).to.be.an('object');
		expect(pkgempty(['test'])).to.be.an('object');
	});
	it('returns an object representation of package.json when given no arguments', function(){
		var pkg = pkgempty();
		expect(pkg).to.have.a.property('name');
		expect(pkg.name).to.equal('pkgempty');
		expect(pkg).to.have.a.property('version');
		expect(pkg).to.have.a.property('description');
		expect(pkg).to.have.a.property('test');
		expect(pkg.test).to.have.a.property('data');
		expect(pkg.test.data).to.have.a.property('array');
		expect(pkg.test.data.array).to.be.an('array');
	});
	it('returns a subtree from package.json when given an argument', function(){
		var test = pkgempty('test');
		expect(test).to.have.a.property('data');
		expect(test.data).to.have.a.property('array');
		expect(test.data.array).to.be.an('array');
	});
/*
	it('resolves references of the form `@pkg.object.path`', function(){
		var pkg = pkgempty();
		expect(pkg.test.primitive).to.equal(pkg.name);
	});
*/
});