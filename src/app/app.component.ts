import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  ngOnInit(): void {
   
  }
  onChangeLength(event : Event){   
    if (event.target) {
      const target = event.target as HTMLInputElement;
      const value = target.value;      
      const parsedValue = parseInt(value);      
      if (!isNaN(parsedValue)) {
          console.log('!isNaN', parsedValue);
            this.length = parsedValue;
          }        
    }    
  }

  

  onChangeUseLetter(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols
  }
 

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';    

    for(let i=0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }    
    this.password = generatedPassword;
   
  }
}
