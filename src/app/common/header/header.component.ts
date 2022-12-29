import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() toggleDir = new EventEmitter<void>();



  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void { }
  openAddContactDailog() {
    // let dailogRef = this.dialog.open(NewContactDailogComponent, {
    //   width: '450px',
    //   height: '500px',
    // });

    // dailogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.openSnackBar('Contact added', 'Navigate')
    //       .onAction()
    //       .subscribe(() => {
    //         this.router.navigate(['/contactmanager', result.id]);
    //       });
    //   }
    // });
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
