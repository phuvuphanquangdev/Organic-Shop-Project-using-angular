import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetter = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeLetterCheckBox(){
    this.includeLetter = !this.includeLetter;
  }

  onChangeNumberCheckBox(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbolsCheckBox(){
    this.includeSymbols = !this.includeSymbols;
  }

  generatePassword(){
    let numbers = '1234567890';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let symbols = '!@#$%^&*()';

    let validChar = '';

    if(this.includeLetter){
      validChar += letters;
    }
    if(this.includeNumbers){
      validChar += numbers;
    }
    if(this.includeSymbols){
      validChar += symbols;
    }

    let genaratedPassword = '';

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChar.length);
      genaratedPassword += validChar[index];      
    }

    this.password = genaratedPassword;
  }
}
