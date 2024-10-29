export const fetchTodoLists = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/list', {
      headers: {
        Accept: 'application/json',
      },
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