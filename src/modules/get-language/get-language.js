const getLanguage = (navigatorObject = navigator) => {
    return (navigatorObject.language || navigatorObject.userLanguage || '').split('-')[0] || null;
};

export default getLanguage;
