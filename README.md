# LocusCoreV3

## How to start locally

1. Frontend
  1. edit .env to make sure the REACT_APP_BASE_ENDPOINT value matches your local ip
  2. ONLY ONCE: create a symlink to .env from the frontend directory
    1. `cd client && ln -s ../.env .env.local`
2. API
  1. `bundle install`
  1. `foreman start -f Procfile.dev`
3. Navigate to REACT_APP_BASE_ENDPOINT:FRONTEND_PORT to see if the app works
