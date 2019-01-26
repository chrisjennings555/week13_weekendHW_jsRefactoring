const PubSub = require('../helpers/pub_sub.js');

// CONSTRUCTOR
class InstrumentFamilies {
  constructor(data) {
    this.data = data;
  }


//FUNCTION 1 - BIND EVENTS
  bindEvents() {
    PubSub.publish('InstrumentFamilies:data-ready', this.data);

    PubSub.subscribe('SelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      this.publishFamilyDetail(selectedIndex);
    });
  }


//FUNCTION 2 - PUBLISH FAMILY DETAIL
  publishFamilyDetail(selectedIndex) {
    const selectedFamily = this.data[selectedIndex];
    PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily);
  }

};


module.exports = InstrumentFamilies;
