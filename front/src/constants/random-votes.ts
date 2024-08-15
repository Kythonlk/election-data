const electionData = [
    {
      title: "A.K.Dissanayake",
      party: "NPP" 
    },
    {
      title: "Ranil Wikramasinghe",
      party: "Independent" 
    },
    {
      title: "Namal Rajapaksha",
      party: "SLPP" 
    },
    {
      title: "Sajith Premadasa",
      party: "SJB" 
    }
  ];
  
  const districts = [
    {
      "name": "Colombo",
      "leadingCandidate": "",
      "party": "",
      "votes": 5000,
      "percentage": 52,
      "details": "Colombo district is the capital region of Sri Lanka.",
      "color": "#1f77b4"
    },
    {
      "name": "Galle",
      "leadingCandidate": "",
      "party": "",
      "votes": 3200,
      "percentage": 48,
      "details": "Galle district is known for its historical importance.",
      "color": "#ff7f0e"
    },
    {
      "name": "Kandy",
      "leadingCandidate": "",
      "party": "",
      "votes": 2100,
      "percentage": 21,
      "details": "Kandy district is famous for the Temple of the Tooth.",
      "color": "#2ca02c"
    },
    {
      "name": "Jaffna",
      "leadingCandidate": "",
      "party": "",
      "votes": 6450,
      "percentage": 64,
      "details": "Jaffna district is the cultural capital of Tamils in Sri Lanka.",
      "color": "#d62728"
    },
    {
      "name": "Matara",
      "leadingCandidate": "",
      "party": "",
      "votes": 3980,
      "percentage": 40,
      "details": "Matara is known for its historical fort and natural beauty.",
      "color": "#9467bd"
    },
    {
      "name": "Gampaha",
      "leadingCandidate": "", 
      "party": "",           
      "votes": 0,             
      "percentage": 0,         
      "details": "",          
      "color": "#b41f24"
    },
    {
      "name": "Kalutara",
      "leadingCandidate": "", 
      "party": "",           
      "votes": 0,            
      "percentage": 0,        
      "details": "",         
      "color": "#1f77b4"
    },
    {
      "name": "Mahanuwara",
      "leadingCandidate": "", 
      "party": "",           
      "votes": 0,           
      "percentage": 0,        
      "details": "",         
      "color": "#b41f24"
    },
    {
      "name": "Nuwara Eliya",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#b41f24"
    },
    {
      "name": "Matale",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#fff"
    },
    {
      "name": "Hambantota",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#b41f24"
    },
    {
      "name": "Vavuniya", 
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#ff8504" 
    },
    {
      "name": "Batticaloa",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#ff8504"
    },
    {
      "name": "Digamadulla",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#ff8504"
    },
    {
      "name": "Trincomalee",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#fada5e"
    },
    {
      "name": "Kurunegala",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#b41f24"
    },
    {
      "name": "Puttalam",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#fada5e"
    },
    {
      "name": "Anuradhapura",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#b41f24"
    },
    {
      "name": "Polonnaruwa",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#b41f24"
    },
    {
      "name": "Badulla",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#b41f24"
    },
    {
      "name": "Moneragala",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#b41f24"
    },
    {
      "name": "Ratnapura",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#b41f24"
    },
    {
      "name": "Kegalle",
      "leadingCandidate": "",
      "party": "",
      "votes": 0,
      "percentage": 0,
      "details": "",
      "color": "#b41f24"
    }
  ];
  
  interface District {
    name: string;
    leadingCandidate: string;
    party: string;
    votes: number;
    percentage: number; 
    details: string;
    color: string;
  }
  function getRandomVotes() {
    return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000; 
  }
  
  districts[0].leadingCandidate = electionData[0].title; 
  districts[0].party = electionData[0].party;
  districts[0].votes = getRandomVotes();
  
  for (let i = 1; i < districts.length; i++) {
    const randomIndex = Math.floor(Math.random() * electionData.length);
    districts[i].leadingCandidate = electionData[randomIndex].title;
    districts[i].party = electionData[randomIndex].party;
    districts[i].votes = getRandomVotes();
  }
  
  console.log(districts); 

  export default function RandomVotes(): District[] {
    districts.forEach((district, index) => {
      if (index === 0) {
        district.leadingCandidate = electionData[0].title;
        district.party = electionData[0].party;
      } else {
        const randomCandidate = electionData[Math.floor(Math.random() * electionData.length)];
        district.leadingCandidate = randomCandidate.title;
        district.party = randomCandidate.party;
      }
      district.votes = getRandomVotes();
    });
  
    return districts; 
  }