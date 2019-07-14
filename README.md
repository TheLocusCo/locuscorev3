# LocusCoreV3

This is a "portfolio" app that has some extra functionality built in.


Written to learn react and elixir and then later ported back to rails.


More information can be found at https://thelocus.co

## First Run

You need a .env file in the root of the directory, use .env.fake as an example
You also need a database.yml in the config directory.

## How to start locally

1. Frontend
  1. edit .env to make sure the REACT_APP_BASE_ENDPOINT value matches your local ip
  2. ONLY ONCE: create a symlink to .env from the frontend directory
    1. `cd client && ln -s ../.env .env.local`
2. API
  1. `bundle install`
  2. Edit `.env` and make sure it has the latest IP
  3. `source .env && foreman start -f Procfile.dev`
3. Navigate to REACT_APP_BASE_ENDPOINT:FRONTEND_PORT to see if the app works

## Notes & Tricks
* Removing the hidden flag from all dotfiles in windows:
  `attrib -H R:\linux\shared\*.* /S`
* bundle config for private repositories: https://bundler.io/v1.16/bundle_config.html
  * https://gist.github.com/sebboh/f1dfe4f096746c45f3e9ea06a09743a0
