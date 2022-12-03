import { soma, multiplic } from "./soma";

describe("Math", ()=>{
    it("deve somar 1 ao numero informado ", ()=>{
        const value = soma(1);
        expect(value).toBe(2);
    })

    it("multiplica por 2 o numero", () =>{
        const value = multiplic(2, 2)
        expect(value).toBe(4)
    })
    it("multiplica por 3 o numero", () =>{
        const value = multiplic(3 , 3 )
        expect(value).toBe(9)
    })
})