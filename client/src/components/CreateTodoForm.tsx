interface ICreateTodoFormProps {
  newTodo: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export const CreateTodoForm = ({
  newTodo,
  onChange,
  onSubmit,
}: ICreateTodoFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={onChange}
        placeholder="Enter todo"
      />
      <button>Add</button>
    </form>
  );
};
