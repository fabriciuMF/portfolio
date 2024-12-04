import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as deutsch } from '../shared/i18n/de';
import { experiencesDe} from '../api/experiencesDe';
import { experiencesEn} from '../api/experiencesEn';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']

})
export class CurriculumVitaeComponent implements OnInit {
  experiences:any=experiencesEn;
  paintIcon: any ;
  gameIcon:any;
  cookingIcon:any;

  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, deutsch);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.experiences=experiencesEn;
      }
      else{
        this.experiences=experiencesDe;
      }
    });
  }

  ngOnInit(): void {
    this.paintIcon=awesom.faPaintBrush;
    this.gameIcon=awesom.faChess;
    this.cookingIcon=awesom.faUtensils;
  }
  
  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }
 

}
