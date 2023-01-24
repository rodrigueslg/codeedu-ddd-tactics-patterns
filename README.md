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

**OBS: Os testes estão falhando. Há um erro de configuração e sintaxe do Sequelize que não fui capaz de resolver, pois não sou fluente em typescript.**

    > npm test '/home/lpereira/Documents/luis/repos/codeedu-ddd-tactics-patterns/src/infrastructure/order/repository/sequilize/order.repository.spec.ts'

    > test
    > npm run tsc -- --noEmit && jest /home/lpereira/Documents/luis/repos/codeedu-ddd-tactics-patterns/src/infrastructure/order/repository/sequilize/order.repository.spec.ts


    > tsc
    > tsc --noEmit

    FAIL  src/infrastructure/order/repository/sequilize/order.repository.spec.ts
    ● Test suite failed to run


      × Expression expected
        ╭─[/home/lpereira/Documents/luis/repos/codeedu-ddd-tactics-patterns/src/infrastructure/customer/repository/sequelize/customer.model.ts:5:1]
      5 │     Column
      6 │   } from "sequelize-typescript";
      7 │ 
      8 │   @Table({
        ·   ─
      9 │     tableName: "customers",
     10 │     timestamps: false,
     11 │   })
        ╰────


    Caused by:
        Syntax Error

      at Compiler.transformSync (node_modules/@swc/core/index.js:241:29)
      at transformSync (node_modules/@swc/core/index.js:348:21)
      at Object.process (node_modules/@swc/jest/index.js:73:45)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:619:31)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:765:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:822:19)

    Test Suites: 1 failed, 1 total
    Tests:       0 total
    Snapshots:   0 total
    Time:        0.538 s
    Ran all test suites matching /\/home\/lpereira\/Documents\/luis\/repos\/codeedu-ddd-tactics-patterns\/src\/infrastructure\/order\/repository\/sequilize\/order.repository.spec.ts/i.

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
