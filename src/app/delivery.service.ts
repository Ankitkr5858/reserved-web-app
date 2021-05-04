import { Injectable } from '@angular/core';
import { Explore } from './explore';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  formData: Explore | undefined

  constructor() { }
}
