A web app that compares two github user profile and determine who the winner is based on stats.

The output is based on the GitHub Battle Project originated from the [ReactJS Fundmental course](http://courses.reactjsprogram.com/courses/reactjsfundamentals) by [@tylermcginnis](https://github.com/tylermcginnis) - I did not "invent" this web app but this does demonstrate the tech that I have worked with (and learnt from).

Notes:

- this app is not bullet proof - mainly used for educational / (my own) boiler-plate purposes. There are limitations.
- though I did write this app up from scratch, I did so by following through the ReactJS Fundamentals course. All credits go to[@tylermcginnis](https://github.com/tylermcginnis) who created the course. This work is not entirely my own!
- my development environment: Node v5.10.1, Mac OSX 10.11.
- the app is written in JavaScript ES5. There is an opportunity to turn it into ES6/ES7.

# Instruction

To run this app on your laptop (I used a Mac) do the followings:

## Clone Repository

git clone this repository to an appropriate location on your machine:

```
git clone https://github.com/Atlas7/github-battle.git
```


## Install NPM Dependencies

Navigate to the root level of the repository.

Install NPM dependencies:

```
npm install
```


## Manually Setup GitHub API Access ID and Secret

At the root level of the repository, manually create a folder called `secrets` (this folder is included in `.gitignore` to avoid accidentally exposing your GitHub API access credentials):

```
mkdir secrets
```

Manually create a file called `githubAPIConfig.js` within this `secrets` directory:

```
touch secrets/githubAPIConfig.js
```

Populate the content of this `githubAPIConfig.js` like this:

```js
module.exports = {
  id: "YOUR-GITHUB-API-ID",
  secret: "YOUT-GITHUB-API-SECRET"
}
```

Replace the string values for `id` and `secret` accordingly. You need to register an app that uses the GitHub API. Use the GitHub [Register a new OAuth Application](https://github.com/settings/applications/new) to register your application and obtain a new pair of GitHub API ID and Secret. I completed the fields like this:

```
Application Name: github-battle

Homepage URL: http://localhost:8080

Application Description: A fun web app that compares two GitHub User Profile stats and determine who the winner is.

Authorization callback URL: http://localhost:8080/callback
```

Once you have registered your app with GitHub you can retrieve your GitHub API ID and Secrets easily by going to your GitHub Profile -> Settings -> OAuth Applications -> Developer Applications -> github-battle (or whatever the app name you have registered with GitHub API).

## Run the App in development mode

```
npm run start
```

Navigate via a browser (I use Chrome Incognito) at [http://localhost:8080](http://localhost:8080) - yay the app should be live!

(hosted by webpack-dev-server - essentially referencing `app/index.html` and `app/index.js` (non-minimized development version).


## Run the App in production mode

```
npm run production
```

This will update `dist/index.html` and `dist/index_bundle.js` (minimized production version) - essentially your core web app production files.

Open the actual `dist/index.html` file (via Mac Finder) to start playing with the single page web app!

# References

Check out this more (original and) comprehensive [React-Fundamentals GitHub repository](https://github.com/ReactjsProgram/React-Fundamentals).

