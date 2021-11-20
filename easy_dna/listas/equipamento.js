let equipamento = [

    {nome:'NÃO SE APLICA', equipe:'Módulo 04'},
    {nome:'HV62', equipe:'Módulo 04'},
    {nome:'HV84', equipe:'Módulo 04'},
    {nome:'HV169', equipe:'Módulo 04'},
    {nome:'HV215', equipe:'Módulo 04'},
    {nome:'HV216', equipe:'Módulo 04'},
    {nome:'HV218', equipe:'Módulo 04'},
    {nome:'HV219', equipe:'Módulo 04'},
    {nome:'HV220', equipe:'Módulo 04'},
    {nome:'HV222', equipe:'Módulo 04'},
    {nome:'HV224', equipe:'Módulo 04'},
    {nome:'HV236', equipe:'Módulo 04'},
    {nome:'HV242', equipe:'Módulo 04'},
    {nome:'HV376', equipe:'Módulo 04'},
    {nome:'FW1013', equipe:'Módulo 04'},
    {nome:'FW1014', equipe:'Módulo 04'},
    {nome:'FW72', equipe:'Módulo 04'},
    {nome:'FW120', equipe:'Módulo 04'},
    {nome:'CGX-0018', equipe:'Módulo 04'},
    {nome:'CGX-0027', equipe:'Módulo 04'},
    {nome:'QXV2C34', equipe:'Módulo 04'},
    {nome:'QXV2C36', equipe:'Módulo 04'},
    {nome:'GGD-0029', equipe:'Módulo 04'},
    {nome:'OUTRO', equipe:'Módulo 04'},
]

function _equipamento(parent){

    return Array.from(new Set(equipamento.filter( equip => equip.equipe == parent.equipe).map(equip => equip.nome)))
}