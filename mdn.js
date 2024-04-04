// 現在の日付と時刻を取得
const today = new Date();

// 年月日をそれぞれ変数に代入
const year = today.getFullYear(); // 年
const month = today.getMonth() + 1; // 月（0からカウントされるため+1する）
const date = today.getDate(); // 日

// 指定した形式で日付を出力
console.log(`${year}年${month}月${date}日`);
