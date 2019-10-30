import { Component } from '@angular/core';
import { Evalue } from './models/evalue';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AvatarUTN';
  evalueArray:Evalue[] = [
    {numero: 1,tipo: "Examen",valor: 50},
    {numero: 2,tipo: "QUIZ",valor: 40}
  ];
  selectedEvalue:Evalue=new Evalue();

  addoredit(){

    if(this.selectedEvalue.numero == 0){

      this.selectedEvalue.numero= this.evalueArray.length + 1;
      this.evalueArray.push(this.selectedEvalue);
      
    }

    this.selectedEvalue = new Evalue();
  }

  openForEdit(evalue:Evalue){
    this.selectedEvalue = evalue;
  }

  delete(){

    if(confirm( 'Are you want to delete it ?' )){

      this.evalueArray = this.evalueArray.filter(x => x != this.selectedEvalue)
      this.selectedEvalue = new Evalue();
    }    
  }
  resultado(){
		let total = 0;
		this.evalueArray.forEach((a) => {
			total += a.valor;
		});
    return total*0.20;
    
	}
}
