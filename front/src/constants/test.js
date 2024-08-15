
const allCandidates = [
    {
      "first-name": "Sarath",
      "sec-name": "Fonseka",
      "party": "Independent"
    },
    {
      "first-name": "Anura Kumara",
      "sec-name": "Disanayake",
      "party": "NPP"
    },
    {
      "first-name": "PWSK",
      "sec-name": "Bandaranayake",
      "party": "JSP"
    },
    {
      "first-name": "Nuwan",
      "sec-name": "Bopage",
      "party": "PSA"
    },
    {
      "first-name": "Akmeemana",
      "sec-name": "Dayarathana",
      "party": "Independent"
    },
    {
      "first-name": "Ajantha",
      "sec-name": "de Zoysa",
      "party": "RJP"
    },
    {
      "first-name": "Oshala",
      "sec-name": "Herath",
      "party": "NIF"
    },
    {
      "first-name": "Siritunga",
      "sec-name": "Jayasuriya",
      "party": "USP"
    },
    {
      "first-name": "Sarath",
      "sec-name": "Keerthirathna",
      "party": "Independent"
    },
    {
      "first-name": "ASP",
      "sec-name": "Liyanage",
      "party": "SLLP"
    },
    {
      "first-name": "KK",
      "sec-name": "Piyadasa",
      "party": "Independent"
    },
    {
      "first-name": "Janaka",
      "sec-name": "Ratnayake",
      "party": "Independent"
    },
    {
      "first-name": "Battaramulle",
      "sec-name": "Seelarathana",
      "party": "JP"
    },
    {
      "first-name": "Ranil",
      "sec-name": "Wickramasinghe",
      "party": "Independent"
    },
    {
      "first-name": "Sajith",
      "sec-name": "Premadasa",
      "party": "SJB"
    },
    {
      "first-name": "Siripala",
      "sec-name": "Amarasinghe",
      "party": "Independent"
    },
    {
      "first-name": "KR",
      "sec-name": "Krishan",
      "party": "AJP"
    },
    {
      "first-name": "Ananda",
      "sec-name": "Kularatne",
      "party": "Independent"
    },
    {
      "first-name": "Sarath",
      "sec-name": "Manamendra",
      "party": "NSU"
    },
    {
      "first-name": "Dilith",
      "sec-name": "Jayaweera",
      "party": "MJP"
    },
    {
      "first-name": "Namal",
      "sec-name": "Rajapakse",
      "party": "SLPP"
    },
    {
      "first-name": "Wijeyadasa",
      "sec-name": "Rajapakshe",
      "party": "JPP"
    }
  ];


  function generateRandomVotes(maxVotes = 10000) {
    return Math.floor(Math.random() * maxVotes) + 1;
  }
  
  function calculatePercentage(votes, totalVotes) {
    return (votes / totalVotes * 100).toFixed(2);
  }
  
  function generateCandidateData(candidates) {
    const akdIndex = candidates.findIndex(c => c["first-name"] === "Anura Kumara" && c["sec-name"] === "Disanayake");
    if (akdIndex !== -1 && akdIndex !== 0) { 
      const akd = candidates.splice(akdIndex, 1)[0]; 
      candidates.unshift(akd); 
    }
  
    const candidateData = candidates.map((candidate, index) => ({
      rank: index + 1,
      candidateName: `${candidate["first-name"]} ${candidate["sec-name"]}`,
      party: candidate.party,
      votes: generateRandomVotes(),
      percentage: 0 
    }));
  
    const totalVotes = candidateData.reduce((sum, candidate) => sum + candidate.votes, 0);
    candidateData.forEach(candidate => {
      candidate.percentage = calculatePercentage(candidate.votes, totalVotes);
    });
  
    return candidateData;
  }
  
  const formattedCandidateData = generateCandidateData(allCandidates);
  
  const jsonData = JSON.stringify(formattedCandidateData, null, 2); 
  console.log(jsonData);