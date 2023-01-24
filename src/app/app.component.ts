//  déclare une propriété "onomatopiaList"
//  de type array de type string pour stocker la liste des onomatopées.
//  Déclare une méthode "onReceiveNewOnomatopia()" de type void 
//  pour ajouter les nouvelles onomatopées à la liste.


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onomatopiaList: string[] = [];

  onReceiveNewOnomatopia(onomatopia: string) {
    this.onomatopiaList.push(onomatopia);
  }
}
