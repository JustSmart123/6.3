function sharePage() {
    navigator.share({
        title: 'Топ фільмів',
        url: window.location.href
    });
}

