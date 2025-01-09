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
      state.addByTag('yespipeline')
    },
    no: (state) => {
      state.publicOpinion += 5
      state.industry -= 10
      state.addByTag('nopipeline')
    }
  },
  {
    tag: 'nopipeline',
    q: 'COMPANYMIN2 has decided to shut down all operations in the REGION2 region due to their rejected pipeline plans. Your Minister of Finance, FIRST1 SUR1 has recommended to sign more generous contracts to get them back. Should we?',
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
    tag: 'yespipeline',
    q: 'After the construction of the pipeline in the REGION2 region, several human rights organizations have condemned your regime. Should you expel them from the country?',
    propability: 8.0,
    yes: (state) => {
      state.world -= 13
      state.industry += 5
    },
    no: (state) => {
      state.world += 5
      state.industry -= 8
      state.addByTag('troublepipeline')
    }
  },
  {
    tag: 'troublepipeline',
    q: 'The human rights organizations have reported several committed atrocities in the REGION2 region by COMPANYMIN2 close to the pipeline. They demand that you sue the company. However, the regional manager, FIRST20 SUR20 approaches you with a big offer in cash to look away from it. Should you still sue the company?',
    propability: 8.0,
    yes: (state) => {
      state.publicOpinion += 5
      state.world += 10
      state.industry -= 15
    },
    no: (state) => {
      state.publicOpinion -= 4
      state.world -= 8
      state.industry += 22
    }
  },
  {
    q: 'Your Minister of Defence, FIRST2 SUR2 requests funding to build a national airforce?',
    propability: 1.0,
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
    q: 'The neighboring country of COUNTRY has requested a loan to build a new hydroelectric power plant. Should you grant the loan?',
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
    q: 'To prevent the spread of a deadly virus the Minister of Health, FIRST3 SUR3 wants the government to finance vaccine programs. Do you accept?',
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
    q: 'A conference is gonna be held in COUNTRY10´s capital, CITY10 to dicuss development in the region. Your Minister of Foreign Affairs, FIRST6 SUR6 recommends us to join in. Should we?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion += 5
      state.world += 7
      state.industry += 5
      state.addByTag('conference')
    },
    no: (state) => {
      state.publicOpinion -= 5
      state.world -= 20
    }
  },
  {
    tag: 'conference',
    q: 'During the conference in CITY10 it is discussed to form a regional trade organization. Should we join?',
    propability: 30.0,
    yes: (state) => {
      state.publicOpinion += 5
      state.world += 16
      state.industry += 10
      state.addByTag('organization')
    },
    no: (state) => {
      state.world -= 10
    }
  },
  {
    tag: 'organization',
    q: 'The CITY10 Trade Organization has proposed a common currency. This will briefly destabilize the internal economy. Should we join?',
    propability: 5.0,
    yes: (state) => {
      state.publicOpinion -= 5
      state.world += 10
      state.industry -= 10
    },
    no: (state) => {
      state.world -= 5
    }
  },
  {
    tag: 'organization',
    q: 'As a member of the CITY10 Trade Organization you are obligated to cut defence spending. Minimizing your military budget will upset your Chief of Staff but if you reject, it will have consequences. Do you comply?',
    propability: 2.0,
    yes: (state) => {
      state.military -= 20
      state.world += 7
    },
    no: (state) => {
      state.military += 10
      state.world -= 10
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
    q: 'A feared and violent terrorist group in the REGION8 region has offered to join your regular army. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.military += 20
      state.publicOpinion -= 15
      state.world -= 5
    },
    no: (state) => {
      state.publicOpinion += 3
      state.world += 3
      state.addByTag('terrorist')
    }
  },
  {
    tag: ('terrorist'),
    q: 'By not accepting the violent terrorist group in your army attacks by them have intensified in the REGION8 region and especially against the CULTURE8 people. Should you send in the army to stop them?',
    propability: 5.0,
    yes: (state) => {
      state.military += 5
      state.publicOpinion += 18
      state.world -= 12
      state.industry -= 5
      state.addByTag('stopterrorist')
    },
    no: (state) => {
      state.military -= 15
      state.publicOpinion -= 5
      state.addByTag('letterrorist')
    }
  },
  {
    tag: ('letterrorist'),
    q: 'An influental CULTURE8 business leader calls out the awful attacks committed on his people by the terrorist organization in the REGION8 region. UN wants to establish a work office in the area to help civilians. Do you let them?',
    propability: 8.0,
    yes: (state) => {
      state.military -= 5
      state.publicOpinion += 2
      state.world += 10
    },
    no: (state) => {
      state.publicOpinion -= 9
      state.world -= 12
    }
  },
  {
    tag: ('stopterrorist'),
    q: 'War rages in the REGION8 region as the national army clashes with the terrorist group. Their leader, FIRST11 SUR11 has stated the goal to overthrow you, the tyrant. Should you send more troops?',
    propability: 8.0,
    yes: (state) => {
      state.military += 5
      state.publicOpinion += 8
      state.world -= 10
      state.industry -= 5
      state.addByTag('moretroopsterrorist')
    },
    no: (state) => {
      state.military -= 8
      state.publicOpinion -= 5
      state.addByTag('notmoretroopsterrorist')
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
    q: 'Your Chief of Staff, FIRST7 SUR7 requests funding to build up defence on the border to COUNTRY5. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.military += 20
      state.world -= 18
      state.industry -= 10
    },
    no: (state) => {
      state.military -= 9
      state.world += 5
      state.industry += 5
    }
  },
  {
    q: 'The international arms company COMPANYWEA wants to be your sole supplier of hand grenades. This will can be valuable for the army however the military budget have to increased. Do you accept?',
    propability: 1.0,
    yes: (state) => {
      state.military += 15
      state.industry -= 6
    },
    no: (state) => {
      state.military -= 9
    }
  },
  {
    q: 'There is an AIDS epidemic in the REGION region. Your Minister of Health, FIRST3 SUR3 has requested funding to build a new hospital. Should we?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion += 15
      state.industry -= 11
    },
    no: (state) => {
      state.publicOpinion -= 16
      state.world -= 2
    }
  },
  {
    q: 'Your Minister of Defence, FIRST2 SUR2 recommends us to attain combat missiles in the army to protect us from external threats. The international arms company COMPANYWEA has offered us a promising deal. For it to be possible a few villages in the REGION region has to be removed. Do you accept the idea?',
    propability: 1.0,
    yes: (state) => {
      state.military += 20
      state.publicOpinion -= 10
      state.world -= 16
      state.industry += 7
    },
    no: (state) => {
      state.military -= 12
      state.world += 2
    }
  },
  {
    q: 'The UN has invited you to personally come to New York and hold a speech in the General Assembly regarding the future of your country. Do you accept?',
    propability: 0.000000000000001,
    yes: (state) => {
      state.world += 3
      state.addByTag('unspeech')
    },
    no: (state) => {
      state.world -= 8
    }
  },
  {
    tag: ('unspeech'),
    q: 'During your visit to the UN you are amazed by the happy and free countries there are in the rest of the world. You want that too. Should you reinstate free elections?',
    propability: 1.0,
    yes: (state) => {
      state.publicOpinion += 100
    },
    no: (state) => {
      state.publicOpinion -= 100
    }
  }
]
