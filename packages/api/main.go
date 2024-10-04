package main

import (
	"log"
)

func main() {
	dataPath := "../../data/creators"  // Adjust this path as needed
	server := NewAPIServer(":8080", dataPath)
	log.Fatal(server.Run())
}
