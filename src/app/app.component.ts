import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  isRequired = false;
  isDisabled = false;
  isOpenOnFocus = false;
  isOpen = false;
  today: Date = new Date();
  type: string = 'date';
  types: Array<any> = [
    { text: 'Date', value: 'date' },
    { text: 'Time', value: 'time' },
    { text: 'Date Time', value: 'datetime' }];

  mode: string = 'auto';
  modes: Array<any> = [
    { text: 'Auto', value: 'auto' },
    { text: 'Portrait', value: 'portrait' },
    { text: 'Landscape', value: 'landscape' }];

  container: string = 'inline';
  containers: Array<any> = [
    { text: 'Inline', value: 'inline' },
    { text: 'Dialog', value: 'dialog' }];

  date: Date = null;
  minDate: Date = null;
  maxDate: Date = null;
  enableDates: Array<Date> = [
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 7),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 1),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 5),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 7),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 8)
  ];
  disableDates: Array<Date> = [
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 2),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 1),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 5),
    new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 9)
  ];
  disableWeekDays: Array<number> = [0, 6];

  openDatepicker() {
    this.isOpen = true;
    setTimeout(() => {
      this.isOpen = false;
    }, 100);
  }

  setDate() {
    this.date = new Date(this.today);
  }

  setDateRange() {
    this.minDate = new Date(this.today);
    this.minDate.setMonth(this.minDate.getMonth() - 3);
    this.maxDate = new Date(this.today);
    this.maxDate.setMonth(this.maxDate.getMonth() + 3);
  }
  ngOnInit() {
    setTimeout(() => {
    this.openDatepicker()
    }, 100);
  }
  handleChange(value){
    console.log("value",value);
    this.isOpenOnFocus = true;
    setTimeout(() => {
      this.openDatepicker()
    }, 100);
  }
}
