export const fetchTodoLists = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/list', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}