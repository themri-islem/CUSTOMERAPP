import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service'; 
import { Employee } from 'src/app/employee'; 


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:any;
  employee = new Employee(); 
  // données dans un tableau 
  


  
     
  
  constructor(private dataService: DataService) { } 
  ngOnInit(): void { 
  this.getEmployeeData(); 
  } 
  getEmployeeData(){ 
    //console.log('hello employees');
    this.dataService.getData().subscribe(res => { 
    console.log(res); 
    this.employees =res; 
    });  
    } 
    
  insertData(){ 
      this.dataService.insertData(this.employee).subscribe(res => { 
      console.log(res); 
      this.getEmployeeData();
      })
}

deleteData(id:any){ 
  console.log(id);
  this.dataService.deleteData(id).subscribe(res => { 
    //console.log(res);
    this.getEmployeeData(); 
    })  }
  

}



