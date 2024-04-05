import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  areas: any = {}; // Objeto para almacenar datos de las áreas

  constructor(private database: Database) {} // Inyección en el constructor

  ngOnInit() {
    const route = ref(this.database, 'ruta_en_la_base_de_datos');
    object(route).subscribe(attributes => {
      this.areas = attributes.snapshot.val(); // Guardar los valores obtenidos en el objeto areas
    });
  }

  toggleWindow(area: string) {
    // Lógica para cambiar el estado de la ventana o lo que sea que quieras hacer al hacer clic en una tarjeta
    console.log('Se hizo clic en ' + area);
  }
}
