import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from './models/User';
import { DataServiceService } from './services/data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fromBuild';

  userData: User[] = new Array();
  storeData: User[] = new Array();
  user: User = new User();

  constructor(private http: HttpClient, private dataService: DataServiceService) { }
  ngOnInit(): void {
    // this.showData();
  }

  // ----------------------------------------ResisterData-----------------------------------------

  register(user: User) {
    this.dataService.register(user).subscribe((resultData: any) => {
      alert("Registed successfully");
      this.showData();
      this.user = new User();
    },
    (error: any) => {
      // Error case
      alert('Registration failed. Please Enter Name.');
      console.error('Error:', error);
    }
    );
  }

  // ----------------------------------------UpdateDate-----------------------------------------

  update(user: User) {
    this.dataService.update(user).subscribe((response: any) => {
      console.log(response);
      alert("update Success");
      this.showData();
      this.user = new User();
    });
  }

  // ----------------------------------------EditData-----------------------------------------

  edit(user: User) {
    this.dataService.edit(user.id).subscribe((response: any) => {
      this.user = response;
    });
  }

  // ----------------------------------------showData-----------------------------------------

  showData() {
    this.dataService.showData().subscribe((response: any) => {
      this.userData = JSON.parse(response);
      console.log(this.userData);
      this.storeData = this.userData;
    });
  }

  // ----------------------------------------DeleteData-----------------------------------------

  userId: number = 0;
  openModal(id: number) {
    this.userId = id;
  }
  delete() {
    this.dataService.delete(this.userId).subscribe((response: any) => {
      // alert("delete data success");
      this.showData();
    });
  }

  // -----------------------------------------------shorting-------------------------------------

  selectedOption: string = '';
  onOptionChange(event: any): void {
    this.selectedOption = event.target.value;
    if (this.selectedOption === 'inc') {
      this.userData = this.userData.sort((a, b) => a.id - b.id);
    } else if (this.selectedOption === 'dec') {
      this.userData = this.userData.sort((a, b) => b.id - a.id);
    }
  }

  // ----------------------------------------SearchData-----------------------------------------

  searchValue: any = "";
  search(event: any) {
    this.searchValue = event.target.value
    if (this.searchValue === "") {
      this.showData();
    }
    else
      this.userData = this.userData.filter((res) => res.email.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()) === true || res.phoneNo.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()) === true || res.firstName.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()) === true || res.lastName.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()) === true || res.password.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()) === true);
  }


  // --------------------------------------------------pagination----------------------------------

  currentPage: number = 1;
  itemsPerPage: number = 6;
  serialNumber: number = 1;

  getPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const paginatedData = this.userData.slice(startIndex, endIndex).map((user, index) => ({
      ...user,
      serialNumber: this.serialNumber + index,
    }));
    return paginatedData;
  }
  onPageChange(newPage: number): void {
    if (newPage >= 1 && newPage <= this.getTotalPages()) {
      this.currentPage = newPage;
    }
  }
  getTotalPages(): number {
    return Math.ceil(this.userData.length / this.itemsPerPage);
  }
  pagesArray(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, index) => index + 1);
  }
}


