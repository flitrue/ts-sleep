# ts-sleep

Async sleep function with typescript support.

## Installation

```
npm install ts-promise -S
```

## Usage

```js
import sleep from 'ts-sleep'

function myFunction() {
  sleep(500).then(res => {
    console.info('It is 500 ms later now')
  })
}

myFunction()
```

Early suspend promise
```js
import sleep from 'ts-sleep'

function myFunction() {
  let p = sleep(500).then(res => {
    console.info('It is 200 ms later now')
  })

  setTimeout(() => {
    p.cancel()
  }, 200)
}

myFunction()
```

## Debug

```
npm run build // Run compile

npm run test // Run tests
```