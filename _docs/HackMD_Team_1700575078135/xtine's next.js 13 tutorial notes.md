---
tags: codelab
---

# xtine's next.js 13 tutorial notes

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZVnjOPwW4ZA?si=XbJxzH70urP70EuC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## notes
* SSR
    * render components on server and send to client
* static-side generation
    * pre-render certain pages and components that have static data when you build the application (and just serve them when needed); helps make apps fast
* extensions to add in VS code:
    * ES7: code snippets that let you generate React components
    * javascript and typescript
    * tailwind CSS intellisense
* project structure
    * app folder: this is the app router; the container for our routing system; routing based on the file system - files and folders represent routes
    * page.tsx: our homepage
    * public: public assets like images
* routing and navigation
    * app/users
        * page.js or .tsx
        * export react component when user is at this location (i.e., /users)
        * rafce (will generate a basic react component)
    * app/users/new
        * page.js or .tsx
        * NewUserPage react component
* client vs server components
    * client: web browser
        * all components sent as a bundle to the client
        * resource intensive
        * less secure (API keys would be visible to the client)
    * server: node.js runtime
        * more efficient 
        * more secure
        * not interactive - can't listen to click, submit, cannot access browser APIs,cannot maintain state or use effects
* all components in the app folder are server by default
* app/components
    * 'use client' only when absolutely necessary
    * one option is to make a component for, say, a button and then add 'use client' to that component
    * if you remove the 'use client' from the homepage, it'll still render that button component as a client component (but not the rest of the components on that page) 
* data fetching
    * on client: useState + useEffect
    * in server components: fetch request (goes to the backend)
        * await fetch - MUST be an async function
* caching: storing data somewhere that it is faster to access
* static and dynamic rendering (server-side rendering types)
    * static: render at build time (if data is static); payload from cache at file completion
    * dynamic: render at request time
* css modules
    * styles for particular component
    * [nameofcomponent].module.css
    * cannot use hyphens - must use camelCase
    * import the style sheet on your page.js/-.tsx file with an import statement at the top of the file
* tailwind css
    * utility classes that can be used for styling


