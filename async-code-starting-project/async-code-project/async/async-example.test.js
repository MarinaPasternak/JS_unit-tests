import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', (done) => {
    const testUserEmail = 'text@test.com';

    generateToken(testUserEmail, (errr, token) => {
        expect(token).toBeDefined();
        done();
    });
});

it('should generate a token value (use Promise)', () => {
    const testUserEmail = 'text@test.com';

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value (use Promise, async/await)', async () => {
    const testUserEmail = 'text@test.com';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
});