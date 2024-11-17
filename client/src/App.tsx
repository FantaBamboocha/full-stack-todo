import { Layout, Typography } from 'antd';

import { TodoList } from '@components/index';

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header
        style={{
          height: 'auto',
          textAlign: 'center',
          alignContent: 'center',
          backgroundColor: '#1890ff',
        }}
      >
        <Typography.Title
          style={{ margin: 0, padding: '25px 0', color: '#fff' }}
          level={2}
        >
          Todo App
        </Typography.Title>
      </Layout.Header>
      <Layout.Content style={{ padding: '0 250px', background: '#f0f2f5' }}>
        <TodoList />
      </Layout.Content>
    </Layout>
  );
};

export default App;
