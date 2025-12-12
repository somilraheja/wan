import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Locations from './components/Locations';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AuthPage from './components/AuthPage';
import { supabase } from './services/supabase';

function App() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-slate-500 text-sm font-medium">Loading Wanderlust...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar session={session} />
      {!session ? (
        <AuthPage />
      ) : (
        <>
          <Hero />
          <Locations />
          <EnquiryForm />
          <Footer />
          <Chatbot />
        </>
      )}
    </div>
  );
}

export default App;