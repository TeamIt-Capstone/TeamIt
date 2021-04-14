const userDefaultDataStructure = {
    enabled: true,
    connection: {
        isConnected: false,
        last: null,
    },
    favorites: [],
    matchs: [],
    profile: {
        description: null,
        domains: [],
        encrypted: null,
        profilePic: null,
        projects: [],
        skills: [],
    }
}

const userEncryptedDefaultDataStructure = {
    fullName: null,
}

export {
    userDefaultDataStructure,
    userEncryptedDefaultDataStructure
};