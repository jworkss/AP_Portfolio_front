import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelSkills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  isLogged = false;
  skills: ModelSkills[] = [];

  constructor(private router: Router, private tokenService: TokenService, private skillService: SkillsService) {}

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillService.skills().subscribe((data) => {
      this.skills = data;
    });
  }

  hasRoute(router: string) {
    return this.router.url === router;
  }
}
