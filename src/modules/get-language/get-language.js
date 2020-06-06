// TODO: mockear navigator y testear
const getLanguage = () => {
    return (navigator.language || navigator.userLanguage || '').split('-')[0] || null;
};

export default getLanguage;
