// Safety Guidelines Controller

// Mock data for various safety guidelines
const guidelinesData = {
    fireSafetyTips: [
      "Install smoke detectors in your home or workplace.",
      "Keep fire extinguishers accessible and ensure they are properly maintained.",
      "Conduct fire drills regularly to prepare everyone for emergencies.",
      "Never block fire exits or escape routes."
    ],
    evacuationPlans: [
      "Identify the nearest exits in your building or neighborhood.",
      "Ensure pathways to exits are clear and accessible.",
      "Practice evacuation drills to familiarize everyone with the routes.",
      "Always have a designated meeting point outside the danger zone."
    ],
    emergencyTeams: [
      "Fire Department: 5 teams located in key zones.",
      "Ambulance Services: 4 units ready for immediate response.",
      "Rescue and First-Aid Teams: 3 units available 24/7."
    ],
    firePrevention: [
      "Do not overload electrical outlets or power strips.",
      "Avoid leaving cooking appliances unattended.",
      "Store flammable materials safely and away from heat sources.",
      "Keep fire exits clear and accessible at all times."
    ],
  };
  
  // Controller function to get safety guidelines
  exports.getSafetyGuidelines = (req, res) => {
    const { type } = req.query; // Retrieve guideline type from query parameters
  
    if (!type || !guidelinesData[type]) {
      return res.status(400).json({
        error: "Invalid or missing type. Valid types are: fireSafetyTips, evacuationPlans, emergencyTeams, firePrevention."
      });
    }
  
    const selectedGuidelines = guidelinesData[type];
    res.status(200).json({
      type,
      guidelines: selectedGuidelines
    });
  };
  
  // Controller function to get emergency contacts
  exports.getEmergencyContacts = (req, res) => {
    const emergencyContacts = [
      { type: "Fire Emergency", number: "112" },
      { type: "Police Emergency", number: "911" },
      { type: "Ambulance", number: "999" }
    ];
  
    res.status(200).json({
      emergencyContacts
    });
  };
  
  // Controller function to get emergency teams in a specific area
  exports.getEmergencyTeams = (req, res) => {
    res.status(200).json({
      teams: guidelinesData.emergencyTeams
    });
  };
  