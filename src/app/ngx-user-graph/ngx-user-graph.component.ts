
import { MqttServiceWrapper } from '../mqtt-service-wrapper.service';
import { Subscription } from 'rxjs';

import { MqttDataService } from '../mqtt-data.service';
import { Component, OnInit, ViewChild, ElementRef,OnDestroy } from '@angular/core';
import { Chart, ChartData, ChartDataset, UpdateMode } from 'chart.js'

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-ngx-user-graph',
  templateUrl: './ngx-user-graph.component.html',
  styleUrls: ['./ngx-user-graph.component.css']
})
export class NgxUserGraphComponent implements OnInit, OnDestroy {

  receivedMessage: string = '';
  subscription: Subscription | undefined;

  // Structure to store sensor data
  sensorDataIn: { [paramType: string]: number[] } = {};




  lineChart: Chart | null = null; // Initialize to null
  events: string[] = [];
  opened: boolean = true;
  LinechartInstance: Chart | undefined;
  receivedData:any;
  lineChartSingle: Chart | null = null;
  
  
  userStoreData:any;
  userNameProfile:any;
  isWebSocketOn= true;
  isWebSocketConnected:any;
  webSocketSubscription:any;
  graphDetails:any;
  controlDetails:any;
  filteredControls:any;
  LineChartSingle: Chart | null = null;
  deviceId :any;
  // Initialize an object to store data for all graphs
  sensorData: { [key: string]: { data: number[], borderColor: string } } = {};
  

  @ViewChild('lineChartCanvas', { static: true }) lineChartCanvas!: ElementRef;

  lineChartOne:Chart | null =null;
  lineChartTwo:Chart |null =null;

  private allSensorData: ChartData = {
    labels: [],
    datasets: [],
  };

  private allSensorData1: ChartData = {
    labels: [],
    datasets: [],
  };
  
  private allSensorData2: ChartData = {
    labels: [],
    datasets: [],
  };



  constructor(private mqttServiceWrapper: MqttServiceWrapper,private mqttDataService: MqttDataService,public dialog: MatDialog, private router: Router, private auth : AuthenticationService, private dataSharingService:DataSharingService) {}

  ngOnInit() {
    // Initialize the sensorDataIn structure with empty arrays for each sensor type
    this.graphDetails = localStorage.getItem('deviceType');

if (this.graphDetails){
  const graphOptions = JSON.parse(this.graphDetails);
  this.deviceId = graphOptions[0]
  this.auth.onAssignedControlsView(graphOptions[2], graphOptions[3]).subscribe(response=>
    {this.controlDetails = response;
      console.log(this.controlDetails);
     this.filteredControls = this.controlDetails.filter((item:any)=> 'graph' in item );
      console.log('graph',this.filteredControls)
    }, error=> console.log(error))

}
     
// Initialize the chart
this.userStoreData=localStorage.getItem('userData')
const userDataObject = JSON.parse(this.userStoreData);
this.userNameProfile=userDataObject.userName


console.log(this.deviceId)
    

    this.mqttServiceWrapper.connect(() => {
      console.log('Connected to MQTT broker.');
    });
  
  
    this.sensorDataIn['dateTime'] = []
  
    this.initializeChart();
    this.subscribeToTopic() 




  }

  subscribeToTopic() {
    const subscribeTopic = this.deviceId+'/data'
    this.subscription = this.mqttServiceWrapper.observe(`${subscribeTopic}`, (message) => {
      this.receivedMessage = message.payload.toString();
      // console.log('Received message:', this.receivedMessage);
      const sensorDataIn = JSON.parse(message.payload.toString());
      this.handlesensorDataIn(sensorDataIn);
    });
  }

  handlesensorDataIn(sensorDataIn: any) {
    // Check if the received data has the correct deviceId 913154878189189
   

    if (sensorDataIn.deviceId === `${this.deviceId}`) {
      // Update the sensorDataIn structure with the latest values for each sensor type
      // console.log(this.deviceId)
      if (!this.sensorDataIn[sensorDataIn.paramType]) {
        // Initialize the array if it doesn't exist
        this.sensorDataIn[sensorDataIn.paramType] = [];
      }
  
      this.sensorDataIn[sensorDataIn.paramType].push(sensorDataIn.paramValue);

      if (this.sensorDataIn[sensorDataIn.paramType].length > 60) {
        this.sensorDataIn[sensorDataIn.paramType].shift();
      }
  

      // You can also store the 'time' values similarly if needed
      if (!this.sensorDataIn['dateTime'].includes(sensorDataIn.dataPoint.split(' ')[1])) {
        this.sensorDataIn['dateTime'].push(sensorDataIn.dataPoint.split(' ')[1]);
      }
  
      // Keep only the latest 60 values
      if (this.sensorDataIn['dateTime'].length > 60) {
        this.sensorDataIn['dateTime'].shift();
      }
     
      }
      
          // console.log('Updated Sensor Data:', this.sensorDataIn);
          
          this.mqttDataService.updateSensorData(this.sensorDataIn);
        
          this.updateChart();

          this.initializeChart();
      
    }
  

    initializeChart() {
      if (this.LinechartInstance) {
    // Destroy the existing chart
    this.LinechartInstance.destroy();
     }

    if(this.LineChartSingle){
      this.LineChartSingle.destroy();
    }
      // const canvas = this.lineChartCanvas.nativeElement;
      this.LinechartInstance = new Chart('lineChartOne', {
        type: 'line',
        data: this.allSensorData1,
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Rpm',
              },
            },
          },
        },
      });

      this.LineChartSingle = new Chart('lineChartTwo', {
        type: 'line',
        data: this.allSensorData2,
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Rpm',
              },
            },
          },
        },
      });



    }
  
updateChart() {

this.allSensorData.labels = this.sensorDataIn['dateTime'];
this.allSensorData1.labels= this.sensorDataIn['dateTime'];
this.allSensorData2.labels = this.sensorDataIn['dateTime'];
this.allSensorData.datasets = []
this.allSensorData1.datasets = [];
this.allSensorData2.datasets = [];

this.filteredControls.forEach((control: any) => {
  const displayName = control.graph.display_name;
  if (displayName in this.sensorDataIn) {
    const sensorData = this.sensorDataIn[displayName];
    this.allSensorData.datasets.push({
      label: displayName,
      data: sensorData,
      borderColor: control.graph.color,
      fill: false,
      tension: 0.4,
      hidden: false,
    });
  }
});


this.allSensorData.datasets.forEach((set:any)=>{
  if (set.label === 'X' || set.label === 'Y' || set.label === 'Z'){
    this.allSensorData2.datasets.push(set);
  }
  else{
    this.allSensorData1.datasets.push(set);
  }
})

 if (this.LinechartInstance) {
        this.LinechartInstance.data = this.allSensorData1;
        this.LinechartInstance.update();
      }
 if (this.LineChartSingle){
        this.LineChartSingle.data = this.allSensorData2;
        this.LineChartSingle.update();
      }
    }
    

  unsubscribeFromTopic() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Unsubscribed from topic.');
    }
  }

  disconnect() {
    this.mqttServiceWrapper.disconnect();
    console.log('Disconnected from MQTT broker.');
  }

   publishData() {

        // Example of publishing data to 'topic123'
        const dataToSend = 'hello from frontend'
        const jsonData = JSON.stringify(dataToSend)
       
        this.mqttServiceWrapper.publish('topic456', jsonData,{ qos: 0 });
        console.log('Published message:', jsonData);


        
      }

  ngOnDestroy() {
    // Ensure to unsubscribe when the component is destroyed
    this.unsubscribeFromTopic();
  }




  onBackStats():void{
    this.router.navigate(['./user-account-devices'])
    }
    
    onLogout():void{
    this.router.navigate(['/login'])
    
    }
    subMenuStates: { [key: string]: boolean } = {};
    
    
    onLogout1():void{
    this.router.navigate(['/login'])
    
    }
    
    onSelectChange(event:any){
    
    }
    
    toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
    }
    
    
    isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
    }


















}


// Log the updated sensor data
     
 
        // // Clear existing data
        // this.allsensorData.labels = this.sensorDataIn['dateTime'];
        // this.allsensorData.datasets = [];
      
        // // Update the sensor data
        // Object.keys(this.sensorDataIn).forEach((sensorType) => {
        //   this.allsensorData.datasets.push({
        //     label: sensorType,
        //     data: this.sensorDataIn[sensorType],
        //     borderColor: this.getRandomColor(), // Generate random color for each dataset
        //     // backgroundColor: 'rgba(0, 0, 0, 0)', // Set a transparent background
        //   });
        // });
          // Update the chart for the single sensor


            // getRandomColor() {
    //   // Function to generate a random color in hex format
    //   return '#' + Math.floor(Math.random() * 16777215).toString(16);
    // }

    // ngAfterViewInit(): void {
    //   this.LinechartInstance = new Chart('lineChart', {
    //     type: 'line',
    //     data: this.allsensorData,
    //     options: {
    //       responsive: true,
    //       scales: {
    //         x: {
      
    //           title: {
    //             display: true,
    //             text: 'Time',
    //           },
    //         },
    //         y: {
    //           title: {
    //             display: true,
    //             text: 'Rpm',
    //           },
    //         },
    //       },
    //     },
    //   });
    
    
  
    // } 