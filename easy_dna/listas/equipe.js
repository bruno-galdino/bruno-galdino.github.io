let equipe = [

    {
        nome:'Módulo 01',
        gerencia:'Colheita - BA',
        unidade:'UNF-BA'
    },
    {
        nome:'Módulo 02',
        gerencia:'Colheita - BA',
        unidade:'UNF-BA'
    },
    {
        nome:'Módulo 03',
        gerencia:'Colheita - BA',
        unidade:'UNF-BA'
    },
    {
        nome:'Módulo 04',
        gerencia:'Colheita - BA',
        unidade:'UNF-BA'
    },
    {
        nome:'Módulo 05',
        gerencia:'Colheita - ES',
        unidade:'UNF-ES'
    },
    {
        nome:'Módulo 06',
        gerencia:'Colheita - ES',
        unidade:'UNF-ES'
    },
    {
        nome:'Módulo 07',
        gerencia:'Colheita - ES',
        unidade:'UNF-ES'
    },
    {
        nome:'Módulo 08',
        gerencia:'Colheita - BA',
        unidade:'UNF-BA'
    },
    {
        nome:'Módulo 09',
        gerencia:'Colheita - BA',
        unidade:'UNF-BA'
    },
    {
        nome:'Módulo 10',
        gerencia:'Colheita - ES',
        unidade:'UNF-ES'
    },
    {
        nome:'Módulo 12',
        gerencia:'Colheita - ES',
        unidade:'UNF-ES'
    },
]

function _unidade(){

    return Array.from(new Set(equipe.map(equipe => equipe.unidade)))
}

function _gerencia(parent){

    return Array.from(new Set(equipe.filter( equipe => equipe.unidade == parent.unidade).map(equipe => equipe.gerencia)))
}

function _equipe(parent){
                
    return Array.from(new Set( equipe.filter( equipe => equipe.gerencia == parent.gerencia).map(equipe => equipe.nome)))
}