import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3> Comentarios de lo que sea</h3>
    <img 
      alt="it's fine"
      src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg"
    />
    <p>is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a 
       type specimen book. It has survived not only five centuries, but also the 
       leap into electronic typesetting, remaining essentially unchanged. </p>
  `,
  styles: `
  img {
    width:100%;
    height:auto;
  }
  `
})
export class CommentsComponent {

}
