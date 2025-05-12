import NavigationProvider from './src/navigation/NavigationProvider';

/**
 * Root component of the application.
 *
 * This component wraps the entire app with the navigation context,
 * providing screen routing and navigation capabilities.
 *
 * @returns The main app component with navigation enabled.
 */

const App = () => {
  return <NavigationProvider />;
};

export default App;
