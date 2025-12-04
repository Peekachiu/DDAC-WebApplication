export const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('en-MY', {
        timeZone: 'Asia/Kuala_Lumpur',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
};
