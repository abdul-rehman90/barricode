import React from 'react'
import Hero from './hero';
import Customers from './customers';
import BackofficeTimeline from './backoffice-timeline';
import Insight from './Insight';
import Stayahead from './stayahead';
import ClientAccounts from './client-accounts';
import Integration from '../end-user-app/integration';

export default function BackOffice() {

  return (
    <>
      <Hero />
      <Customers key="customers" />
      <BackofficeTimeline key="timeline" />
      <Insight key="insight" />
      <Stayahead key="stayahead" />
      <ClientAccounts key="accounts" />
      <Integration
        key="integration"
        heading="Want to Integrate with Barricade?"
        text="Be part of the platform that connects us all"
        buttontext="Become an Integration Partner"
      />
    </>
  )
}
