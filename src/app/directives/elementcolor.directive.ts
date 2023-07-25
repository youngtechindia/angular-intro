import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElementcolor]'
})
export class ElementcolorDirective implements OnInit{

  @Input('defaultcolor') defaultColor:string = "transparent";
  @Input('mouseovercolor') mouseOverColor:string = "green";



  constructor(private elemntRef:ElementRef, private renderer:Renderer2) { 

  }



  ngOnInit(): void {
 
    this.renderer.setStyle(this.elemntRef.nativeElement,'background-color',this.defaultColor);
  
  }

  @HostListener('mouseenter')  mouseoverEvent(event:Event){
    this.renderer.setStyle(this.elemntRef.nativeElement,'background-color',this.mouseOverColor);
  }

  @HostListener('mouseleave') mouseleave(event:Event){
    this.renderer.setStyle(this.elemntRef.nativeElement,'background-color',this.defaultColor);

  }
}
