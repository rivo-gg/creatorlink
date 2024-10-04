package routes

import (
	"net/http"
	"creatorlink/handlers"
	"creatorlink/services"
)

func RegisterRoutes(router *http.ServeMux, creatorService *services.CreatorService) {
	creatorHandler := handlers.NewCreatorHandler(creatorService)
	
	router.HandleFunc("GET /{continent}/creator/{creatorID}", creatorHandler.HandleGetCreator)
}
