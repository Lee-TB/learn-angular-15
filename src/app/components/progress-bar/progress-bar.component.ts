import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress = 0;
  @Input() backgroundColor!: string;
  @Input() progressColor!: string;
  constructor() {}
  ngOnInit() {
    console.log('progress in ngOninit', this.progress);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ('progress' in changes) {
      const progress = Number(changes['progress'].currentValue);
      if (Number.isNaN(progress)) {
        this.progress = 0;
      } else {
        this.progress = progress / 100;
      }
    }
  }
}
