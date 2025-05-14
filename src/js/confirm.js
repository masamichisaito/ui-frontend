const API_URL = import.meta.env.VITE_API_URL;
console.log('API_URL:', API_URL);
const data = JSON.parse(localStorage.getItem('tempUser'));
const area = document.getElementById('confirmArea');

if (!data) {
  alert('確認データが存在しません');
  location.href = './register.html';
}

area.innerHTML = `
  <p>名前: ${data.name}</p>
  <p>メール: ${data.email}</p>
`;

document.getElementById('submitBtn').onclick = async () => {
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
