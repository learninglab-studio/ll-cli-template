# next-print-all-the-things

Create repo on github and invite your collaborators.

Then create next app:
```
npx create-next-app@latest next-print-all-the-things
```

then open it in vscode
```
cd next-print-all-the-things
code .
```

then connect to your github repo
```
git remote add origin https://github.com/learninglab-studio/next-print-all-the-things.git
git branch -M main
git push -u origin main
```

or just clone this one:

```
git clone https://github.com/learninglab-studio/next-print-all-the-things.git
cd next-print-all-the-things
npm i
npm run dev
code .
```

You'll need to create a route-level file called `.env.cli` where you'll put your `AIRTABLE_API_KEY` and maybe even `AIRTABLE_BASE_ID` if you are only working with one base.

To be extra safe, you could go into your `.gitignore` file and add `.env*` to make sure that NONE of your `.env` files ends up on Github. We work with a bunch of different frameworks with different naming conventions for `.env` files, so the standard NextJS `.gitignore` line (`.env*.local`) isn't quite restrictive enough.

If you are very nervous, just don't put stuff on Github :)


## server side fetching

If you are fetching all of your data server-side before the page renders, you can put all of the logic in the `page.tsx` file (like a file called `/src/app/tasks/[personSlug]/page.tsx` could let you go to `www.printthis.com/tasks/myname` and see all of your tasks there). 

Next will default to loading data server-side, building the page, and then sending it to the user (and will even manage some caching for you).

For instance:

```
const Airtable = require('airtable');
 
const getTasksForView = async ({baseId, table, view}) => {
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);
  const theRecords = [];
  await base(table).select(
    {
      maxRecords: 100,
      view: view,
    }
  ).eachPage(function page(records, next){
    theRecords.push(...records);
    next()
  })
  .catch(err=>{console.error(err); return})
  return theRecords;
}


export default async function Page({ params }: { params: { view: string } }) {
  const data = await getTasksForView({
    baseId: process.env.AIRTABLE_DO_YOUR_WORK_BASE,
    table: "Tasks",
    view: params.view
  })

    return (
      <div>
        theView: {params.view}
        {
          data.map((record, i)=>{ return (
            <div key={i}>
              <h3>{record.fields.Title}</h3>
              <p>{record.fields.Description || "No Description"}</p>
            </div>
          )})
        }
        <h2>all the data</h2>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>
    )
}
```
  
If, however, you need to access 3rd party APIs that we pay for (like Airtable or OpenAI) on the client side, you'll need to do something more complicated.

## client-side fetching

If you want to fetch data for the client while the client is using the page (for instance, allowing them to fill out a form or hit a button to retrieve some data from your server), you'll need to create a component with `"use client"` at the top so that Next knows this is a client side component. You'll also want to AVOID USING API KEYS OR ANY SENSITIVE HARD-CODED DATA IN THESE COMPONENTS. So what you'll do is create an API route in your Next app that handles client requests and accesses any 3rd party APIs or sensitive data on the server side, only sending back what you want a particular client to be able to see.

Here's a very simple concept for allowing a client to request all the records in a particular Airtable base and table with a specified value for a specified field:

```
"use client"

import { useState } from 'react';

const Card = ({ record }) => {
  return (
    <div className="border p-4 my-2">
      {/* Display your record fields here. For example: */}
      <h2>{record.id}</h2>
      <pre>{JSON.stringify(record, null, 4)}</pre>
    </div>
  );
};

const QueryAirtable = () => {
  const [base, setBase] = useState('');
  const [table, setTable] = useState('');
  const [field, setField] = useState('');
  const [value, setValue] = useState('');
  const [records, setRecords] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/v1/airtable/${base}/${table}/${field}/${value}`);
    const data = await response.json();

    if (data.result !== 'no data') {
      setRecords(data.result);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Base" value={base} onChange={(e) => setBase(e.target.value)} />
        <input placeholder="Table" value={table} onChange={(e) => setTable(e.target.value)} />
        <input placeholder="Field" value={field} onChange={(e) => setField(e.target.value)} />
        <input placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Query</button>
      </form>

      <div>
        {records.map(record => (
          <Card key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default QueryAirtable;

```

Now we just need to build the `route.tsx` file that will allow us to "listen" for these requests...

## api routes

The basic thing you want to do in your api routes for this particular project is as follows:
- get info from user about what data they need from airtable
- go get that data (on server rather than on client so that API keys aren't exposed)
- send processed data back to user

One easy way to do this in nextjs is to define a route that contains certain key elements in the path itself (rather than in params of a querystring--though you can do that too and we'll do that tutorial next). So create a bunch of nested folders with a `route.tsx` within in the innermost folder, like `/src/api/v1/airtable/[baseid]/[table]/[field]/[value]` or `/src/api/v1/airtable/[baseid]/[table]/[view]` etc.

For the page we made above, we'll want to go with `/src/api/v1/airtable/[base]/[table]/[field]/[value]` and write some code like this: 

```
import { NextResponse } from 'next/server'
import Airtable from 'airtable'


const getAirtableData = async ({baseId, table, field, value}) => {
    const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);
    const theRecords = [];
    console.log(`looking for ${value} in ${field} in table ${table}`)
    await base(table).select(
      {
        maxRecords: 100,
        view: "MAIN",
        filterByFormula: `${field}="${value}"`
      }
    ).eachPage(function page(records, next){
      theRecords.push(...records);
      next()
    })
    .catch(err=>{console.error(err); return})
    return theRecords;
}

export async function GET( request, { params } ) {
    try {
        const records = await getAirtableData({
            baseId: params.base,
            table: params.table,
            field: params.field,
            value: params.value
        });
        return NextResponse.json({ params: params, result: records})
    } catch (error) {
        return NextResponse.json({ params: params, result: "no data"})
    }
}
```

## next steps

now it's just styling.
