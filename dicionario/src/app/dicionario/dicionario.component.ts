import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dicionario',
    templateUrl: './dicionario.component.html'
})
export class FotoComponent {
@Input() palavra:string;
@Input() significado:string;


}