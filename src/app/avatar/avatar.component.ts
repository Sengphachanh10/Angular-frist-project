import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  data: any[] = [
    {id: 1, name: 'Avatar 1', imgUrl:'https://pbs.twimg.com/media/GS_BuO4WQAAxvvw?format=jpg&name=900x900'},
    {id: 2, name: 'Avatar 2', imgUrl:'/assets/avatars/avatar2.jpeg'},
    {id: 3, name: 'Avatar 3', imgUrl:'/assets/avatars/avatar3.jpeg'},
    {id: 4, name: 'Avatar 4', imgUrl:'/assets/avatars/avatar4.jpeg'},
    {id: 5, name: 'Avatar 5', imgUrl:'/assets/avatars/avatar5.jpeg'},
    {id: 1, name: 'Avatar 1', imgUrl:'/assets/avatars/avatar1.jpeg'},
    {id: 2, name: 'Avatar 2', imgUrl:'/assets/avatars/avatar2.jpeg'},
    {id: 3, name: 'Avatar 3', imgUrl:'/assets/avatars/avatar3.jpeg'},
    {id: 4, name: 'Avatar 4', imgUrl:'/assets/avatars/avatar4.jpeg'},
    {id: 5, name: 'Avatar 5', imgUrl:'/assets/avatars/avatar5.jpeg'},
    {id: 1, name: 'Avatar 1', imgUrl:'/assets/avatars/avatar1.jpeg'},
    {id: 2, name: 'Avatar 2', imgUrl:'/assets/avatars/avatar2.jpeg'},
    {id: 3, name: 'Avatar 3', imgUrl:'/assets/avatars/avatar3.jpeg'},
    {id: 4, name: 'Avatar 4', imgUrl:'/assets/avatars/avatar4.jpeg'},
    {id: 5, name: 'Avatar 5', imgUrl:'/assets/avatars/avatar5.jpeg'},
    {id: 1, name: 'Avatar 1', imgUrl:'/assets/avatars/avatar1.jpeg'},
    {id: 2, name: 'Avatar 2', imgUrl:'/assets/avatars/avatar2.jpeg'},
    {id: 3, name: 'Avatar 3', imgUrl:'/assets/avatars/avatar3.jpeg'},
    {id: 4, name: 'Avatar 4', imgUrl:'/assets/avatars/avatar4.jpeg'},
    {id: 5, name: 'Avatar 5', imgUrl:'/assets/avatars/avatar5.jpeg'},
    {id: 1, name: 'Avatar 1', imgUrl:'/assets/avatars/avatar1.jpeg'},
    {id: 2, name: 'Avatar 2', imgUrl:'/assets/avatars/avatar2.jpeg'},
    {id: 3, name: 'Avatar 3', imgUrl:'/assets/avatars/avatar3.jpeg'},
    {id: 4, name: 'Avatar 4', imgUrl:'/assets/avatars/avatar4.jpeg'},
    {id: 5, name: 'Avatar 5', imgUrl:'/assets/avatars/avatar5.jpeg'},
    {id: 1, name: 'Avatar 1', imgUrl:'/assets/avatars/avatar1.jpeg'},
    {id: 2, name: 'Avatar 2', imgUrl:'/assets/avatars/avatar2.jpeg'},
    {id: 3, name: 'Avatar 3', imgUrl:'/assets/avatars/avatar3.jpeg'},
    {id: 4, name: 'Avatar 4', imgUrl:'/assets/avatars/avatar4.jpeg'},
    {id: 5, name: 'Avatar 5', imgUrl:'/assets/avatars/avatar5.jpeg'},
  ];
}
