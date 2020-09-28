# 05 All

# Summary

In this sample we are going to continue exploring redux saga helper effects.

Now it's time to evaluate the effect combinator _all_, this effect combinator is quite similar to 
_promise.all_ let's imagine the following scenarios:

  Before letting the user filter a grid by some given criterias you need to ensure that several endpoints
  has returned you filtering enumerations (e.g. an end point returns you a list of countries, another
  end point returns you the list of available organization units...). Is there a way to wait for 
  several async requests to be completed? 

  How can we achieve a behavior like this? _all_ is your friend.

# Steps

- We will take as starting point *01_hello_saga* let's copy the content of that project 
and execute from bash / cmd the following command:

```bash
npm install
```

- We are going to create a new service called *higher_number_generator.service.ts* this asynchronous service
will generate number above 100.

_./src/api/higher-number-generator.api.ts_

```typescript
let initialNumber = 100;

export const generateHigherNewNumber = () : Promise<number> => {
  const promise = new Promise<number>((resolve) => {
    setTimeout(() => {
      initialNumber += 1;
      resolve(initialNumber)
    }, 1500)
  });

  return promise;
}
```

- Let's add this new service to the barrel.

_./src/api/index.ts_

```diff
export * from './number-generator.api';
+ export * from './higher-number-generator.api';
```
- Now in the sagas let's add an _all_ operator to call both services, and add a new task call 
to append the higher number generated.

_./src/sagas/number-collection.sagas.ts_

```diff
- import { call, put, takeEvery, race, take } from 'redux-saga/effects';
+ import { call, put, takeEvery, all } from 'redux-saga/effects';
- import { generateNewNumber } from '../services';
+ import { generateNewNumber, generateHigherNewNumber } from '../services';

// (...)


function* requestNewGeneratedNumber() {
- const { generatedNumber, cancel } = yield race({
-   generatedNumber: call(generateNewNumber),
-   cancel: take(actionIds.CANCEL_ONGOING_NUMBER_REQUEST),
- });
+ const { generatedNumber, generatedHigherNumber } = yield all({
+   generatedNumber: call(generateNewNumber),
+   generatedHigherNumber: call(generateHigherNewNumber),
+ });
- if (!cancel) {
    yield put(numberRequestCompletedAction(generatedNumber));
+   yield put(numberRequestCompletedAction(generatedHigherNumber));
- }
  
}
```

> Excercise A.: let's create a tasks that update both numbers in one go.

> Exercise B: What would happen if instead of _all_ we use race?
