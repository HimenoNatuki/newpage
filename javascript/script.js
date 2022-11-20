console.log("Start-up");
const music = new Audio('music/yt1s.com - Ado踊.mp3');
const play = document.getElementById('music_play1');
music.volume = 0.1;

function tapone() {
    document.cookie = 'address=Tokyo';
    document.cookie = 'try=one';
}

function push_button1() {
    console.log(window.navigator.userAgent);
    alert('push button!');
}
function password_gate() {
    // ▼ユーザの入力を求める
    var UserInput = prompt("パスワードを入力して下さい:", "");
    // ▼入力内容をチェック
    if (/\W+/g.test(UserInput)) {
        // ▼半角英数字以外の文字が存在したらエラー
        alert("半角英数字のみを入力して下さい。");
    }
    // ▼キャンセルをチェック
    else if (UserInput != null) {
        // ▼入力内容からファイル名を生成して移動
        location.href = UserInput + ".html";
    }
}

// 再生ボタン
play.addEventListener('click', function () {
    if (!music.paused) {
        play.innerHTML = "再生";
        music.pause();
    } else {
        play.innerHTML = "停止";
        music.play();
    }
});
// 今の時間表示 
window.onload = function () {
    setInterval(function () {
        var dd = new Date();
        document.getElementById("T1").innerHTML = dd.toLocaleString();
    }, 1000);
}