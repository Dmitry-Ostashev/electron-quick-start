import fs from 'fs';

fixture`Screenshot tests`
    .page`../index.html`
    .before(() => {
        if (fs.existsSync('./screenshots')) {
            console.log('Folder contet before: ');
            console.log(fs.readdirSync('./screenshots'));
        }
    })
    .after(() => {
        if (fs.existsSync('./screenshots')) {
            console.log('Folder contet after: ');
            console.log(fs.readdirSync('./screenshots'));
        }
    })
    .beforeEach(() => {
        if (fs.existsSync('./screenshots')) {
            console.log('Folder contet before each: ');
            console.log(fs.readdirSync('./screenshots'));
        }
    })
    .afterEach(() => {
        if (fs.existsSync('./screenshots')) {
            console.log('Folder contet after each: ');
            console.log(fs.readdirSync('./screenshots'));
        }
    });

test('Test', async t => {
    await t.expect(true).notOk();
});