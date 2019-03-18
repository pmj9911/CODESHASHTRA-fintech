import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  TEST1="Julie,18, is a community mobilizer working with the Creating Spaces project. She is a strong advocate for women’s rights and gender equality and works to get the girls in her village, Bhainsliwala Village, Uttar Pradesh involved in the Creating Spaces community group. When Julie’s brother found out that she was working for gender equality and women’s rights, he hit her in the face with a brick. Julie sets an important example for the girls in her village that women can do exactly what men can do – from riding a motorcycle to getting an education and living free of fear and violence.";
  TEST2="Shakuntala Harpal, 45, is a Dalit leader in Harichandrapur Village, India. Shakuntala has worked for many years to help the women and girls in her village exercise their basic rights. Shakuntala helps women who experience violence seek justice and support services, she helps widows get access to their pensions, and she mentors the girls in her village to stand up for their rights.";
  TEST3="Sonali Naik, 23, accesses support services through Oxfam's Creating Spaces project. Sonali married at 17 and unknowingly entered into a relationship filled with violence and abuse. Sonali’s husband and her in-laws physically, emotionally, and mentally abused her for 5 years before she could escape the relationship. Through Creating Spaces, Sonali was connected to a social worker/counselor. By accessing the support services, Sonali was able to leave her abusive husband, and gain custody of her two young boys. Sonali is currently fighting for child support payments from her husband. Sonali’s advice to other young women: “Do not get married at an early age the way I have done it. If you have to do it, don’t lower yourself. Be strong and believe in yourself.”";
  ngOnInit() {
  }

}
