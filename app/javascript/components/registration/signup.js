import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import {Base,styles} from './base';

import reqwest from 'reqwest';

export class Signup extends Base{

  submit(){
    reqwest({
      url:'/users',
      method: 'POST',
      data: {
        user:{
          email: this.state.email,
          password : this.state.password,
          passwordConfirmation : this.state.passwordConfirmation
        }
      },
      headers:{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
          'X-CSRF-Token' : window.inventory.token

      },
    }).then(data => {
      console.log(data)
    }).catch(err => console.log(err));
  }

  render(){
    return (
      <MuiThemeProvider>
        <Formsy.Form
            onValid={()=> this.enableSubmitBtn()}
            onInvalid={()=> this.disableSubmitBtn()}
            onValidSubmit={()=>this.submit()}
            >
          <div>
            <p>{this.state.email}</p>
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
          </div>
          <div>
            <FormsyText
              name="password"
              onChange={(e)=> this.syncFields(e,"passwordConfirmation")}
              required
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              type="password"
              floatingLabelText="Confirmar Contraseña"
            />
          </div>
          <div>
            <RaisedButton
              style={styles.buttonTop}
              type="submit"
              label="Crear cuenta"
              backgroundColor={styles.green}
              labelColor='#ffffff'
              disabled={!this.state.canSubmit}
            />
            <a href="#" onClick={this.props.toggleLogin} style={styles.leftSpace}>Ya tengo cuenta </a>
          </div>
        </Formsy.Form>
      </MuiThemeProvider>
    );
  }

}
