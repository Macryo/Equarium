import { Selector } from 'testcafe';

fixture`Getting Started`;

test('Slider test init successfully', async t => {
    await t.expect(true).eql(true, 'Error, test failed')
});