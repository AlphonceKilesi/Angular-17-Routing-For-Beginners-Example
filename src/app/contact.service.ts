import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class ContactService {
 constructor(private http: HttpClient) { }

 PostMessage(formData: any) {
    // Replace with your actual API endpoint and parameters
    return this.http.post('https://api.mailthis.to/send', formData);
 }
}
