# codeedu-ddd-tactics-patterns

## Métodos de OrderRepository
Nesse desafio você deverá fazer com que a classe OrderRepository implemente totalmente os métodos definidos pelo OrderRepositoryInterface. Toda essa implementação deverá ser reproduzida através de testes.

Após realizar tal implementação submeta seu projeto, nesse ponto todos os testes devem estar passando.

Boa sorte.

* A linguagem de programação para este desafio é TypeScript

---

Ver arquivos:
  * OrderRepository: https://github.com/rodrigueslg/codeedu-ddd-tactics-patterns/blob/f610151fdceee687a4b957aecb524e7801fced29/src/infrastructure/order/repository/sequilize/order.repository.ts
  * OrderRepositoryTests: https://github.com/rodrigueslg/codeedu-ddd-tactics-patterns/blob/f610151fdceee687a4b957aecb524e7801fced29/src/infrastructure/order/repository/sequilize/order.repository.spec.ts

---

## Eventos de Customer

Agora que você já possui a base sobre Domain Events, implemente dois Eventos de Domínio para o agregado de Customer.

O primeiro evento deverá acontecer quando um novo Customer é criado. Nesse ponto, crie 2 handlers exibindo um "console.log". 

Handler1: EnviaConsoleLog1Handler. Mensagem: "Esse é o primeiro console.log do evento: CustomerCreated".
Handler2: EnviaConsoleLog2Handler. Mensagem: "Esse é o segundo console.log do evento: CustomerCreated". 
O segundo evento deverá ser disparado quando o endereço do Customer é trocado (método changeAddress()). Nesse caso, o ID, Nome, bem como os dados do endereço devem ser passados ao evento.

Handler: EnviaConsoleLogHandler. Mensagem: "Endereço do cliente: {id}, {nome} alterado para: {endereco}".
Todos os testes devem ser realizados para garantir o bom funcionamento dos eventos.

Boa sorte.

* A linguagem de programação para este desafio é TypeScript

---

Ver Arquivos:

* Customer: https://github.com/rodrigueslg/codeedu-ddd-tactics-patterns/blob/2ec99ea7cd033e72f3a2fe16dc2a847920919a79/src/domain/customer/entity/customer.ts
* CustomerCreatedEvent: https://github.com/rodrigueslg/codeedu-ddd-tactics-patterns/blob/fae39f5664d8a2f898da09b342bb599abc3860f4/src/domain/customer/event/customer-created.event.ts
* CustomerAddressChangedEvent: https://github.com/rodrigueslg/codeedu-ddd-tactics-patterns/blob/2ec99ea7cd033e72f3a2fe16dc2a847920919a79/src/domain/customer/event/customer-address-changed.event.ts
* SendConsoleLog1WhenCustomerIsCreatedHandler:https://github.com/rodrigueslg/codeedu-ddd-tactics-patterns/blob/fae39f5664d8a2f898da09b342bb599abc3860f4/src/domain/customer/event/handler/send-console-log1-when-customer-is-created.handler.ts
* SendConsoleLog2WhenCustomerIsCreatedHandler:https://github.com/rodrigueslg/codeedu-ddd-tactics-patterns/blob/fae39f5664d8a2f898da09b342bb599abc3860f4/src/domain/customer/event/handler/send-console-log2-when-customer-is-created.handler.ts
* SendConsoleLogWhenCustomerAddressIsChangedHandler: https://github.com/rodrigueslg/codeedu-ddd-tactics-patterns/blob/2ec99ea7cd033e72f3a2fe16dc2a847920919a79/src/domain/customer/event/handler/send-console-log-when-customer-address-is-changed.handler.ts
