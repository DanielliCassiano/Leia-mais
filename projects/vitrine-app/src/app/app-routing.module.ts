import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine-home/vitrine.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
		path: '',
		component: VitrineComponent
	},
  {
		path: 'livros',
		loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      remoteName: 'livrosApp',
      exposedModule: './LivrosModule'
    }).then((moduleLoad) => moduleLoad.LivrosModule)
      .catch((err) => console.log(err))
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
