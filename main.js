/* const, letの宣言　*/
// var val1 = "val1での変数宣言";
// console.log(val1);

// val1 = "上書きされたvar1";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "再々宣言した変数に上書きされる";
// console.log(val1);

// let変数は上書き可能、再宣言不可
// let val2 = "let変数";
// console.log(val2);

// let変数は上書き可能
// val2 = "上書きされたval2"
// console.log(val2);

//再宣言は不可
// let val2 = "再宣言されたval2";

// const関数は上書きも際宣言も不可
// const val3 = "const関数"
// console.log(val3);

// val3 = "上書きされたval3";
// const val3 = "再宣言されたval3";

// const で定義したオブジェクトはプロパティの変更が可能
// 基本constで定義しておけば問題ない
// const val4 = {
//     name: "じゃけん",
//     age: 31
// }
// console.log(val4);

// //プロパティの上書きと追加
// val4.name = "であるからして"; //プロパティの上書き
// val4.address = "神戸市"; //プロパティの追加

// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// オブジェクト型
// const animales = ["dog", "cat"];
// console.log(animales);

// animales[0] = "bird"; //0番目をbirdに書き換え
// animales.push("monkey"); //配列の最後にmonkeyを追加
// console.log(animales);

// React開発ではほとんでconstで宣言
// stateを使うこともあるがlet,varを使うことはほとんどない

// テンプレート文字列
// 文字列の中にJavaScriptを埋め込める
// const name = "じゃけん";
// const age = 31;

// 私の名前はじゃけんです。年齢は31歳です。
// 従来は+で結合するしかなかった。。。
// const message = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// アロー関数
// 従来は、、、
// function func1(str) {
//     return str;
// }
// console.log(func1("func1です。"));

// const func1 = function func1(str) {
//     return str;
// }
// console.log(func1("func1です。"));

// アロー関数を使うと、
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("引数はfunc2です。"));

// アロー関数を使った簡単な計算式
// const calc = (num1,num2) => ({
// num1: num1,
// num2: num2,
// })
// console.log(calc(2, 31));

// 分割代入
// const myProfile = {
//     name: "トムチャーリー",
//     age: 27,
// };

// 変数に代入するときは、${myProfile.name}みたいに.で繋げられるが冗長になる。
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// そこで下のように、myProfileからnameとage取り出しますよみたいな書き方
// const {name, age} = myProfile; //変数myProfileから、{name, age}を取り出して、
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// 配列の分割代入
// 分割代入しないと、、、
// const myProfile = ["Tom", 21];
// const message = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message);

// 分割代入を使用すると、
// 配列に好きな名前をつけることができる
// const [myname, age] = myProfile;
// const message4 = `名前は${myname}です。年齢は${age}歳です。`;
// console.log(message4);

// 
// デフォルト値(引数、分割代入)
// 
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello(); //引数がないと、undefinedになってユーザーに優しくない。
// だからデフォルトの値を設定する！

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("トムジェリー"); //引数がない場合は、↑のゲストの文字列が表示される！

// オブジェクトから分割代入はReactでもめっちゃ使う！
// const myProfile = {
//     age: 31,
// };

//↑nameが設定されていないが、初期値としてゲストを指定することによって、安定的にプログラムを動かせる
// const {age, name = "ゲスト"} = myProfile;
// console.log(age);
// console.log(name);

// **
// *オブジェクトの省略記法
// *
// const name = "エマ";
// const age = 31;

//設定する名前が同じだったら省略できる！知っておかないとわからなくなるから注意！
// const myProfile = {
//     name,
//     age
// };
// console.log(myProfile);

// 
/*　スプレッド構文
// 
/*配列の展開 */
// const array1 = [1,20];
// console.log(array1);
// console.log(...array1); //配列の中身を順番に展開して値のみを出力してくれる

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(array1[0], array1[1]);
// sumFunc(...array1); //配列の中身を順番に処理する

// まとめる
// const array2 = [1,2,3,4,5];
// const [num1, num2, ...array3] = array2;
// console.log(num1);
// console.log(num2);
// console.log(array3);

// 配列のコピー、結合
// const array4 = [10, 20];
// const array5 = [30, 40];

// const array6 = [...array4];
// array6[0] = 100;
// console.log(array6); //array6の配列の中身だけ上書きされている！
// console.log(array4); //array4の配列の中身は上書きされない！

// const array7 = [...array4, ...array5]; //array4とarray5の合体配列！
// console.log(array7);

// const array8 = array4; //コピーならこれでいいんじゃね？
// console.log(array8); //出力結果も同じだし、、、
// でもこれだと、２つとも参照先が同じなので良くない！
//数値を上書きするとき
// array8[0] = 100;
// console.log(array8); //上書きできてる！
// console.log(array4);　//!? array4も上書きされてる！？

/*
mapやfilterを使った配列の処理
*/
const nameArray = ["田中", "エマワトソン","君まろ", "佐藤", "tomy"];
// for (let index = 0; index < nameArray.length; index++) {
//     console.log(`${index + 1}番目は${nameArray[index]}`); //配列は0スタートなので、indexに+1してあげると、1スタートになる！
// }

// const nameArray2 = nameArray.map((name) => {
//     return name;
// });
// console.log(nameArray2);

// nameArray.map((name, index) => 
//     console.log(`${index + 1}番目は${nameArray[index]}`)
// );


// filter
// const numArray = [1,2,3,4,5];
// const newNumArray = numArray.filter((num) => {
//     return num % 2 === 1; //奇数のみを取り出したい
// });
// console.log(newNumArray);


// UIの名前の出しわけの時に使える！
// const newNameArr = nameArray.map((name) => {
//     if(name === "tomy") {
//         return name;
//     } else {
//         return `${name}さん`;
//     }
// });
// console.log(newNameArr);


/* 三項演算子 */
// 書き方のルール
// ある条件 ？　条件がtrueの時 : 条件がfalse  の時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString()); //数字を3桁区切りにする処理

// const num の数値が数字ならそのまま返す、数字じゃないなら、"数字を入力してください"の文字列を返す
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);


// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "合計100以上です" : "許容範囲内です！";
// }
// console.log(checkSum(50, 50));

/**　論理演算子の本当の意味を知ろう && || */
// truthy, falsy について
// "文字列" 0 10 undefined null false NaN "" [] {}
// このどれがtruthyかfalsyか答えられるようにしている方がいい！

// truthyかfalsyかの判定式
// const val = "A"; //判定するための式、ここに数値を入れる
// if (val) {
//     console.log("truthyです");
// } else {
//     console.log("falsyです");
// }

const flag1 = 1000;
const flag2 = true;

//　または
if(flag1 || flag2) {
    console.log("1か2はtrueになります");
} 

// かつ
if(flag1 && flag2) {
    console.log("1も2もtrueになります");
}

// ||は左側がtruthyの時、その時点で返却する
const num = "ABC";
const fee = num || "金額未設定です";
console.log(fee);

//&& は左側がfalsyの時その時点で返却する
const num2 = 10
const fee2 = num2 && "何か設定されました";
console.log(fee2);