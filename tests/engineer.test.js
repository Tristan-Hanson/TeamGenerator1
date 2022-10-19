const Engineer=require('../lib/engineer');

describe('what does the engineer class do ',()=>{
    it('return given github username',()=>{
        const member=new Engineer('ivan','1','ivabon','username')
        const result=member.github
        expect(result).toEqual('username')
    })

})