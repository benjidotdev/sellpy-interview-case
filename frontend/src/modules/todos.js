export const saveListTodos = async ({listId, todos}) => {
  console.log('saveTodos', {listId, todos})
  try {
    const response = await fetch(`http://localhost:3000/api/v1/list/${listId}/todos`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todos),
    });
    if (!response.ok) {
      throw new Error(`Error saving Todos: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

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