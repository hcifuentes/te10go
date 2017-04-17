import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import {Base,styles} from './base';



export class Login extends Base{

  render(){
    return (
      <MuiThemeProvider>
        <Formsy.Form
            onValid={()=> this.enableSubmitBtn()}
            onInvalid={()=> this.disableSubmitBtn()}>
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
