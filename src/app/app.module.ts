import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AgGridModule} from "ag-grid-angular/main";
import {AppComponent} from "./app.component";
import {MyGridApplicationComponent} from "./MyGridApplicationComponent.component";
import {RedComponentComponent} from "./RedComponent.component";

@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        RedComponentComponent
    ],
    imports: [
        BrowserModule,
        AgGridModule.withComponents(
            [RedComponentComponent]
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}