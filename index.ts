type rultItem = {
    rule : string
    type : string
    from : string
}

function prop(from?:string , type:string='', rule:string='', ) {
    return function(target:any, propName:string) {
        target._propRules[propName] = {
            rule ,
            type ,
            from : from||propName
        }
    }
}

class Base{

    private _propRules : { [key:string]:rultItem } = {}

    static create<T extends Base>(constructor: new () => T , data:any): T {
        const newData = new constructor()
        
        Object.keys(newData).forEach((propName)=>{
            if(newData._propRules[propName]){

                const rultItem = newData._propRules[propName]

                if(rultItem.type==''){
                    rultItem.type = typeof newData[propName]
                }

                newData[propName] = data[rultItem.from]
            }
            else{
                newData[propName] = data[propName]
            }
        })
        return newData
    }
}


class Dict extends Base{
    @prop('dictid')
    id = 0
    @prop('dictname')
    name = ''
    @prop('dicttype')
    type = 0
    @prop('dictvalue')
    value = 0

    description = ''
}

const srcData = [
    {
        dictid : 10,
        dictname : '测试',
        dicttype : 1,
        description : '',
        dictvalue : 1,
    },
    {
        dictid : null,
        dictname : '测试',
        dicttype : 1,
        description : '',
        dictvalue : 1,
    },
]


console.log( Dict.create(Dict,srcData[0]) )

