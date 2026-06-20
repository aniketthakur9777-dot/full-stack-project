import { Routes } from '@angular/router';
import { Component  } from '@angular/core';
import { Home } from './home/home';
import { Components } from './components/components';
import { Service } from './service/service';


export const routes: Routes = [
    {
        path: '',
        component:Home
    },

    {
        path: 'components',
        component: Components
    },
    {
        path:'service',
        component: Service
    }
];
