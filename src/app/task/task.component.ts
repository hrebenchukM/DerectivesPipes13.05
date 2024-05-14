

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit  {
  flagCar= false;
  elseLoading = false;
  flagShip=false;
  flagPlane=false;

  carInfo: string = "Самый большой автомобиль в мире был разработан и создан в Белоруссии, на автомобильном заводе тяжелой спецтехники ОАО БелАЗ и называется карьерный самосвал (а именно для карьеров он и был изготовлен) БелАЗ-75710.";
  planeInfo: string = "Крупнейший в мире самолет Ан-225 Мрия был уничтожен в Гостомеле во время российского вторжения в феврале 2022 года. Об этом авиалайнере длительное время шли дискуссии – был он украинским или советским.";
  shipInfo: string = "Самый большой круизный лайнер в мире Icon of the Seas («Икона морей») отправился в первое семидневное плавание по островам Карибского моря из порта Майами во Флориде. Длина корабля является рекордной и составляет 365 м.";
  shipImg:string="../../assets/prev1135830.jpg";
  carImg:string="../../assets/../../assets/article_54764.jpg";
  planeImg:string="../../assets/thumbs_b_c_58320640c28147a5277880c1f4cb7887.jpg"


  changeMethod(){
    this.elseLoading = false;

    setTimeout(()=>{
      this.elseLoading = true;
    }, 1000)
  }






  constructor() { }



  ngOnInit(): void {
  }

}

