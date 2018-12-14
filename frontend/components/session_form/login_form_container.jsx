import { connect } from 'react-redux';
import {login,clearErrors} from '../../actions/session_actions'

import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';


const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session,
      formType: 'login',
    };
  };

const mapDispatchToProps = dispatch => {
    return {
      processForm: (user) => dispatch(login(user)),
      otherForm:(
        <button onClick={() => dispatch(openModal("signup"))}>
          Register
          </button>
      ),
      closeModal: () => dispatch(closeModal()),
      clearErrors:()=>dispatch(clearErrors())
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)
  