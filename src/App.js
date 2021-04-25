import './App.css';
import ErrorBoundary from './ErrorBoundary';
import TodoPage from './pages/Todopage';
import Theme from './theme';
import TodoProviderComponent from './contexts/TodoProvier';

function App() {
  return (
    <ErrorBoundary>
      <Theme>
        <TodoProviderComponent>
          <TodoPage />
        </TodoProviderComponent>
      </Theme>
    </ErrorBoundary>
  );
}

export default App;
