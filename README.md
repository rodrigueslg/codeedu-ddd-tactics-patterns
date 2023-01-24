# codeedu-ddd-tactics-patterns

## Métodos de OrderRepository
Nesse desafio você deverá fazer com que a classe OrderRepository implemente totalmente os métodos definidos pelo OrderRepositoryInterface. Toda essa implementação deverá ser reproduzida através de testes.

Após realizar tal implementação submeta seu projeto, nesse ponto todos os testes devem estar passando.

Boa sorte.

* A linguagem de programação para este desafio é TypeScript

---

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