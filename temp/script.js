const inputDataArray = [ 
    {parentName: null, itemName: 'programming'},
    {parentName: 'mobile', itemName: 'ios'},
    {parentName: 'mobile', itemName: 'android'},
    {parentName: 'backend', itemName: 'nodejs'},
    {parentName: 'frontend', itemName: 'angular'},
    {parentName: 'frontend', itemName: 'react'},
    {parentName: 'programming', itemName: 'web'},
    {parentName: 'frontend', itemName: 'vue'},
    {parentName: 'backend', itemName: 'nodejs'},
    {parentName: 'web', itemName: 'backend'},
    {parentName: 'programming', itemName: 'mobile'},
    {parentName: 'web', itemName: 'frontend'}
];

const getResult = (inputDataArray, parentName) => {
    let resultObj = {};
    for (let i = 0; i < inputDataArray.length; i++) {
        if (inputDataArray[i].parentName === parentName) {
            resultObj[inputDataArray[i].itemName] = getResult(inputDataArray, inputDataArray[i].itemName);
        }
    }
    return resultObj;
};

// console.log(JSON.stringify(getResult(inputDataArray, null), null, 4));
console.log(NaN == NaN);
console.log('string :>> ', [...'string']);

let num = '66661122423335566';

function findLuckyNum(num) {
    num = [...num];
    let res = {};
    for (let i = 0; i < num.length; i++) {
        if (res[num[i]]) {
            res[num[i]]++;
        } else {
            res[num[i]]=1;
        }
    }
    console.log('res :>> ', res);
}

findLuckyNum(num);
