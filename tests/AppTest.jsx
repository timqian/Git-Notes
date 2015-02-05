var Component = "../src/components/App.jsx";

jest.dontMock(Component);
describe('App', function() {
  it('should render', function() {
    var App = require(Component);
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;

    var component = TestUtils.renderIntoDocument(<App/>);
    TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
  });
});