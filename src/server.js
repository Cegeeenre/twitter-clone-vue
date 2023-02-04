// src/server.js
import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    let server = createServer({
        environment,
        models: {
            user: Model,
            tweet: Model,
        },
        seeds(server) {
            server.create("user", { name: "Bob" })
            server.create("user", { name: "Alice" })

            server.create("tweet", { 
                autor : "Bob",
                date : "2021-01-01",
                hour : "12",
                minute : "00",
                message : "Hello world",
                stats : {
                    views : 666,
                    replies: 666,
                    retweets: 666,
                    likes: 666,
                }
            })
            server.create("tweet", { 
                autor : "John",
                date : "2022-11-21",
                hour : "04",
                minute : "10",
                message : "Hi everyone, how r u ? ^^",
                stats : {
                    views : 444,
                    replies: 444,
                    retweets: 444,
                    likes: 444,
                }
            })
        },
        routes() {
            this.namespace = "api"
            this.get("/users", (schema) => {
                return schema.users.all()
            })
            this.get("/tweets", (schema) => {
                return schema.tweets.all()
            })
        },
    })

    return server
}