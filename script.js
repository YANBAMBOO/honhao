// 使用個人訪問令牌初始化 Airtable
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'patuloqpJSwkeWv6R.67b10fd782e5d8f7c6282d8a231a5277a95506264a1b8a89f7ddb71f7fdb1ec9'
});
const base = Airtable.base('appHOmHqvBWFFZaEF/tbljlfUpQ1rYo8rAJ');

// 獲取 URL 參數中的記錄 ID
const urlParams = new URLSearchParams(window.location.search);
const recordId = urlParams.get('id');

// 從 Airtable 獲取數據
function fetchData() {
    base('YOUR_TABLE_NAME').find(recordId, function(err, record) {
        if (err) { console.error(err); return; }
        document.getElementById('name').textContent = record.get('Name');
        document.getElementById('composition').textContent = record.get('Composition');
        document.getElementById('width').textContent = record.get('Width');
        document.getElementById('fullWidth').textContent = record.get('Full Width');
        document.getElementById('weight').textContent = record.get('Weight');
        document.getElementById('gsm').textContent = record.get('GSM');
        document.getElementById('stretchWidth').textContent = record.get('Stretch Width');
        document.getElementById('stretchLength').textContent = record.get('Stretch Length');
        document.getElementById('thickness').textContent = record.get('Thickness');
    });
}

// 語言切換功能
const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', function() {
    const lang = this.value;
    updateLanguage(lang);
});

function updateLanguage(lang) {
    const translations = {
        'zh': {
            'pageTitle': '布料信息',
            'nameLabel': '品名：',
            'compositionLabel': '成分比例：',
            'widthLabel': '可裁幅寬：',
            'fullWidthLabel': '全幅寬：',
            'weightLabel': '碼重：',
            'gsmLabel': '米平方重：',
            'stretchWidthLabel': '橫向彈性倍數：',
            'stretchLengthLabel': '直向彈性倍數：',
            'thicknessLabel': '布身厚度：'
        },
        'en': {
            'pageTitle': 'Fabric Information',
            'nameLabel': 'Name:',
            'compositionLabel': 'Composition:',
            'widthLabel': 'Cuttable Width:',
            'fullWidthLabel': 'Full Width:',
            'weightLabel': 'Weight:',
            'gsmLabel': 'GSM:',
            'stretchWidthLabel': 'Stretch Width:',
            'stretchLengthLabel': 'Stretch Length:',
            'thicknessLabel': 'Thickness:'
        },
        'ja': {
            'pageTitle': '生地情報',
            'nameLabel': '品名：',
            'compositionLabel': '組成：',
            'widthLabel': '裁断可能幅：',
            'fullWidthLabel': '全幅：',
            'weightLabel': '重量：',
            'gsmLabel': 'GSM：',
            'stretchWidthLabel': '横方向伸縮率：',
            'stretchLengthLabel': '縦方向伸縮率：',
            'thicknessLabel': '厚さ：'
        }
    };

    for (let [key, value] of Object.entries(translations[lang])) {
        document.getElementById(key).textContent = value;
    }
}

// 初始化
fetchData();
