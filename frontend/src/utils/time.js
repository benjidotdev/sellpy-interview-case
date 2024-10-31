export const calculateRemainingTime = (dueBy) => {
  const now = new Date()
  const dueDate = new Date(dueBy)
  dueDate.setHours(0, 0, 0, 0)
  const diff = dueDate.getTime() - now.getTime()
  if (diff < 0) {
    const overdueDays = Math.floor(-diff / (1000 * 60 * 60 * 24))
    const overdueHours = Math.floor((-diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const overdueMinutes = Math.floor((-diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${overdueDays}d, ${overdueHours}h, ${overdueMinutes}m`
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${days}d, ${hours}h, ${minutes}m`
  }
}

export const isOverdue = (dueBy) => {
  const now = new Date()
  const dueDate = new Date(dueBy)
  return dueDate < now
}
