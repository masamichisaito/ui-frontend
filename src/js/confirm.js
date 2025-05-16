window.addEventListener('DOMContentLoaded', () => {
  console.log('[confirm.js] スクリプト読み込み開始');

  const API_URL = window.API_URL || 'http://localhost:3000';
  console.log('API_URL:', API_URL);

  const dataStr = localStorage.getItem('tempUser');
  let data;

  try {
    data = JSON.parse(dataStr);
  } catch (e) {
    data = null;
  }

  if (!data || !data.name || !data.email) {
    alert('確認データが存在しません');
    location.href = './register.html';
    return;
  }

  const area = document.getElementById('confirmArea');
  if (!area) {
    console.error('confirmArea が存在しません');
    return;
  }

  area.innerHTML = `
    <p>名前: ${data.name}</p>
    <p>メール: ${data.email}</p>
  `;

  const submitBtn = document.getElementById('submitBtn');
  if (!submitBtn) {
    console.error('submitBtn が存在しません');
    return;
  }

  submitBtn.onclick = async () => {
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        localStorage.removeItem('tempUser');
        location.href = './complete.html';
      } else {
        const err = await res.text();
        alert('登録失敗: ' + err);
      }
    } catch (e) {
      alert('通信エラー');
      console.error(e);
    }
  };
});
