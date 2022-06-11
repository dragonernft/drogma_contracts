const assert = require('assert');
const { ether, constants, expectEvent } = require('@openzeppelin/test-helpers');


exports.detail = () => {
  it('token name: name()', async function () {
    assert.equal(ERC20Param[0], await ERC20Instance.name());
  });
  it('token symbol: symbol()', async function () {
    assert.equal(ERC20Param[1], await ERC20Instance.symbol());
  });
  it('token decimals: decimals()', async function () {
    assert.equal(ERC20Param[2], (await ERC20Instance.decimals()).toString());
  });
  it('token totalSupply: totalSupply()', async function () {
    assert.equal(ether(ERC20Param[3]).toString(), (await ERC20Instance.totalSupply()).toString());
  });
}

exports.balanceOf = (balance, account, desc) => {
  it(desc + ': balanceOf()', async function () {
    assert.equal(ether(balance).toString(), (await ERC20Instance.balanceOf(account)).toString());
  });
}


exports.transfer = (sender, receiver, amount, desc, reject, msg) => {
  it(desc + ': transfer()', async function () {
    if (reject) {
      await assert.rejects(ERC20Instance.transfer(receiver, ether(amount), { from: sender }), msg);
    } else {
      let receipt = await ERC20Instance.transfer(receiver, ether(amount), { from: sender });
      expectEvent(receipt, 'Transfer', {
        from: sender,
        to: receiver,
        value: ether(amount),
      });
    }
  });
}
