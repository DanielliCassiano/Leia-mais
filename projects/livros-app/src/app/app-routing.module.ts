import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { CatalogoComponent } from './catalogo/catalogo.component'; 


const routes: Routes = [
	{
		path: 'livros',
		component: LivrosComponent
	},
	{
		path: 'catalogo',
		component: CatalogoComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
