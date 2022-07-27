import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showScreen',
  templateUrl: './show-screen.html',
  styleUrls: ['./show-screen.component.scss']
})
export class ShowScreenComponent implements OnInit {
  //TODO: vielleicht noch Mal neu versuchen und alles besser nach dem Bootstrap Grid System aufbauen, zudem das Probelem überprüfen, dass in der mobilen Anischt die Nav Bar content nach unten schiebt
  //TODO: SCSS col größen je nach screen size schaffen zb wenn reg rep nicht angerzeigft werden soll col größe vol 6 zu 12 um voll zu machen du weißt super perfekt
  constructor() { }

  ngOnInit(): void {
  }

}
