import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Container } from '../components/common';

function About() {
  return (
    <>
      <Head>
        <title>QR Generator - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>About</h1>
        <p>A small application built with Next.js to generate QR codes.</p>
      </Container>
    </>
  );
}

export { About as default };

