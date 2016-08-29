# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/user`
- `PATCH /api/user`
- `POST /api/user/contributions`
- `GET /api/user/contributions`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Loans

- `GET /api/loans`
  - accepts `before` query param to get set of loans before date
- `GET /api/loans/:id`