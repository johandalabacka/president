export default [
  {
    q: 'A milita group attacks a prison in the capital. Should we use all means necessary to find the insurgents?',

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
    q: 'Your Minister of Defence requests funding to build a national airforce?',

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
    q: 'To prevent the spread of a deadly virus the Minister of Health wants the governemnt to finance vaccine programs. Do you accept?',

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
    q: 'The chief of staff proposes a military parade to show the strength of the armed forces. Do you accept?',

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
    q: 'An earthquake has hit the country and the Minister of Infrastructure requests funding to rebuild the infrastructure. Should you grant the funding?',

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
    q: 'Your Minister of Tourism has proposed to convert a military airfield to a commercial airport. COMPANY has offered to finance it with the condition that they will own a substantial part. Do you accept?',

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
    q: 'A conference is gonna be held in COUNTRY to dicuss development in the region. Your Minister of Foreign Affairs recommends us to join in. Should we?',

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
    q: 'COUNTRY has offered a trade agreement, limiting tariffs on manufactured goods. Do you accept?',

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
    q: 'A feared and violent terrorist group in the REGION region has offered to join your regular army. Do you accept?',

    yes: (state) => {
      state.military += 20
      state.publicOpinion -= 15
      state.world -= 5
    },
    no: (state) => {
      state.publicOpinion += 3
      state.world += 3
    }
  }
]
