CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
CREATE TABLE Locations (
    id SERIAL PRIMARY KEY,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    region_name VARCHAR(255), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
CREATE TABLE WeatherConditions (
    id SERIAL PRIMARY KEY,
    location_id INT NOT NULL REFERENCES Locations(id) ON DELETE CASCADE, 
    temperature FLOAT NOT NULL,
    humidity FLOAT NOT NULL,
    wind_speed FLOAT NOT NULL,
    weather_condition VARCHAR(50),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);
CREATE TABLE FireRiskAssessment (
    id SERIAL PRIMARY KEY,
    location_id INT NOT NULL REFERENCES Locations(id) ON DELETE CASCADE,  
    risk_score FLOAT NOT NULL,
    risk_level VARCHAR(50) NOT NULL, 
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
CREATE TABLE Notifications (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE, 
    title VARCHAR(100),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE INDEX idx_locations_lat_long ON Locations(latitude, longitude);
CREATE INDEX idx_weatherconditions_location_id ON WeatherConditions(location_id);
CREATE INDEX idx_fireriskassessment_location_id ON FireRiskAssessment(location_id);
CREATE INDEX idx_notifications_user_id ON Notifications(user_id);