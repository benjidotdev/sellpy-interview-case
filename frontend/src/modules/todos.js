export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/todo/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error deleting Todo: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}