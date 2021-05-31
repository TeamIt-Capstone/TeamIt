import UserRepository from "../database/UserRepository";

const db = {
  user: new UserRepository(),
}

function formatData(data, numColumns) {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return data;
};

function filterProfiles(usersList, seenList, localUid) {
  let res = {};
  for (const i in usersList) {
    const user = usersList[i];
    if (!seenList.includes(i) && i !== localUid) {
      res = {
        ...res,
        [i]: user,
      }
    }
  }
  return res;
}

async function formateCardData(usersList) {
  const res = [];
  for (const i in usersList) {
    const user = usersList[i];
    const profilePic = await db.user.getProfilePicByUserId(i);
    res.push({
      id: i,
      projectName: user.profile.decrypted.fullName,
      img: (profilePic) ? profilePic : require('../../../assets/icon.png'),
      domain: user.profile.domains[0],
      keyWords: user.profile.skills
    })
  }
  return res;
}

function formateFavoriteData(favoriesList, usersList) {
  let filteredList = {};
  for (const i in usersList) {
    const user = usersList[i];
    if (favoriesList.includes(i)) {
      filteredList = {
        ...filteredList,
        [i]: user,
      }
    }
  }

  const res = [];
  for (const i in filteredList) {
    const user = usersList[i];
    res.push({
      id: i,
      name: user.profile.decrypted.fullName,
      avatar_url: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
      subtitle: (user.profile.domains[0]) ? user.profile.domains[0] : 'none',
    })
  }
  return res;
}

function formateMatchsData(matchsList, usersList) {
  let filteredList = {};
  for (const i in usersList) {
    const user = usersList[i];
    for (const j in matchsList) {
      const match = matchsList[j];
      if (i === match.uid && match.matched) {
        filteredList = {
          ...filteredList,
          [i]: user.uid,
        }
      }
    }
  }

  const res = [];
  for (const i in filteredList) {
    const user = usersList[i];
    res.push({
      id: i,
      name: user.profile.decrypted.fullName,
      avatar_url: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
      subtitle: user.profile.decrypted.email,
    })
  }
  return res;
}

export {
  formatData,
  filterProfiles,
  formateCardData,
  formateFavoriteData,
  formateMatchsData,
}