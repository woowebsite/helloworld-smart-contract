const HelloWorldContract = artifacts.require('HelloWorld');

contract('HelloWorld', (accounts) => {
  let instance;
  before('should setup the contract instance', async () => {
    instance = await HelloWorldContract.deployed();
  });

  it('should return the list of accounts', async () => {
    console.log('accounts', accounts);
  });

  it('should return the message', async () => {
    const instance = await HelloWorldContract.deployed();
    await instance.changeName('Hello World');
    const value = await instance.getName();
    assert.equal(value, 'Hello World');
  });

  it('should execute only by the owner', async () => {
    await instance.changeName('modifier', { from: accounts[0] });
    const value = await instance.getName();

    assert.equal(value, 'modifier');
  });
});
