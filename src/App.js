
function App() {
  const location = useLocation();
    const shouldShowHeader = location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/forgot-password';
  return (
    <div className="App">
      {shouldShowHeader && <HeaderManager/>}
      <Router>
        <Routes path=""></Routes>
      </Router>
    </div>
  );
}

export default App;
