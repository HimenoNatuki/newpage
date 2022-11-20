let element = document.getElementById('mytext');

s = "既存ファイルに追記するテスト";
try {
    fs.appendFileSync('opinion.txt', s, 'utf-8');
} catch (err) {
    console.log(err);
}