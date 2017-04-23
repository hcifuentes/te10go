import React from 'react';
import Formsy from 'formsy-react';
import {blueA400,greenA400,redA400} from 'material-ui/styles/colors';



export const styles = {
  buttonTop:{
    marginTop: "1em",
  },
  underlineFocusStyle:{
    borderColor: blueA400,
  },
  floatingLabelFocusStyle:{
    color: blueA400,
  },
  leftSpace:{
    marginLeft: "1em",
  },
  blue: blueA400,
  red: redA400,
  green: greenA400
}

export class Base extends React.Component{

constructor(props){
  super(props);
  this.state = {
    canSubmit: true,
    email: '',
    password: '',
    error: ''
  }
}

disableSubmitBtn(){
  this.setState({
    canSubmit: false
  });
}

enableSubmitBtn(){
  this.setState({
    canSubmit: true
  });
}

reload(){
  window.location.href = window.location.href;
}

syncFields(ev, fieldName){
  let element = ev.target;
  let value = element.value;

  let json = {};
  json[fieldName] = value;
  this.setState(json);
}

}
