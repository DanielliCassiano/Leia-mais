import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrineComponent } from './vitrine.component'
import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		VitrineComponent
	],
	imports: [
    CommonModule,
		RouterOutlet,
		NgbNavModule
	],
	exports: [RouterOutlet]
})
export class VitrineModule {}