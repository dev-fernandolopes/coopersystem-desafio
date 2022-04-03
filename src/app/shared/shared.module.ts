import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxCurrencyModule} from "ngx-currency";

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

export const modules = [
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  NgxCurrencyModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
