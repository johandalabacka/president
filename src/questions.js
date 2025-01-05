// Minister of Finance = FIRST1 SUR1
// Minister of Defence = FIRST2 SUR2
// Minister of Health = FIRST3 SUR3
// Minister of Infrastructure = FIRST4 SUR4
// Minister of Tourism = FIRST5 SUR5
// Minister of Foreign Affairs = FIRST6 SUR6
// Chief of Staff = FIRST7 SURT7
// Minister of Agriculture = FIRST8 SUR8
// Minister of Education = FIRST9 SUR9
// Minister of Energy = FIRST10 SUR10
// Threatining neighbour = COUNTRY5
export default [
  {
    q: 'A milita group attacks a prison in the capital. Should we use all means necessary to find the insurgents?',
    propability: 1.0,
    yes: (state) => {
      state.military += 15
      state.publicOpinion -= 5
      state.world -= 5
      state.industry -= 5
    },
    no: (state) => {
      state.military -= 20
      state.publicOpinion -= 5
      state.world -= 5
    }
  },
  {
    q: 'The international mining company COMPANYMIN2 wants to construct a pipeline from their mining site in the REGION2 region to the coast. Several villages have to be moved. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion -= 18
      state.world -= 3
      state.industry += 20
    },
    no: (state) => {
      state.publicOpinion += 5
      state.industry -= 10
      state.addByTag('nopipeline')
    }
  },
  {
    tag: 'nopipeline',
    q: 'COMPANYMIN2 has decided to shut down all operations in the REGION2 region. Your Minister of Finance, FIRST1 SUR1 has recommended to sign more generous contracts to get them back. Should we?',
    propability: 8.0,
    yes: (state) => {
      state.publicOpinion -= 5
      state.industry -= 10
    },
    no: (state) => {
      state.publicOpinion += 5
      state.industry -= 15
    }
  },
  {
    q: 'Your Minister of Defence, FIRST2 SUR2 requests funding to build a national airforce?',
    propability: 1000.0,
    yes: (state) => {
      state.military += 12
      state.publicOpinion += 5
      state.industry -= 15
    },
    no: (state) => {
      state.military -= 10
    }
  },
  {
    q: 'The industrial conglomerate COMPANYMIN has found a potential vein of cobolt located underneath a lush rainforest with a vibrant wildlife. Should you let them dig?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion -= 10
      state.industry += 25
    },
    no: (state) => {
      state.industry -= 5
    }
  },
  {
    q: 'UN wants you to sign the Convention to ban landmines. Should you sign?',
    propability: 1.0,
    yes: (state) => {
      state.military -= 16
      state.publicOpinion += 5
      state.world += 16
    },
    no: (state) => {
      state.publicOpinion -= 5
      state.world -= 16
    }
  },
  {
    q: 'Human rights organizations wants you to take further actions to end the the employment of child soldiers. Should you comply?',
    propability: 1.0,
    yes: (state) => {
      state.military -= 20
      state.publicOpinion += 5
      state.world += 10
    },
    no: (state) => {
      state.publicOpinion -= 5
      state.world -= 25
    }
  },
  {
    q: 'COUNTRY has requested a loan to build a new hydroelectric power plant. Should you grant the loan?',
    propability: 1.0,
    yes: (state) => {
      state.industry -= 20
      state.world += 25
    },
    no: (state) => {
      state.industry += 8
      state.world -= 5
    }
  },
  {
    q: 'To prevent the spread of a deadly virus the Minister of Health, FIRST3 SUR3 wants the governemnt to finance vaccine programs. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion += 16
      state.world += 6
      state.industry -= 20
    },
    no: (state) => {
      state.publicOpinion -= 22
      state.world -= 9
      state.industry += 10
    }
  },
  {
    q: 'The transnational company COMPANY wants to build a new finance complex in the capital where currently a slum is located. Should you allow the construction?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion -= 25
      state.industry += 20
    },
    no: (state) => {
      state.publicOpinion += 13
      state.industry -= 10
    }
  },
  {
    q: 'The Minister of Defence, FIRST2 SUR2 proposes a military parade to show the strength of the armed forces. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.military += 20
      state.publicOpinion += 20
      state.world -= 12
      state.industry -= 10
    },
    no: (state) => {
      state.military -= 11
      state.publicOpinion -= 10
    }
  },
  {
    q: 'The food company COMPANYFOO have been revealed to trick customers with false advertising. Should you fine the company?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion += 12
      state.world += 6
      state.industry -= 10
    },
    no: (state) => {
      state.publicOpinion -= 18
      state.industry += 10
    }
  },
  {
    q: 'An earthquake has hit the country and the Minister of Infrastructure, FIRST4 SUR4 requests funding to rebuild the infrastructure. Should you grant the funding?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion += 12
      state.world += 6
      state.industry -= 30
    },
    no: (state) => {
      state.publicOpinion -= 30
      state.world -= 10
      state.industry -= 15
    }
  },
  {
    q: 'Protests have erupted in the capital due to the high unemployment rate. Should you send in the military to quell the protests?',
    propability: 1.0,
    yes: (state) => {
      state.military += 10
      state.publicOpinion -= 15
      state.world -= 8
    },
    no: (state) => {
      state.military -= 17
      state.publicOpinion += 25
      state.world += 8
    }
  },
  {
    q: 'A comedian in COUNTRY has joked about you and your appearance. Should this have international consequences?',
    propability: 1.0,
    yes: (state) => {
      state.military += 2
      state.publicOpinion += 6
      state.world -= 10
    },
    no: (state) => {
      state.military -= 2
      state.publicOpinion -= 6
      state.world += 10
    }
  },
  {
    q: 'Our intelligence services have found evidence of a coup plot. Should you arrest the conspirators?',
    propability: 1.0,
    yes: (state) => {
      state.military += 15
      state.publicOpinion -= 8
      state.world -= 8
      state.industry -= 3
    },
    no: (state) => {
      state.military -= 20
    }
  },
  {
    q: 'Your Minister of Tourism, FIRST5 SUR5 has proposed to convert a military airfield to a commercial airport. COMPANY has offered to finance it with the condition that they will own a substantial part. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.military -= 22
      state.publicOpinion += 15
      state.world += 8
      state.industry += 12
    },
    no: (state) => {
      state.military += 7
      state.publicOpinion -= 8
      state.industry -= 10
    }
  },
  {
    q: 'A group of mercenaries contracted by industrial conglomerate COMPANY has attacked a village close to a power plant. Should the company be punished?',
    propability: 1.0,
    yes: (state) => {
      state.military += 5
      state.publicOpinion += 20
      state.world += 6
      state.industry -= 25
    },
    no: (state) => {
      state.publicOpinion -= 20
      state.world += 8
      state.industry += 12
    }
  },
  {
    q: 'The International Monetary Fund has offered to give you a very substantial loan of money. The only condition is that you cut defence spending. Do you comply?',
    propability: 1.0,
    yes: (state) => {
      state.military /= 2
      state.publicOpinion += 5
      state.world += 10
      state.industry += 35
    },
    no: (state) => {
      state.military += 10
      state.publicOpinion -= 10
      state.world -= 20
      state.industry -= 8
    }
  },
  {
    q: 'A conference is gonna be held in COUNTRY´s capital to dicuss development in the region. Your Minister of Foreign Affairs, FIRST6 SUR6 recommends us to join in. Should we?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion += 5
      state.world += 20
      state.industry += 10
    },
    no: (state) => {
      state.publicOpinion -= 5
      state.world -= 20
    }
  },
  {
    q: 'The Republic of COUNTRY has offered a trade agreement, limiting tariffs on manufactured goods. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.world += 10
      state.industry += 10
    },
    no: (state) => {
      state.world -= 10
      state.industry -= 10
    }
  },
  {
    q: 'A feared and violent terrorist group in the REGION region has offered to join your regular army. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.military += 20
      state.publicOpinion -= 15
      state.world -= 5
    },
    no: (state) => {
      state.publicOpinion += 3
      state.world += 3
    }
  },
  {
    q: 'Drought has struck the REGION2 region. Your Minister of Agriculture, FIRST8 SUR8 has demanded to help local farmers out. Should we?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion += 15
      state.world += 7
      state.industry -= 23
    },
    no: (state) => {
      state.publicOpinion -= 20
      state.world += 3
      state.industry += 5
    }
  },
  {
    q: 'Your Chief of Staff, FIRST7 SUR7 requsts funding to build up defence on the border to COUNTRY5. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.military += 20
      state.world -= 10
      state.industry -= 10
    },
    no: (state) => {
      state.military -= 9
      state.world += 5
      state.industry += 5
    }
  }
]
