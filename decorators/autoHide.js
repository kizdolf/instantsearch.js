var React = require('react');

function autoHide(ComposedComponent) {
  class AutoHide extends React.Component {
    componentDidMount() {
      this._hideOrShowContainer(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this._hideOrShowContainer(nextProps);
    }

    _hideOrShowContainer(props) {
      var container = React.findDOMNode(this).parentNode;
      if (props.hideWhenNoResults === true && props.hasResults === false) {
        container.style.display = 'none';
      } else if (props.hideWhenNoResults === true) {
        container.style.display = '';
      }
    }

    render() {
      if (this.props.hasResults === false &&
        this.props.hideWhenNoResults === true) {
        return <div/>;
      }

      return <ComposedComponent {...this.props} />;
    }
  }

  AutoHide.propTypes = {
    hasResults: React.PropTypes.bool.isRequired,
    hideWhenNoResults: React.PropTypes.bool.isRequired
  };

  // precise displayName for ease of debugging (react dev tool, react warnings)
  AutoHide.displayName = ComposedComponent.name + '-AutoHide';

  return AutoHide;
}

module.exports = autoHide;