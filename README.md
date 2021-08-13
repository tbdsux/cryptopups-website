<div align="center">
    <img src="./public/logo.png" />
    <h1>World of Cryptopups</h1>
    <a href="https://www.worldofcryptopups.cf/" target="_blank" rel="noreferrer">www.worldofcryptopups.cf</a>
    <p>Official website development source code and stuff.</p>
</div>

## Info

This is the source code of the website of **World of Cryptopups**.

## Why here?

Due to deploy issues and concerns, this is the only separated project from https://github.com/World-of-Cryptopups/.

Vercel doesn't support deploying from organizations on a free account so, that's what it is.

## Development

- Clone the project

  ```
  git clone https://github.com/TheBoringDude/new-cryptopups.git
  ```

- Required environment variables

  ```
  SECRET_TOKEN=
  REDIS_HOST=
  APP_URL= # use -> in dev :: 'http://localhost:3000'
  APP_DEV_URL= # use -> in dev :: 'http://localhost:3000'

  ```

- Install the dependencies

  ```
  yarn
  ```

- Run the dev server

  ```
  yarn dev
  ```
