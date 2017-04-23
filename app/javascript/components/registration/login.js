import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import {Base,styles} from './base';

import reqwest from 'reqwest';

export class Login extends Base{

  submit(){
    reqwest({
      url:'/users/sign_in.json',
      method: 'POST',
      data: {
        user:{
          email: this.state.email,
          password : this.state.password
        }
      },
      headers:{
          'X-CSRF-Token' : window.inventory.token
      }
    }).then(data => {
      this.reload();
    }).catch(err => this.handleError(err));
  }

  handleError(err){
    const errorMessage = JSON.parse(err.response).error;

    this.setState({
      error: errorMessage
    })
  }

  render(){
    return (
      <MuiThemeProvider>
        <Formsy.Form
            onValid={()=> this.enableSubmitBtn()}
            onValidSubmit={()=>this.submit()}
            onInvalid={()=> this.disableSubmitBtn()}>
          <div>

            <FormsyText
              onChange={(e)=> this.syncFields(e,"email")}
              name="email"
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              required
              validations="isEmail"
              validationError="Debe ser un email valido"
              floatingLabelText="Correo Electrónico"
            />
          </div>
          <div>
            <FormsyText
              name="password"
              onChange={(e)=> this.syncFields(e,"password")}
              required
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              type="password"
              floatingLabelText="Contraseña"
            />
            <p>{this.state.error}</p>
          </div>
          <div>
            <RaisedButton
              style={styles.buttonTop}
              type="submit"
              label="Iniciar sesión"
              backgroundColor={styles.green}
              labelColor='#ffffff'
              disabled={!this.state.canSubmit}
            />
            <a href="#" onClick={this.props.toggleLogin} style={styles.leftSpace}>Crear cuenta </a>
          </div>
        </Formsy.Form>
      </MuiThemeProvider>
    );
  }

}
