const Cont_obj = artifacts.require("event_challenge");

module.exports = function (deployer) {
  deployer.deploy(Cont_obj);
};