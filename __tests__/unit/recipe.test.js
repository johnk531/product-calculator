const RecipeControllerFunctions = require('../../src/controllers/recipe/RecipeControllerFunctions');

describe('Recipe', () => {
    it('should sum some values', () => {
        const x = 2;
        const y = 4;

        const sum = x + y;

        expect(sum).toBe(6);
    });
    it('should return the result of the rule of three', async () => {
        const valorQtd = await RecipeControllerFunctions.ReturnValorQtd(1000, 25.50, 200);
        expect(valorQtd).toBe((25.50 * 200) / 1000);
    });
});