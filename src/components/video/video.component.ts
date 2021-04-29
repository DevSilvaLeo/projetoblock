import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import 'jarallax';

declare var jarallax: any;

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})

export class VideoComponent implements AfterViewInit {
    @ViewChild('videoOn', { static: true }) videoOn: ElementRef

    constructor() { 
    }

    ngAfterViewInit() {
      //  location.reload()
      jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2
      });

    }

    ngOnDestroy() {
      //  location.reload()
    }
    
}