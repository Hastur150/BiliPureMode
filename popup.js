chrome.storage.local.get('deletionCount', function (result) {
    const count = result.deletionCount || 0;
    const countDisplay = document.getElementById('count-display');
    countDisplay.textContent = `Total deleted elements: ${count}`;
});    

chrome.storage.onChanged.addListener((changes) => {
    if (changes.deletionCount) {
        document.getElementById('count-display').textContent = 
            `已屏蔽推广视频：${changes.deletionCount.newValue} 个`;
    }
});

chrome.storage.local.get('deletionCount', (result) => {
    document.getElementById('count-display').textContent = 
        `已屏蔽推广视频：${result.deletionCount || 0} 个`;
});