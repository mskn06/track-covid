import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { SignupService } from './signup.service';
import { TrackCovidService } from './track-covid.service';

const services = [LoginService, SignupService, TrackCovidService];

@NgModule({
  imports: [CommonModule],
  providers: [...services],
})
export class apiServices {}
