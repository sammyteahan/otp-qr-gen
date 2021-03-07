import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

function Home() {
  const [otpUri, setOtpUri] = useState('');
  const [qrCode, setQrCode] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchingError] = useState(null);

  const clear = () => {
    setOtpUri('');
    setFetchingError(null);
    setQrCode(null);
  };

  const submit = async (evt) => {
    evt.preventDefault();

    try {
      setFetching(true);
      const response = await fetch('/api/qr', {
        body: JSON.stringify({ uri: otpUri }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      const { qrCode }= await response.json();
      setQrCode(qrCode);
    } catch (err) {
      setFetchingError(err);
    } finally {
      setFetching(false);
    }
  };

  return (
    <>
      <Head>
        <title>QR Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer>
        <FormContainer>
          <Input
            value={otpUri}
            type="text"
            onChange={evt => setOtpUri(evt.target.value)}
          />
          <PrimaryButton onClick={submit} disabled={fetching}>
            Submit
          </PrimaryButton>

          <SecondaryButton onClick={clear} disabled={fetching}>
            Clear
          </SecondaryButton>
        </FormContainer>
        <QRContainer>
          {qrCode && (
            <img src={qrCode} />
          )}
        </QRContainer>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FormContainer = styled.div`
  padding: 2rem;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr auto auto;
  grid-gap: 10px;
`;

const BaseButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 3px;
  font-size: 1rem;
`;

const PrimaryButton = styled(BaseButton)`
  background: var(--yellow);
  border: 2px solid var(--yellow);
`;

const SecondaryButton = styled(BaseButton)`
  background: var(--steel);
  border: 2px solid var(--steel);
  color: var(--white);
`;

const QRContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background: var(--steel);
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  padding: 1rem;
  border: 2px solid var(--black);
  border-radius: 0.1875rem;
  width: 100%;
`;

export { Home as default };
