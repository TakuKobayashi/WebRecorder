import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './components/app-bar';
import MainContent from './components/main-content';
import Latest from './components/latest';
import Footer from './components/footer';
import AppTheme from './themes/app-theme';

export default function Home(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </AppTheme>
  );
}
