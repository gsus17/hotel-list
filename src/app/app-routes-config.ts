import { Routes } from '../../node_modules/@angular/router';
import { HotelListComponent } from './hotel/hotel-list.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/hotel-list', pathMatch: 'full' },
    { path: 'hotel-list', component: HotelListComponent }
];
