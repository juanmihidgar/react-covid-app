# react-covid-app

Web app made with react and getting data from https://github.com/M-Media-Group/Covid-19-API

# npm start

if you are running the project on linux you must change **start script** in **`package.json`**
_package.json_

```diff
scripts: {
-  "start": "run-p -l type-check:watch start:dev",
+  "start": "npm-run-all --parallel type-check:watch & npm run start:dev",
  ...
}
```
