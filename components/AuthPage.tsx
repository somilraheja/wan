import React, { useState } from 'react';
import { Plane, Eye, Lock, Mail } from 'lucide-react';
import { signInWithGoogle } from '../services/supabase';

const AuthPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Login failed", error);
      setLoading(false);
    }
  };

  const handlePlaceholderLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Please use 'Continue with Google' to sign in.");
  };

  return (
    <div className="min-h-screen w-full flex bg-white pt-16 lg:pt-0">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 relative z-10">
        <div className="w-full max-w-md space-y-8">
           {/* Logo - Hidden on desktop as it's in navbar, visible on mobile if needed or redundant */}
           <div className="lg:hidden flex items-center gap-2 mb-10 justify-center">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Plane size={24} />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Wanderlust</span>
           </div>

           <div className="space-y-3">
             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Welcome back</h1>
             <p className="text-slate-500 text-lg">Sign in to your account to continue.</p>
           </div>

           <div className="space-y-6 pt-4">
             <button 
               onClick={handleGoogleLogin}
               disabled={loading}
               className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-semibold py-4 px-4 rounded-xl transition-all shadow-sm hover:shadow-md group"
             >
               {!loading ? (
                   <>
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6 group-hover:scale-110 transition-transform" alt="Google" />
                    <span className="text-base">Continue with Google</span>
                   </>
               ) : (
                   <span className="flex items-center gap-2">
                     <div className="w-4 h-4 border-2 border-slate-600 border-t-transparent rounded-full animate-spin"></div>
                     Connecting...
                   </span>
               )}
             </button>
             
             <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">OR</span>
                <div className="flex-grow border-t border-slate-200"></div>
             </div>

             <form onSubmit={handlePlaceholderLogin} className="space-y-5">
               <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                 <div className="relative group">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                   <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white" 
                   />
                 </div>
               </div>
               <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                 <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                    <input 
                      type="password" 
                      placeholder="Enter your password" 
                      className="w-full pl-12 pr-12 py-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white" 
                    />
                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                        <Eye size={20} />
                    </button>
                 </div>
               </div>
               
               <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-0.5">
                 Sign In
               </button>
             </form>
             
             <p className="text-center text-slate-500 text-sm">
               Don't have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Sign up</a>
             </p>
           </div>
        </div>
      </div>

      {/* Right Side - Futuristic Image */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center transition-transform duration-1000 hover:scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
        
        {/* Abstract shapes/glows */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500 rounded-full blur-[60px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-40"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-16 text-white bg-gradient-to-t from-slate-900 to-transparent">
            <h2 className="text-4xl font-bold mb-4 leading-tight">Explore the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Intelligent Future</span></h2>
            <p className="text-slate-300 text-lg max-w-lg">
              Join thousands of travelers using Wanderlust AI to craft their perfect journeys. Personalized, effortless, and extraordinary.
            </p>
            
            <div className="flex gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;