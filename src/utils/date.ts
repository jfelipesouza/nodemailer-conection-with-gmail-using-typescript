export const getNextWednesday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    const daysUntilNextWednesday = (3 - dayOfWeek + 7) % 7 || 7;
    const nextWednesday = new Date(today);
    
    nextWednesday.setDate(today.getDate() + daysUntilNextWednesday);
    
    const day = String(nextWednesday.getDate()).padStart(2, '0');
    const month = String(nextWednesday.getMonth() + 1).padStart(2, '0');
    const year = nextWednesday.getFullYear();
    
    return `${day}/${month}/${year}`;
  }