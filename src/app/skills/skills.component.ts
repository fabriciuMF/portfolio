import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as deutsch } from '../shared/i18n/de';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies_back_end:[
      {name:"Java, Maven, Springboot", percent:90, remark:'excellent'},
      {name:"REST APIs, JSON, XML", percent:90, remark:'excellent'},
      {name:"JavaEE", percent:70, remark:'good'},
      {name:"Python, C++", percent:50, remark:'average'}      
    ],
    technologies_front_end:[
      {name:"Angular", percent:70, remark:'good'},
      {name:"HTML, CSS, JavaScript, Bootstrap", percent:70, remark:'good'}
    ],
    technologies_database:[
      {name:"SQL Server, MySQL, PostgreSQL", percent:90, remark:'excellent'},
      {name:"Server Reporting Services", percent:50, remark:'average'}
    ],

    testing:[
      {name:"JUnit, Mockito, Postman, SoapUI", percent:80, remark:'very-good'}
    ],

    tools:[
      {name:"Git, GitHub, GitLab", percent:90, remark:'excellent'},
      {name:"Office", percent:90, remark:'excellent'},
      {name:"Eclipse, IntelliJ IDEA, NetBeans", percent:80, remark:'very-good'},
      {name:"Visual Studio Code", percent:80, remark:'very-good'},
      {name:"Linux, Windows", percent:70, remark:'good'}
    ],
    methodologies:[
      {name:"Agile",percent:100,remark:'outstanding'},
      {name:"Scrum",percent:80,remark:'very-good'}
    ]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, deutsch);
  }

  ngOnInit(): void {
  }

}

    
    
  
