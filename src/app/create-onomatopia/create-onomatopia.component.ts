

// Déclare une propriété "newOnomatopia"
// de type string pour stocker la nouvelle onomatopée écrite par 
// l'utilisateur. Déclare également une propriété "sendOnomatopiaToParent"
// de type EventEmitter pour envoyer la nouvelle onomatopée au composant
// parent.
// Utilisez la propriété Output() pour écouter l'événement de création
//  d'onomatopée envoyé par le composant enfant, et déclencher la méthode 
//  "onReceiveNewOnomatopia()" pour ajouter la nouvelle onomatopée à la 
//  liste et
//  l'afficher dans le composant parent.


import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {
  newOnomatopia?: string;

  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia() {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}
