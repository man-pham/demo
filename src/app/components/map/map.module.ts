
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    MapComponent
  ],
  exports:[
      MapComponent,
    ],
  imports: [
    AgmCoreModule.forRoot({
//        apiKey: 'AIzaSyDMz_bKrfbrUrwjUI3rfMDEMw_yHC_FGKY'
        apiKey: 'AIzaSyAQZcjTwcDVfA4mvQGJVSbLCQ9ZRxFqNYY'
      })
  ],
  providers: []
})
export class MapModule { }
