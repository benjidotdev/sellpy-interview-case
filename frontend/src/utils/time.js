export const calculateRemainingTime = (dueBy) => {
  const now = new Date();
  const dueDate = new Date(dueBy);
  dueDate.setHours(0, 0, 0, 0);
  const diff = dueDate.getTime() - now.getTime();
  if (diff < 0) {
    return 'Overdue';
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${days}d, ${hours}h, ${minutes}m`;
  }
};