import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";
import { CommonModule } from '@angular/common';




@NgModule ({
    declarations: [
        
        ContadorComponent
    ],
    imports: [ 
        CommonModule
    
         
    
    ],
    exports: [
        ContadorComponent
    ],
    providers: [],



})

export class ContadorModule{}