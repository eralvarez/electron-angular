import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'electron-angular';

    public nodeVersion = process.versions.node;
    public chromeVersion = process.versions.chrome;
    public electronVersion = process.versions.electron;
}
