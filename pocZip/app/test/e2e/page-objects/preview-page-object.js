'use strict';
var PreviewPage = function () {
  this.getAcceptTerms = element(by.css('#terms-conditions'));
  this.getTopupSubmitBtn = element(by.css('.topUpSubmit'));
};
module.exports = PreviewPage;