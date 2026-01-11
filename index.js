
// В режиме Babel Standalone React и ReactDOM доступны глобально.
// App также доступен глобально, так как он объявлен в App.js и загружен ранее.

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <window.App />
    </React.StrictMode>
  );
}
