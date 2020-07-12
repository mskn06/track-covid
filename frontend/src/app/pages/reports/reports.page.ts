import { Component, OnInit } from '@angular/core';
import { TrackCovidService } from 'src/app/services/track-covid.service';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  covidReport;
  chart = [];

  constructor(private trackCovidService: TrackCovidService) {}

  ngOnInit() {
    this.trackCovidService.getCovidInfo().subscribe(
      (data) => {
        this.covidReport = data;
        console.log('data', data);
        // this.getChart('Delhi');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async getChart(stateName) {
    // find the stateCode eg: StateName(Lakshadweep) = LD
    let stateCode = await Object.keys(states)[
      Object.values(states).indexOf(stateName)
    ];

    // get details from covidReport
    // CREATE: arr(DATES) , arr(Numbers)
    let Dates = [];
    let Patients = [];
    this.covidReport.states_daily.forEach((data) => {
      if (data['status'] == 'Confirmed') {
        Dates.push(data['date']);
        Patients.push(data[`${stateCode}`]);
      }
    });

    console.log(this.chart);
    delete this.chart;
    // show the chart
    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: Dates,
        datasets: [
          {
            label: `Covid-19 Patients for ${stateName} `,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: Patients,
          },
        ],
      },
    });
  }
  stateNames = [
    'Maharashtra',
    'Tamil Nadu',
    'Delhi',
    'Gujarat',
    'Uttar Pradesh',
    'Karnataka',
    'Telangana',
    'West Bengal',
    'Andhra Pradesh',
    'Rajasthan',
    'Haryana',
    'Madhya Pradesh',
    'Assam',
    'Bihar',
    'Odisha',
    'Jammu and Kashmir',
    'Punjab',
    'Kerala',
    'State Unassigned',
    'Chhattisgarh',
    'Uttarakhand',
    'Jharkhand',
    'Goa',
    'Tripura',
    'Manipur',
    'Puducherry',
    'Himachal Pradesh',
    'Ladakh',
    'Nagaland',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Arunachal Pradesh',
    'Mizoram',
    'Andaman and Nicobar Islands',
    'Sikkim',
    'Meghalaya',
    'Lakshadweep',
  ];
}

const states = {
  mh: 'Maharashtra',
  tn: 'Tamil Nadu',
  dl: 'Delhi',
  gj: 'Gujarat',
  up: 'Uttar Pradesh',
  ka: 'Karnataka',
  tg: 'Telangana',
  wb: 'West Bengal',
  ap: 'Andhra Pradesh',
  rj: 'Rajasthan',
  hr: 'Haryana',
  mp: 'Madhya Pradesh',
  as: 'Assam',
  br: 'Bihar',
  or: 'Odisha',
  jk: 'Jammu and Kashmir',
  pb: 'Punjab',
  kl: 'Kerala',
  un: 'State Unassigned',
  ct: 'Chhattisgarh',
  ut: 'Uttarakhand',
  jh: 'Jharkhand',
  ga: 'Goa',
  tr: 'Tripura',
  mn: 'Manipur',
  py: 'Puducherry',
  hp: 'Himachal Pradesh',
  la: 'Ladakh',
  nl: 'Nagaland',
  ch: 'Chandigarh',
  dn: 'Dadra and Nagar Haveli and Daman and Diu',
  ar: 'Arunachal Pradesh',
  mz: 'Mizoram',
  an: 'Andaman and Nicobar Islands',
  sk: 'Sikkim',
  ml: 'Meghalaya',
  ld: 'Lakshadweep',
};
