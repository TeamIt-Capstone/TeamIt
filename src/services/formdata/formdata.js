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
  return res
}

function formateCardData(usersList) {
  const res = [];
  for (const i in usersList) {
    const user = usersList[i];
    res.push({
      id: i,
      projectName: "Project 1",
      img: require("../../../assets/icon.png"),
      domain: user.profile.domains[0],
      keyWords: user.profile.skills
    })
  }
  return res;
}

export { formatData, filterProfiles, formateCardData }