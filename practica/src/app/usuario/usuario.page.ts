import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage {
  user!: string;
  nombre: string = '';
  apellido: string = '';
  selectedDate: string = '';
  formattedDate: string = '';
  isDatePickerOpen: boolean = false;
  isModalOpen: boolean = false;
  nivelEducacional: string = '';
  developer: String = 'AronSn0w';

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private toaster: ToastController // Inyecta ToastController
  ) {
    this.activeroute.queryParams.subscribe((params) => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state && state['user']) {
        this.user = state['user']; // Almacena el valor en la propiedad
      }
    });
  }

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

  // Método actualizado para limpiar los campos, incluyendo el ion-select
  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.formattedDate = '';
    this.nivelEducacional = ''; // Restablece el valor del ion-select
  }

  async toastErrorMessage(message: string) {
    const toast = await this.toaster.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  async toggleModal() {
    if (this.isModalOpen) {
      this.isModalOpen = false; // Cierra el modal
    } else {
      // Solo abrir el modal si ambos campos tienen un valor
      if (this.nombre.trim() !== '' && this.apellido.trim() !== '') {
        this.isModalOpen = true;
      } else {
        // Mostrar mensaje si alguno de los campos está vacío usando toast
        await this.toastErrorMessage(
          'Por favor, complete ambos campos (Nombre y Apellido).'
        );
      }
    }
  }
}
