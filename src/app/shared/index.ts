import { NgModule } from '@angular/core';
import { HeaderComponent } from './components';


@NgModule({})
export class SharedModule{
    static forRoot(){
        return {
            NgModule: SharedModule,
            providers: [
                HeaderComponent
            ]
        }
    }
}

export * from './components';