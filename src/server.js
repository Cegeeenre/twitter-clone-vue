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
            server.create("user", { 
                id : 1,
                name : "john",
                fname : "John",
                email : "john@gmail.com",
                password : "hello",
                description : "I'm John, I'm 20 years old and I'm a student at the University of Paris",
            })
            server.create("tweet", {
                id : 1, 
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
                id : 2,
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
            // USERS
            this.get("/users", (schema) => {
                return schema.users.all()
            })
            // connect a user, virify if the user exist and if the password is correct
            this.post("/connection", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                let user = schema.users.findBy({ email: attrs.email })
                if (user) {
                    if (user.password === attrs.password) {
                        return { data: user }
                    } else {
                        return { error: "Wrong password" }
                    }
                } else {
                    return { error: "User not found" }
                }
            })

            // TWEETS 
            this.get("/tweets", (schema) => {
                return schema.tweets.all()
            })
            this.post("/tweet", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                attrs.id = Math.floor(Math.random() * 10000)
                return schema.tweets.create(attrs)
            })
        },
    })

    return server
}