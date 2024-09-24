import {ApplicationConfig} from "@angular/core";
import {provideRouter, withComponentInputBinding, withRouterConfig} from "@angular/router";
import {routes} from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),    //  withComponentInputBinding()'i url'den gelen bilgiyi input'a atamak için ekledik
      withRouterConfig({ paramsInheritanceStrategy: 'always',})   // Parent route'dan Child Route'a parametre geçirme
    )
  ],
}
