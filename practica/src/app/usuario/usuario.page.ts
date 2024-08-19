import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage {
  usuario          : string = 'AronSn0w';
  nombre           : string = '';
  apellido         : string = '';
  selectedDate     : string = '';
  formattedDate    : string = '';
  isDatePickerOpen : boolean = false;
  isModalOpen      : boolean = false;
  nivelEducacional : string = '';  // Nueva propiedad para el ion-select

  constructor() {}

  toggleDatePicker() {
    this.isDatePickerOpen = !this.isDatePickerOpen;
  }

  closeDatePicker() {
    this.isDatePickerOpen = false;
  }

  onDateSelected(event: any) {
    this.selectedDate = event.detail.value;
    this.formattedDate = this.formatDate(this.selectedDate);
    this.closeDatePicker(); // Cierra el calendario después de seleccionar una fecha
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Los meses comienzan en 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  // Método actualizado para limpiar los campos, incluyendo el ion-select
  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.formattedDate = '';
    this.nivelEducacional = '';  // Restablece el valor del ion-select
  }
}