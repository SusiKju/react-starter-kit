import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

class Breakpoint extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const breakpoints = {
      phone: '(max-width: 479px)',
      tablet: '(min-width: 480px) and (max-width: 1023px)',
      desktop: '(min-width: 1024px)',
    };
    const { name, children } = this.props;
    const breakpoint = breakpoints[name] || breakpoints.desktop;
    return (
      <MediaQuery query={breakpoint}>
        {/* render responsive-class-Name ? */}
        <div className={name}>{children}</div>
      </MediaQuery>
    );
  }
}

class Phone extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return <Breakpoint name="phone">{children}</Breakpoint>;
  }
}

class Tablet extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return <Breakpoint name="tablet">{children}</Breakpoint>;
  }
}

class Desktop extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return <Breakpoint name="desktop">{children}</Breakpoint>;
  }
}

// export default Breakpoint;
export { Phone, Tablet, Desktop };
