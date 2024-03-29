import {Component} from '@angular/core';
import {Measure} from "src/app/home/interfaces/measure";
import {DomSanitizer} from "@angular/platform-browser";

//TODO: measures and capabilities html css in one parent component!

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.scss']
})
export class MeasuresComponent {
  measures: Measure[] = [];

  constructor(public domSanitizer: DomSanitizer) {
    this.measures = [{
      svgGraphic: '<svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" viewBox="0 0 24 24" role="img" aria-labelledby="timeIconTitle" stroke="#D1E8E2" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#D1E8E2"> <title id="timeIconTitle">Time</title> <circle cx="12" cy="12" r="10"/> <polyline points="12 5 12 12 16 16"/> </svg>',
      title: 'Laufzeit',
      text: 'Implementierung eines Spark-Monitoring'
    },
      {
        svgGraphic: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30%" height="30%" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#D1E8E2">\n' +
            '<path id="Roller" d="M55.9071999,8.5h-2.8633003C53.0284004,8.5,53.0153999,8.5080996,53,8.5088997V6.1921  c0-3.1436-2.5485001-5.6921-5.6921005-5.6921H8.6920013c-3.1436,0-5.6919994,2.5485001-5.6919994,5.6921v6.6158004  C3.0000017,15.9514999,5.5484014,18.5,8.6920013,18.5h38.6158981C50.4514999,18.5,53,15.9514999,53,12.8079004v-2.3168001  C53.0153999,10.4919004,53.0284004,10.5,53.0438995,10.5h2.8633003C57.6123009,10.5,59,11.8114996,59,13.4229002v5.4383993  c0,1.4971008-0.6114006,2.9082012-1.7198029,3.9717007C56.1737976,23.8925991,54.6395988,24.5,53.072197,24.5h-19.434494  c-1.7647018,0-3.4258022,0.6611004-4.6783009,1.8603992c-1.2455997,1.1933002-1.9594002,2.8486004-1.9594002,4.5419006V37.5h-2  c-1.1046009,0-2,0.895401-2,2v22c0,1.104599,0.8953991,2,2,2h6C32.1044998,63.5,33,62.604599,33,61.5v-22  c0-1.104599-0.8955002-2-1.9999981-2h-2v-6.5977001c0-1.1679001,0.4769993-2.2674999,1.3437004-3.097599  C31.2090015,26.9755993,32.4091034,26.5,33.6377029,26.5h19.434494c2.1084023,0,4.0938034-0.7891006,5.5918007-2.2227001  C60.1483994,22.8535004,61,20.8789005,61,18.8612995v-5.4383993C61,10.7080002,58.7157974,8.5,55.9071999,8.5z   M51.1026001,12.8079004c0,2.0923996-1.7022972,3.7947989-3.7947006,3.7947989H8.6920013  c-2.0923996,0-3.7946997-1.7023993-3.7946997-3.7947989V6.1921c0-2.0924001,1.7023001-3.7948,3.7946997-3.7948h38.6158981  c2.0924034,0,3.7947006,1.7024,3.7947006,3.7948V12.8079004z M31.0000019,39.5v22h-6v-22H31.0000019z"/>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '</svg>', title: 'Rollout', text: 'Kubernetes zur Bereitstellung & Skalierung von Abacus'
      },
      {
        svgGraphic: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30%" height="30%" id="Fachtest" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">\n' +
            '<style type="text/css">\n' +
            '\t.st0{fill:none;stroke:#D1E8E2;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
            '</style>\n' +
            '<path class="st0" d="M18,8c0-0.6,0.4-1,1-1h0c0.6,0,1-0.4,1-1V4c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h0  c0.6,0,1,0.4,1,1v4.7c0,0.8-0.3,1.7-0.8,2.4l-6.9,9.4C6.1,24.8,6,25.2,6,25.7V27c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-1.3  c0-0.4-0.1-0.8-0.4-1.2l-6.9-9.4c-0.5-0.7-0.8-1.5-0.8-2.4V8"/>\n' +
            '<line class="st0" x1="8" y1="23" x2="24" y2="23"/>\n' +
            '</svg>',
        title: 'Fachtest',
        text: 'Effizientes Testen durch kurze Testprozesse, Testdatenportfolio, Monitoring & Abweichungen'
      },
      {
        svgGraphic: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30%" width="30%" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" fill="#D1E8E2" xml:space="preserve">\n' +
            '<g>\n' +
            '\t<path color="#D1E8E2" d="M245,314.021c-5.936,0-10.743,4.813-10.743,10.749s4.808,10.751,10.743,10.751c5.938,0,10.75-4.815,10.75-10.751   S250.938,314.021,245,314.021z"/>\n' +
            '\t<path d="M480,21.003H10c-5.523,0-10,4.477-10,10v327.456c0,5.522,4.477,10,10,10h174.711l-17.492,42.43h-32.88   c-5.522,0-10,4.478-10,10v38.108c0,5.523,4.478,10,10,10h221.323c5.522,0,10-4.477,10-10v-38.108c0-5.522-4.478-10-10-10h-32.879   l-17.493-42.43H480c5.522,0,10-4.478,10-10V31.003C490,25.479,485.522,21.003,480,21.003z M470,41.003v240.901H20V41.003H470z    M345.662,448.997H144.339v-18.108h201.323V448.997z M301.149,410.889H188.852l17.492-42.43h77.312L301.149,410.889z M20,348.459   v-46.555h450v46.555H20z"/>\n' +
            '\t<path d="M323.206,161.089L323.206,161.089L323.206,161.089c0-5.522-4.478-10-10.001-9.999l-10.664,0.001   c-0.603-3.473-1.497-6.846-2.686-10.08l9.221-5.324c4.782-2.763,6.421-8.879,3.658-13.661c-2.763-4.782-8.877-6.423-13.66-3.659   l-9.248,5.342c-2.233-2.669-4.699-5.135-7.368-7.369l5.342-9.247c2.763-4.782,1.125-10.899-3.657-13.661   c-4.782-2.764-10.898-1.125-13.661,3.657l-5.325,9.22c-3.234-1.189-6.607-2.084-10.08-2.688V92.962c0-5.523-4.477-10-10-10   c-0.025,0-0.051,0.004-0.076,0.004s-0.051-0.004-0.076-0.004c-5.522,0-10,4.477-10,10v10.658c-3.473,0.604-6.846,1.498-10.08,2.688   l-5.325-9.22c-2.763-4.782-8.879-6.421-13.661-3.657c-4.782,2.762-6.42,8.879-3.657,13.661l5.342,9.247   c-2.669,2.234-5.135,4.7-7.368,7.369l-9.248-5.342c-4.783-2.764-10.897-1.123-13.66,3.659c-2.763,4.782-1.124,10.898,3.658,13.661   l9.221,5.324c-1.189,3.234-2.083,6.607-2.686,10.08l-10.664-0.001c-5.523-0.001-10.001,4.477-10.001,9.999l0,0l0,0l0,0l0,0   c0,5.523,4.478,10,10.001,10l10.664-0.001c0.602,3.472,1.497,6.845,2.686,10.079l-9.221,5.325   c-4.782,2.763-6.421,8.878-3.658,13.661c2.763,4.781,8.877,6.422,13.66,3.658l9.248-5.342c2.233,2.67,4.699,5.136,7.368,7.369   l-5.342,9.248c-2.763,4.782-1.125,10.898,3.657,13.66c4.782,2.764,10.898,1.125,13.661-3.656l5.325-9.221   c3.234,1.189,6.607,2.085,10.08,2.688v10.658c0,5.523,4.478,10,10,10c0.025,0,0.051-0.004,0.076-0.004s0.051,0.004,0.076,0.004   c5.523,0,10-4.477,10-10v-10.658c3.473-0.603,6.846-1.498,10.08-2.688l5.325,9.221c2.763,4.781,8.879,6.42,13.661,3.656   c4.782-2.762,6.42-8.878,3.657-13.66l-5.342-9.248c2.669-2.233,5.135-4.699,7.368-7.369l9.248,5.342   c4.783,2.764,10.898,1.123,13.66-3.658c2.763-4.783,1.124-10.898-3.658-13.661l-9.221-5.325c1.189-3.234,2.083-6.607,2.686-10.079   l10.664,0.001C318.728,171.089,323.206,166.612,323.206,161.089L323.206,161.089L323.206,161.089z M245.076,199.433   c-0.025,0-0.051-0.002-0.076-0.002s-0.051,0.002-0.076,0.002c-21.141,0-38.34-17.2-38.34-38.344   c0-21.143,17.199-38.344,38.34-38.344c0.025,0,0.051,0.002,0.076,0.002s0.051-0.002,0.076-0.002   c21.141,0,38.34,17.201,38.34,38.344C283.416,182.232,266.217,199.433,245.076,199.433z"/>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '<g>\n' +
            '</g>\n' +
            '</svg>', title: 'Abacus Entwicklung', text: 'Individuell, MPE, SQLX'
      }]
  }

}
