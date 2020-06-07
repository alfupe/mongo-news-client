import getLanguage from './get-language';

test('should extract language ISO 639-1 from navigator', () => {
    const mockNavigator = {
        language: 'es-ES'
    };
    const result = getLanguage(mockNavigator);
    expect(result).toBe('es');
});
