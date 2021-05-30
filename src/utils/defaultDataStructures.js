const userDefaultDataStructure = {
    enabled: true,
    connection: {
        isConnected: false,
        last: null,
    },
    favorites: [],
    matchs: [],
    seen: [],
    profile: {
        description: null,
        domains: [],
        encrypted: null,
        profilePic: null,
        projects: [],
        skills: [],
    },
    transaction: {
        subscription: {
            type: 0,
            begin: null,
        },
    }
}

const userEncryptedDefaultDataStructure = {
    fullName: null,
}

export {
    userDefaultDataStructure,
    userEncryptedDefaultDataStructure
};