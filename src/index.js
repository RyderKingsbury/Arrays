import Senators from './data/senators'

export const republicans = () => {
  return Senators.filter(senator => senator.party === "Republican")
}

export const democrats = () => {
  return Senators.filter(sen => sen.party === "Democrat")
}

export const independents = () => {
  return Senators.filter(sen => sen.party === "Independent")
}

export const males = () => {
  return Senators.filter(sen => sen.person.gender === "male")
}

export const females = () => {
  return Senators.filter(sen => sen.person.gender === "female")
}

export const byState = (state = 'UT') => {
  return Senators.filter(sen => sen.state === "UT")
}

export const mapping = () => {
  return Senators.map(senator => ({
    firstName: senator.person.firstname,
    lastName: senator.person.lastname,
    party: senator.party,
    gender: senator.person.gender
  }))
}

export const birthplaceSeniorSenator = (state = 'UT') => {
  return (byState(state = 'UT').filter(sen => sen.senator_rank === "senior")).reduce((acc, birthplaceSeniorSenator) => birthplaceSeniorSenator);
    }


const REPLACE_ME_WITH_CODE = false
