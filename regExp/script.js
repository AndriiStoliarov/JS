let str = '+7(903)-123-45-67';
let str2 = '<h1>Привет!</h1>';
let str3 = '<h1>Привет!... Как дела?.....</h1>';
let str4 = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678';
let str5 = `... <!-- My -- comment test --> ..  <!----> ..`;
let str6 = '<> <a href="/"> <input type="radio" checked> <b>';
let str7 = 'my@mail.com @ his@site.com.uk';
let str8 = 'color: #3f3; background-color: #AA00ef; and: #abcd';
let str9 = '-1.5 0 2 -123.4.';
let str10 = '01:32:54:67:89:AB';
let str11 = 'Java JavaScript PHP C++ C';
let str12 = '..[url][b]http://ya.ru[/b][/url]..';
let str13 = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
let str14 = '<style> <styler> <style test="...">';
let str15 = '0 12 -5 123 -18';
let str16 = `
    <html>
    <body style="height: 200px">
    ...
    </body>
    </html>
`;

let regexp = /\d+/g;
let regexp2 = /<\/?[a-z][a-z0-9]*>/gi;
let regexp3 = /[.]{3,}/g;
let regexp4 = /#[a-f0-9]{6}\b/gi;
let regexp5 = /<!--.*?-->/gs;
let regexp6 = /<[^<>]+>/g;
let regexp7 = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
let regexp8 = /#([a-f0-9]{3}){1,2}\b/gi;
let regexp9 = /[-\d]+\.?\d*/g;
// let regexp9 = /-?\d+(\.\d+)?/g;
let regexp10 = /^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/i;
// let regexp10 = /^[0-9A-F]{2}(:[0-9A-F]{2}){5}$/;
let regexp11 = /Java(Script)?|PHP|C(\+\+)?/g;
let regexp12 = /\[(b|url|quote)\].*?\[\/\1]/gs;
let regexp13 = /"(\\.|[^"\\])*"/g;
let regexp14 = /<style(>|\s.*?>)/g;
let regexp15 = /(?<![-\d])\d+/g;
let regexp16 = /(?<=<body(>|\s.*?>))/g;

// console.log('str.match(regexp) :>> ', str.match(regexp).join(''));
// console.log('str2.match(regexp2) :>> ', str2.match(regexp2));
// console.log('str3.match(regexp3) :>> ', str3.match(regexp3));
// console.log('str4.match(regexp4) :>> ', str4.match(regexp4));
// console.log('str5.match(regexp5) :>> ', str5.match(regexp5));
// console.log('str6.match(regexp6) :>> ', str6.match(regexp6));
// console.log('str7.match(regexp7) :>> ', str7.match(regexp7));
// console.log('str8.match(regexp8) :>> ', str8.match(regexp8));
// console.log('str9.match(regexp9) :>> ', str9.match(regexp9));
// console.log('regexp10.test(str10) :>> ', regexp10.test(str10));
// console.log('str11.match(regexp11) :>> ', str11.match(regexp11));
// console.log('str12.match(regexp12) :>> ', str12.match(regexp12));
// console.log('str13.match(regexp13) :>> ', str13.match(regexp13));
// console.log('str14.match(regexp14) :>> ', str14.match(regexp14));
// console.log('str15.match(regexp15) :>> ', str15.match(regexp15));
console.log('str16.replace(regexp16, `<h1>Hello</h1>`) :>> ', str16.replace(regexp16, `<h1>Hello</h1>`));

function parse(expr) {
    // const regexp = /(-?\d+(\.\d+)?)\s*([-+*/])\s*(-?\d+(\.\d+)?)/;
    const regexp = /(-?\d+\.?\d*)\s*([-+*\/])\s*(-?\d+\.?\d*)/;

    const result = expr.match(regexp);
    
    if (!result) return [];
        result.shift();

    return result;
};

let [a, op, b] = parse('1.2 * 3.4');

// console.log('a :>> ', a);
// console.log('op :>> ', op);
// console.log('b :>> ', b);
