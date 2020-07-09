import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
name = 'Angular';
color1 = '';
color2 = '';
color3='';
color4='';
color5='';
color6='';
color7='';
color8='';

color9='';
color10='';

matMenuTimer: any;


 //use this method for button click event
    setColor(value) {
     this.matMenuTimer = setTimeout( () => {this.getDate(value);}, 200);
    }
    getDate(value)
    {
       console.log("hi"+value);
       switch (value) {
          case 1: 
            this.color1 = 'red'; 
            break;
          case 2: 
            this.color2 = 'red'; 
            break;
             case 3: 
            this.color3 = 'red'; 
            break;
             case 4: 
            this.color4 = 'red'; 
            break;
             case 5: 
            this.color5 = 'red'; 
            break;
          
     }
    }
  //use this method for dropdown option change event
  setColor1(value) {
     clearTimeout(this.matMenuTimer);
      this.matMenuTimer = undefined;
      this.matMenuTimer = setTimeout( () => {this.getValues(value);}, 200);
    console.log("DOUBLE CLIK");
  
    }
    getValues(value)
    {
        switch(value)
    {
         case 6: 
            this.color1 = 'white'; 
            break;
             case 7: 
            this.color2 = 'white'; 
            break;
             case 8: 
            this.color3 = 'white'; 
            break;
             case 9: 
            this.color4 = 'white'; 
            break;
             case 10: 
            this.color5 = 'white'; 
            break;
    }
    // this.color1 = 'white'; 
  }
}
