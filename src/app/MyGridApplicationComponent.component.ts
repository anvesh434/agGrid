import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";
import {RedComponentComponent} from "./RedComponent.component";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {headerName: "Make", field: "make", editable: true},
            {headerName: "Model", field: "model", editable: true},
            {headerName: "Price", field: "price", editable: true}
        ]
        this.gridOptions.rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ]
    }
}