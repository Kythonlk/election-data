
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
    const predefinedData = {
      "Anura Kumara Disanayake": { percentage: 53 },
      "Sajith Premadasa": { percentage: 20 },
      "Namal Rajapakse": { percentage: 11 },
      "Ranil Wickramasinghe": { percentage: 6 }
    };
  
    const totalPercentage = Object.values(predefinedData).reduce((sum, { percentage }) => sum + percentage, 0);
    const totalVotes = generateRandomVotes();
    let remainingVotes = totalVotes;
  
    const candidateData = Object.keys(predefinedData).map(name => {
      const { percentage } = predefinedData[name];
      const votes = (totalVotes * (percentage / 100)).toFixed();
      remainingVotes -= votes;
      return {
        candidateName: name,
        party: candidates.find(c => `${c["first-name"]} ${c["sec-name"]}` === name).party,
        votes: parseInt(votes),
        percentage: percentage.toFixed(2)
      };
    });
  
    const remainingCandidates = candidates.filter(c => !Object.keys(predefinedData).includes(`${c["first-name"]} ${c["sec-name"]}`));
    remainingCandidates.forEach((candidate, index) => {
      candidateData.push({
        rank: candidateData.length + 1,
        candidateName: `${candidate["first-name"]} ${candidate["sec-name"]}`,
        party: candidate.party,
        votes: generateRandomVotes(remainingVotes / (remainingCandidates.length - index)),
        percentage: 0
      });
    });
  
    candidateData.forEach(candidate => {
      candidate.percentage = calculatePercentage(candidate.votes, totalVotes);
    });
  
    candidateData.sort((a, b) => a.votes - b.votes).reverse();
    candidateData.forEach((candidate, index) => {
      candidate.rank = index + 1;
    });
  
    return candidateData;
  }
  

  
  const formattedCandidateData = generateCandidateData(allCandidates);
  const jsonData = JSON.stringify(formattedCandidateData, null, 2); 
  console.log(jsonData);
  