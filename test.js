import { Selector } from 'testcafe';

fixture `Getting Started`

.page `https://ddeshane.github.io/`;

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
    .typeText('#developer-name', 'Dinah Deshane')
    .click('#submit-button');

    const articleHeader = await Selector('.result-content').find('h1'); 
});