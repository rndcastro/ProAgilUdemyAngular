import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../_services/evento.service';
import { IEvento } from '../_models/i-evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  events: IEvento[] = [];
  eventsFiltered: IEvento[] = [];
  imageWidth = 50;
  imageHeight = 40;
  showImage = false;
  filterList = '';
  modalRef: BsModalRef;

  constructor(  private eventoService: EventoService
              , private modalService: BsModalService) { }

  ngOnInit() {
    this.getEventos();
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  get FilterList()
  {
    return this.filterList;
  }
  set FilterList(value: string)
  {
    this.filterList = value;
    this.eventsFiltered = this.filterEvents(value);
  }
  toggleImage(){
    this.showImage = !this.showImage;
  }
  getEventos(){
    this.eventoService.getAllEventos()
    .subscribe( (events: IEvento[]) => {
      this.events = events;
      console.log(events);
      this.eventsFiltered = events;
    },
    error => {
      console.log(error);
    });
  }
  filterEvents( filter: string): IEvento[]{
    filter = filter.toLocaleLowerCase();
    return (filter) ? this.events.filter(
      event => event.tema.toLocaleLowerCase().indexOf(filter) !== -1
    ) : this.events;
  }
}
