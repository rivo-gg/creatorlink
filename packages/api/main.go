package main

import (
	"log"
)

func main() {
	server := NewAPIServer(":6575")
	server.Run()
	if server != nil {
		log.Fatal(server)
	}
}
