package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

type APIServer struct {
	port string
}

type Creator map[string]interface{}

func NewAPIServer(port string) *APIServer {
	return &APIServer{
		port,
	}
}

func (s *APIServer) Run() error {
	router := http.NewServeMux()
	router.HandleFunc("GET /{continent}/creator/{creatorID}", s.handleGetCreator)

	v1 := http.NewServeMux()
	v1.Handle("/api/v1/", http.StripPrefix("/api/v1", router))

	server := http.Server{
		Addr:    s.port,
		Handler: v1,
	}

	log.Printf("Server has started on %s", s.port)
	return server.ListenAndServe()
}

func (s *APIServer) handleGetCreator(w http.ResponseWriter, r *http.Request) {
	creatorID := r.PathValue("creatorID")
	continent := r.PathValue("continent")
	urlPath := fmt.Sprintf("../../data/creators/%s.json", continent)
	creators, err := loadCreators(urlPath)

	if err != nil {
		http.Error(w, "Failed to load creators data", http.StatusInternalServerError)
		return
	}

	creator, found := findCreator(creators, creatorID)
	if !found {
		http.Error(w, "Creator not found", http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(creator)
}

func loadCreators(filePath string) ([]Creator, error) {
	fileContent, err := os.ReadFile(filePath)
	if err != nil {
		return nil, fmt.Errorf("error reading file: %v", err)
	}

	var creators []Creator
	err = json.Unmarshal(fileContent, &creators)
	if err != nil {
		return nil, fmt.Errorf("error unmarshalling JSON: %v", err)
	}

	return creators, nil
}

func findCreator(creators []Creator, creatorID string) (Creator, bool) {
	for _, creator := range creators {
		if _, ok := creator[creatorID]; ok {
			return creator, true
		}
	}
	return nil, false
}
