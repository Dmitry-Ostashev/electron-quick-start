import fs from 'fs';

fixture`Screenshot tests`
    .page`../index.html`
    .before(() => {
        if (fs.existsSync('./screenshots')) {
            console.log('Folder contnet before: ');
            console.log(fs.readdirSync('./screenshots'));
        }
    })
    .after(() => {
        if (fs.existsSync('./screenshots')) {
            console.log('Folder contnet after: ');
            console.log(fs.readdirSync('./screenshots'));
        }
    });

test('Test', async t => {
    await t.expect(true).notOk();
});