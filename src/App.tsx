import "@radix-ui/themes/styles.css";
import { Box, Theme } from '@radix-ui/themes'
import Header from './pages/Header'
import Content from './pages/Content'
import * as msal from "@azure/msal-browser";
import { MsalProvider } from '@azure/msal-react';

const clientId = import.meta.env.VITE_MS_CLIENT_ID
const tenantId = import.meta.env.VITE_MS_TENANT_ID
const redirectUri = import.meta.env.VITE_MS_REDIRECT_URI

const pca = await msal.createStandardPublicClientApplication({
    auth: {
        clientId: clientId,
        authority: "https://login.microsoftonline.com/" + tenantId,
        redirectUri: redirectUri,
    },
});

function App() {

  return (
    <MsalProvider instance={pca}>
      <Theme accentColor="blue">
        <Box>
          <Box>
            <Header />
          </Box>
          <Box>
            <Content />
          </Box>
        </Box>
      </Theme>
    </MsalProvider>
  )
}

export default App
