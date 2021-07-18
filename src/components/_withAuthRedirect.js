// import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { push } from 'react-router-redux';

// export default function (ComposedComponent) {
//   class Authenticate extends React.Component {
//     static propTypes = {
//       isAuth: PropTypes.boolean,
//       redirect: PropTypes.func.isRequired
//     };

//     componentDidMount() {
//       this._checkAndRedirect();
//     }

//     componentDidUpdate() {
//       this._checkAndRedirect();
//     }

//     _checkAndRedirect() {
//       const { isAuth, redirect } = this.props;

//       if (!isAuth) {
//         redirect();
//       }
//         }

//     render() {
//         return (
//             <div>
//             { this.props.isAuth ? <ComposedComponent {...this.props} /> : null }
//             </div>
//         );
//         }
//     }

//   const mapStateToProps = (state) => {
//     return {
//       isAuth: state.auth.isAuth
//     };
//   };

//   const mapDispatchToProps = dispatch => bindActionCreators({
//     redirect: () => push('/auth/login')
//   }, dispatch)

//   Authenticate.propTypes = propTypes

//   return connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Authenticate);
// }
