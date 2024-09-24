import {Component, computed, DestroyRef, inject, input, OnInit, signal} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class UserTasksComponent implements OnInit {
  // ----- 1. yol: input signal, withComponentInputBinding() -----
  // otomatik route'dan alıyor. ( path: 'users/:userId').
  // Not: input variable path'de tanımlanan (dinamik değişken) :userId ile aynı isimde olmalı ve
  // app.config.ts dosyasında bulunan provideRouter(routes) metoduna 2. parametre olarak, withComponentInputBinding()'i eklemelisin
  userId = input.required<string>();
  private usersService = inject(UsersService);
  //user = computed(() => this.usersService.users.find( u => u.id === this.userId()))


  // ----- 2.yol activatedRoute -----
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  user: { id: string; name: string; avatar: string; } | undefined = undefined;

  ngOnInit() {
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
         this.user = this.usersService.users.find(u => u.id === paramMap.get('userId'))  // get('..') => path'deki dinamik değişken adıyla aynı olmalı
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
