{
  "mongodb": {
      "host": "{{key "config/nodejsapp1/mongodb/host"}}",
      "port": {{keyOrDefault "config/nodejsapp1/mongodb/port" "27017"}}
    },
  "httpserver": {
      "port": {{keyOrDefault "config/nodejsapp1/http/port" "3000"}}
    },
  "user": {
    "name": "{{key "config/nodejsapp1/user/name"}}"
  }
}