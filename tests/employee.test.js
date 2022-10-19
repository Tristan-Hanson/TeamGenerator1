const Employee=require('../lib/employee');

describe('What does employee class does',()=>{
    it('return name given',()=>{
        const member=new Employee('ivan','1','ivabon')
        const result=member.name
        expect(result).toEqual('ivan')
    })
    it('return id given',()=>{
        const member=new Employee('ivan','1','ivabon')
        const result=member.id
        expect(result).toEqual('1')
    })
    it('return email given',()=>{
        const member=new Employee('ivan','1','ivabon')
        const result=member.email
        expect(result).toEqual('ivabon')
    })
})