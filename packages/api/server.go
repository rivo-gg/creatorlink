package main

import (
	"log"
	"net/http"
	"creatorlink/routes"
	"creatorlink/services"
)

type APIServer struct {
	port     string
	dataPath string
}

func NewAPIServer(port string, dataPath string) *APIServer {
	return &APIServer{
		port:     port,
		dataPath: dataPath,
	}
}

func (s *APIServer) Run() error {
	router := http.NewServeMux()
	
	// Initialize services
	creatorService := services.NewCreatorService(s.dataPath)
	
	// Register routes
	routes.RegisterRoutes(router, creatorService)
	
	v1 := http.NewServeMux()
	v1.Handle("/api/v1/", http.StripPrefix("/api/v1", router))
	
	server := http.Server{
		Addr:    s.port,
		Handler: v1,
	}
	
	log.Printf("Server has started on %s", s.port)
	return server.ListenAndServe()
}
