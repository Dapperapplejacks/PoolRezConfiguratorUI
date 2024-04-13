import { Routes } from '@angular/router';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { TesterComponent } from './tester/tester.component';

export const routes: Routes = [
    { path: 'configurator', component: ConfiguratorComponent },
    { path: 'tester', component: TesterComponent },
    { path: '', redirectTo: '/configurator', pathMatch: 'full' },
    { path: '**', redirectTo: '/configurator'}
];
