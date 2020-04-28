# Creating the countdown block feature

## Introduction
Now we covered the component's basics, it's time to implement the countdown effectively. For that, we need to use a React hook called `useState`. 

## The `useState` *hook*

It is called within the functional component to update and consume the component *state*. The *state* represents the component's current state.

>The `useState` returns a pair: the current state value and a function to update it.

Seeing the example provided the previous step we can understand these concepts: 

```tsx
const [count, setCount] = useState(0)
```

In the above code piece, you might observe three things:
* In the `count` variables, it's possible to get the current state;
* `setCount` is a function used for updating it;
* `0` is its initial state;

```tsx
const [timeRemaining, setTime] = useState<TimeSplit>({
  hours: '00', 
  minutes: '00', 
  seconds: '00'
})
```

## Activity
1. We need to import a few functions and types to continue: 
    First, let's import the `useState` hook:
    ```tsx
    import React, { useState } from 'react'
    ```    
    Besides that, it's necessary to import the `TimeSplit` type:
    ```tsx
    import { TimeSplit } from './typings/global'
    ```
    Lastly, you need an `util` function that will update the countdown:
    ```tsx
    import { tick } from './utils/time'
    ```

2. Add the state update *hook* (`useState`):

    ```diff
    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate }) => {
    +   const [timeRemaining, setTime] = useState<TimeSplit>({
    +     hours: '00',
    +     minutes: '00',
    +     seconds: '00'
    +   })

        return (
          <div>
            { targetDate }
          </div>
        ) 
    }
    ```

3. Add a default constant `targetDate` for the edge case where the prop is not defined:
    
    ```typescript
    const DEFAULT_TARGET_DATE = (new Date('2020-06-25')).toISOString()
    ```

4. Use the `tick` function and the `DEFAULT_TARGET_DATE` constant to make the countdown work:
    ```diff
    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
      const [timeRemaining, setTime] = useState<TimeSplit>({
        hours: '00',
        minutes: '00',
        seconds: '00'
    })

    + tick(targetDate, setTime)

      return (
        <div>
          { targetDate }
        </div>
      ) 
    }
    ```

5. Change the `h1` so that it shows the countdown that we've created. For that, we need to use the `timeRemaining` current state:
    ```diff
    const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
      const [timeRemaining, setTime] = useState<TimeSplit>({
        hours: '00',
        minutes: '00',
        seconds: '00'
      })

      tick(targetDate, setTime)

      return (
        <div>   
    -     <h1>{ targetDate }</h1>
    +     <h1>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</h1>
        </div>
      ) 
    }
    ```
    > The countdown *string* formatting is in a `HH:MM:SS` format, made through an `hours`, `minutes` and `seconds` splitting. 

Therefore, with these changes, we'll see a real time update of the countdown! The result in the homepage is this: 

![image](https://user-images.githubusercontent.com/19495917/75474406-b3c06e80-5975-11ea-82ec-89ab27504873.png)

<img src="https://user-images.githubusercontent.com/19495917/75474511-e0748600-5975-11ea-825d-7e9a20f95362.gif" width="500" height="320"/>
