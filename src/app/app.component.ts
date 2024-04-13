import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ConfiguratorComponent } from './configurator/configurator.component';
import { TesterComponent } from './tester/tester.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, ConfiguratorComponent, TesterComponent]
})
export class AppComponent {
  title = 'PoolRezConfiguratorUI';
}
