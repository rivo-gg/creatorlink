package handlers

import (
	"encoding/json"
	"net/http"
	"creatorlink/types"
)

type CreatorHandler struct {
	creatorService types.CreatorService
}

func NewCreatorHandler(creatorService types.CreatorService) *CreatorHandler {
	return &CreatorHandler{
		creatorService: creatorService,
	}
}

func (h *CreatorHandler) HandleGetCreator(w http.ResponseWriter, r *http.Request) {
	creatorID := r.PathValue("creatorID")
	continent := r.PathValue("continent")
	
	creator, err := h.creatorService.GetCreator(continent, creatorID)
	if err != nil {
		sendErrorResponse(w, err.Error(), http.StatusNotFound)
		return
	}
	
	sendSuccessResponse(w, creator)
}

func sendSuccessResponse(w http.ResponseWriter, data interface{}) {
	response := types.APIResponse{
		Status: "success",
		Data:   data,
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func sendErrorResponse(w http.ResponseWriter, message string, statusCode int) {
	response := types.APIResponse{
		Status:  "error",
		Message: message,
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	json.NewEncoder(w).Encode(response)
}
