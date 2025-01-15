function shareMovie() {
    const url = window.location.href;
    navigator.share({
        title: 'Топ фільмів',
        text: 'Подивись, який цікавий фільм я знайшов!',
        url: url
    }).catch(console.error);
}
