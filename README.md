# dummy_waste

Це фейковий проект waste, який, втім, повністю описує логіку справжнього проекту, але замість 300 строк коду, містить лише вісім. 

Клонуйте проект 
```
git clone https://github.com/Mraleksa/dummy_waste
```
Перейдіть в папку, куди він встановлений, виконайте команду
```
node app.js
```
Ви побачите в консолі цифру **3**

## Що робиться

Все що робить цей: зчитує файл у форматі tsv, який містить одну лише цифру: **1** і додає до нього цифру 2 і виводить в консоль

Ось цей файл app.js

```
const fs = require('fs');
const someData = 2;

async function startMath (){
    const dataFromFile = +fs.readFileSync("inputData.tsv", "utf8")
    console.log(dataFromFile+someData )
}
startMath ()
```
