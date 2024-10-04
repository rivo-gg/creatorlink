package services

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"creatorlink/types"
)

type CreatorService struct {
	dataPath string
}

func NewCreatorService(dataPath string) *CreatorService {
	return &CreatorService{
		dataPath: dataPath,
	}
}

func (s *CreatorService) GetCreator(continent, creatorID string) (types.Creator, error) {
	if continent == "worldwide" {
		return s.searchAllContinents(creatorID)
	}
	
	return s.searchSingleContinent(continent, creatorID)
}

func (s *CreatorService) searchSingleContinent(continent, creatorID string) (types.Creator, error) {
	filePath := filepath.Join(s.dataPath, fmt.Sprintf("%s.json", continent))
	creators, err := s.loadCreators(filePath)
	if err != nil {
		return nil, fmt.Errorf("failed to load creators data for %s: %v", continent, err)
	}
	
	creator, found := s.findCreator(creators, creatorID)
	if !found {
		return nil, fmt.Errorf("creator not found in %s", continent)
	}
	
	return creator, nil
}

func (s *CreatorService) searchAllContinents(creatorID string) (types.Creator, error) {
	var searchErrors []string
	
	err := filepath.WalkDir(s.dataPath, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		
		if d.IsDir() || filepath.Ext(path) != ".json" {
			return nil
		}
		
		creators, err := s.loadCreators(path)
		if err != nil {
			searchErrors = append(searchErrors, fmt.Sprintf("error loading %s: %v", path, err))
			return nil
		}
		
		if creator, found := s.findCreator(creators, creatorID); found {
			return &foundCreator{creator: creator}
		}
		
		return nil
	})
	
	if err != nil {
		if ferr, ok := err.(*foundCreator); ok {
			return ferr.creator, nil
		}
		return nil, fmt.Errorf("error searching creators: %v", err)
	}
	
	if len(searchErrors) > 0 {
		return nil, fmt.Errorf("some errors occurred while searching: %v", searchErrors)
	}
	
	return nil, fmt.Errorf("creator not found in any continent")
}

func (s *CreatorService) loadCreators(filePath string) ([]types.Creator, error) {
	fileContent, err := os.ReadFile(filePath)
	if err != nil {
		return nil, fmt.Errorf("error reading file: %v", err)
	}
	
	var creators []types.Creator
	err = json.Unmarshal(fileContent, &creators)
	if err != nil {
		return nil, fmt.Errorf("error unmarshalling JSON: %v", err)
	}
	
	return creators, nil
}

func (s *CreatorService) findCreator(creators []types.Creator, creatorID string) (types.Creator, bool) {
	for _, creator := range creators {
		if _, ok := creator[creatorID]; ok {
			return creator, true
		}
	}
	return nil, false
}

// Custom error type to handle found creator
type foundCreator struct {
	creator types.Creator
}

func (e *foundCreator) Error() string {
	return "creator found"
}
