# adf-widget-datapointMatrix

## Getting started

**Installing all dependencies of project**

This project use yarn: https://yarnpkg.com/en/docs/install

```
yarn
```

or 

```
yarn install
```

**Bundle with webpack**

The project offers the following script that packages the project using [webpack](https://webpack.js.org/)


```
npm run bundle
```

## Install widget on web OpenGate UX

Installation and management widget on the web OpenGate UX is done through the following commands:

**Register**

```
npm run register
```

**Update**

```
npm run update
```

**Delete**

```
npm run delete
```

They will ask for the following information:

1. host: default localhost
2. port: default 3000
3. domain: domain of user that exists in the platform OpenGate
4. user name: user that exists in the platform OpenGate
5. password: password of user