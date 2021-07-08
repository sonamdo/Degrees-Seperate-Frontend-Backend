FROM ruby:2.7.3
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /app/backend
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install

# Add a script to be executed every time the container starts.
EXPOSE 3000
COPY . /app

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]