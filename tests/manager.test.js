const Intern=require('../lib/intern')

describe('what does intern class do',()=>{
    it('returns school given',()=>{
        const member=new Intern('ivan','1','ivabon','school')
        const result=member.school
        expect(result).toEqual('school')
    })
})