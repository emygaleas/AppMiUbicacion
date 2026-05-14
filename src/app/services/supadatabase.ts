import { Injectable } from '@angular/core';
import {createClient} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Supadatabase {
  supabase = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  constructor() {}

  async guardarUbicacion(
    latitud: number,
    longitud: number
  ) {

    const { data, error } = await this.supabase
      .from('ubicaciones')
      .insert([
        {
          latitud: latitud,
          longitud: longitud
        }
      ])
      .select();

    return { data, error };
  }

}
