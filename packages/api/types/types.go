package types

type Creator map[string]interface{}

type APIResponse struct {
	Status  string      `json:"status"`
	Data    interface{} `json:"data,omitempty"`
	Message string      `json:"message,omitempty"`
}

type CreatorService interface {
	GetCreator(continent, creatorID string) (Creator, error)
}
