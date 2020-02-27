const { expect } = require('chai');
const { securityText } = require('../src/index.js');

describe('security', () => {
    it('head', () => {
        expect(securityText('123456', 'head:2')).to.equal('**3456');
    });
    it('!head', () => {
        expect(securityText('123456', '!head:2')).to.equal('12****');
    });
    it('tail', () => {
        expect(securityText('123456', 'tail:2')).to.equal('1234**');
    });
    it('!tail', () => {
        expect(securityText('123456', '!tail:2')).to.equal('****56');
    });
    it('head+tail', () => {
        expect(securityText('123456', 'head:2|tail:2|head:3')).to.equal('***4**');
    });
    it('!head+!tail', () => {
        expect(securityText('123456', '!head:2|!tail:2')).to.equal('******');
    });
});
