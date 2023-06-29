import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './module/material.module';
import { CdkModule } from './module/cdk.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    CdkModule
  ],
  exports: [
    MaterialModule,
    CdkModule
  ]
})
export class CoreModule { }
