import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-starter';
  foodList = [
    {
      name: "cheese burger",
      foodGroup: "meat"
    },
    {
      name: "dragon fruit",
      foodGroup: "fruit"
    },
    {
      name: "milk",
      foodGroup: "dairy"
    }
  ];
  
  constructor(private dialog: MatDialog,
              private snackBar: MatSnackBar) {}

  open() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(name => {
      if (name) {
        this.snackBar.open(`Hello ${name}!`, undefined, {
          duration: 5000
        });
      }
    });
  }

  addFood() {
    this.foodList.push({
      name: "spaghetti",
      foodGroup: "grain"
    });
  }
}
