import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { StateService } from '../state.service';

@Component({
  selector: 'ttt-tile',
  templateUrl: './tile.component.html',
  //styleUrls: ['./tile.component.css'],
})
export class TileComponent {
  @Input() row: number=0;
  @Input() col: number=0;

  @Input() currentPlayer: string | null = null;

  @Output() update = new EventEmitter<{
    row: number;
    col: number;
  }>();

  mark($event:any) {
    this.update.emit({
      row: this.row,
      col: this.col,
    });
  }
}
