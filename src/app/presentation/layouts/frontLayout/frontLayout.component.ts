import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { SidebarMenuitemComponent } from '../../components/sidebarMenuitem/sidebarMenuitem.component';
import { RouterModule } from '@angular/router';
import SharedHeaderSliderComponent from '../../shared/headerSlider/sharedheaderSlider.component';
import FrontToursPageComponent from '../../frontPage/frontToursPage/frontToursPage.component';

@Component({
  selector: 'app-front-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedHeaderSliderComponent,
    FrontToursPageComponent
  ],
  templateUrl: './frontLayout.component.html',
  styleUrls:['./frontLayout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FrontLayoutComponent { 

  //public route = routes.filter(route => route.path?.trim()=== 'front')[0].children?.filter(route => route.data)

  constructor() {
    
  }
}
