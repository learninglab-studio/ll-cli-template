# mk-notes-on-client-side-components

In NextJS 13 (and later presumably, though that's where we are right now), you need to explicitly tell it that you want a specific component to be a client-side component (rather than a component that's used to render stuff on the server that then gets sent to the client). 

When you are building something with zero interaction (i.e. mainly using React as a sort of templating language), this is no big deal. 

But one of the main things you'll probably want to do with React is create interactive UI elements. So it's essentialy to figure this out if you are going with the NextJS stack.

[Next's documentation of client-side rendering](https://nextjs.org/docs/app/building-your-application/rendering/client-components) is the place to go at this point, but if you are in a hurry, here's your code.

## create a client-side component

If you are part of codeLab this year, you'll put your components in the `/src/components` folder (you need to create it yourself, along with `/src/utils` or `/src/lib` for other non-component code).

Within that folder, create `Counter.tsx` or `Counter.js`. 

```
'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

## import it and use it on a page

Now you can import that component on your page. 

```
import Counter from "@/components/Counter";

export default function Page() {
    return (
        <div>
            <h1>page 2</h1>
                <Counter />
        </div>
    )
}
```

Next will know to render all the stuff that CAN get rendered server-side on the server, but it will send the client-side code just as it would send bundled js in the old days.