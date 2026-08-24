/**
 * App Component
 * Komponen root aplikasi yang menyusun layout dengan Header, konten, dan Footer
 */
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App({ children }) {
  return (
    <AppContainer>
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <MainContent>
        {children}
      </MainContent>
      
      {/* Footer */}
      <Footer />
    </AppContainer>
  );
}

export default App;
