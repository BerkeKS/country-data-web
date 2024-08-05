import { Routes } from '@angular/router';
import { EuropeComponent } from './europe/europe.component';
import { HomeComponent } from './home/home.component';
import { AfricaComponent } from './africa/africa.component';
import { AmericasComponent } from './americas/americas.component';
import { AsiaComponent } from './asia/asia.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Country Data"
    },
    {
        path:"africa",
        component: AfricaComponent,
        title: "Africa - Country Data"
    },
    {
        path:"americas",
        component: AmericasComponent,
        title: "Americas - Country Data"
    },
    {
        path:"asia",
        component: AsiaComponent,
        title: "Asia - Country Data"
    },
    {
        path: "europe",
        component: EuropeComponent,
        title: "Europe - Country Data"
    }
];
