function moveButton() {
    const btn = document.getElementById('no-love-btn');
    
    // 点击后切换为固定定位，开启瞬移
    btn.style.position = 'fixed';
    
    const x = Math.random() * (window.innerWidth - btn.clientWidth);
    const y = Math.random() * (window.innerHeight - btn.clientHeight);
    
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    
    // 调侃文案
    const phrases = ["真的吗？", "再想想？", "不许点这里", "你点不到我", "拒绝无效", "再点我要生气啦"];
    btn.innerText = phrases[Math.floor(Math.random() * phrases.length)];
}

function showSuccess() {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('success-page').style.display = 'flex';
    confetti();
}

function confetti() {
    for(let i=0; i<50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(heart);
    }
}