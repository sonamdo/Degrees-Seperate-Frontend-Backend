# Degrees-Seperate-Frontend-Backend

Degrees of separation app split into Frontend and Backend docker images. Docker compose used to run the app with the following commands:
`docker-compose pull` + `docker-compose up`

Calculate how many steps are required to connect users. Breadth-first search method is used to sift through connections. PostgreSQL used for production environment, Sqlite for development

## Endpoints
- connections/create: Takes csv file with two columns, user1 and user2. Parses to database using connection model.
- connections/show: Takes query string with two params, user1 and user2. Returns degree of connection between the two. Return false if no possible connection.
- users/index: Returns array of all users
- users/create: Takes csv file with two columns, userid and name. Parses to database using user model
