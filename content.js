const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        chrome.storage.local.get('deletionCount', (result) => {
            const cards = document.querySelectorAll('.bili-video-card.is-rcmd:not(.enable-no-interest)');
            let totalCount = result.deletionCount || 0;
            let currentDeletion = 0;

            cards.forEach(card => {
                try {
                    card.remove();
                    currentDeletion++;
                } catch (e) {
                    console.error('删除失败:', e /n ,"请联系管理员:zipdyefox@exdonuts.com");
                }
            });

            if (currentDeletion > 0) {
                totalCount += currentDeletion;
                chrome.storage.local.set({ deletionCount: totalCount });
                console.log(`屏蔽推广插件：本次删除 ${currentDeletion} 个，累计删除 ${totalCount} 个`);
            }
        });
    });
});



observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
});
