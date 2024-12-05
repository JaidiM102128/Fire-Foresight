const express = require('express');
const router = express.Router();

// Sample data for safety guidelines
const safetyGuidelines = {
  fireEmergency: [
    "Stay calm and alert.",
    "Evacuate the building immediately.",
    "Use the nearest exit and do not use elevators.",
    "If you encounter smoke, crawl to avoid inhaling it.",
    "Once outside, stay at a safe distance from the building.",
    "Call emergency services for assistance."
  ],
  fireSafetyTips: [
    "Install smoke detectors in your home or workplace.",
    "Keep fire extinguishers accessible and ensure they are properly maintained.",
    "Conduct fire drills regularly to prepare everyone for emergencies.",
    "Never block fire exits or escape routes."
  ],
  emergencyContacts: {
    fireEmergency: '112',
    policeEmergency: '911',
    ambulance: '999'
  },
  emergencyTeams: {
    fireDepartment: { teams: 5, locations: "key zones" },
    ambulanceServices: { units: 4, status: "ready for immediate response" },
    rescueTeams: { units: 3, status: "available 24/7" }
  },
  firePrevention: [
    "Do not overload electrical outlets or power strips.",
    "Avoid leaving cooking appliances unattended.",
    "Store flammable materials safely and away from heat sources.",
    "Keep fire exits clear and accessible at all times."
  ],
  evacuationPlans: "Familiarize yourself with evacuation routes and emergency exits in your building or neighborhood."
};

// Route to get all safety guidelines
router.get('/guidelines', (req, res) => {
  res.json(safetyGuidelines);
});

// Route to get fire safety guidelines
router.get('/fire-safety', (req, res) => {
  res.json(safetyGuidelines.fireEmergency);
});

// Route to get fire safety tips
router.get('/fire-safety-tips', (req, res) => {
  res.json(safetyGuidelines.fireSafetyTips);
});

// Route to get emergency contacts
router.get('/emergency-contacts', (req, res) => {
  res.json(safetyGuidelines.emergencyContacts);
});

// Route to get emergency teams in the area
router.get('/emergency-teams', (req, res) => {
  res.json(safetyGuidelines.emergencyTeams);
});

// Route to get fire prevention guidelines
router.get('/fire-prevention', (req, res) => {
  res.json(safetyGuidelines.firePrevention);
});

// Route to get evacuation plan details
router.get('/evacuation-plan', (req, res) => {
  res.json(safetyGuidelines.evacuationPlans);
});

module.exports = router;
