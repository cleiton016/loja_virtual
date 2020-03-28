import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loja Virtual';
  produtos = [{nome: 'Redmi note 7', valor: 1049, qt: 1, carrinho: false},
              {nome: 'Samsung A30', valor: 1049, qt: 1, carrinho: false},
               {nome: 'Iphone XR', valor: 3149, qt: 1, carrinho: false }];

  total = 0;
  cont = 0;

  adicionar(key: any) {
    if ( this.produtos[key].carrinho === true) {
      this.produtos[key].qt += 1;
      this.total += this.produtos[key].valor;
    } else {
      this.produtos[key].carrinho = true;
      this.total += this.produtos[key].valor;
      this.cont ++;
    }
}
  remover(key) {
    if (this.produtos[key].qt !== 1) {
      this.produtos[key].qt -= 1;
      this.total -= this.produtos[key].valor;

    }else{
      this.produtos[key].carrinho = false;
      this.total -= this.produtos[key].valor;
      this.cont--;
    }
  }
}
