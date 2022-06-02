import { Component, VERSION } from '@angular/core';
import { boardService } from './board.service';
//import { StateService } from './state.service';
import { TileComponent } from './tile.component';

@Component({
  selector: 'ttt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [],
})
export class AppComponent {
  
  constructor(private bs: boardService) {}
  get(): boardService {
    return this.bs;
  }

  updateTile($event:any) {
    this.bs.board[$event.row][$event.col] = this.bs.CurrentTurn;
    //this.currentPlayer = this.currentPlayer == 'O' ? 'X' : 'O';
    this.bs.toggle();
    setTimeout(() => this.bs.checkMatchFinished(), 1);
    //this.checkMatchFinished();
  }

  /*checkMatchFinished() {
    let gameFinished = false;
    let player: string='';
    for (let i = 0; i < 3; i++) {
      if (
        this.bs.board[i][0] == this.bs.board[i][1] &&
        this.bs.board[i][1] == this.bs.board[i][2]
      ) {
        gameFinished = true;
        player = this.bs.board[i][0];
        break;
      }

      if (
        this.bs.board[0][i] == this.bs.board[1][i] &&
        this.bs.board[1][i] == this.bs.board[2][i]
      ) {
        gameFinished = true;
        player = this.bs.board[0][i];
        break;
      }
    }
    if (
      this.bs.board[0][0] == this.bs.board[1][1] &&
      this.bs.board[1][1] == this.bs.board[2][2]
    ) {
      gameFinished = true;
      player = this.bs.board[0][0];
    }

    if (
      this.bs.board[2][0] == this.bs.board[1][1] &&
      this.bs.board[1][1] == this.bs.board[0][2]
    ) {
      gameFinished = true;
      player = this.bs.board[1][1];
    }

    if (gameFinished && player != null) {
      alert(`Game Finished, ${player} Won`);




    }
  }*/
}
