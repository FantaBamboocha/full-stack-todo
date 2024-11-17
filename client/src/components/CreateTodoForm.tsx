import { Form, Input, Button } from 'antd';

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
  const [form] = Form.useForm();
  const handleSubmit = () => {
    onSubmit();
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="inline"
      style={{
        marginBottom: '26px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        style={{ flex: 1 }}
        name="todo"
        rules={[{ required: true, message: 'Please enter a todo!' }]}
      >
        <Input
          value={newTodo}
          placeholder="Enter todo"
          onChange={onChange}
          style={{ fontSize: 24, padding: '5px 30px' }}
        />
      </Form.Item>
      <Form.Item style={{ width: '150px' }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            display: 'block',
            height: '100%',
            width: '100%',
            fontSize: 20,
          }}
        >
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
