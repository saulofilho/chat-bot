# :robot: Chat Bot Chatnilson :robot:

Say hello to Chatnilson. https://chatnilson.vercel.app/

## Technologies

This project was developed with the following technologies:

- [styled-components](https://styled-components.com/)
- [axios](https://github.com/axios/axios)
- [formik](https://github.com/formium/formik)
- [yup](https://github.com/jquense/yup)
- [react input mask](https://github.com/sanniassin/react-input-mask)
- [jest](https://github.com/facebook/jest)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## How to use it?

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] or higher + [Yarn][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/saulofilho/chat-bot

# Go into the repository
$ cd chat-bot

# Install dependencies
$ yarn

# Run the app
$ yarn start
```

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### API Rest

Endpoint: `https://6058bdc9c3f49200173aecbc.mockapi.io/:endpoint`

Get users: `GET /`
Get user by code: `GET /users/:id`
Post an user: `POST /users`
Put an user: `PUT /users/:id`
Delete an user: `DELETE /users/:id`

By default the objects will be sorted by `id` in order to have the most important objects first.

URL to query                   | Description
------------------------------ | ---------------------------
<code>GET</code> `/`           | Return `200`.
<code>GET</code> `/users/:id`| Get an user by code eg. `/users/1`
<code>GET</code> `/users`      | Return a list of `Users`.
<code>POST</code> `/users/:id`     | Post an user `Users`.
<code>PUT</code> `/users/:id`      | Put an user `Users`.
<code>DELETE</code> `/users/:id`   | Delete an user `Users`.

### Example
**Request**

    GET /users/1

**Return**
``` json
  {
    "id": "1",
    "createdAt": 1616704263,
    "fullName": "Saulo",
    "city": "Cuiabá",
    "birth": "01/01/1990",
    "email": "hello@saulofilho.com",
    "rating": "5"
  },
```

### Creator

**Saulo Filho**
- <https://github.com/saulofilho>
