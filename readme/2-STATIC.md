

# 2 - SERVING STATIC

This is how I set up this repository for serving static files via an express server set up earlier.

## 1. Run `git clone papercup`

Replace `papercup` above with path to the github repository.

## 2. Create a new folder in src called `public`

This is where we will create all the files necessary for deployment.

## 3. Create a file in the newly created folder **public** `index.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
        <title>Static App</title>
        <meta name="description" content="Insert a description here">
        <meta name="abstract"    content="">
        <link rel="icon" href="/public/img/favicon.png">
    </head>

    <body>
        <div id="root">
        <h1> Serving Static </h1>
        <p class="welcomeText">
            Welcome to your website. You can link to other pages that are in the public folder.
            <br />
            There is no JavaScript being loaded in this file. 
        </p>
        </div>
    </body>

</html>
```

## 4. Serve the **public** folder by editing *server/index.js*.

```javascript
...
app.use('/', express.static(path.resolve(__dirname, 'src', 'public')));
const server = ...
```

You can edit `'/'` to which ever route you would like to serve the public files from. For this app as there is no clashes with anything else, we will be going ahead with the root route to load the index.html.

## 5. Create new folders `img` and `css` in the public folder. 

Add a `background.jpeg` file into the **img** folder. 

## 6. Create a `site.css` file in the css folder.

```css
body {
    margin: 0;
    padding: 0;
}

#root {
    width: 100vw;
    height: 100vh;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    background-image: url('/img/background.jpeg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    align-items: center;
    text-align:center;
    font-family: "Roboto";
    justify-items: center;
}

#root > * {
    color: white;
    width: 80%;
    padding: 2rem;
}

h1 {
    background-color: rgba(191, 191, 63, 0.6);
    font-size: 6rem;
}

.welcomeText {
    background-color: rgba(63, 191, 127, 0.6);
    font-size: 1.5rem; 
}
```

Avoid repetition where possible. This is simple CSS using a simple grid layout system. Overkill for this simple page.

## 7. Load the css file and the Roboto font from Google's CDN by adding the following into *index.html*.

```html
        ...
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <link rel="stylesheet" type="text/css" href="/css/site.css" />
    </head>
```
