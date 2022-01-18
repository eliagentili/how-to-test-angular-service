import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [],
  providers: [SharedService],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class SharedModule {}
