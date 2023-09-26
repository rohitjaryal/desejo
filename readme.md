# Desejo

A tiny library to make API calls.

### Simple Usage

```js
import desejo from 'desejo';

const api = desejo.create({
  baseUrl: 'https://api.filemon.io/',
  ...
});

api.get('/hello');   // Gets https://api.filemon.io/hello
desejo.get('/hello');   // Gets http://localhost:3000/hello (or wherever you are)
```

You can also define values straight away:

```js
import api from "desejo";

api.baseUrl = "https://dummy.co/";

const response = await api.get("/dummy?name=xyz");
console.log(response);
```

